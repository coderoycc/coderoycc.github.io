import type React from "react"
import { useScrollIntoView } from "../../hooks/useScrollIntoView"
import { Palette, Zap, Accessibility, Smartphone, TestTube, Wrench } from "lucide-react"
import "./Capabilities.css"

interface Capability {
  icon: React.ReactNode
  title: string
  description: string
  color: string
  accentColor: string
}

const CAPABILITIES: Capability[] = [
  {
    icon: <Palette size={48} />,
    title: "Design Implementation",
    description: "Transformo diseños en interfaces pixel-perfect con atención al detalle",
    color: "from-pink-500 to-rose-500",
    accentColor: "border-pink-500",
  },
  {
    icon: <Zap size={48} />,
    title: "Performance Engineering",
    description: "Optimizo cada milisegundo para experiencias fluidas y responsivas",
    color: "from-yellow-500 to-amber-500",
    accentColor: "border-yellow-500",
  },
  {
    icon: <Accessibility size={48} />,
    title: "Accessibility Champion",
    description: "Creo aplicaciones accesibles para todos, cumpliendo WCAG standards",
    color: "from-blue-500 to-cyan-500",
    accentColor: "border-blue-500",
  },
  {
    icon: <Smartphone size={48} />,
    title: "Responsive Master",
    description: "Diseño mobile-first que se adapta perfectamente a cualquier pantalla",
    color: "from-green-500 to-emerald-500",
    accentColor: "border-green-500",
  },
  {
    icon: <TestTube size={48} />,
    title: "Testing Culture",
    description: "Escribo tests robustos para garantizar código confiable y mantenible",
    color: "from-purple-500 to-violet-500",
    accentColor: "border-purple-500",
  },
  {
    icon: <Wrench size={48} />,
    title: "Developer Experience",
    description: "Código limpio y documentado que otros desarrolladores disfrutan mantener",
    color: "from-orange-500 to-red-500",
    accentColor: "border-orange-500",
  },
]

export default function Capabilities() {
  const ref = useScrollIntoView()

  return (
    <section className="capabilities-section">
      <div className="container-custom">
        {/* Section Title */}
        <div className="section-header">
          <h2 className="section-title">
            Capacidades <span className="gradient-text">Frontend</span>
          </h2>
        </div>

        {/* Capabilities Grid */}
        <div ref={ref} className="capabilities-grid">
          {CAPABILITIES.map((cap, index) => (
            <div
              key={index}
              className={`capability-card ${cap.accentColor} animate-fade-up`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="capability-icon">{cap.icon}</div>
              <h3 className="capability-title">{cap.title}</h3>
              <p className="capability-description">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
