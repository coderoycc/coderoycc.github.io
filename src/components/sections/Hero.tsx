"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Download, ChevronDown } from "lucide-react"

const rotatingTexts = [
  "Transformo café en aplicaciones escalables",
  "Obsesionado con los 60fps y la accesibilidad",
  "Del wireframe al deployment en sprints ágiles",
  "Código limpio no es negociable, es el estándar",
]

export default function Hero() {
  const [activeText, setActiveText] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveText((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              <span className="text-gradient">Desarrollador</span> <span className="text-white">Fullstack</span>
            </h1>

            {/* Rotating Text */}
            <div className="h-20 mb-8">
              <p className="text-xl md:text-2xl text-cyan-400 font-semibold animate-in fade-in slide-in-from-bottom-4 min-h-20">
                {rotatingTexts[activeText]}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToProjects}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-lg font-bold smooth-transition hover:scale-105 flex items-center gap-2"
              >
                Explorar Proyectos
                <ArrowRight size={20} className="group-hover:translate-x-1 smooth-transition" />
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 rounded-lg font-bold smooth-transition hover:scale-105 flex items-center gap-2">
                <Download size={20} />
                Descargar CV
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-bold text-gradient">5+</p>
                <p className="text-slate-400">Años de Experiencia</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gradient">50+</p>
                <p className="text-slate-400">Proyectos</p>
              </div>
            </div>
          </div>

          {/* Right Column - 3D Placeholder */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-purple-600/30 to-cyan-400/30 rounded-3xl glass-morphism animate-float flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">💻</div>
                <p className="text-slate-300">Elemento Interactivo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={scrollToProjects}
        >
          <ChevronDown size={32} className="text-cyan-400" />
        </div>
      </div>
    </section>
  )
}
