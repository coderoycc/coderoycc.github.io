import { useScrollIntoView } from "../../hooks/useScrollIntoView"
import "./Timeline.css"

interface TimelinePhase {
  number: number
  icon: string
  title: string
  duration: string
  activities: string[]
  color: string
}

const TIMELINE_PHASES: TimelinePhase[] = [
  {
    number: 1,
    icon: "🔍",
    title: "Discovery & Research",
    duration: "1-2 semanas",
    activities: ["Análisis de requerimientos", "Investigación de mercado", "Definición de objetivos"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: 2,
    icon: "📐",
    title: "Planning & Architecture",
    duration: "1 semana",
    activities: ["Arquitectura técnica", "Wireframes", "Definición de APIs"],
    color: "from-purple-500 to-pink-500",
  },
  {
    number: 3,
    icon: "🎨",
    title: "Design System",
    duration: "1-2 semanas",
    activities: ["Diseño UI/UX", "Component library", "Brand guidelines"],
    color: "from-pink-500 to-rose-500",
  },
  {
    number: 4,
    icon: "💻",
    title: "Development",
    duration: "3-4 semanas",
    activities: ["Frontend development", "Backend implementation", "Integration"],
    color: "from-green-500 to-emerald-500",
  },
  {
    number: 5,
    icon: "🧪",
    title: "Testing & QA",
    duration: "1-2 semanas",
    activities: ["Unit testing", "Integration testing", "Bug fixes"],
    color: "from-orange-500 to-amber-500",
  },
  {
    number: 6,
    icon: "🚀",
    title: "Deploy & Monitor",
    duration: "Ongoing",
    activities: ["Production deployment", "Monitoring setup", "Performance tuning"],
    color: "from-red-500 to-orange-500",
  },
]

export default function Timeline() {
  const ref = useScrollIntoView()

  return (
    <section className="timeline-section">
      <div className="container-custom">
        {/* Section Title */}
        <div className="section-header">
          <h2 className="section-title">
            Proceso de <span className="gradient-text">Trabajo</span>
          </h2>
        </div>

        {/* Timeline */}
        <div ref={ref} className="timeline-container">
          <div className="timeline-line"></div>

          {TIMELINE_PHASES.map((phase, index) => (
            <div key={phase.number} className={`timeline-item timeline-item-${index % 2}`}>
              <div className="timeline-node">
                <div className="node-icon">{phase.icon}</div>
              </div>

              <div className="timeline-content">
                <div className="content-header">
                  <h3 className="phase-title">{phase.title}</h3>
                  <span className="phase-duration">{phase.duration}</span>
                </div>

                <ul className="phase-activities">
                  {phase.activities.map((activity, i) => (
                    <li key={i}>{activity}</li>
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
