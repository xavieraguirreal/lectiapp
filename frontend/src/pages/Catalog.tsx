import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  Search,
  Filter,
  Headphones,
  BookOpen,
  Video,
  FileText,
  Globe,
  BookMarked,
  Library,
  ArrowLeft,
  X,
} from 'lucide-react'
import type { AppDispatch, RootState } from '../store'
import { fetchTitles, setFilters, clearFilters } from '../store/slices/catalogSlice'
import type { ContentType, Title } from '../types'

const contentTypes: { type: ContentType; icon: React.ReactNode; label: string; color: string }[] = [
  { type: 'audiolibro', icon: <Headphones className="w-4 h-4" />, label: 'Audiolibros', color: 'orange' },
  { type: 'epub', icon: <BookOpen className="w-4 h-4" />, label: 'eBooks', color: 'green' },
  { type: 'video', icon: <Video className="w-4 h-4" />, label: 'Videos', color: 'blue' },
  { type: 'paper', icon: <FileText className="w-4 h-4" />, label: 'Papers', color: 'purple' },
  { type: 'wikipedia', icon: <Globe className="w-4 h-4" />, label: 'Wikipedia', color: 'yellow' },
  { type: 'wikisource', icon: <BookMarked className="w-4 h-4" />, label: 'Wikisource', color: 'pink' },
]

export default function Catalog() {
  const dispatch = useDispatch<AppDispatch>()
  const { titles, filters, loading, pagination } = useSelector((state: RootState) => state.catalog)
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    dispatch(fetchTitles({ page: pagination.page, filters }))
  }, [dispatch, pagination.page, filters])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(setFilters({ query: searchQuery }))
  }

  const handleTypeFilter = (type: ContentType | null) => {
    dispatch(setFilters({ type }))
    setShowFilters(false)
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-4">
            <Link to="/" className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-slate-400" />
            </Link>
            <div className="flex items-center gap-2">
              <Library className="w-6 h-6 text-primary-500" />
              <span className="text-lg font-semibold text-white">Catálogo</span>
            </div>

            {/* Search */}
            <form onSubmit={handleSearch} className="flex-1 max-w-xl ml-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar títulos, autores..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-xl
                           text-white placeholder-slate-500
                           focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </form>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`p-2 rounded-lg transition-colors ${
                showFilters || filters.type ? 'bg-primary-500/20 text-primary-400' : 'hover:bg-slate-800 text-slate-400'
              }`}
            >
              <Filter className="w-5 h-5" />
            </button>
          </div>

          {/* Filter Bar */}
          {showFilters && (
            <div className="py-3 border-t border-slate-800 flex items-center gap-2 flex-wrap">
              <button
                onClick={() => handleTypeFilter(null)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  !filters.type
                    ? 'bg-primary-500 text-white'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                Todos
              </button>
              {contentTypes.map(({ type, icon, label }) => (
                <button
                  key={type}
                  onClick={() => handleTypeFilter(type)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    filters.type === type
                      ? 'bg-primary-500 text-white'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {icon}
                  {label}
                </button>
              ))}
            </div>
          )}

          {/* Active Filters */}
          {(filters.type || filters.query) && (
            <div className="py-2 border-t border-slate-800 flex items-center gap-2">
              <span className="text-sm text-slate-500">Filtros activos:</span>
              {filters.query && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-slate-800 rounded-lg text-sm text-slate-300">
                  "{filters.query}"
                  <button onClick={() => { setSearchQuery(''); dispatch(setFilters({ query: '' })) }}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {filters.type && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-slate-800 rounded-lg text-sm text-slate-300">
                  {contentTypes.find(t => t.type === filters.type)?.label}
                  <button onClick={() => dispatch(setFilters({ type: null }))}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              <button
                onClick={() => { setSearchQuery(''); dispatch(clearFilters()) }}
                className="text-sm text-primary-400 hover:text-primary-300"
              >
                Limpiar todo
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[3/4] bg-slate-800 rounded-xl mb-2" />
                <div className="h-4 bg-slate-800 rounded w-3/4 mb-1" />
                <div className="h-3 bg-slate-800/50 rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : titles.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen className="w-16 h-16 text-slate-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No hay títulos</h3>
            <p className="text-slate-400 mb-6">
              {filters.query || filters.type
                ? 'No se encontraron títulos con los filtros actuales'
                : 'Comienza importando contenido a tu biblioteca'}
            </p>
            <Link to="/import" className="btn-primary">
              Importar contenido
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-4 text-sm text-slate-500">
              {pagination.total} título{pagination.total !== 1 ? 's' : ''} encontrado{pagination.total !== 1 ? 's' : ''}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {titles.map((title) => (
                <TitleCard key={title.id} title={title} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  )
}

function TitleCard({ title }: { title: Title }) {
  const getTypeIcon = () => {
    if (title.es_audiolibro) return <Headphones className="w-3 h-3" />
    if (title.es_epub) return <BookOpen className="w-3 h-3" />
    if (title.es_video) return <Video className="w-3 h-3" />
    if (title.es_paper) return <FileText className="w-3 h-3" />
    if (title.es_articulo_wikipedia) return <Globe className="w-3 h-3" />
    if (title.es_texto_wikisource) return <BookMarked className="w-3 h-3" />
    return null
  }

  const getTypeColor = () => {
    if (title.es_audiolibro) return 'bg-orange-500/20 text-orange-400'
    if (title.es_epub) return 'bg-green-500/20 text-green-400'
    if (title.es_video) return 'bg-blue-500/20 text-blue-400'
    if (title.es_paper) return 'bg-purple-500/20 text-purple-400'
    if (title.es_articulo_wikipedia) return 'bg-yellow-500/20 text-yellow-400'
    if (title.es_texto_wikisource) return 'bg-pink-500/20 text-pink-400'
    return 'bg-slate-500/20 text-slate-400'
  }

  return (
    <Link to={`/title/${title.id}`} className="group">
      <div className="card card-hover overflow-hidden">
        <div className="aspect-[3/4] relative bg-slate-800">
          {title.portada_url ? (
            <img
              src={title.portada_url}
              alt={title.titulo}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800">
              <BookOpen className="w-12 h-12 text-slate-600" />
            </div>
          )}
          <div className={`absolute top-2 right-2 p-1.5 rounded-lg ${getTypeColor()}`}>
            {getTypeIcon()}
          </div>
        </div>
        <div className="p-3">
          <h3 className="font-medium text-white text-sm line-clamp-2 group-hover:text-primary-400 transition-colors">
            {title.titulo}
          </h3>
          <p className="text-xs text-slate-500 mt-1 line-clamp-1">
            {title.autor || 'Autor desconocido'}
          </p>
        </div>
      </div>
    </Link>
  )
}
