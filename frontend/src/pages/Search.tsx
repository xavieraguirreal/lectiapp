import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Search as SearchIcon,
  Sparkles,
  Loader2,
  Headphones,
  BookOpen,
  Video,
  FileText,
  Globe,
  BookMarked,
} from 'lucide-react'
import { api } from '../services/api'
import type { Title } from '../types'

export default function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Title[]>([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    setSearched(true)

    try {
      const data = await api.smartSearch(query)
      setResults(data)
    } catch (err) {
      console.error('Search error:', err)
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  const getTypeIcon = (title: Title) => {
    if (title.es_audiolibro) return <Headphones className="w-4 h-4" />
    if (title.es_epub) return <BookOpen className="w-4 h-4" />
    if (title.es_video) return <Video className="w-4 h-4" />
    if (title.es_paper) return <FileText className="w-4 h-4" />
    if (title.es_articulo_wikipedia) return <Globe className="w-4 h-4" />
    if (title.es_texto_wikisource) return <BookMarked className="w-4 h-4" />
    return null
  }

  const getTypeLabel = (title: Title) => {
    if (title.es_audiolibro) return 'Audiolibro'
    if (title.es_epub) return 'eBook'
    if (title.es_video) return 'Video'
    if (title.es_paper) return 'Paper'
    if (title.es_articulo_wikipedia) return 'Wikipedia'
    if (title.es_texto_wikisource) return 'Wikisource'
    return 'Otro'
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center h-16 gap-4">
            <Link to="/catalog" className="p-2 hover:bg-slate-800 rounded-lg">
              <ArrowLeft className="w-5 h-5 text-slate-400" />
            </Link>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary-500" />
              <span className="text-lg font-semibold text-white">Búsqueda Inteligente</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ej: 'algo de filosofía oriental' o 'novelas de misterio'"
              className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-700 rounded-2xl
                       text-white text-lg placeholder-slate-500
                       focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <p className="text-sm text-slate-500 mt-2 ml-1">
            Usa lenguaje natural para describir lo que buscas. La IA interpretará tu búsqueda.
          </p>
          <button type="submit" className="btn-primary w-full mt-4 py-3">
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Buscar con IA'}
          </button>
        </form>

        {/* Results */}
        {loading && (
          <div className="text-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary-500 mx-auto mb-4" />
            <p className="text-slate-400">Buscando con inteligencia artificial...</p>
          </div>
        )}

        {!loading && searched && results.length === 0 && (
          <div className="text-center py-12">
            <SearchIcon className="w-12 h-12 text-slate-700 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">Sin resultados</h3>
            <p className="text-slate-400">
              No encontramos contenido que coincida con "{query}". Prueba con otros términos.
            </p>
          </div>
        )}

        {!loading && results.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">
              {results.length} resultado{results.length !== 1 ? 's' : ''}
            </h2>

            <div className="space-y-3">
              {results.map((title) => (
                <Link
                  key={title.id}
                  to={`/title/${title.id}`}
                  className="card card-hover p-4 flex gap-4 block"
                >
                  {/* Cover */}
                  <div className="w-16 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-slate-700">
                    {title.portada_url ? (
                      <img src={title.portada_url} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        {getTypeIcon(title)}
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-white line-clamp-1">{title.titulo}</h3>
                    {title.autor && (
                      <p className="text-sm text-slate-400">{title.autor}</p>
                    )}
                    <div className="flex items-center gap-2 mt-2">
                      <span className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">
                        {getTypeIcon(title)}
                        {getTypeLabel(title)}
                      </span>
                      {title.genero && (
                        <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">
                          {title.genero}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Examples */}
        {!searched && (
          <div className="mt-8">
            <h3 className="text-sm font-medium text-slate-500 mb-3">Ejemplos de búsquedas</h3>
            <div className="space-y-2">
              {[
                'libros de ciencia ficción',
                'algo de filosofía griega',
                'novelas de amor del siglo XIX',
                'audiolibros para dormir',
                'papers sobre inteligencia artificial',
              ].map((example) => (
                <button
                  key={example}
                  onClick={() => {
                    setQuery(example)
                  }}
                  className="block w-full text-left px-4 py-3 bg-slate-800/50 hover:bg-slate-800 rounded-xl text-slate-300 transition-colors"
                >
                  "{example}"
                </button>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
