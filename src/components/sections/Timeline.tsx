interface Phase {
  number: number
  title: string
  duration: string
  activities: string[]
  icon: string
}

const phases: Phase[] = [
  {
    number: 1,
    title: "Discovery & Research",
    duration: "1-2 semanas",
    activities: ["Análisis de requisitos", "Investigación de usuarios", "Sketches iniciales"],
    icon: "🔍",
  },
  {
    number: 2,
    title: "Planning & Architecture",
    duration: "1 semana",
    activities: ["Arquitectura del sistema", "Base de datos", "API design"],
    icon: "📐",
  },
  {
    number: 3,
    title: "Design System",
    duration: "1 semana",
    activities: ["Componentes reutilizables", "Design tokens", "Branding"],
    icon: "🎨",
  },
  {
    number: 4,
    title: "Development",
    duration: "3-4 semanas",
    activities: ["Frontend development", "Backend API", "Integración"],
    icon: "💻",
  },
  {
    number: 5,
    title: "Testing & QA",
    duration: "1-2 semanas",
    activities: ["Unit tests", "Integration tests", "Bug fixing"],
    icon: "🧪",
  },
  {
    number: 6,
    title: "Deploy & Monitor",
    duration: "Continuo",
    activities: ["Deployment", "Monitoring", "Optimization"],
    icon: "🚀",
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-gradient">Proceso de Trabajo</h2>
        <p className="text-slate-400 mb-12">Cómo transformo ideas en realidad</p>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-cyan-400"></div>

            {/* Phases Grid */}
            <div className="grid grid-cols-6 gap-4">
              {phases.map((phase) => (
                <div key={phase.number} className="flex flex-col items-center">
                  {/* Circle Node */}
                  <div className="relative z-10 mb-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center font-bold text-2xl text-white shadow-lg animate-pulse">
                      {phase.number}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="glass-morphism rounded-lg p-4 text-center flex-1 min-h-80">
                    <div className="text-3xl mb-2">{phase.icon}</div>
                    <h4 className="font-bold text-white mb-1">{phase.title}</h4>
                    <p className="text-xs text-cyan-400 mb-3">{phase.duration}</p>
                    <ul className="text-sm text-slate-400 space-y-1">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx}>• {activity}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-6">
          {phases.map((phase) => (
            <div key={phase.number} className="flex gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center font-bold text-xl text-white shrink-0">
                  {phase.number}
                </div>
                {phase.number < phases.length && (
                  <div className="absolute left-8 top-16 w-1 h-8 bg-gradient-to-b from-purple-600 to-transparent"></div>
                )}
              </div>

              <div className="glass-morphism rounded-lg p-4 flex-1">
                <h4 className="font-bold text-white mb-1">{phase.title}</h4>
                <p className="text-sm text-cyan-400 mb-2">{phase.duration}</p>
                <ul className="text-sm text-slate-400 space-y-1">
                  {phase.activities.map((activity, idx) => (
                    <li key={idx}>• {activity}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
