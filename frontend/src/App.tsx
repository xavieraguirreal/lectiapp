import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from './store'

// Pages
import Landing from './pages/Landing'
import Catalog from './pages/Catalog'
import TitleDetail from './pages/TitleDetail'
import AudioPlayer from './pages/AudioPlayer'
import EpubReader from './pages/EpubReader'
import VideoPlayer from './pages/VideoPlayer'
import Import from './pages/Import'
import Search from './pages/Search'

function App() {
  const theme = useSelector((state: RootState) => state.session.theme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/title/:id" element={<TitleDetail />} />
        <Route path="/play/:id" element={<AudioPlayer />} />
        <Route path="/read/:id" element={<EpubReader />} />
        <Route path="/watch/:id" element={<VideoPlayer />} />
        <Route path="/import" element={<Import />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  )
}

export default App
