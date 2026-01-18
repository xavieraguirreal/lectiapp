import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { api } from '../../services/api'
import type { ContinueItem, User } from '../../types'

interface SessionState {
  user: User | null
  deviceId: string
  continueList: ContinueItem[]
  theme: 'light' | 'dark'
  loading: boolean
}

const getDeviceId = (): string => {
  let deviceId = localStorage.getItem('lectiapp_device_id')
  if (!deviceId) {
    deviceId = 'device_' + Math.random().toString(36).substring(2, 15)
    localStorage.setItem('lectiapp_device_id', deviceId)
  }
  return deviceId
}

const initialState: SessionState = {
  user: null,
  deviceId: getDeviceId(),
  continueList: [],
  theme: (localStorage.getItem('lectiapp_theme') as 'light' | 'dark') || 'dark',
  loading: false,
}

export const fetchContinueList = createAsyncThunk(
  'session/fetchContinueList',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState() as { session: SessionState }
      const response = await api.getContinueList(state.session.user?.id, state.session.deviceId)
      return response
    } catch (error) {
      return rejectWithValue('Error al cargar lista de continuar')
    }
  }
)

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload
      localStorage.setItem('lectiapp_theme', action.payload)
      document.documentElement.classList.toggle('dark', action.payload === 'dark')
    },
    logout: (state) => {
      state.user = null
      state.continueList = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContinueList.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchContinueList.fulfilled, (state, action) => {
        state.loading = false
        state.continueList = action.payload
      })
      .addCase(fetchContinueList.rejected, (state) => {
        state.loading = false
      })
  },
})

export const { setUser, setTheme, logout } = sessionSlice.actions
export default sessionSlice.reducer
