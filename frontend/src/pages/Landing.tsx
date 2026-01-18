import { Link } from 'react-router-dom'
import {
  BookOpen,
  Headphones,
  Video,
  FileText,
  Search,
  Download,
  Smartphone,
  Zap,
  Globe,
  Play,
  ArrowRight,
  Sparkles,
  Library,
  BookMarked,
  GraduationCap,
} from 'lucide-react'

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
                <Library className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">LECTIApp</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-400 hover:text-white transition-colors">
                Funciones
              </a>
              <a href="#content" className="text-slate-400 hover:text-white transition-colors">
                Contenido
              </a>
              <a href="#how-it-works" className="text-slate-400 hover:text-white transition-colors">
                Cómo funciona
              </a>
            </nav>
            <Link to="/catalog" className="btn-primary text-sm">
              Explorar Biblioteca
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Tu biblioteca digital personal
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up text-balance">
              Todo tu conocimiento en{' '}
              <span className="gradient-text">un solo lugar</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto animate-slide-up text-balance">
              Audiolibros, ebooks, artículos científicos, Wikipedia y más.
              Escucha, lee y aprende desde cualquier dispositivo con sincronización automática.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
              <Link to="/catalog" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
                <Play className="w-5 h-5 mr-2" />
                Comenzar ahora
              </Link>
              <Link to="/import" className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
                <Download className="w-5 h-5 mr-2" />
                Importar contenido
              </Link>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 lg:mt-20 relative">
            <div className="card p-2 max-w-5xl mx-auto glow-strong">
              <div className="relative rounded-xl overflow-hidden bg-slate-800 aspect-[16/9]">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900">
                  {/* Mock App Interface */}
                  <div className="absolute inset-4 flex">
                    {/* Sidebar */}
                    <div className="w-64 bg-slate-900/50 rounded-xl p-4 mr-4 hidden md:block">
                      <div className="space-y-3">
                        <div className="h-8 bg-primary-500/20 rounded-lg w-full" />
                        <div className="h-6 bg-slate-700/50 rounded-lg w-3/4" />
                        <div className="h-6 bg-slate-700/50 rounded-lg w-full" />
                        <div className="h-6 bg-slate-700/50 rounded-lg w-2/3" />
                        <div className="mt-6 h-24 bg-slate-700/30 rounded-xl" />
                        <div className="h-24 bg-slate-700/30 rounded-xl" />
                      </div>
                    </div>
                    {/* Content Grid */}
                    <div className="flex-1 flex flex-col">
                      <div className="h-10 bg-slate-700/50 rounded-xl mb-4" />
                      <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl p-2 animate-pulse"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          >
                            <div className="aspect-[3/4] bg-slate-600/30 rounded-lg mb-2" />
                            <div className="h-3 bg-slate-600/50 rounded w-3/4 mb-1" />
                            <div className="h-2 bg-slate-700/50 rounded w-1/2" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section id="content" className="py-20 lg:py-32 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Todos los formatos que necesitas
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Desde audiolibros de LibriVox hasta papers científicos de OpenAlex
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ContentCard
              icon={<Headphones className="w-8 h-8" />}
              title="Audiolibros"
              description="Miles de audiolibros gratuitos de LibriVox e Internet Archive. Continúa donde lo dejaste."
              gradient="from-orange-500 to-red-500"
              features={['Streaming con caché', 'Control de velocidad', 'Sleep timer']}
            />
            <ContentCard
              icon={<BookOpen className="w-8 h-8" />}
              title="eBooks EPUB"
              description="Lee libros digitales con un lector optimizado para cualquier pantalla."
              gradient="from-green-500 to-emerald-500"
              features={['Modo oscuro', 'Ajuste de fuente', 'Marcadores']}
            />
            <ContentCard
              icon={<Video className="w-8 h-8" />}
              title="Video"
              description="Documentales, conferencias y contenido educativo en video."
              gradient="from-blue-500 to-cyan-500"
              features={['Streaming adaptativo', 'Picture-in-picture', 'Subtítulos']}
            />
            <ContentCard
              icon={<GraduationCap className="w-8 h-8" />}
              title="Papers Científicos"
              description="Accede a artículos académicos desde OpenAlex con metadatos completos."
              gradient="from-purple-500 to-pink-500"
              features={['Búsqueda por DOI', 'Citas y referencias', 'PDF integrado']}
            />
            <ContentCard
              icon={<Globe className="w-8 h-8" />}
              title="Wikipedia"
              description="Guarda artículos de Wikipedia para leer offline cuando quieras."
              gradient="from-yellow-500 to-orange-500"
              features={['Lectura offline', 'Modo limpio', 'Enlaces internos']}
            />
            <ContentCard
              icon={<BookMarked className="w-8 h-8" />}
              title="Wikisource"
              description="Textos clásicos de dominio público en su versión original."
              gradient="from-pink-500 to-rose-500"
              features={['Textos completos', 'Múltiples idiomas', 'Sin anuncios']}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Diseñado para tu comodidad
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Funciones pensadas para hacer tu experiencia de lectura y escucha perfecta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Search className="w-6 h-6" />}
              title="Búsqueda Inteligente"
              description="Busca con lenguaje natural. 'Algo de filosofía oriental' encuentra lo que necesitas."
            />
            <FeatureCard
              icon={<Smartphone className="w-6 h-6" />}
              title="PWA Instalable"
              description="Instala la app en tu dispositivo y úsala como una app nativa."
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="Sincronización"
              description="Tu progreso se guarda automáticamente. Continúa en cualquier dispositivo."
            />
            <FeatureCard
              icon={<Download className="w-6 h-6" />}
              title="Caché Inteligente"
              description="El contenido se cachea localmente para acceso rápido y offline."
            />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 lg:py-32 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Comienza en 3 pasos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number={1}
              title="Explora o Importa"
              description="Navega el catálogo existente o importa contenido desde LibriVox, Internet Archive, Wikipedia y más."
            />
            <StepCard
              number={2}
              title="Elige tu formato"
              description="Escucha audiolibros, lee ebooks o mira videos. Todo desde la misma interfaz."
            />
            <StepCard
              number={3}
              title="Continúa donde quedaste"
              description="Tu progreso se guarda automáticamente. Retoma tu lectura o escucha en cualquier momento."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-purple-600/20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Tu biblioteca personal te espera
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Comienza a explorar miles de audiolibros, ebooks y artículos gratuitos ahora mismo.
          </p>
          <Link to="/catalog" className="btn-primary text-lg px-10 py-4 inline-flex items-center">
            Explorar catálogo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
                <Library className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">LECTIApp</span>
            </div>
            <p className="text-slate-500 text-sm">
              Contenido de LibriVox, Internet Archive, OpenAlex, Wikipedia y Wikisource.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ContentCard({
  icon,
  title,
  description,
  gradient,
  features,
}: {
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
  features: string[]
}) {
  return (
    <div className="card card-hover p-6">
      <div
        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-4`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="card card-hover p-6 text-center">
      <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm">{description}</p>
    </div>
  )
}

function StepCard({
  number,
  title,
  description,
}: {
  number: number
  title: string
  description: string
}) {
  return (
    <div className="relative">
      <div className="card p-6 text-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
          {number}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  )
}
