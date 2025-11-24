"use client"

import { useState } from "react"
import { useScrollIntoView } from "../../hooks/useScrollIntoView"
import "./Stack.css"

type TechCategory = "todas" | "frontend" | "backend" | "database" | "devops" | "testing"

interface Technology {
  id: string
  name: string
  category: TechCategory
  logo: string
  expertise: string
}

const TECHNOLOGIES: Technology[] = [
  // Frontend
  { id: "1", name: "React", category: "frontend", logo: "⚛️", expertise: "4+ años" },
  { id: "2", name: "TypeScript", category: "frontend", logo: "📘", expertise: "3+ años" },
  { id: "3", name: "Tailwind CSS", category: "frontend", logo: "🎨", expertise: "2+ años" },
  { id: "4", name: "Next.js", category: "frontend", logo: "▲", expertise: "2+ años" },
  { id: "5", name: "Redux", category: "frontend", logo: "🔄", expertise: "2+ años" },
  { id: "6", name: "Vue.js", category: "frontend", logo: "💚", expertise: "1+ año" },

  // Backend
  { id: "7", name: "Node.js", category: "backend", logo: "🟢", expertise: "4+ años" },
  { id: "8", name: "Express", category: "backend", logo: "🚂", expertise: "3+ años" },
  { id: "9", name: "NestJS", category: "backend", logo: "🏗️", expertise: "2+ años" },
  { id: "10", name: "Python", category: "backend", logo: "🐍", expertise: "2+ años" },
  { id: "11", name: "GraphQL", category: "backend", logo: "◆", expertise: "1+ año" },
  { id: "12", name: "API REST", category: "backend", logo: "🔌", expertise: "3+ años" },

  // Database
  { id: "13", name: "PostgreSQL", category: "database", logo: "🐘", expertise: "3+ años" },
  { id: "14", name: "MongoDB", category: "database", logo: "🍃", expertise: "2+ años" },
  { id: "15", name: "Firebase", category: "database", logo: "🔥", expertise: "2+ años" },
  { id: "16", name: "MySQL", category: "database", logo: "🐬", expertise: "3+ años" },
  { id: "17", name: "Redis", category: "database", logo: "🔴", expertise: "1+ año" },
  { id: "18", name: "Prisma ORM", category: "database", logo: "⚙️", expertise: "1+ año" },

  // DevOps
  { id: "19", name: "Docker", category: "devops", logo: "🐳", expertise: "2+ años" },
  { id: "20", name: "Git", category: "devops", logo: "📦", expertise: "4+ años" },
  { id: "21", name: "CI/CD", category: "devops", logo: "⚡", expertise: "2+ años" },
  { id: "22", name: "Linux", category: "devops", logo: "🐧", expertise: "2+ años" },
  { id: "23", name: "AWS", category: "devops", logo: "☁️", expertise: "1+ año" },
  { id: "24", name: "Vercel", category: "devops", logo: "▲", expertise: "2+ años" },

  // Testing
  { id: "25", name: "Jest", category: "testing", logo: "✅", expertise: "2+ años" },
  { id: "26", name: "React Testing", category: "testing", logo: "🧪", expertise: "2+ años" },
  { id: "27", name: "Cypress", category: "testing", logo: "🌳", expertise: "1+ año" },
  { id: "28", name: "Vitest", category: "testing", logo: "⚡", expertise: "1+ año" },
  { id: "29", name: "Playwright", category: "testing", logo: "🎭", expertise: "1+ año" },
  { id: "30", name: "Unit Testing", category: "testing", logo: "📝", expertise: "3+ años" },
]

const CATEGORIES: { id: TechCategory; label: string }[] = [
  { id: "todas", label: "Todas" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "devops", label: "DevOps" },
  { id: "testing", label: "Testing" },
]

function TechCard({ tech }: { tech: Technology }) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="tech-card" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
      <div className="tech-logo">{tech.logo}</div>
      <div className="tech-name">{tech.name}</div>
      {showTooltip && <div className="tech-tooltip">{tech.expertise}</div>}
    </div>
  )
}

export default function Stack() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>("todas")
  const ref = useScrollIntoView()

  const filteredTechs =
    activeCategory === "todas" ? TECHNOLOGIES : TECHNOLOGIES.filter((tech) => tech.category === activeCategory)

  return (
    <section id="stack" className="stack-section">
      <div className="container-custom">
        {/* Section Title */}
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Arsenal</span> Tecnológico
          </h2>
        </div>

        {/* Category Filter */}
        <div ref={ref} className="category-filter">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              className={`category-pill ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="tech-grid">
          {filteredTechs.map((tech, index) => (
            <div key={tech.id} className="animate-fade-up" style={{ animationDelay: `${index * 50}ms` }}>
              <TechCard tech={tech} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
