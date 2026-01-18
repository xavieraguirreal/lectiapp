import { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  ArrowLeft,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Clock,
  List,
  X,
  ChevronDown,
  Moon,
} from 'lucide-react'
import type { AppDispatch, RootState } from '../store'
import { fetchTitleById } from '../store/slices/catalogSlice'
import {
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
} from '../store/slices/playerSlice'
import { api } from '../services/api'

const playbackRates = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]
const sleepTimerOptions = [
  { label: 'Desactivado', value: null },
  { label: '5 min', value: 5 },
  { label: '15 min', value: 15 },
  { label: '30 min', value: 30 },
  { label: '45 min', value: 45 },
  { label: '60 min', value: 60 },
]

export default function AudioPlayer() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const audioRef = useRef<HTMLAudioElement>(null)

  const { currentTitle: title } = useSelector((state: RootState) => state.catalog)
  const {
    isPlaying,
    currentChapter,
    chapters,
    position,
    duration,
    volume,
    playbackRate,
    sleepTimer,
  } = useSelector((state: RootState) => state.player)
  const { deviceId, user } = useSelector((state: RootState) => state.session)

  const [showChapters, setShowChapters] = useState(false)
  const [showSpeedMenu, setShowSpeedMenu] = useState(false)
  const [showSleepMenu, setShowSleepMenu] = useState(false)

  useEffect(() => {
    if (id) {
      dispatch(fetchTitleById(Number(id)))
    }
  }, [dispatch, id])

  useEffect(() => {
    if (title?.capitulos) {
      dispatch(setCurrentTitle({ titleId: title.id, chapters: title.capitulos }))
    }
  }, [dispatch, title])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleTimeUpdate = () => {
      dispatch(setPosition(audio.currentTime))
    }

    const handleDurationChange = () => {
      dispatch(setDuration(audio.duration))
    }

    const handleEnded = () => {
      dispatch(nextChapter())
    }

    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('durationchange', handleDurationChange)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('durationchange', handleDurationChange)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [dispatch])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.play()
    } else {
      audio.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = volume
  }, [volume])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.playbackRate = playbackRate
  }, [playbackRate])

  // Save progress periodically
  useEffect(() => {
    if (!title || !currentChapter) return

    const saveProgress = () => {
      const totalDuration = chapters.reduce((acc, ch) => acc + (ch.duracion_segundos || 0), 0)
      const completedDuration = chapters
        .slice(0, chapters.findIndex(ch => ch.id === currentChapter.id))
        .reduce((acc, ch) => acc + (ch.duracion_segundos || 0), 0)
      const progressPercent = totalDuration > 0
        ? ((completedDuration + position) / totalDuration) * 100
        : 0

      api.saveAudioProgress({
        titulo_id: title.id,
        usuario_id: user?.id,
        device_id: deviceId,
        capitulo_actual: currentChapter.numero,
        posicion_segundos: Math.floor(position),
        progreso_porcentaje: Math.round(progressPercent * 100) / 100,
      })
    }

    const interval = setInterval(saveProgress, 30000) // Save every 30 seconds
    return () => clearInterval(interval)
  }, [title, currentChapter, position, chapters, user, deviceId])

  const togglePlay = () => {
    dispatch(setPlaying(!isPlaying))
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value)
    if (audioRef.current) {
      audioRef.current.currentTime = time
    }
    dispatch(setPosition(time))
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setVolume(Number(e.target.value)))
  }

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = Math.floor(seconds % 60)
    if (h > 0) {
      return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
    }
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  const audioUrl = currentChapter
    ? api.getAudioStreamUrl(currentChapter.url_mp3, title?.id || 0, currentChapter.numero)
    : ''

  if (!title) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <audio ref={audioRef} src={audioUrl} preload="metadata" />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-lg mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-800 rounded-lg">
              <ArrowLeft className="w-5 h-5 text-slate-400" />
            </button>
            <span className="text-sm text-slate-400">Reproduciendo</span>
            <button
              onClick={() => setShowChapters(true)}
              className="p-2 hover:bg-slate-800 rounded-lg"
            >
              <List className="w-5 h-5 text-slate-400" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-lg mx-auto px-4 py-8">
        {/* Cover */}
        <div className="aspect-square max-w-xs mx-auto mb-8">
          <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-primary-500/10">
            {title.portada_url ? (
              <img src={title.portada_url} alt={title.titulo} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary-600 to-purple-600 flex items-center justify-center">
                <span className="text-6xl font-bold text-white/20">
                  {title.titulo.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Title & Author */}
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold text-white mb-1 line-clamp-2">{title.titulo}</h1>
          <p className="text-slate-400">{title.autor || 'Autor desconocido'}</p>
          {currentChapter && (
            <p className="text-sm text-primary-400 mt-2">
              Capítulo {currentChapter.numero}: {currentChapter.titulo_capitulo || `Parte ${currentChapter.numero}`}
            </p>
          )}
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <input
            type="range"
            min={0}
            max={duration || 100}
            value={position}
            onChange={handleSeek}
            className="w-full h-1 bg-slate-700 rounded-full appearance-none cursor-pointer
                     [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3
                     [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary-500"
          />
          <div className="flex justify-between text-sm text-slate-500 mt-2">
            <span>{formatTime(position)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={() => dispatch(previousChapter())}
            className="p-3 hover:bg-slate-800 rounded-full transition-colors"
          >
            <SkipBack className="w-6 h-6 text-slate-300" />
          </button>

          <button
            onClick={togglePlay}
            className="w-16 h-16 flex items-center justify-center bg-primary-500 hover:bg-primary-600 rounded-full transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white" />
            ) : (
              <Play className="w-8 h-8 text-white ml-1" />
            )}
          </button>

          <button
            onClick={() => dispatch(nextChapter())}
            className="p-3 hover:bg-slate-800 rounded-full transition-colors"
          >
            <SkipForward className="w-6 h-6 text-slate-300" />
          </button>
        </div>

        {/* Secondary Controls */}
        <div className="flex items-center justify-between">
          {/* Volume */}
          <div className="flex items-center gap-2">
            <button onClick={() => dispatch(setVolume(volume === 0 ? 1 : 0))}>
              {volume === 0 ? (
                <VolumeX className="w-5 h-5 text-slate-400" />
              ) : (
                <Volume2 className="w-5 h-5 text-slate-400" />
              )}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.1}
              value={volume}
              onChange={handleVolumeChange}
              className="w-20 h-1 bg-slate-700 rounded-full appearance-none cursor-pointer"
            />
          </div>

          {/* Speed */}
          <div className="relative">
            <button
              onClick={() => setShowSpeedMenu(!showSpeedMenu)}
              className="flex items-center gap-1 px-3 py-1.5 bg-slate-800 rounded-lg text-sm text-slate-300"
            >
              {playbackRate}x
              <ChevronDown className="w-4 h-4" />
            </button>
            {showSpeedMenu && (
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-800 rounded-xl p-2 min-w-[100px]">
                {playbackRates.map((rate) => (
                  <button
                    key={rate}
                    onClick={() => { dispatch(setPlaybackRate(rate)); setShowSpeedMenu(false) }}
                    className={`w-full px-3 py-2 rounded-lg text-sm text-left ${
                      playbackRate === rate ? 'bg-primary-500/20 text-primary-400' : 'text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {rate}x
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sleep Timer */}
          <div className="relative">
            <button
              onClick={() => setShowSleepMenu(!showSleepMenu)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm ${
                sleepTimer ? 'bg-primary-500/20 text-primary-400' : 'bg-slate-800 text-slate-300'
              }`}
            >
              <Moon className="w-4 h-4" />
              {sleepTimer ? `${sleepTimer}m` : 'Sleep'}
            </button>
            {showSleepMenu && (
              <div className="absolute bottom-full mb-2 right-0 bg-slate-800 rounded-xl p-2 min-w-[120px]">
                {sleepTimerOptions.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => { dispatch(setSleepTimer(option.value)); setShowSleepMenu(false) }}
                    className={`w-full px-3 py-2 rounded-lg text-sm text-left ${
                      sleepTimer === option.value ? 'bg-primary-500/20 text-primary-400' : 'text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Chapters Drawer */}
      {showChapters && (
        <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setShowChapters(false)}>
          <div
            className="absolute bottom-0 left-0 right-0 bg-slate-900 rounded-t-3xl max-h-[70vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-slate-900 p-4 border-b border-slate-800 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Capítulos</h3>
              <button onClick={() => setShowChapters(false)}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>
            <div className="p-4 overflow-y-auto max-h-[calc(70vh-60px)]">
              {chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => {
                    dispatch(setCurrentChapter(chapter))
                    setShowChapters(false)
                  }}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl mb-2 text-left ${
                    currentChapter?.id === chapter.id
                      ? 'bg-primary-500/20 text-primary-400'
                      : 'hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  <span className="w-8 h-8 flex items-center justify-center bg-slate-800 rounded-lg text-sm">
                    {chapter.numero}
                  </span>
                  <div className="flex-1">
                    <p className="font-medium">{chapter.titulo_capitulo || `Capítulo ${chapter.numero}`}</p>
                    {chapter.duracion && <p className="text-sm text-slate-500">{chapter.duracion}</p>}
                  </div>
                  {currentChapter?.id === chapter.id && isPlaying && (
                    <div className="w-4 h-4 flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
