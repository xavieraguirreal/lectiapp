export interface Title {
  id: number
  titulo: string
  autor: string | null
  descripcion: string | null
  genero: string | null
  idioma: string
  anio_publicacion: number | null
  portada_url: string | null

  // Flags de tipo
  es_audiolibro: boolean
  es_epub: boolean
  es_video: boolean
  es_paper: boolean
  es_articulo_wikipedia: boolean
  es_texto_wikisource: boolean
  es_audio_general: boolean

  // IDs externos
  internet_archive_id: string | null
  librivox_id: string | null
  openalex_id: string | null
  wikipedia_id: string | null
  wikisource_id: string | null
  gutenberg_id: string | null
  doi: string | null

  // URLs
  url_epub: string | null
  url_audio_rss: string | null
  url_video: string | null
  url_pdf: string | null

  // Metadatos de audio
  duracion_total: string | null
  duracion_segundos: number | null
  num_capitulos_audio: number | null
  narrador: string | null

  // Metadatos de papers
  publicacion: string | null
  abstract: string | null
  keywords: string | null
  citations_count: number | null

  // Capítulos (para audiolibros)
  capitulos?: AudioChapter[]
}

export interface AudioChapter {
  id: number
  titulo_id: number
  numero: number
  titulo_capitulo: string | null
  duracion: string | null
  duracion_segundos: number | null
  url_mp3: string
  lector: string | null
}

export interface User {
  id: number
  nombre: string
  email: string | null
  avatar_url: string | null
}

export interface ContinueItem {
  tipo_sesion: 'audio' | 'lectura' | 'video'
  titulo_id: number
  titulo: string
  autor: string | null
  portada_url: string | null
  progreso_porcentaje: number
  fecha_ultima: string
  capitulo_actual?: number
  posicion_segundos?: number
  total_capitulos?: number
}

export interface CatalogFilters {
  type: 'audiolibro' | 'epub' | 'video' | 'paper' | 'wikipedia' | 'wikisource' | null
  genre: string | null
  query: string
}

export interface ApiResponse<T> {
  success: boolean
  data: T
  total?: number
  error?: string
}

export interface ImportSearchResult {
  id: string
  titulo: string
  autor: string | null
  descripcion: string | null
  portada_url: string | null
  fuente: 'internet_archive' | 'openalex' | 'wikipedia' | 'wikisource'
  tipo: string
  metadata: Record<string, unknown>
}

export type ContentType = 'audiolibro' | 'epub' | 'video' | 'paper' | 'wikipedia' | 'wikisource'
