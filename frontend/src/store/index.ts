import { configureStore } from '@reduxjs/toolkit'
import catalogReducer from './slices/catalogSlice'
import playerReducer from './slices/playerSlice'
import sessionReducer from './slices/sessionSlice'

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    player: playerReducer,
    session: sessionReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
