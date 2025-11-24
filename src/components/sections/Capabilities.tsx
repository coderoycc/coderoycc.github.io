interface Capability {
  icon: string
  title: string
  description: string
  color: string
}

const capabilities: Capability[] = [
  {
    icon: "🎨",
    title: "Design Implementation",
    description: "Convierto diseños en interfaces interactivas",
    color: "from-pink-600 to-rose-600",
  },
  {
    icon: "⚡",
    title: "Performance Engineering",
    description: "Optimización y velocidad en cada línea",
    color: "from-yellow-600 to-amber-600",
  },
  {
    icon: "♿",
    title: "Accessibility Champion",
    description: "Web accesible para todos",
    color: "from-blue-600 to-cyan-600",
  },
  {
    icon: "📱",
    title: "Responsive Master",
    description: "Diseño que se adapta a cualquier pantalla",
    color: "from-green-600 to-emerald-600",
  },
  {
    icon: "🧪",
    title: "Testing Culture",
    description: "Código probado y confiable",
    color: "from-purple-600 to-violet-600",
  },
  {
    icon: "🔧",
    title: "Developer Experience",
    description: "Herramientas que hacen la vida fácil",
    color: "from-orange-600 to-red-600",
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-gradient">Capacidades Frontend</h2>
        <p className="text-slate-400 mb-12">Lo que me define como desarrollador</p>

        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="glass-morphism rounded-xl p-8 smooth-transition hover:scale-105 hover:bg-white/15 group border border-slate-700"
            >
              <div className="text-5xl mb-4 group-hover:scale-125 smooth-transition">{cap.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{cap.title}</h3>
              <p className="text-slate-400">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
