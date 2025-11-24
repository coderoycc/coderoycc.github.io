"use client"

import { useState } from "react"

interface Tech {
  name: string
  icon: string
  category: "frontend" | "backend" | "database" | "devops" | "testing"
  years: number
}

const technologies: Tech[] = [
  { name: "React", icon: "⚛️", category: "frontend", years: 4 },
  { name: "TypeScript", icon: "📘", category: "frontend", years: 3 },
  { name: "Tailwind", icon: "🎨", category: "frontend", years: 3 },
  { name: "Node.js", icon: "🟢", category: "backend", years: 5 },
  { name: "Express", icon: "⚡", category: "backend", years: 4 },
  { name: "PostgreSQL", icon: "🐘", category: "database", years: 4 },
  { name: "MongoDB", icon: "🍃", category: "database", years: 3 },
  { name: "Docker", icon: "🐳", category: "devops", years: 2 },
  { name: "CI/CD", icon: "🔄", category: "devops", years: 2 },
  { name: "Jest", icon: "🧪", category: "testing", years: 3 },
  { name: "Vitest", icon: "⚙️", category: "testing", years: 1 },
  { name: "Vite", icon: "⚡", category: "frontend", years: 2 },
]

const categories = [
  { id: "all", label: "Todas" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "devops", label: "DevOps" },
  { id: "testing", label: "Testing" },
]

export default function Stack() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filtered = activeCategory === "all" ? technologies : technologies.filter((t) => t.category === activeCategory)

  return (
    <section id="stack" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-gradient">Arsenal Tecnológico</h2>
        <p className="text-slate-400 mb-12">Herramientas y tecnologías que domino</p>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-semibold smooth-transition ${
                activeCategory === cat.id
                  ? "bg-cyan-400 text-slate-900"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of Technologies */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filtered.map((tech) => (
            <div
              key={tech.name}
              className="group glass-morphism rounded-lg p-4 flex flex-col items-center justify-center aspect-square smooth-transition hover:scale-110 hover:bg-white/20 cursor-pointer relative"
              title={`${tech.years} años de experiencia`}
            >
              <div className="text-4xl mb-2 group-hover:scale-125 smooth-transition">{tech.icon}</div>
              <p className="text-xs font-bold text-center text-slate-300 group-hover:text-cyan-400">{tech.name}</p>
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-cyan-400 px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 smooth-transition pointer-events-none">
                {tech.years}y exp
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
