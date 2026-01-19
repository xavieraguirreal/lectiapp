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
  Quote,
  Clock,
  WifiOff,
  Smartphone,
} from 'lucide-react'

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <LogoSVG className="w-10 h-10" />
              <span className="text-xl font-bold text-indigo-900">LECTIApp</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#que-es" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">
                Qué es
              </a>
              <a href="#contenido" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">
                Contenido
              </a>
              <a href="#testimonios" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">
                Testimonios
              </a>
            </nav>
            <Link
              to="/catalog"
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-colors shadow-lg shadow-indigo-200"
            >
              Explorar
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section with Illustrations */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                Tu biblioteca digital personal
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Todo el conocimiento,
                <span className="text-indigo-600"> un solo lugar</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Audiolibros, ebooks, papers científicos, Wikipedia y más.
                Escucha mientras viajas, lee en cualquier dispositivo.
                <strong className="text-slate-800"> Sin anuncios, sin complicaciones.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/catalog"
                  className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-2xl transition-all shadow-xl shadow-indigo-200 hover:shadow-2xl hover:shadow-indigo-300 hover:-translate-y-0.5"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Comenzar ahora
                </Link>
                <a
                  href="#que-es"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 hover:border-indigo-300 hover:text-indigo-600 font-semibold rounded-2xl transition-all"
                >
                  Conocer más
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-50"></div>
              <div className="relative">
                <HeroIllustration className="w-full max-w-lg mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es LECTIApp */}
      <section id="que-es" className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              ¿Qué es LECTIApp?
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <IllustratedFeature
              illustration={<BookStackSVG className="w-24 h-24" />}
              title="Todo junto"
              description="Audiolibros, ebooks, papers y Wikipedia en una sola app."
            />
            <IllustratedFeature
              illustration={<SyncSVG className="w-24 h-24" />}
              title="Siempre sincronizado"
              description="Tu progreso se guarda automáticamente en todos tus dispositivos."
            />
            <IllustratedFeature
              illustration={<OfflineSVG className="w-24 h-24" />}
              title="Funciona offline"
              description="El contenido se cachea para que puedas leer sin internet."
            />
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12">
            <p className="text-lg text-slate-700 leading-relaxed text-center">
              Imagina escuchar <strong>"El Quijote"</strong> mientras vas al trabajo,
              continuar con un <strong>paper de física</strong> en tu tablet durante el almuerzo,
              y terminar el día con un cuento de <strong>Borges</strong> antes de dormir.
              <span className="text-indigo-600 font-semibold"> Todo sin perder tu progreso.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contenido disponible */}
      <section id="contenido" className="py-20 lg:py-28 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Seis tipos de contenido
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Una sola aplicación para todo lo que necesitas leer, escuchar o ver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ContentCard
              icon={<Headphones className="w-7 h-7" />}
              color="orange"
              title="Audiolibros"
              source="LibriVox & Internet Archive"
              description="Miles de audiolibros gratuitos. Clásicos de la literatura en tu idioma."
            />
            <ContentCard
              icon={<BookOpen className="w-7 h-7" />}
              color="emerald"
              title="eBooks EPUB"
              source="Project Gutenberg"
              description="Libros digitales con lector optimizado. Modo oscuro y sepia."
            />
            <ContentCard
              icon={<Video className="w-7 h-7" />}
              color="blue"
              title="Videos"
              source="Internet Archive"
              description="Documentales y conferencias educativas para complementar."
            />
            <ContentCard
              icon={<GraduationCap className="w-7 h-7" />}
              color="purple"
              title="Papers Científicos"
              source="OpenAlex"
              description="Artículos académicos con citas, referencias y PDF integrado."
            />
            <ContentCard
              icon={<Globe className="w-7 h-7" />}
              color="amber"
              title="Wikipedia"
              source="Wikipedia"
              description="Guarda artículos para leer offline, sin anuncios ni distracciones."
            />
            <ContentCard
              icon={<BookMarked className="w-7 h-7" />}
              color="rose"
              title="Wikisource"
              source="Wikisource"
              description="Textos clásicos de dominio público en su versión original."
            />
          </div>
        </div>
      </section>

      {/* Beneficios con ilustraciones */}
      <section className="py-20 lg:py-28 bg-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <PatternSVG />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Diseñada para vos
            </h2>
            <p className="text-lg text-indigo-200 max-w-2xl mx-auto">
              Funciones pensadas para lectores reales, con problemas reales.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard
              icon={<Clock className="w-6 h-6" />}
              title="Respeta tu tiempo"
              description="Retoma exactamente donde lo dejaste."
            />
            <BenefitCard
              icon={<WifiOff className="w-6 h-6" />}
              title="Funciona offline"
              description="Lee o escucha sin conexión."
            />
            <BenefitCard
              icon={<Search className="w-6 h-6" />}
              title="Búsqueda IA"
              description="Busca con lenguaje natural."
            />
            <BenefitCard
              icon={<Smartphone className="w-6 h-6" />}
              title="Multi-dispositivo"
              description="Celular, tablet o PC."
            />
          </div>
        </div>
      </section>

      {/* Para quién es */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              ¿Para quién es?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <UseCase
              illustration={<CommuteSVG className="w-16 h-16" />}
              title="El viajero"
              description="Transforma el viaje en transporte público en tiempo de aprendizaje."
            />
            <UseCase
              illustration={<StudentSVG className="w-16 h-16" />}
              title="El estudiante"
              description="Papers y Wikipedia organizados sin pagar suscripciones."
            />
            <UseCase
              illustration={<NightReaderSVG className="w-16 h-16" />}
              title="El lector nocturno"
              description="Modo oscuro y sleep timer para leer antes de dormir."
            />
            <UseCase
              illustration={<ResearcherSVG className="w-16 h-16" />}
              title="El investigador"
              description="Todo tu material de investigación en un solo lugar."
            />
            <UseCase
              illustration={<LanguageSVG className="w-16 h-16" />}
              title="El políglota"
              description="Audiolibros en inglés, francés, alemán y más."
            />
            <UseCase
              illustration={<OfflineUserSVG className="w-16 h-16" />}
              title="El desconectado"
              description="Contenido cacheado para leer sin internet."
            />
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-20 lg:py-28 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Lo que dicen nuestros lectores
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Testimonial
              quote="Antes usaba 4 apps distintas. Ahora todo está en LECTIApp y mi progreso nunca se pierde."
              author="María G."
              role="Docente universitaria"
              color="indigo"
            />
            <Testimonial
              quote="El sleep timer es genial. Me duermo escuchando y continúo donde quedé."
              author="Carlos R."
              role="Ingeniero"
              color="purple"
            />
            <Testimonial
              quote="Wikisource, Wikipedia y papers en un solo lugar me ahorra horas."
              author="Lucía M."
              role="Estudiante"
              color="rose"
            />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ReadingIllustration className="w-32 h-32 mx-auto mb-8" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Tu biblioteca te espera
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Miles de audiolibros, ebooks y artículos gratuitos.
            Sin suscripciones, sin anuncios. Empezá hoy.
          </p>
          <Link
            to="/catalog"
            className="inline-flex items-center justify-center px-10 py-4 bg-white hover:bg-indigo-50 text-slate-900 font-bold rounded-2xl transition-all shadow-xl hover:shadow-2xl text-lg"
          >
            Explorar la biblioteca
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 text-slate-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <LogoSVG className="w-8 h-8" />
              <span className="text-lg font-bold text-white">LECTIApp</span>
            </div>
            <p className="text-sm text-center">
              Contenido de LibriVox, Internet Archive, OpenAlex, Wikipedia y Wikisource.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// ============== SVG ILLUSTRATIONS ==============

function LogoSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="url(#logoGrad)" />
      <path d="M12 28V12h4v16h-4zM18 28V16h4v12h-4zM24 28V14h4v14h-4z" fill="white" opacity="0.9" />
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background circles */}
      <circle cx="200" cy="200" r="150" fill="#e0e7ff" opacity="0.5" />
      <circle cx="200" cy="200" r="100" fill="#c7d2fe" opacity="0.5" />

      {/* Books stack */}
      <rect x="120" y="180" width="100" height="120" rx="4" fill="#6366f1" />
      <rect x="125" y="185" width="90" height="5" fill="#818cf8" />
      <rect x="125" y="195" width="70" height="3" fill="#a5b4fc" />
      <rect x="125" y="203" width="80" height="3" fill="#a5b4fc" />

      <rect x="140" y="160" width="100" height="120" rx="4" fill="#8b5cf6" />
      <rect x="145" y="165" width="90" height="5" fill="#a78bfa" />
      <rect x="145" y="175" width="60" height="3" fill="#c4b5fd" />

      <rect x="160" y="140" width="100" height="120" rx="4" fill="#a855f7" />
      <rect x="165" y="145" width="90" height="5" fill="#c084fc" />
      <rect x="165" y="155" width="75" height="3" fill="#d8b4fe" />
      <rect x="165" y="163" width="50" height="3" fill="#d8b4fe" />

      {/* Headphones */}
      <circle cx="300" cy="120" r="40" stroke="#f97316" strokeWidth="8" fill="none" />
      <rect x="260" y="100" width="15" height="30" rx="7" fill="#f97316" />
      <rect x="325" y="100" width="15" height="30" rx="7" fill="#f97316" />
      <path d="M270 80 Q300 60 330 80" stroke="#f97316" strokeWidth="8" fill="none" strokeLinecap="round" />

      {/* Play button */}
      <circle cx="100" cy="300" r="35" fill="#10b981" />
      <path d="M92 285 L118 300 L92 315 Z" fill="white" />

      {/* Floating elements */}
      <circle cx="320" cy="280" r="8" fill="#f59e0b" />
      <circle cx="80" cy="180" r="6" fill="#ec4899" />
      <circle cx="340" cy="200" r="10" fill="#06b6d4" />

      {/* Document */}
      <rect x="280" y="220" width="60" height="80" rx="4" fill="white" stroke="#e2e8f0" strokeWidth="2" />
      <rect x="290" y="235" width="40" height="3" fill="#cbd5e1" />
      <rect x="290" y="245" width="35" height="3" fill="#cbd5e1" />
      <rect x="290" y="255" width="40" height="3" fill="#cbd5e1" />
      <rect x="290" y="265" width="25" height="3" fill="#cbd5e1" />
    </svg>
  )
}

function BookStackSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="50" width="70" height="15" rx="2" fill="#6366f1" />
      <rect x="20" y="35" width="70" height="15" rx="2" fill="#8b5cf6" />
      <rect x="10" y="65" width="70" height="15" rx="2" fill="#a855f7" />
      <rect x="25" y="20" width="60" height="15" rx="2" fill="#c084fc" />
    </svg>
  )
}

function SyncSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="35" stroke="#6366f1" strokeWidth="6" strokeDasharray="10 5" />
      <path d="M50 25 L55 35 L45 35 Z" fill="#6366f1" />
      <path d="M50 75 L45 65 L55 65 Z" fill="#6366f1" />
      <circle cx="50" cy="50" r="15" fill="#a855f7" />
      <path d="M45 50 L50 55 L60 45" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function OfflineSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="55" r="30" fill="#e0e7ff" />
      <path d="M30 55 Q50 35 70 55" stroke="#6366f1" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M38 60 Q50 45 62 60" stroke="#8b5cf6" strokeWidth="5" strokeLinecap="round" fill="none" />
      <circle cx="50" cy="65" r="6" fill="#a855f7" />
      <line x1="25" y1="75" x2="75" y2="35" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

function CommuteSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="25" width="50" height="35" rx="5" fill="#6366f1" />
      <rect x="20" y="30" width="40" height="20" rx="2" fill="#e0e7ff" />
      <circle cx="25" cy="60" r="6" fill="#1e293b" />
      <circle cx="55" cy="60" r="6" fill="#1e293b" />
      <circle cx="40" cy="40" r="8" fill="#f97316" />
      <path d="M37 40 L44 40 M40 37 L40 43" stroke="white" strokeWidth="2" />
    </svg>
  )
}

function StudentSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="30" r="15" fill="#fcd34d" />
      <rect x="25" y="45" width="30" height="25" rx="3" fill="#6366f1" />
      <rect x="15" y="55" width="20" height="15" rx="2" fill="#e0e7ff" />
      <rect x="17" y="58" width="16" height="2" fill="#94a3b8" />
      <rect x="17" y="62" width="12" height="2" fill="#94a3b8" />
    </svg>
  )
}

function NightReaderSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="20" r="12" fill="#fcd34d" />
      <circle cx="55" cy="18" r="10" fill="#1e293b" />
      <rect x="15" y="35" width="35" height="35" rx="3" fill="#6366f1" />
      <rect x="20" y="40" width="25" height="3" fill="#a5b4fc" />
      <rect x="20" y="46" width="20" height="3" fill="#a5b4fc" />
      <rect x="20" y="52" width="22" height="3" fill="#a5b4fc" />
    </svg>
  )
}

function ResearcherSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="35" cy="35" r="20" stroke="#6366f1" strokeWidth="6" fill="#e0e7ff" />
      <line x1="50" y1="50" x2="65" y2="65" stroke="#6366f1" strokeWidth="6" strokeLinecap="round" />
      <rect x="28" y="28" width="14" height="3" fill="#6366f1" />
      <rect x="28" y="34" width="10" height="3" fill="#8b5cf6" />
      <rect x="28" y="40" width="12" height="3" fill="#6366f1" />
    </svg>
  )
}

function LanguageSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="30" stroke="#6366f1" strokeWidth="4" fill="#e0e7ff" />
      <ellipse cx="40" cy="40" rx="12" ry="30" stroke="#8b5cf6" strokeWidth="3" fill="none" />
      <line x1="10" y1="40" x2="70" y2="40" stroke="#a855f7" strokeWidth="3" />
      <line x1="15" y1="25" x2="65" y2="25" stroke="#c084fc" strokeWidth="2" />
      <line x1="15" y1="55" x2="65" y2="55" stroke="#c084fc" strokeWidth="2" />
    </svg>
  )
}

function OfflineUserSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="30" height="50" rx="4" fill="#1e293b" />
      <rect x="28" y="20" width="24" height="38" rx="2" fill="#6366f1" />
      <rect x="32" y="25" width="16" height="3" fill="#a5b4fc" />
      <rect x="32" y="31" width="12" height="3" fill="#a5b4fc" />
      <circle cx="40" cy="60" r="3" fill="#475569" />
      <line x1="60" y1="70" x2="20" y2="10" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function ReadingIllustration({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" fill="#6366f1" opacity="0.2" />
      <rect x="25" y="30" width="50" height="40" rx="3" fill="white" />
      <rect x="30" y="38" width="30" height="3" fill="#c7d2fe" />
      <rect x="30" y="45" width="40" height="3" fill="#c7d2fe" />
      <rect x="30" y="52" width="35" height="3" fill="#c7d2fe" />
      <rect x="30" y="59" width="25" height="3" fill="#c7d2fe" />
      <circle cx="70" cy="25" r="12" fill="#fcd34d" />
    </svg>
  )
}

function PatternSVG() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="2" fill="white" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pattern)" />
    </svg>
  )
}

// ============== COMPONENTS ==============

function IllustratedFeature({
  illustration,
  title,
  description,
}: {
  illustration: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">{illustration}</div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  )
}

function ContentCard({
  icon,
  color,
  title,
  source,
  description,
}: {
  icon: React.ReactNode
  color: string
  title: string
  source: string
  description: string
}) {
  const colorClasses: Record<string, string> = {
    orange: 'bg-orange-100 text-orange-600',
    emerald: 'bg-emerald-100 text-emerald-600',
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
    amber: 'bg-amber-100 text-amber-600',
    rose: 'bg-rose-100 text-rose-600',
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all hover:-translate-y-1">
      <div className={`w-14 h-14 rounded-xl ${colorClasses[color]} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
      <p className="text-sm text-indigo-600 font-medium mb-2">{source}</p>
      <p className="text-slate-600 text-sm">{description}</p>
    </div>
  )
}

function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-indigo-200 text-sm">{description}</p>
    </div>
  )
}

function UseCase({
  illustration,
  title,
  description,
}: {
  illustration: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-50 to-indigo-50 rounded-2xl border border-indigo-100 hover:shadow-lg transition-all">
      <div className="flex-shrink-0">{illustration}</div>
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>
    </div>
  )
}

function Testimonial({
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
    indigo: 'border-t-indigo-500',
    purple: 'border-t-purple-500',
    rose: 'border-t-rose-500',
  }

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-slate-100 border-t-4 ${borderColors[color]}`}>
      <Quote className="w-8 h-8 text-slate-200 mb-4" />
      <p className="text-slate-700 mb-6">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white font-bold">
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
