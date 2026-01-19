import { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  ArrowLeft,
  Settings,
  Sun,
  Moon,
  Type,
  Minus,
  Plus,
  X,
  BookOpen,
} from 'lucide-react'
import type { AppDispatch, RootState } from '../store'
import { fetchTitleById } from '../store/slices/catalogSlice'
import { api } from '../services/api'

type Theme = 'light' | 'dark' | 'sepia'

export default function EpubReader() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const viewerRef = useRef<HTMLDivElement>(null)

  const { currentTitle: title, loading } = useSelector((state: RootState) => state.catalog)
  const { deviceId, user } = useSelector((state: RootState) => state.session)

  const [showSettings, setShowSettings] = useState(false)
  const [fontSize, setFontSize] = useState(16)
  const [theme, setTheme] = useState<Theme>('dark')
  const [progress, setProgress] = useState(0)
  const [rendition, setRendition] = useState<unknown>(null)

  useEffect(() => {
    if (id) {
      dispatch(fetchTitleById(Number(id)))
    }
  }, [dispatch, id])

  useEffect(() => {
    if (!title || !viewerRef.current) return

    const loadEpub = async () => {
      const epubModule = await import('epubjs')
      const ePub = epubModule.default

      const epubUrl = title.es_epub
        ? api.getEpubStreamUrl(title.id)
        : title.url_texto || ''

      if (!epubUrl) return

      const book = ePub(epubUrl)
      const rend = book.renderTo(viewerRef.current!, {
        width: '100%',
        height: '100%',
        spread: 'none',
      })

      rend.display()
      setRendition(rend)

      // Track progress
      book.ready.then(() => {
        book.locations.generate(1024).then(() => {
          rend.on('relocated', (location: { start: { percentage: number; cfi?: string } }) => {
            const percent = Math.round(location.start.percentage * 100)
            setProgress(percent)

            // Save progress
            api.saveReadingProgress({
              titulo_id: title.id,
              usuario_id: user?.id,
              device_id: deviceId,
              tipo_lectura: 'epub',
              cfi_posicion: location.start.cfi || '',
              porcentaje_posicion: percent,
            })
          })
        })
      })
    }

    loadEpub()
  }, [title, deviceId, user])

  useEffect(() => {
    if (!rendition) return

    // @ts-expect-error - epub.js types
    rendition.themes.fontSize(`${fontSize}px`)
  }, [fontSize, rendition])

  useEffect(() => {
    if (!rendition) return

    const themes: Record<Theme, object> = {
      dark: {
        body: { background: '#0f172a', color: '#e2e8f0' },
        'a, a:link': { color: '#818cf8' },
      },
      light: {
        body: { background: '#ffffff', color: '#1e293b' },
        'a, a:link': { color: '#4f46e5' },
      },
      sepia: {
        body: { background: '#f5f0e6', color: '#5c4b37' },
        'a, a:link': { color: '#8b5a2b' },
      },
    }

    // @ts-expect-error - epub.js types
    rendition.themes.override('body', themes[theme].body)
  }, [theme, rendition])

  const handlePrev = () => {
    // @ts-expect-error - epub.js types
    if (rendition) rendition.prev()
  }

  const handleNext = () => {
    // @ts-expect-error - epub.js types
    if (rendition) rendition.next()
  }

  const themeColors: Record<Theme, { bg: string; text: string }> = {
    dark: { bg: 'bg-slate-900', text: 'text-slate-100' },
    light: { bg: 'bg-white', text: 'text-slate-900' },
    sepia: { bg: 'bg-[#f5f0e6]', text: 'text-[#5c4b37]' },
  }

  if (loading || !title) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full" />
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${themeColors[theme].bg} ${themeColors[theme].text}`}>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-inherit border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <button onClick={() => navigate(-1)} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex-1 text-center px-4">
              <p className="text-sm font-medium line-clamp-1">{title.titulo}</p>
              <p className="text-xs text-slate-500">{progress}% completado</p>
            </div>
            <button
              onClick={() => setShowSettings(true)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="h-1 bg-slate-200 dark:bg-slate-800">
        <div
          className="h-full bg-primary-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Reader */}
      <main className="flex-1 relative">
        <div
          ref={viewerRef}
          className="w-full h-[calc(100vh-120px)]"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            const x = e.clientX - rect.left
            if (x < rect.width / 3) {
              handlePrev()
            } else if (x > (rect.width * 2) / 3) {
              handleNext()
            }
          }}
        />

        {/* Navigation hints */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 text-xs text-slate-500">
          <span>← Anterior</span>
          <span>•</span>
          <span>Siguiente →</span>
        </div>
      </main>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setShowSettings(false)}>
          <div
            className="absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-900 rounded-t-3xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Configuración</h3>
              <button onClick={() => setShowSettings(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Font Size */}
            <div className="mb-6">
              <label className="text-sm text-slate-500 mb-2 block">Tamaño de fuente</label>
              <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-800 rounded-xl p-2">
                <button
                  onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                  className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-2">
                  <Type className="w-5 h-5" />
                  <span className="font-medium">{fontSize}px</span>
                </div>
                <button
                  onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                  className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Theme */}
            <div>
              <label className="text-sm text-slate-500 mb-2 block">Tema</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setTheme('light')}
                  className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 ${
                    theme === 'light' ? 'border-primary-500 bg-primary-500/10' : 'border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <Sun className="w-5 h-5" />
                  <span className="text-sm">Claro</span>
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 ${
                    theme === 'dark' ? 'border-primary-500 bg-primary-500/10' : 'border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <Moon className="w-5 h-5" />
                  <span className="text-sm">Oscuro</span>
                </button>
                <button
                  onClick={() => setTheme('sepia')}
                  className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 ${
                    theme === 'sepia' ? 'border-primary-500 bg-primary-500/10' : 'border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <BookOpen className="w-5 h-5" />
                  <span className="text-sm">Sepia</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
