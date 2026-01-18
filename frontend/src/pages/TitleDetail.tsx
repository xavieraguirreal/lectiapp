import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  ArrowLeft,
  Play,
  BookOpen,
  Video,
  Clock,
  User,
  Calendar,
  Tag,
  Globe,
  ExternalLink,
  Headphones,
} from 'lucide-react'
import type { AppDispatch, RootState } from '../store'
import { fetchTitleById } from '../store/slices/catalogSlice'

export default function TitleDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const { currentTitle: title, loading, error } = useSelector((state: RootState) => state.catalog)

  useEffect(() => {
    if (id) {
      dispatch(fetchTitleById(Number(id)))
    }
  }, [dispatch, id])

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full" />
      </div>
    )
  }

  if (error || !title) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400 mb-4">{error || 'Título no encontrado'}</p>
          <Link to="/catalog" className="btn-primary">
            Volver al catálogo
          </Link>
        </div>
      </div>
    )
  }

  const handlePlay = () => {
    if (title.es_audiolibro) {
      navigate(`/play/${title.id}`)
    } else if (title.es_epub || title.es_articulo_wikipedia || title.es_texto_wikisource) {
      navigate(`/read/${title.id}`)
    } else if (title.es_video) {
      navigate(`/watch/${title.id}`)
    }
  }

  const getActionButton = () => {
    if (title.es_audiolibro) {
      return (
        <button onClick={handlePlay} className="btn-primary">
          <Headphones className="w-5 h-5 mr-2" />
          Escuchar
        </button>
      )
    }
    if (title.es_epub || title.es_articulo_wikipedia || title.es_texto_wikisource) {
      return (
        <button onClick={handlePlay} className="btn-primary">
          <BookOpen className="w-5 h-5 mr-2" />
          Leer
        </button>
      )
    }
    if (title.es_video) {
      return (
        <button onClick={handlePlay} className="btn-primary">
          <Video className="w-5 h-5 mr-2" />
          Ver
        </button>
      )
    }
    return null
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-4">
            <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-slate-400" />
            </button>
            <span className="text-lg font-semibold text-white line-clamp-1">{title.titulo}</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cover */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-800 shadow-2xl">
              {title.portada_url ? (
                <img
                  src={title.portada_url}
                  alt={title.titulo}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800">
                  <BookOpen className="w-20 h-20 text-slate-600" />
                </div>
              )}
            </div>

            <div className="mt-4 space-y-2">
              {getActionButton()}
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white mb-2">{title.titulo}</h1>

            {title.autor && (
              <p className="text-lg text-slate-400 mb-4 flex items-center gap-2">
                <User className="w-5 h-5" />
                {title.autor}
              </p>
            )}

            {/* Metadata */}
            <div className="flex flex-wrap gap-3 mb-6">
              {title.anio_publicacion && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 rounded-lg text-sm text-slate-300">
                  <Calendar className="w-4 h-4" />
                  {title.anio_publicacion}
                </span>
              )}
              {title.genero && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 rounded-lg text-sm text-slate-300">
                  <Tag className="w-4 h-4" />
                  {title.genero}
                </span>
              )}
              {title.idioma && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 rounded-lg text-sm text-slate-300">
                  <Globe className="w-4 h-4" />
                  {title.idioma.toUpperCase()}
                </span>
              )}
              {title.duracion_total && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 rounded-lg text-sm text-slate-300">
                  <Clock className="w-4 h-4" />
                  {title.duracion_total}
                </span>
              )}
            </div>

            {/* Description */}
            {title.descripcion && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-white mb-2">Descripción</h2>
                <p className="text-slate-400 leading-relaxed">{title.descripcion}</p>
              </div>
            )}

            {/* Abstract (for papers) */}
            {title.abstract && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-white mb-2">Abstract</h2>
                <p className="text-slate-400 leading-relaxed">{title.abstract}</p>
              </div>
            )}

            {/* Audio Chapters */}
            {title.es_audiolibro && title.capitulos && title.capitulos.length > 0 && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-white mb-3">
                  Capítulos ({title.capitulos.length})
                </h2>
                <div className="space-y-2 max-h-80 overflow-y-auto">
                  {title.capitulos.map((chapter) => (
                    <div
                      key={chapter.id}
                      className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 flex items-center justify-center bg-slate-700 rounded-lg text-sm font-medium text-slate-300">
                          {chapter.numero}
                        </span>
                        <span className="text-slate-300">
                          {chapter.titulo_capitulo || `Capítulo ${chapter.numero}`}
                        </span>
                      </div>
                      <span className="text-sm text-slate-500">
                        {chapter.duracion || '--:--'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* External Links */}
            {title.url_fuente && (
              <a
                href={title.url_fuente}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300"
              >
                <ExternalLink className="w-4 h-4" />
                Ver fuente original
              </a>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
