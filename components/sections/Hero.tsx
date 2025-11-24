"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ArrowRight, Download, ChevronDown } from "lucide-react"
import "./Hero.css"

const ROTATING_TEXTS = [
  "Transformo café en aplicaciones escalables",
  "Obsesionado con los 60fps y la accesibilidad",
  "Del wireframe al deployment en sprints ágiles",
  "Código limpio no es negociable, es el estándar",
]

export default function Hero() {
  const [currentText, setCurrentText] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % ROTATING_TEXTS.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  const handleScrollClick = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="hero-section" onMouseMove={handleMouseMove}>
      <div className="container-custom h-full flex items-center">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content animate-slide-in-left">
            {/* Main Title */}
            <h1 className="hero-title">
              Desarrollador <br />
              <span className="gradient-text">Full Stack</span>
              <br />& Creador
            </h1>

            {/* Rotating Text */}
            <div className="rotating-text-container">
              <div key={currentText} className="rotating-text animate-flip-text">
                {ROTATING_TEXTS[currentText]}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="cta-buttons">
              <button className="btn-primary">
                Explorar Proyectos
                <ArrowRight size={20} className="ml-2" />
              </button>
              <button className="btn-secondary">
                Descargar CV
                <Download size={20} className="ml-2" />
              </button>
            </div>

            {/* Availability Badge */}
            <div className="availability-badge">
              <span className="pulse-dot"></span>
              Disponible para proyectos
            </div>
          </div>

          {/* Right Visual - 3D Gradient */}
          <div className="hero-visual animate-slide-in-right">
            <div
              className="gradient-blob"
              style={
                {
                  "--mouse-x": `${mousePos.x * 20}px`,
                  "--mouse-y": `${mousePos.y * 20}px`,
                } as React.CSSProperties
              }
            >
              <div className="blob-inner"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button className="scroll-indicator" onClick={handleScrollClick} aria-label="Scroll to next section">
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  )
}
