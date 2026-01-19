import { Link } from 'react-router-dom'
import {
  BookOpen,
  Headphones,
  Video,
  Search,
  Globe,
  Play,
  ArrowRight,
  BookMarked,
  GraduationCap,
  Clock,
  WifiOff,
  Smartphone,
  ChevronDown,
} from 'lucide-react'

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">LECTIApp</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#que-es" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
                Qué es
              </a>
              <a href="#contenido" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
                Contenido
              </a>
              <a href="#testimonios" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
                Testimonios
              </a>
            </nav>
            <Link
              to="/catalog"
              className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors"
            >
              Explorar
            </Link>
          </div>
        </div>
      </header>

      {/* Hero - Split Screen */}
      <section className="min-h-screen flex flex-col lg:flex-row pt-16">
        {/* Left: Image/Illustration */}
        <div className="lg:w-1/2 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 flex items-center justify-center p-8 lg:p-16 min-h-[50vh] lg:min-h-screen relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-20 h-20 border-2 border-white/20 rounded-full"></div>
          <div className="absolute top-1/3 right-20 w-4 h-4 bg-white/30 rounded-full"></div>
          <div className="absolute bottom-1/3 left-20 w-6 h-6 bg-white/20 rounded-full"></div>

          {/* Main illustration */}
          <div className="relative z-10">
            <HeroIllustration />
          </div>
        </div>

        {/* Right: Text */}
        <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-lg">
            <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full mb-6">
              Biblioteca Digital
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Todo el conocimiento,
              <span className="text-indigo-600"> un solo lugar</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Audiolibros, ebooks, papers científicos, Wikipedia y más.
              Escucha mientras viajas, lee en cualquier dispositivo.
              Sin anuncios, sin complicaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/catalog"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5"
              >
                <Play className="w-5 h-5 mr-2" />
                Comenzar ahora
              </Link>
              <a
                href="#que-es"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-semibold rounded-xl transition-all"
              >
                Conocer más
                <ChevronDown className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Split Section: Qué es - Image Right */}
      <section id="que-es" className="flex flex-col lg:flex-row">
        {/* Left: Text */}
        <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-slate-50">
          <div className="max-w-lg">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              ¿Qué es LECTIApp?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Imagina escuchar <strong>"El Quijote"</strong> mientras vas al trabajo,
              continuar con un <strong>paper de física</strong> en tu tablet durante el almuerzo,
              y terminar el día con un cuento de <strong>Borges</strong> antes de dormir.
            </p>
            <p className="text-lg text-indigo-600 font-semibold">
              Todo sin perder tu progreso.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">10k+</div>
                <div className="text-sm text-slate-500">Audiolibros</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">50k+</div>
                <div className="text-sm text-slate-500">eBooks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">∞</div>
                <div className="text-sm text-slate-500">Wikipedia</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="lg:w-1/2 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 flex items-center justify-center p-8 lg:p-16 min-h-[400px] lg:min-h-[600px]">
          <FeatureIllustration1 />
        </div>
      </section>

      {/* Split Section: Beneficios - Image Left */}
      <section className="flex flex-col lg:flex-row-reverse">
        {/* Right: Text */}
        <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-white">
          <div className="max-w-lg">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-10">
              Diseñada para vos
            </h2>

            <div className="space-y-8">
              <BenefitItem
                icon={<Clock className="w-6 h-6" />}
                title="Respeta tu tiempo"
                description="Retoma exactamente donde lo dejaste, en cualquier dispositivo."
              />
              <BenefitItem
                icon={<WifiOff className="w-6 h-6" />}
                title="Funciona offline"
                description="El contenido se cachea para leer sin conexión."
              />
              <BenefitItem
                icon={<Search className="w-6 h-6" />}
                title="Búsqueda IA"
                description="Busca con lenguaje natural: 'novelas de amor del siglo XIX'."
              />
              <BenefitItem
                icon={<Smartphone className="w-6 h-6" />}
                title="Multi-dispositivo"
                description="Celular, tablet, PC. Tu biblioteca siempre contigo."
              />
            </div>
          </div>
        </div>

        {/* Left: Image */}
        <div className="lg:w-1/2 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 flex items-center justify-center p-8 lg:p-16 min-h-[400px] lg:min-h-[600px]">
          <FeatureIllustration2 />
        </div>
      </section>

      {/* Contenido - Grid on solid color */}
      <section id="contenido" className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Seis tipos de contenido
            </h2>
            <p className="text-lg text-slate-400">
              Una sola aplicación para todo lo que necesitas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ContentCard
              icon={<Headphones className="w-6 h-6" />}
              title="Audiolibros"
              source="LibriVox & Internet Archive"
              description="Miles de audiolibros gratuitos en español, inglés y más."
              color="orange"
            />
            <ContentCard
              icon={<BookOpen className="w-6 h-6" />}
              title="eBooks EPUB"
              source="Project Gutenberg"
              description="Libros digitales con lector optimizado."
              color="emerald"
            />
            <ContentCard
              icon={<Video className="w-6 h-6" />}
              title="Videos"
              source="Internet Archive"
              description="Documentales y conferencias educativas."
              color="blue"
            />
            <ContentCard
              icon={<GraduationCap className="w-6 h-6" />}
              title="Papers"
              source="OpenAlex"
              description="Artículos académicos con citas y referencias."
              color="violet"
            />
            <ContentCard
              icon={<Globe className="w-6 h-6" />}
              title="Wikipedia"
              source="Wikipedia"
              description="Artículos offline, sin anuncios."
              color="amber"
            />
            <ContentCard
              icon={<BookMarked className="w-6 h-6" />}
              title="Wikisource"
              source="Wikisource"
              description="Textos clásicos de dominio público."
              color="rose"
            />
          </div>
        </div>
      </section>

      {/* Split: Para quién es */}
      <section className="flex flex-col lg:flex-row">
        {/* Left: Image */}
        <div className="lg:w-1/2 bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700 flex items-center justify-center p-8 lg:p-16 min-h-[400px] lg:min-h-[600px]">
          <UsersIllustration />
        </div>

        {/* Right: Text */}
        <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-slate-50">
          <div className="max-w-lg">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-10">
              ¿Para quién es?
            </h2>

            <div className="space-y-6">
              <UserType emoji="🚌" title="El viajero" description="Transforma el viaje en tiempo de aprendizaje." />
              <UserType emoji="📚" title="El estudiante" description="Papers y Wikipedia sin suscripciones." />
              <UserType emoji="🌙" title="El lector nocturno" description="Modo oscuro y sleep timer." />
              <UserType emoji="🔬" title="El investigador" description="Todo tu material en un solo lugar." />
              <UserType emoji="🌍" title="El políglota" description="Contenido en múltiples idiomas." />
              <UserType emoji="✈️" title="El desconectado" description="Todo funciona offline." />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Lo que dicen nuestros lectores
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Antes usaba 4 apps distintas. Ahora todo está en LECTIApp y mi progreso nunca se pierde."
              author="María G."
              role="Docente universitaria"
              color="indigo"
            />
            <TestimonialCard
              quote="El sleep timer es genial. Me duermo escuchando y continúo donde quedé."
              author="Carlos R."
              role="Ingeniero"
              color="violet"
            />
            <TestimonialCard
              quote="Wikisource, Wikipedia y papers en un solo lugar me ahorra horas."
              author="Lucía M."
              role="Estudiante"
              color="emerald"
            />
          </div>
        </div>
      </section>

      {/* CTA Final - Full width split */}
      <section className="flex flex-col lg:flex-row min-h-[500px]">
        {/* Left: Dark with text */}
        <div className="lg:w-1/2 bg-slate-900 flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-lg text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Tu biblioteca te espera
            </h2>
            <p className="text-lg text-slate-400 mb-10">
              Miles de audiolibros, ebooks y artículos gratuitos.
              Sin suscripciones, sin anuncios.
            </p>
            <Link
              to="/catalog"
              className="inline-flex items-center justify-center px-10 py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-xl transition-all text-lg hover:-translate-y-0.5"
            >
              Explorar la biblioteca
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* Right: Gradient */}
        <div className="lg:w-1/2 bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600 flex items-center justify-center p-8 lg:p-16">
          <CTAIllustration />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-slate-900" />
              </div>
              <span className="text-lg font-bold">LECTIApp</span>
            </div>
            <p className="text-sm text-slate-500 text-center">
              Contenido de LibriVox, Internet Archive, OpenAlex, Wikipedia y Wikisource.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// ============== SVG ILLUSTRATIONS ==============

function HeroIllustration() {
  return (
    <svg className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stack of books */}
      <rect x="40" y="100" width="80" height="60" rx="4" fill="white" opacity="0.9" />
      <rect x="45" y="105" width="60" height="4" fill="#c7d2fe" />
      <rect x="45" y="115" width="50" height="3" fill="#e0e7ff" />
      <rect x="45" y="123" width="55" height="3" fill="#e0e7ff" />

      <rect x="50" y="80" width="80" height="60" rx="4" fill="white" />
      <rect x="55" y="85" width="60" height="4" fill="#a5b4fc" />
      <rect x="55" y="95" width="50" height="3" fill="#c7d2fe" />
      <rect x="55" y="103" width="55" height="3" fill="#c7d2fe" />

      <rect x="60" y="60" width="80" height="60" rx="4" fill="white" />
      <rect x="65" y="65" width="60" height="4" fill="#818cf8" />
      <rect x="65" y="75" width="50" height="3" fill="#a5b4fc" />
      <rect x="65" y="83" width="55" height="3" fill="#a5b4fc" />

      {/* Headphones */}
      <circle cx="150" cy="50" r="25" stroke="white" strokeWidth="6" fill="none" />
      <rect x="125" y="40" width="10" height="20" rx="5" fill="white" />
      <rect x="165" y="40" width="10" height="20" rx="5" fill="white" />
      <path d="M130 30 Q150 15 170 30" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />

      {/* Play button */}
      <circle cx="45" cy="160" r="20" fill="white" />
      <path d="M40 150 L55 160 L40 170 Z" fill="#6366f1" />
    </svg>
  )
}

function FeatureIllustration1() {
  return (
    <svg className="w-64 h-64 sm:w-72 sm:h-72" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tablet/Device */}
      <rect x="40" y="30" width="120" height="140" rx="10" fill="white" />
      <rect x="50" y="45" width="100" height="100" rx="4" fill="#f1f5f9" />

      {/* Content lines */}
      <rect x="60" y="60" width="60" height="6" fill="#cbd5e1" />
      <rect x="60" y="75" width="80" height="4" fill="#e2e8f0" />
      <rect x="60" y="85" width="70" height="4" fill="#e2e8f0" />
      <rect x="60" y="95" width="75" height="4" fill="#e2e8f0" />
      <rect x="60" y="105" width="50" height="4" fill="#e2e8f0" />

      {/* Progress indicator */}
      <rect x="60" y="125" width="80" height="6" rx="3" fill="#e2e8f0" />
      <rect x="60" y="125" width="50" height="6" rx="3" fill="#f97316" />

      {/* Home button */}
      <circle cx="100" cy="155" r="8" stroke="#cbd5e1" strokeWidth="2" fill="none" />
    </svg>
  )
}

function FeatureIllustration2() {
  return (
    <svg className="w-64 h-64 sm:w-72 sm:h-72" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cloud/Sync */}
      <path d="M50 100 Q50 70 80 70 Q80 50 110 50 Q150 50 150 90 Q170 90 170 110 Q170 130 150 130 L60 130 Q40 130 40 110 Q40 100 50 100" fill="white" />

      {/* Sync arrows */}
      <path d="M90 85 L100 95 L110 85" stroke="#10b981" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M110 115 L100 105 L90 115" stroke="#10b981" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="100" y1="95" x2="100" y2="115" stroke="#10b981" strokeWidth="4" strokeLinecap="round" />

      {/* Devices below */}
      <rect x="40" y="145" width="30" height="45" rx="3" fill="white" />
      <rect x="85" y="150" width="40" height="35" rx="2" fill="white" />
      <rect x="140" y="145" width="25" height="40" rx="2" fill="white" />
    </svg>
  )
}

function UsersIllustration() {
  return (
    <svg className="w-64 h-64 sm:w-72 sm:h-72" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Person 1 */}
      <circle cx="60" cy="60" r="20" fill="white" />
      <rect x="45" y="85" width="30" height="40" rx="4" fill="white" opacity="0.8" />

      {/* Person 2 */}
      <circle cx="140" cy="70" r="18" fill="white" />
      <rect x="127" y="93" width="26" height="35" rx="4" fill="white" opacity="0.8" />

      {/* Person 3 */}
      <circle cx="100" cy="120" r="22" fill="white" />
      <rect x="82" y="147" width="36" height="45" rx="4" fill="white" opacity="0.8" />

      {/* Connecting lines */}
      <line x1="75" y1="70" x2="125" y2="80" stroke="white" strokeWidth="2" opacity="0.4" strokeDasharray="4 4" />
      <line x1="60" y1="85" x2="90" y2="115" stroke="white" strokeWidth="2" opacity="0.4" strokeDasharray="4 4" />
      <line x1="140" y1="95" x2="115" y2="115" stroke="white" strokeWidth="2" opacity="0.4" strokeDasharray="4 4" />
    </svg>
  )
}

function CTAIllustration() {
  return (
    <svg className="w-48 h-48 sm:w-64 sm:h-64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Open book */}
      <path d="M100 50 L100 150" stroke="white" strokeWidth="2" />
      <path d="M100 50 Q60 45 30 60 L30 150 Q60 140 100 150" fill="white" opacity="0.9" />
      <path d="M100 50 Q140 45 170 60 L170 150 Q140 140 100 150" fill="white" />

      {/* Lines on left page */}
      <rect x="40" y="70" width="45" height="3" fill="#c7d2fe" />
      <rect x="40" y="80" width="40" height="3" fill="#e0e7ff" />
      <rect x="40" y="90" width="50" height="3" fill="#e0e7ff" />
      <rect x="40" y="100" width="35" height="3" fill="#e0e7ff" />

      {/* Lines on right page */}
      <rect x="110" y="70" width="45" height="3" fill="#a5b4fc" />
      <rect x="110" y="80" width="40" height="3" fill="#c7d2fe" />
      <rect x="110" y="90" width="50" height="3" fill="#c7d2fe" />
      <rect x="110" y="100" width="35" height="3" fill="#c7d2fe" />

      {/* Sparkles */}
      <circle cx="50" cy="35" r="4" fill="white" opacity="0.8" />
      <circle cx="150" cy="40" r="3" fill="white" opacity="0.6" />
      <circle cx="170" cy="80" r="5" fill="white" opacity="0.7" />
      <circle cx="25" cy="90" r="3" fill="white" opacity="0.5" />
    </svg>
  )
}

// ============== COMPONENTS ==============

function BenefitItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  )
}

function ContentCard({
  icon,
  title,
  source,
  description,
  color,
}: {
  icon: React.ReactNode
  title: string
  source: string
  description: string
  color: string
}) {
  const colorClasses: Record<string, string> = {
    orange: 'bg-orange-500',
    emerald: 'bg-emerald-500',
    blue: 'bg-blue-500',
    violet: 'bg-violet-500',
    amber: 'bg-amber-500',
    rose: 'bg-rose-500',
  }

  return (
    <div className="bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 transition-all hover:-translate-y-1">
      <div className={`w-12 h-12 ${colorClasses[color]} rounded-xl flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      <p className="text-sm text-slate-400 mb-2">{source}</p>
      <p className="text-slate-300 text-sm">{description}</p>
    </div>
  )
}

function UserType({
  emoji,
  title,
  description,
}: {
  emoji: string
  title: string
  description: string
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-3xl">{emoji}</div>
      <div>
        <h3 className="font-bold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
    </div>
  )
}

function TestimonialCard({
  quote,
  author,
  role,
  color,
}: {
  quote: string
  author: string
  role: string
  color: string
}) {
  const borderColors: Record<string, string> = {
    indigo: 'border-l-indigo-500',
    violet: 'border-l-violet-500',
    emerald: 'border-l-emerald-500',
  }

  return (
    <div className={`bg-slate-50 rounded-xl p-6 border-l-4 ${borderColors[color]}`}>
      <p className="text-slate-700 mb-6 leading-relaxed">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-slate-900">{author}</p>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  )
}
