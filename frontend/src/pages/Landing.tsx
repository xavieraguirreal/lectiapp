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
  Sparkles,
  Zap,
  Shield,
} from 'lucide-react'

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-40 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-3000"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-4 mt-4">
          <div className="max-w-6xl mx-auto px-6 py-3 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  LECTIApp
                </span>
              </div>
              <nav className="hidden md:flex items-center gap-8">
                <a href="#que-es" className="text-white/60 hover:text-white transition-colors text-sm">
                  Qué es
                </a>
                <a href="#contenido" className="text-white/60 hover:text-white transition-colors text-sm">
                  Contenido
                </a>
                <a href="#testimonios" className="text-white/60 hover:text-white transition-colors text-sm">
                  Testimonios
                </a>
              </nav>
              <Link
                to="/catalog"
                className="px-5 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-medium rounded-xl transition-all hover:scale-105"
              >
                Explorar
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-white/80 mb-8">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Tu biblioteca digital personal
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
                Todo el conocimiento,
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                un solo lugar
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              Audiolibros, ebooks, papers científicos, Wikipedia y más.
              Escucha mientras viajas, lee en cualquier dispositivo.
              <span className="text-white/80"> Sin anuncios, sin complicaciones.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/catalog"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold rounded-2xl transition-all shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5"
              >
                <Play className="w-5 h-5 mr-2" />
                Comenzar ahora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#que-es"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 font-semibold rounded-2xl transition-all"
              >
                Conocer más
              </a>
            </div>
          </div>

          {/* Glass cards preview */}
          <div className="mt-20 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
            <GlassPreviewCard icon={<Headphones className="w-8 h-8" />} label="Audiolibros" color="orange" />
            <GlassPreviewCard icon={<BookOpen className="w-8 h-8" />} label="eBooks" color="emerald" />
            <GlassPreviewCard icon={<GraduationCap className="w-8 h-8" />} label="Papers" color="violet" />
          </div>
        </div>
      </section>

      {/* Qué es LECTIApp */}
      <section id="que-es" className="relative py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                ¿Qué es LECTIApp?
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <GlassFeatureCard
              icon={<BookMarked className="w-7 h-7" />}
              title="Todo junto"
              description="Audiolibros, ebooks, papers y Wikipedia en una sola app unificada."
              gradient="from-violet-500 to-indigo-500"
            />
            <GlassFeatureCard
              icon={<Zap className="w-7 h-7" />}
              title="Siempre sincronizado"
              description="Tu progreso se guarda automáticamente en todos tus dispositivos."
              gradient="from-fuchsia-500 to-pink-500"
            />
            <GlassFeatureCard
              icon={<Shield className="w-7 h-7" />}
              title="Funciona offline"
              description="El contenido se cachea para que puedas leer sin conexión."
              gradient="from-cyan-500 to-blue-500"
            />
          </div>

          {/* Quote glass card */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed text-center">
              Imagina escuchar <span className="text-violet-400 font-semibold">"El Quijote"</span> mientras vas al trabajo,
              continuar con un <span className="text-fuchsia-400 font-semibold">paper de física</span> en tu tablet durante el almuerzo,
              y terminar el día con un cuento de <span className="text-pink-400 font-semibold">Borges</span> antes de dormir.
              <span className="text-white font-semibold"> Todo sin perder tu progreso.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contenido disponible */}
      <section id="contenido" className="relative py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Seis tipos de contenido
              </span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto mt-4">
              Una sola aplicación para todo lo que necesitas leer, escuchar o ver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ContentGlassCard
              icon={<Headphones className="w-6 h-6" />}
              title="Audiolibros"
              source="LibriVox & Internet Archive"
              description="Miles de audiolibros gratuitos. Clásicos de la literatura en tu idioma."
              gradient="from-orange-500 to-amber-500"
            />
            <ContentGlassCard
              icon={<BookOpen className="w-6 h-6" />}
              title="eBooks EPUB"
              source="Project Gutenberg"
              description="Libros digitales con lector optimizado. Modo oscuro y sepia."
              gradient="from-emerald-500 to-teal-500"
            />
            <ContentGlassCard
              icon={<Video className="w-6 h-6" />}
              title="Videos"
              source="Internet Archive"
              description="Documentales y conferencias educativas para complementar."
              gradient="from-blue-500 to-cyan-500"
            />
            <ContentGlassCard
              icon={<GraduationCap className="w-6 h-6" />}
              title="Papers Científicos"
              source="OpenAlex"
              description="Artículos académicos con citas, referencias y PDF integrado."
              gradient="from-violet-500 to-purple-500"
            />
            <ContentGlassCard
              icon={<Globe className="w-6 h-6" />}
              title="Wikipedia"
              source="Wikipedia"
              description="Guarda artículos para leer offline, sin anuncios ni distracciones."
              gradient="from-amber-500 to-yellow-500"
            />
            <ContentGlassCard
              icon={<BookMarked className="w-6 h-6" />}
              title="Wikisource"
              source="Wikisource"
              description="Textos clásicos de dominio público en su versión original."
              gradient="from-rose-500 to-pink-500"
            />
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 backdrop-blur-xl rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden">
            {/* Inner glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>

            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Diseñada para vos
              </h2>
              <p className="text-white/50 max-w-xl mx-auto">
                Funciones pensadas para lectores reales, con problemas reales.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <BenefitGlassCard
                icon={<Clock className="w-6 h-6" />}
                title="Respeta tu tiempo"
                description="Retoma exactamente donde lo dejaste."
              />
              <BenefitGlassCard
                icon={<WifiOff className="w-6 h-6" />}
                title="Funciona offline"
                description="Lee o escucha sin conexión."
              />
              <BenefitGlassCard
                icon={<Search className="w-6 h-6" />}
                title="Búsqueda IA"
                description="Busca con lenguaje natural."
              />
              <BenefitGlassCard
                icon={<Smartphone className="w-6 h-6" />}
                title="Multi-dispositivo"
                description="Celular, tablet o PC."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Para quién es */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                ¿Para quién es?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <UseCaseGlassCard
              emoji="🚌"
              title="El viajero"
              description="Transforma el viaje en transporte público en tiempo de aprendizaje."
            />
            <UseCaseGlassCard
              emoji="📚"
              title="El estudiante"
              description="Papers y Wikipedia organizados sin pagar suscripciones."
            />
            <UseCaseGlassCard
              emoji="🌙"
              title="El lector nocturno"
              description="Modo oscuro y sleep timer para leer antes de dormir."
            />
            <UseCaseGlassCard
              emoji="🔬"
              title="El investigador"
              description="Todo tu material de investigación en un solo lugar."
            />
            <UseCaseGlassCard
              emoji="🌍"
              title="El políglota"
              description="Audiolibros en inglés, francés, alemán y más."
            />
            <UseCaseGlassCard
              emoji="✈️"
              title="El desconectado"
              description="Contenido cacheado para leer sin internet."
            />
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="relative py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Lo que dicen nuestros lectores
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialGlassCard
              quote="Antes usaba 4 apps distintas. Ahora todo está en LECTIApp y mi progreso nunca se pierde."
              author="María G."
              role="Docente universitaria"
              gradient="from-violet-500 to-indigo-500"
            />
            <TestimonialGlassCard
              quote="El sleep timer es genial. Me duermo escuchando y continúo donde quedé."
              author="Carlos R."
              role="Ingeniero"
              gradient="from-fuchsia-500 to-pink-500"
            />
            <TestimonialGlassCard
              quote="Wikisource, Wikipedia y papers en un solo lugar me ahorra horas."
              author="Lucía M."
              role="Estudiante"
              gradient="from-cyan-500 to-blue-500"
            />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/10 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-20 h-20 border border-white/10 rounded-2xl"></div>
            <div className="absolute bottom-4 right-4 w-20 h-20 border border-white/10 rounded-2xl"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>

            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-violet-500/30">
                <BookOpen className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Tu biblioteca te espera
              </h2>
              <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
                Miles de audiolibros, ebooks y artículos gratuitos.
                Sin suscripciones, sin anuncios. Empezá hoy.
              </p>
              <Link
                to="/catalog"
                className="inline-flex items-center justify-center px-10 py-4 bg-white hover:bg-white/90 text-slate-900 font-bold rounded-2xl transition-all shadow-xl hover:shadow-2xl text-lg hover:-translate-y-0.5"
              >
                Explorar la biblioteca
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">LECTIApp</span>
            </div>
            <p className="text-sm text-white/40 text-center">
              Contenido de LibriVox, Internet Archive, OpenAlex, Wikipedia y Wikisource.
            </p>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -30px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(30px, 10px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 15s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}

// ============== GLASS COMPONENTS ==============

function GlassPreviewCard({
  icon,
  label,
  color,
}: {
  icon: React.ReactNode
  label: string
  color: string
}) {
  const gradients: Record<string, string> = {
    orange: 'from-orange-500 to-amber-500',
    emerald: 'from-emerald-500 to-teal-500',
    violet: 'from-violet-500 to-purple-500',
  }

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1 group">
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradients[color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <p className="font-medium text-white/80">{label}</p>
    </div>
  )
}

function GlassFeatureCard({
  icon,
  title,
  description,
  gradient,
}: {
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
}) {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group">
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/60">{description}</p>
    </div>
  )
}

function ContentGlassCard({
  icon,
  title,
  source,
  description,
  gradient,
}: {
  icon: React.ReactNode
  title: string
  source: string
  description: string
  gradient: string
}) {
  return (
    <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      <p className={`text-sm font-medium bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}>
        {source}
      </p>
      <p className="text-white/50 text-sm">{description}</p>
    </div>
  )
}

function BenefitGlassCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-white/50 text-sm">{description}</p>
    </div>
  )
}

function UseCaseGlassCard({
  emoji,
  title,
  description,
}: {
  emoji: string
  title: string
  description: string
}) {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-white/50 text-sm">{description}</p>
    </div>
  )
}

function TestimonialGlassCard({
  quote,
  author,
  role,
  gradient,
}: {
  quote: string
  author: string
  role: string
  gradient: string
}) {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 relative overflow-hidden">
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}></div>

      <Quote className="w-8 h-8 text-white/20 mb-4" />
      <p className="text-white/80 mb-6 leading-relaxed">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-sm`}>
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-white">{author}</p>
          <p className="text-sm text-white/40">{role}</p>
        </div>
      </div>
    </div>
  )
}
