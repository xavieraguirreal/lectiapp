import axios from 'axios'
import type { Title, CatalogFilters, ContinueItem, ApiResponse, AudioChapter } from '../types'

const API_BASE = '/api/v1'

const axiosInstance = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const api = {
  // Catálogo
  async getTitles(
    page: number = 1,
    filters?: CatalogFilters
  ): Promise<{ data: Title[]; total: number }> {
    const params = new URLSearchParams()
    params.set('page', String(page))
    params.set('limit', '20')

    if (filters?.type) params.set('type', filters.type)
    if (filters?.genre) params.set('genre', filters.genre)
    if (filters?.query) params.set('q', filters.query)

    const response = await axiosInstance.get<ApiResponse<Title[]>>(`/titles?${params}`)
    return { data: response.data.data, total: response.data.total || 0 }
  },

  async getTitleById(id: number): Promise<Title> {
    const response = await axiosInstance.get<ApiResponse<Title>>(`/titles/${id}`)
    return response.data.data
  },

  async getChapters(titleId: number): Promise<AudioChapter[]> {
    const response = await axiosInstance.get<ApiResponse<AudioChapter[]>>(
      `/titles/${titleId}/chapters`
    )
    return response.data.data
  },

  // Streaming URLs
  getAudioStreamUrl(url: string, titleId: number, chapter: number): string {
    const params = new URLSearchParams({ url, title_id: String(titleId), chapter: String(chapter) })
    return `${API_BASE}/stream/audio?${params}`
  },

  getEpubStreamUrl(titleId: number): string {
    return `${API_BASE}/stream/epub?title_id=${titleId}`
  },

  getVideoStreamUrl(titleId: number): string {
    return `${API_BASE}/stream/video?title_id=${titleId}`
  },

  // Sesiones
  async getContinueList(userId?: number, deviceId?: string): Promise<ContinueItem[]> {
    const params = new URLSearchParams()
    if (userId) params.set('user_id', String(userId))
    if (deviceId) params.set('device_id', deviceId)

    const response = await axiosInstance.get<ApiResponse<ContinueItem[]>>(`/sessions/continue?${params}`)
    return response.data.data
  },

  async saveAudioProgress(data: {
    titulo_id: number
    usuario_id?: number
    device_id?: string
    capitulo_actual: number
    posicion_segundos: number
    progreso_porcentaje: number
  }): Promise<void> {
    await axiosInstance.post('/sessions/audio', data)
  },

  async saveReadingProgress(data: {
    titulo_id: number
    usuario_id?: number
    device_id?: string
    tipo_lectura: string
    cfi_posicion?: string
    porcentaje_posicion: number
  }): Promise<void> {
    await axiosInstance.post('/sessions/reading', data)
  },

  async saveVideoProgress(data: {
    titulo_id: number
    usuario_id?: number
    device_id?: string
    posicion_segundos: number
    progreso_porcentaje: number
  }): Promise<void> {
    await axiosInstance.post('/sessions/video', data)
  },

  // Búsqueda inteligente
  async smartSearch(query: string): Promise<Title[]> {
    const response = await axiosInstance.get<ApiResponse<Title[]>>(`/search/smart?q=${encodeURIComponent(query)}`)
    return response.data.data
  },

  // Importación
  async searchInternetArchive(query: string, type?: string): Promise<ApiResponse<unknown[]>> {
    const params = new URLSearchParams({ q: query })
    if (type) params.set('type', type)
    const response = await axiosInstance.get(`/import/internet-archive/search?${params}`)
    return response.data
  },

  async importFromInternetArchive(iaId: string): Promise<Title> {
    const response = await axiosInstance.post<ApiResponse<Title>>('/import/internet-archive', { ia_id: iaId })
    return response.data.data
  },

  async searchOpenAlex(query: string): Promise<ApiResponse<unknown[]>> {
    const response = await axiosInstance.get(`/import/openalex/search?q=${encodeURIComponent(query)}`)
    return response.data
  },

  async searchWikipedia(query: string, lang: string = 'es'): Promise<ApiResponse<unknown[]>> {
    const response = await axiosInstance.get(`/import/wikipedia/search?q=${encodeURIComponent(query)}&lang=${lang}`)
    return response.data
  },
}
