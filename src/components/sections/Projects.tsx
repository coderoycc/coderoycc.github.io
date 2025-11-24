interface Project {
  id: number
  title: string
  description: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Proyecto Destacado 1",
    description: "Aplicación web escalable con React y Node.js",
  },
  {
    id: 2,
    title: "Proyecto Destacado 2",
    description: "Dashboard interactivo con visualización de datos",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-gradient">Proyectos que Cuentan Historias</h2>
        <p className="text-slate-400 mb-12">Cada línea de código tiene un propósito</p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group glass-morphism rounded-2xl overflow-hidden smooth-transition hover:bg-white/15 cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="h-60 bg-gradient-to-br from-purple-600/30 to-cyan-400/30 flex items-center justify-center overflow-hidden group-hover:scale-105 smooth-transition">
                <div className="text-center">
                  <div className="text-6xl mb-2">📱</div>
                  <p className="text-slate-400">Proyecto Preview</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-slate-400 mb-6">{project.description}</p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-800 text-cyan-400 text-sm rounded-full">React</span>
                  <span className="px-3 py-1 bg-slate-800 text-cyan-400 text-sm rounded-full">Node.js</span>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-cyan-400 text-slate-900 font-bold rounded-lg hover:bg-cyan-300 smooth-transition">
                    Ver Proyecto
                  </button>
                  <button className="flex-1 px-4 py-2 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 smooth-transition">
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
