"use client"

import { useEffect, useState } from "react"

interface Stat {
  value: number
  label: string
  icon: string
}

export default function About() {
  const [counts, setCounts] = useState<Record<string, number>>({})

  const stats: Stat[] = [
    { value: 5, label: "Años de Experiencia", icon: "🚀" },
    { value: 50, label: "Proyectos Completados", icon: "✅" },
    { value: 999, label: "Tazas de Café", icon: "☕" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          stats.forEach((stat) => {
            const interval = setInterval(() => {
              setCounts((prev) => ({
                ...prev,
                [stat.label]: Math.min((prev[stat.label] || 0) + 1, stat.value),
              }))
            }, 50)
            setTimeout(() => clearInterval(interval), stat.value * 50)
          })
          observer.disconnect()
        }
      })
    })

    const element = document.querySelector("#about")
    if (element) observer.observe(element)
  }, [])

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-gradient">Sobre Mí</h2>
        <p className="text-slate-400 mb-12 max-w-2xl">
          Desarrollador apasionado con experiencia en arquitectura de sistemas escalables
        </p>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Main Card */}
          <div className="md:col-span-1 glass-morphism rounded-2xl p-8 smooth-transition hover:bg-white/10">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Especializado en <span className="text-cyan-400">soluciones fullstack</span>
            </h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Combino la creatividad del diseño frontend con la robustez del backend. Mis proyectos son escalables,
              accesibles y performantes.
            </p>
            <p className="text-slate-400">
              Tecnologías principales: React, Node.js, TypeScript, Tailwind CSS y bases de datos relacionales.
            </p>
          </div>

          {/* Image Card */}
          <div className="md:col-span-1">
            <div className="relative rounded-2xl overflow-hidden h-80 bg-gradient-to-br from-purple-600/50 to-cyan-400/50 glass-morphism animate-glow">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">👨‍💻</div>
                  <p className="text-slate-300">Foto profesional</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-morphism rounded-xl p-6 smooth-transition hover:-translate-y-1">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <p className="text-3xl font-bold text-cyan-400 mb-2">
                {counts[stat.label] || 0}
                {stat.label.includes("Café") ? "+" : ""}
              </p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
