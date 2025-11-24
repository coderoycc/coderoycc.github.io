"use client"

import type React from "react"

import { useState } from "react"
import { useScrollIntoView } from "../../hooks/useScrollIntoView"
import { Rocket, Coffee, Code } from "lucide-react"
import "./About.css"

interface StatCard {
  icon: React.ReactNode
  number: number
  label: string
  suffix?: string
}

const STATS: StatCard[] = [
  { icon: <Rocket size={32} />, number: 5, label: "Años de Experiencia", suffix: "+" },
  { icon: <Code size={32} />, number: 25, label: "Proyectos Completados", suffix: "+" },
  { icon: <Coffee size={32} />, number: 1000, label: "Tazas de Café", suffix: "+" },
]

function CounterStat({ icon, number, label, suffix = "" }: StatCard) {
  const [count, setCount] = useState(0)
  const ref = useScrollIntoView(() => {
    animateCount()
  })

  const animateCount = () => {
    const increment = number / 30
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= number) {
        setCount(number)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 30)
  }

  return (
    <div ref={ref} className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div className="stat-number">
        {count}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function About() {
  const ref = useScrollIntoView()

  return (
    <section id="about" className="about-section">
      <div className="container-custom">
        {/* Section Title */}
        <div className="section-header">
          <h2 className="section-title">
            Sobre <span className="gradient-text">Mí</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div ref={ref} className="about-grid">
          {/* Main Card - Left */}
          <div className="about-card main-card animate-fade-up">
            <div className="card-content">
              <h3 className="card-title">Quién Soy</h3>
              <p className="card-text">
                Soy un <strong>desarrollador fullstack</strong> apasionado por crear{" "}
                <strong>aplicaciones escalables</strong> y accesibles. Combino <strong>design thinking</strong> con
                código limpio para transformar ideas en productos reales.
              </p>
              <p className="card-text">
                Especializado en <strong>React</strong>, <strong>Node.js</strong> y{" "}
                <strong>arquitectura de sistemas</strong>. Mi obsesión: lograr <strong>60fps</strong> en cada
                interacción y garantizar que el código sea mantenible.
              </p>
              <p className="card-text">
                Creo que <strong>código limpio no es negociable</strong>, es el estándar. Cada sprint busco mejorar,
                aprender y entregar valor real.
              </p>
            </div>
          </div>

          {/* Photo Card - Right */}
          <div className="about-card photo-card animate-fade-up">
            <div className="photo-container">
              <img src="/professional-developer-portrait.png" alt="Developer portrait" className="profile-photo" />
              <div className="photo-gradient"></div>
            </div>
          </div>

          {/* Stats Cards - Bottom Row */}
          {STATS.map((stat, index) => (
            <CounterStat key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
