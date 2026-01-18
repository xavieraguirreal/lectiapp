import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AudioChapter } from '../../types'

interface PlayerState {
  isPlaying: boolean
  currentTitleId: number | null
  currentChapter: AudioChapter | null
  chapters: AudioChapter[]
  position: number
  duration: number
  volume: number
  playbackRate: number
  sleepTimer: number | null
}

const initialState: PlayerState = {
  isPlaying: false,
  currentTitleId: null,
  currentChapter: null,
  chapters: [],
  position: 0,
  duration: 0,
  volume: 1,
  playbackRate: 1,
  sleepTimer: null,
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload
    },
    setCurrentTitle: (state, action: PayloadAction<{ titleId: number; chapters: AudioChapter[] }>) => {
      state.currentTitleId = action.payload.titleId
      state.chapters = action.payload.chapters
      state.currentChapter = action.payload.chapters[0] || null
      state.position = 0
    },
    setCurrentChapter: (state, action: PayloadAction<AudioChapter>) => {
      state.currentChapter = action.payload
      state.position = 0
    },
    setPosition: (state, action: PayloadAction<number>) => {
      state.position = action.payload
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = Math.max(0, Math.min(1, action.payload))
    },
    setPlaybackRate: (state, action: PayloadAction<number>) => {
      state.playbackRate = action.payload
    },
    setSleepTimer: (state, action: PayloadAction<number | null>) => {
      state.sleepTimer = action.payload
    },
    nextChapter: (state) => {
      if (!state.currentChapter || state.chapters.length === 0) return
      const currentIndex = state.chapters.findIndex(c => c.id === state.currentChapter?.id)
      if (currentIndex < state.chapters.length - 1) {
        state.currentChapter = state.chapters[currentIndex + 1]
        state.position = 0
      }
    },
    previousChapter: (state) => {
      if (!state.currentChapter || state.chapters.length === 0) return
      const currentIndex = state.chapters.findIndex(c => c.id === state.currentChapter?.id)
      if (currentIndex > 0) {
        state.currentChapter = state.chapters[currentIndex - 1]
        state.position = 0
      }
    },
    resetPlayer: () => initialState,
  },
})

export const {
  setPlaying,
  setCurrentTitle,
  setCurrentChapter,
  setPosition,
  setDuration,
  setVolume,
  setPlaybackRate,
  setSleepTimer,
  nextChapter,
  previousChapter,
  resetPlayer,
} = playerSlice.actions

export default playerSlice.reducer
