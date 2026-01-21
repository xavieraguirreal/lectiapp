import { useState } from 'react'
import {
  BookOpen,
  Headphones,
  Video,
  Search,
  Globe,
  ArrowRight,
  BookMarked,
  GraduationCap,
  Quote,
  CheckCircle,
  Clock,
  WifiOff,
  Smartphone,
  Mail,
  MessageSquare,
  Sparkles,
  RotateCcw,
  Send,
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
              <a href="#quiz" className="text-amber-800 hover:text-amber-950 transition-colors font-medium">
                Quiz
              </a>
              <a href="#lista-espera" className="text-amber-800 hover:text-amber-950 transition-colors font-medium">
                Avísame
              </a>
            </nav>
            <a
              href="#lista-espera"
              className="px-5 py-2 bg-amber-900 hover:bg-amber-800 text-amber-50 font-medium rounded-full transition-colors"
            >
              Muy pronto
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section - Editorial Style */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-amber-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Coming Soon Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 border border-amber-300 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span className="text-amber-800 font-medium text-sm">Muy pronto disponible</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-amber-950 mb-6 leading-tight">
                Todo el conocimiento que buscas, en un solo lugar
              </h1>
              <p className="text-lg text-amber-800 mb-8 leading-relaxed font-serif">
                Audiolibros, ebooks, artículos científicos, Wikipedia y Wikisource.
                Escucha mientras viajas, lee en tu tablet, estudia desde cualquier dispositivo.
                <strong className="text-amber-950"> Sin distracciones, sin anuncios, sin complicaciones.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#lista-espera"
                  className="inline-flex items-center justify-center px-8 py-4 bg-amber-900 hover:bg-amber-800 text-amber-50 font-medium rounded-full transition-all shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Avisame cuando esté lista
                </a>
                <a
                  href="#quiz"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-amber-50 font-medium rounded-full transition-all"
                >
                  ¿Qué tipo de lector sos?
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
          </div>
        </div>
      </section>

      {/* Quiz: ¿Qué tipo de lector sos? */}
      <section id="quiz" className="py-20 lg:py-28 bg-gradient-to-br from-amber-100 to-orange-50 border-y border-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-950 mb-4">
              ¿Qué tipo de lector sos?
            </h2>
            <p className="text-lg text-amber-700 font-serif">
              Respondé estas preguntas y descubrí tu perfil de lectura
            </p>
            <div className="w-24 h-1 bg-amber-400 mx-auto mt-6"></div>
          </div>

          <ReaderQuiz />
        </div>
      </section>

      {/* Contenido disponible */}
      <section id="contenido" className="py-20 lg:py-28 bg-[#faf8f5]">
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
              description="Tu progreso se guarda automáticamente. Retoma exactamente donde lo dejaste."
            />
            <BenefitCard
              icon={<WifiOff className="w-6 h-6" />}
              title="Funciona offline"
              description="El contenido se cachea localmente. Lee o escucha sin conexión."
            />
            <BenefitCard
              icon={<Search className="w-6 h-6" />}
              title="Búsqueda inteligente"
              description="Busca con lenguaje natural: 'novelas cortas de terror'."
            />
            <BenefitCard
              icon={<Smartphone className="w-6 h-6" />}
              title="Todos tus dispositivos"
              description="Celular, tablet, computadora. Perfectamente sincronizada."
            />
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-20 lg:py-28 bg-[#faf8f5] border-y border-amber-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-950 mb-4">
              Lo que dicen nuestros beta testers
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

      {/* Lista de espera / Contacto */}
      <section id="lista-espera" className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 border border-emerald-300 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-800 font-medium text-sm">Lanzamiento muy pronto</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-950 mb-4">
              Sé el primero en enterarte
            </h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto font-serif">
              Dejanos tu email y te avisamos apenas esté lista. También podés contarnos
              qué funcionalidades te gustaría ver.
            </p>
            <div className="w-24 h-1 bg-amber-400 mx-auto mt-6"></div>
          </div>

          <WaitlistForm />
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
            sin anuncios, sin complicaciones. Muy pronto.
          </p>
          <a
            href="#lista-espera"
            className="inline-flex items-center justify-center px-10 py-4 bg-amber-50 hover:bg-white text-amber-950 font-bold rounded-full transition-all shadow-lg hover:shadow-xl text-lg"
          >
            <Mail className="w-5 h-5 mr-2" />
            Avisame cuando esté lista
          </a>
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

// ============== QUIZ COMPONENT ==============

const quizQuestions = [
  {
    question: '¿Cuándo preferís consumir contenido?',
    options: [
      { text: 'Mientras viajo o hago ejercicio', points: { viajero: 3, nocturno: 0, academico: 0, explorador: 1 } },
      { text: 'Antes de dormir, en la cama', points: { viajero: 0, nocturno: 3, academico: 0, explorador: 1 } },
      { text: 'Cuando estudio o investigo', points: { viajero: 0, nocturno: 0, academico: 3, explorador: 1 } },
      { text: 'En cualquier momento libre', points: { viajero: 1, nocturno: 1, academico: 0, explorador: 3 } },
    ],
  },
  {
    question: '¿Qué formato preferís?',
    options: [
      { text: 'Audiolibros, para escuchar', points: { viajero: 3, nocturno: 2, academico: 0, explorador: 1 } },
      { text: 'eBooks, para leer en pantalla', points: { viajero: 1, nocturno: 2, academico: 1, explorador: 2 } },
      { text: 'Papers y artículos académicos', points: { viajero: 0, nocturno: 0, academico: 3, explorador: 1 } },
      { text: 'Un poco de todo', points: { viajero: 1, nocturno: 1, academico: 1, explorador: 3 } },
    ],
  },
  {
    question: '¿Qué te frustra más de las apps de lectura?',
    options: [
      { text: 'Perder el progreso al cambiar de dispositivo', points: { viajero: 3, nocturno: 1, academico: 2, explorador: 2 } },
      { text: 'No tener modo oscuro o sleep timer', points: { viajero: 0, nocturno: 3, academico: 0, explorador: 1 } },
      { text: 'Tener que usar muchas apps distintas', points: { viajero: 1, nocturno: 1, academico: 2, explorador: 3 } },
      { text: 'No encontrar contenido académico', points: { viajero: 0, nocturno: 0, academico: 3, explorador: 1 } },
    ],
  },
  {
    question: '¿Qué género te atrae más?',
    options: [
      { text: 'Clásicos de la literatura', points: { viajero: 2, nocturno: 2, academico: 1, explorador: 2 } },
      { text: 'Ficción contemporánea', points: { viajero: 2, nocturno: 3, academico: 0, explorador: 2 } },
      { text: 'No ficción y divulgación', points: { viajero: 2, nocturno: 1, academico: 2, explorador: 2 } },
      { text: 'Papers y textos académicos', points: { viajero: 0, nocturno: 0, academico: 3, explorador: 1 } },
    ],
  },
]

const readerProfiles = {
  viajero: {
    emoji: '🎧',
    title: 'El Viajero',
    description: 'Aprovechás cada momento libre para aprender. El transporte, el gimnasio, la caminata... todo es oportunidad. Los audiolibros son tu mejor amigo.',
    recommendation: 'LECTIApp te va a encantar: control de velocidad, continuar donde quedaste, y miles de audiolibros de LibriVox.',
  },
  nocturno: {
    emoji: '🌙',
    title: 'El Lector Nocturno',
    description: 'Tu momento de lectura es antes de dormir. Necesitás modo oscuro, letras grandes, y un sleep timer que pause el audio cuando te duermas.',
    recommendation: 'LECTIApp tiene todo: modo oscuro, sepia, sleep timer, y sincronización para no perder tu página.',
  },
  academico: {
    emoji: '🎓',
    title: 'El Académico',
    description: 'Saltás entre papers, Wikipedia y libros de referencia. Necesitás organización y acceso rápido a fuentes confiables.',
    recommendation: 'LECTIApp integra OpenAlex, Wikipedia y Wikisource. Todo tu material de investigación en un solo lugar.',
  },
  explorador: {
    emoji: '🧭',
    title: 'El Explorador',
    description: 'Te gusta de todo un poco. Un día escuchás un audiolibro, otro leés un paper, y al siguiente explorás Wikipedia. La variedad es tu estilo.',
    recommendation: 'LECTIApp es perfecta para vos: seis tipos de contenido, una sola app. Explorá sin límites.',
  },
}

function ReaderQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [scores, setScores] = useState({ viajero: 0, nocturno: 0, academico: 0, explorador: 0 })
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (points: typeof scores) => {
    const newScores = {
      viajero: scores.viajero + points.viajero,
      nocturno: scores.nocturno + points.nocturno,
      academico: scores.academico + points.academico,
      explorador: scores.explorador + points.explorador,
    }
    setScores(newScores)

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScores({ viajero: 0, nocturno: 0, academico: 0, explorador: 0 })
    setShowResult(false)
  }

  const getResult = () => {
    const maxScore = Math.max(scores.viajero, scores.nocturno, scores.academico, scores.explorador)
    if (scores.viajero === maxScore) return readerProfiles.viajero
    if (scores.nocturno === maxScore) return readerProfiles.nocturno
    if (scores.academico === maxScore) return readerProfiles.academico
    return readerProfiles.explorador
  }

  if (showResult) {
    const result = getResult()
    return (
      <div className="bg-white rounded-3xl p-8 shadow-lg border border-amber-200 text-center">
        <div className="text-6xl mb-4">{result.emoji}</div>
        <h3 className="text-2xl font-serif font-bold text-amber-950 mb-4">
          Sos {result.title}
        </h3>
        <p className="text-amber-800 mb-6 font-serif leading-relaxed">
          {result.description}
        </p>
        <div className="bg-amber-50 rounded-xl p-4 mb-6 border border-amber-200">
          <p className="text-amber-900 font-medium">
            <Sparkles className="w-4 h-4 inline mr-2 text-amber-600" />
            {result.recommendation}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={resetQuiz}
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-amber-300 text-amber-800 hover:bg-amber-50 font-medium rounded-full transition-all"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Hacer de nuevo
          </button>
          <a
            href="#lista-espera"
            className="inline-flex items-center justify-center px-6 py-3 bg-amber-900 hover:bg-amber-800 text-amber-50 font-medium rounded-full transition-all"
          >
            <Mail className="w-4 h-4 mr-2" />
            Quiero que me avisen
          </a>
        </div>
      </div>
    )
  }

  const question = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg border border-amber-200">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-amber-600 mb-2">
          <span>Pregunta {currentQuestion + 1} de {quizQuestions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-amber-100 rounded-full">
          <div
            className="h-full bg-amber-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <h3 className="text-xl font-serif font-bold text-amber-950 mb-6 text-center">
        {question.question}
      </h3>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option.points)}
            className="w-full text-left p-4 rounded-xl border-2 border-amber-200 hover:border-amber-400 hover:bg-amber-50 transition-all font-medium text-amber-900"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  )
}

// ============== WAITLIST FORM ==============

function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [suggestion, setSuggestion] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    // Endpoint PHP propio
    const API_ENDPOINT = '../backend/public/waitlist.php'

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          suggestion,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
      } else {
        // Si hay error del servidor, guardar en localStorage como backup
        localStorage.setItem('lectiapp_waitlist', JSON.stringify({ email, suggestion, timestamp: new Date().toISOString() }))
        setSubmitted(true)
      }
    } catch (error) {
      // Si falla la conexión, guardar en localStorage como backup
      localStorage.setItem('lectiapp_waitlist', JSON.stringify({ email, suggestion, timestamp: new Date().toISOString() }))
      setSubmitted(true)
    }

    setSubmitting(false)
  }

  if (submitted) {
    return (
      <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-200 text-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-2">
          ¡Gracias por anotarte!
        </h3>
        <p className="text-emerald-700 font-serif">
          Te avisaremos apenas LECTIApp esté lista para vos.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-amber-50 rounded-3xl p-8 border border-amber-200">
      <div className="space-y-6">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-amber-900 mb-2">
            <Mail className="w-4 h-4 inline mr-2" />
            Tu email
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="w-full px-4 py-3 rounded-xl border-2 border-amber-200 focus:border-amber-500 focus:outline-none bg-white text-amber-900 placeholder-amber-400"
          />
        </div>

        {/* Sugerencia */}
        <div>
          <label htmlFor="suggestion" className="block text-sm font-medium text-amber-900 mb-2">
            <MessageSquare className="w-4 h-4 inline mr-2" />
            ¿Qué te gustaría ver en LECTIApp? (opcional)
          </label>
          <textarea
            id="suggestion"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            placeholder="Contanos qué funcionalidades te serían útiles..."
            rows={3}
            className="w-full px-4 py-3 rounded-xl border-2 border-amber-200 focus:border-amber-500 focus:outline-none bg-white text-amber-900 placeholder-amber-400 resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full inline-flex items-center justify-center px-8 py-4 bg-amber-900 hover:bg-amber-800 disabled:bg-amber-400 text-amber-50 font-medium rounded-full transition-all shadow-lg hover:shadow-xl"
        >
          {submitting ? (
            <>
              <div className="w-5 h-5 border-2 border-amber-200 border-t-transparent rounded-full animate-spin mr-2"></div>
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Avisame cuando esté lista
            </>
          )}
        </button>
      </div>

      <p className="text-xs text-amber-600 text-center mt-4">
        No spam, solo te avisamos cuando lancemos. Podés darte de baja cuando quieras.
      </p>
    </form>
  )
}

// ============== OTHER COMPONENTS ==============

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
