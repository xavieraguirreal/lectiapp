import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { api } from '../../services/api'
import type { Title, CatalogFilters } from '../../types'

interface CatalogState {
  titles: Title[]
  currentTitle: Title | null
  filters: CatalogFilters
  loading: boolean
  error: string | null
  pagination: {
    page: number
    limit: number
    total: number
  }
}

const initialState: CatalogState = {
  titles: [],
  currentTitle: null,
  filters: {
    type: null,
    genre: null,
    query: '',
  },
  loading: false,
  error: null,
  pagination: {
    page: 1,
    limit: 20,
    total: 0,
  },
}

export const fetchTitles = createAsyncThunk(
  'catalog/fetchTitles',
  async (params: { page?: number; filters?: CatalogFilters }, { rejectWithValue }) => {
    try {
      const response = await api.getTitles(params.page, params.filters)
      return response
    } catch (error) {
      return rejectWithValue('Error al cargar el catálogo')
    }
  }
)

export const fetchTitleById = createAsyncThunk(
  'catalog/fetchTitleById',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await api.getTitleById(id)
      return response
    } catch (error) {
      return rejectWithValue('Error al cargar el título')
    }
  }
)

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<CatalogFilters>>) => {
      state.filters = { ...state.filters, ...action.payload }
      state.pagination.page = 1
    },
    clearFilters: (state) => {
      state.filters = initialState.filters
      state.pagination.page = 1
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.pagination.page = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTitles.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchTitles.fulfilled, (state, action) => {
        state.loading = false
        state.titles = action.payload.data
        state.pagination.total = action.payload.total
      })
      .addCase(fetchTitles.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      .addCase(fetchTitleById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchTitleById.fulfilled, (state, action) => {
        state.loading = false
        state.currentTitle = action.payload
      })
      .addCase(fetchTitleById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { setFilters, clearFilters, setPage } = catalogSlice.actions
export default catalogSlice.reducer
