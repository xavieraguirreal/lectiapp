import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Search,
  Headphones,
  BookOpen,
  FileText,
  Globe,
  BookMarked,
  Download,
  Check,
  Loader2,
  ExternalLink,
} from 'lucide-react'
import { api } from '../services/api'

type Source = 'internet_archive' | 'openalex' | 'wikipedia' | 'wikisource'

interface SearchResult {
  id: string
  titulo: string
  autor: string | null
  descripcion: string | null
  portada_url: string | null
  tipo: string
  metadata: Record<string, unknown>
}

const sources: { id: Source; label: string; icon: React.ReactNode; description: string }[] = [
  {
    id: 'internet_archive',
    label: 'Internet Archive',
    icon: <Headphones className="w-6 h-6" />,
    description: 'Audiolibros de LibriVox, ebooks, videos y más',
  },
  {
    id: 'openalex',
    label: 'OpenAlex',
    icon: <FileText className="w-6 h-6" />,
    description: 'Artículos científicos y papers académicos',
  },
  {
    id: 'wikipedia',
    label: 'Wikipedia',
    icon: <Globe className="w-6 h-6" />,
    description: 'Artículos enciclopédicos en múltiples idiomas',
  },
  {
    id: 'wikisource',
    label: 'Wikisource',
    icon: <BookMarked className="w-6 h-6" />,
    description: 'Textos de dominio público en su versión original',
  },
]

export default function Import() {
  const [activeSource, setActiveSource] = useState<Source>('internet_archive')
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [importing, setImporting] = useState<string | null>(null)
  const [imported, setImported] = useState<Set<string>>(new Set())
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    setError(null)
    setResults([])

    try {
      let response: { data?: unknown[] }

      switch (activeSource) {
        case 'internet_archive':
          response = await api.searchInternetArchive(query)
          break
        case 'openalex':
          response = await api.searchOpenAlex(query)
          break
        case 'wikipedia':
          response = await api.searchWikipedia(query)
          break
        case 'wikisource':
          response = await api.searchWikipedia(query) // Using same API with different endpoint
          break
        default:
          response = { data: [] }
      }

      setResults((response.data || []) as SearchResult[])
    } catch (err) {
      setError('Error al buscar. Por favor intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  const handleImport = async (result: SearchResult) => {
    setImporting(result.id)

    try {
      await api.importFromInternetArchive(result.id)
      setImported((prev) => new Set([...prev, result.id]))
    } catch (err) {
      setError('Error al importar. Por favor intenta de nuevo.')
    } finally {
      setImporting(null)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-4">
            <Link to="/catalog" className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-slate-400" />
            </Link>
            <div>
              <h1 className="text-lg font-semibold text-white">Importar contenido</h1>
              <p className="text-sm text-slate-500">Agrega libros, audios y artículos a tu biblioteca</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Source Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {sources.map((source) => (
            <button
              key={source.id}
              onClick={() => { setActiveSource(source.id); setResults([]) }}
              className={`p-4 rounded-xl text-left transition-all ${
                activeSource === source.id
                  ? 'bg-primary-500/20 border-2 border-primary-500'
                  : 'bg-slate-800 border-2 border-transparent hover:border-slate-700'
              }`}
            >
              <div className={`mb-2 ${activeSource === source.id ? 'text-primary-400' : 'text-slate-400'}`}>
                {source.icon}
              </div>
              <h3 className="font-medium text-white text-sm">{source.label}</h3>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">{source.description}</p>
            </button>
          ))}
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Buscar en ${sources.find((s) => s.id === activeSource)?.label}...`}
                className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl
                         text-white placeholder-slate-500
                         focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="btn-primary px-8 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Buscar'}
            </button>
          </div>
        </form>

        {/* Error */}
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400">
            {error}
          </div>
        )}

        {/* Results */}
        {results.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">
              {results.length} resultado{results.length !== 1 ? 's' : ''} encontrado{results.length !== 1 ? 's' : ''}
            </h2>

            <div className="space-y-3">
              {results.map((result) => (
                <div key={result.id} className="card p-4 flex gap-4">
                  {/* Cover */}
                  <div className="w-20 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-slate-700">
                    {result.portada_url ? (
                      <img src={result.portada_url} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <BookOpen className="w-8 h-8 text-slate-600" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-white line-clamp-2">{result.titulo}</h3>
                    {result.autor && (
                      <p className="text-sm text-slate-400 mt-1">{result.autor}</p>
                    )}
                    {result.descripcion && (
                      <p className="text-sm text-slate-500 mt-2 line-clamp-2">{result.descripcion}</p>
                    )}
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">
                        {result.tipo}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col justify-center gap-2">
                    {imported.has(result.id) ? (
                      <span className="inline-flex items-center gap-1 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg text-sm">
                        <Check className="w-4 h-4" />
                        Importado
                      </span>
                    ) : (
                      <button
                        onClick={() => handleImport(result)}
                        disabled={importing === result.id}
                        className="btn-primary text-sm py-2 disabled:opacity-50"
                      >
                        {importing === result.id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <>
                            <Download className="w-4 h-4 mr-1" />
                            Importar
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && results.length === 0 && query && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-slate-700 mx-auto mb-4" />
            <p className="text-slate-400">No se encontraron resultados para "{query}"</p>
          </div>
        )}

        {/* Initial State */}
        {!loading && results.length === 0 && !query && (
          <div className="text-center py-12">
            <Download className="w-12 h-12 text-slate-700 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">Busca contenido para importar</h3>
            <p className="text-slate-400 max-w-md mx-auto">
              Ingresa un término de búsqueda para encontrar audiolibros, ebooks, artículos y más desde las fuentes disponibles.
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
