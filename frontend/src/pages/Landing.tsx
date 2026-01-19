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
  CheckCircle,
  Clock,
  WifiOff,
  Smartphone,
} from 'lucide-react'

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/95 backdrop-blur-sm border-b border-amber-200/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-900 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-amber-100" />
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-amber-900">LECTIApp</span>
                <span className="hidden sm:inline text-sm text-amber-700 ml-2 font-serif italic">Biblioteca Digital</span>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#que-es" className="text-amber-800 hover:text-amber-950 transition-colors font-medium">
                Qué es
              </a>
              <a href="#contenido" className="text-amber-800 hover:text-amber-950 transition-colors font-medium">
                Contenido
              </a>
              <a href="#testimonios" className="text-amber-800 hover:text-amber-950 transition-colors font-medium">
                Testimonios
              </a>
              <a href="#usos" className="text-amber-800 hover:text-amber-950 transition-colors font-medium">
                Usos
              </a>
            </nav>
            <Link
              to="/catalog"
              className="px-5 py-2 bg-amber-900 hover:bg-amber-800 text-amber-50 font-medium rounded-full transition-colors"
            >
              Explorar
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section - Editorial Style */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-amber-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amber-700 font-medium tracking-widest uppercase text-sm mb-4">
                Tu biblioteca personal
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-amber-950 mb-6 leading-tight">
                Todo el conocimiento que buscas, en un solo lugar
              </h1>
              <p className="text-lg text-amber-800 mb-8 leading-relaxed font-serif">
                Audiolibros, ebooks, artículos científicos, Wikipedia y Wikisource.
                Escucha mientras viajas, lee en tu tablet, estudia desde cualquier dispositivo.
                <strong className="text-amber-950"> Sin distracciones, sin anuncios, sin complicaciones.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/catalog"
                  className="inline-flex items-center justify-center px-8 py-4 bg-amber-900 hover:bg-amber-800 text-amber-50 font-medium rounded-full transition-all shadow-lg hover:shadow-xl"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Comenzar ahora
                </Link>
                <a
                  href="#que-es"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-amber-50 font-medium rounded-full transition-all"
                >
                  Conocer más
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>

            {/* Hero Image/Illustration */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-100 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-amber-100">
                <div className="grid grid-cols-3 gap-4">
                  {/* Mini book covers */}
                  <div className="aspect-[3/4] bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-lg shadow-md flex items-end p-2">
                    <span className="text-[8px] text-emerald-100 font-serif">Don Quijote</span>
                  </div>
                  <div className="aspect-[3/4] bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg shadow-md flex items-end p-2">
                    <span className="text-[8px] text-blue-100 font-serif">1984</span>
                  </div>
                  <div className="aspect-[3/4] bg-gradient-to-br from-rose-700 to-rose-900 rounded-lg shadow-md flex items-end p-2">
                    <span className="text-[8px] text-rose-100 font-serif">Borges</span>
                  </div>
                  <div className="aspect-[3/4] bg-gradient-to-br from-violet-700 to-violet-900 rounded-lg shadow-md flex items-end p-2">
                    <span className="text-[8px] text-violet-100 font-serif">Filosofía</span>
                  </div>
                  <div className="aspect-[3/4] bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg shadow-md flex items-end p-2">
                    <span className="text-[8px] text-amber-100 font-serif">Papers</span>
                  </div>
                  <div className="aspect-[3/4] bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg shadow-md flex items-end p-2">
                    <span className="text-[8px] text-slate-100 font-serif">Wikipedia</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-amber-700">
                  <Headphones className="w-4 h-4" />
                  <div className="flex-1 h-1 bg-amber-200 rounded-full">
                    <div className="w-2/3 h-full bg-amber-600 rounded-full"></div>
                  </div>
                  <span className="text-xs font-mono">23:45</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es LECTIApp */}
      <section id="que-es" className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-950 mb-4">
              ¿Qué es LECTIApp?
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          </div>

          <div className="prose prose-lg prose-amber mx-auto font-serif text-amber-900">
            <p className="text-xl leading-relaxed">
              <strong className="text-amber-950">LECTIApp es tu biblioteca digital personal</strong>,
              diseñada para quienes aman leer y aprender pero tienen poco tiempo. Reunimos en una sola
              plataforma todo el contenido que necesitas: desde audiolibros clásicos de LibriVox hasta
              papers científicos de OpenAlex, pasando por artículos de Wikipedia y textos de Wikisource.
            </p>
            <p className="leading-relaxed">
              Imagina poder escuchar "El Quijote" mientras vas al trabajo, continuar leyendo un artículo
              de física cuántica en tu tablet durante el almuerzo, y terminar el día con un cuento de
              Borges en tu celular antes de dormir. <strong>Todo sincronizado, todo en un lugar, sin perder
              tu progreso.</strong>
            </p>
            <p className="leading-relaxed">
              No somos otra app de lectura más. Somos la herramienta que unifica tu vida intelectual,
              respetando tu tiempo y adaptándose a tu ritmo.
            </p>
          </div>
        </div>
      </section>

      {/* Contenido disponible */}
      <section id="contenido" className="py-20 lg:py-28 bg-[#faf8f5] border-y border-amber-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-950 mb-4">
              Todo en un solo lugar
            </h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto font-serif">
              Seis tipos de contenido, una sola aplicación. Sin saltar entre apps,
              sin perder el hilo de lo que estabas leyendo o escuchando.
            </p>
            <div className="w-24 h-1 bg-amber-400 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ContentCard
              icon={<Headphones className="w-8 h-8" />}
              title="Audiolibros"
              source="LibriVox & Internet Archive"
              description="Miles de audiolibros gratuitos narrados por voluntarios. Clásicos de la literatura universal en tu idioma."
              features={['Control de velocidad', 'Sleep timer', 'Continúa donde quedaste']}
            />
            <ContentCard
              icon={<BookOpen className="w-8 h-8" />}
              title="eBooks EPUB"
              source="Project Gutenberg"
              description="Libros digitales en formato EPUB con un lector optimizado para cualquier pantalla."
              features={['Modo oscuro y sepia', 'Ajuste de tipografía', 'Marcadores']}
            />
            <ContentCard
              icon={<Video className="w-8 h-8" />}
              title="Videos"
              source="Internet Archive"
              description="Documentales, conferencias y contenido educativo en video para complementar tu aprendizaje."
              features={['Picture-in-picture', 'Control de velocidad', 'Subtítulos']}
            />
            <ContentCard
              icon={<GraduationCap className="w-8 h-8" />}
              title="Papers Científicos"
              source="OpenAlex"
              description="Acceso a artículos académicos con metadatos completos: citas, referencias, autores."
              features={['Búsqueda por DOI', 'PDF integrado', 'Citas y referencias']}
            />
            <ContentCard
              icon={<Globe className="w-8 h-8" />}
              title="Wikipedia"
              source="Wikipedia"
              description="Guarda artículos de Wikipedia para leerlos offline, sin anuncios ni distracciones."
              features={['Lectura offline', 'Modo limpio', 'Múltiples idiomas']}
            />
            <ContentCard
              icon={<BookMarked className="w-8 h-8" />}
              title="Wikisource"
              source="Wikisource"
              description="Textos clásicos de dominio público en su versión original, verificados por la comunidad."
              features={['Textos completos', 'Sin modificaciones', 'Fuentes confiables']}
            />
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 lg:py-28 bg-amber-900 text-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              ¿Por qué LECTIApp?
            </h2>
            <p className="text-lg text-amber-200 max-w-2xl mx-auto font-serif">
              Diseñada pensando en lectores reales, con problemas reales.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard
              icon={<Clock className="w-6 h-6" />}
              title="Respeta tu tiempo"
              description="Tu progreso se guarda automáticamente. Retoma exactamente donde lo dejaste, en cualquier dispositivo."
            />
            <BenefitCard
              icon={<WifiOff className="w-6 h-6" />}
              title="Funciona offline"
              description="El contenido se cachea localmente. Lee o escucha incluso sin conexión a internet."
            />
            <BenefitCard
              icon={<Search className="w-6 h-6" />}
              title="Búsqueda inteligente"
              description="Busca con lenguaje natural: 'algo de filosofía oriental' o 'novelas cortas de terror'."
            />
            <BenefitCard
              icon={<Smartphone className="w-6 h-6" />}
              title="Todos tus dispositivos"
              description="Celular, tablet, computadora. La misma experiencia, perfectamente sincronizada."
            />
          </div>
        </div>
      </section>

      {/* Para quién es */}
      <section id="usos" className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-950 mb-4">
              ¿Para quién es LECTIApp?
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <UseCase
              emoji="🎧"
              title="El viajero"
              description="Pasas horas en el transporte público o manejando. Los audiolibros transforman ese tiempo muerto en aprendizaje. Escucha clásicos mientras vas al trabajo."
            />
            <UseCase
              emoji="📚"
              title="El estudiante"
              description="Necesitas acceso a papers y artículos académicos sin pagar suscripciones carísimas. OpenAlex y Wikipedia te dan el conocimiento que necesitas, organizado."
            />
            <UseCase
              emoji="🌙"
              title="El lector nocturno"
              description="Te gusta leer antes de dormir pero la luz de la pantalla te desvela. Modo oscuro, sepia, y sleep timer para que el audiolibro se pause cuando te duermas."
            />
            <UseCase
              emoji="🔬"
              title="El investigador"
              description="Saltás entre papers, Wikipedia y libros constantemente. Tener todo en una app significa no perder el hilo de tu investigación."
            />
            <UseCase
              emoji="🌍"
              title="El políglota"
              description="Querés leer en varios idiomas para practicar. LibriVox tiene audiolibros en inglés, francés, alemán, italiano y muchos más."
            />
            <UseCase
              emoji="📴"
              title="El desconectado"
              description="Viajás a lugares sin internet o simplemente querés desconectar. El contenido cacheado te permite seguir leyendo offline."
            />
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-20 lg:py-28 bg-[#faf8f5] border-y border-amber-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-950 mb-4">
              Lo que dicen nuestros lectores
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Testimonial
              quote="Antes usaba 4 apps distintas para audiolibros, ebooks y papers. Ahora todo está en LECTIApp y mi progreso nunca se pierde."
              author="María G."
              role="Docente universitaria"
            />
            <Testimonial
              quote="El sleep timer es genial. Me duermo escuchando audiolibros y a la mañana siguiente continúo exactamente donde me quedé."
              author="Carlos R."
              role="Ingeniero de software"
            />
            <Testimonial
              quote="Como estudiante de filosofía, tener Wikisource, Wikipedia y papers académicos en un solo lugar me ahorra horas de trabajo."
              author="Lucía M."
              role="Estudiante de grado"
            />
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-950 mb-4">
              Empezar es simple
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          </div>

          <div className="space-y-12">
            <Step
              number={1}
              title="Explorá o importá"
              description="Navegá el catálogo existente o importá contenido desde LibriVox, Internet Archive, Wikipedia y más. Solo buscá y agregá a tu biblioteca."
            />
            <Step
              number={2}
              title="Elegí tu formato"
              description="¿Querés escuchar o leer? Cada título te muestra las opciones disponibles. Muchos clásicos tienen tanto versión audio como texto."
            />
            <Step
              number={3}
              title="Continuá donde quedaste"
              description="Tu progreso se guarda automáticamente. Mañana, la semana que viene, o dentro de un mes: siempre vas a poder retomar donde lo dejaste."
            />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 lg:py-28 bg-amber-950 text-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-6 text-amber-400" />
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
            Tu biblioteca te está esperando
          </h2>
          <p className="text-lg text-amber-200 mb-10 max-w-2xl mx-auto font-serif">
            Miles de audiolibros, ebooks y artículos gratuitos. Sin suscripciones,
            sin anuncios, sin complicaciones. Empezá a leer hoy.
          </p>
          <Link
            to="/catalog"
            className="inline-flex items-center justify-center px-10 py-4 bg-amber-50 hover:bg-white text-amber-950 font-bold rounded-full transition-all shadow-lg hover:shadow-xl text-lg"
          >
            Explorar la biblioteca
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-amber-900 text-amber-200 border-t border-amber-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-800 flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-amber-200" />
              </div>
              <span className="text-lg font-serif font-bold text-amber-100">LECTIApp</span>
            </div>
            <p className="text-sm text-amber-300 text-center">
              Contenido de LibriVox, Internet Archive, OpenAlex, Wikipedia y Wikisource.
              <br />
              Todo el contenido es de dominio público o acceso abierto.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Componentes auxiliares

function ContentCard({
  icon,
  title,
  source,
  description,
  features,
}: {
  icon: React.ReactNode
  title: string
  source: string
  description: string
  features: string[]
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100 hover:shadow-lg hover:border-amber-200 transition-all">
      <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-bold text-amber-950 mb-1">{title}</h3>
      <p className="text-sm text-amber-600 mb-3 font-medium">{source}</p>
      <p className="text-amber-800 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-amber-700">
            <CheckCircle className="w-4 h-4 text-amber-500" />
            {feature}
          </li>
        ))}
      </ul>
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
    <div className="text-center">
      <div className="w-12 h-12 rounded-full bg-amber-800 flex items-center justify-center mx-auto mb-4 text-amber-200">
        {icon}
      </div>
      <h3 className="text-lg font-serif font-bold mb-2">{title}</h3>
      <p className="text-amber-200 text-sm">{description}</p>
    </div>
  )
}

function UseCase({
  emoji,
  title,
  description,
}: {
  emoji: string
  title: string
  description: string
}) {
  return (
    <div className="flex gap-4 p-6 bg-amber-50 rounded-2xl border border-amber-100">
      <div className="text-4xl">{emoji}</div>
      <div>
        <h3 className="text-lg font-serif font-bold text-amber-950 mb-2">{title}</h3>
        <p className="text-amber-800">{description}</p>
      </div>
    </div>
  )
}

function Testimonial({
  quote,
  author,
  role,
}: {
  quote: string
  author: string
  role: string
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100">
      <Quote className="w-8 h-8 text-amber-300 mb-4" />
      <p className="text-amber-800 font-serif italic mb-6">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center text-amber-700 font-bold">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-amber-950">{author}</p>
          <p className="text-sm text-amber-600">{role}</p>
        </div>
      </div>
    </div>
  )
}

function Step({
  number,
  title,
  description,
}: {
  number: number
  title: string
  description: string
}) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-900 text-amber-50 flex items-center justify-center text-xl font-bold font-serif">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-serif font-bold text-amber-950 mb-2">{title}</h3>
        <p className="text-amber-800">{description}</p>
      </div>
    </div>
  )
}
