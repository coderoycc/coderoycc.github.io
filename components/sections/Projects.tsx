import { useSelector } from "react-redux"
import { useScrollIntoView } from "../../hooks/useScrollIntoView"
import { ExternalLink, Github } from "lucide-react"
import type { RootState } from "../../store/store"
import "./Projects.css"

function ProjectCard({ title, description, technologies, link, github }: any) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src="/placeholder.svg?key=3j4ksl" alt={title} className="project-screenshot" />
        <div className="image-overlay"></div>
        <div className="tech-badges">
          {technologies.slice(0, 3).map((tech: string, index: number) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-actions">
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn-project-primary">
              Ver Proyecto
              <ExternalLink size={18} />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="btn-project-secondary">
              Ver Código
              <Github size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function ProjectPlaceholder({ number }: { number: number }) {
  return (
    <div className="project-placeholder">
      <div className="placeholder-skeleton"></div>
      <div className="placeholder-content">
        <div className="placeholder-badge">Próximamente</div>
        <p className="placeholder-text">Proyecto destacado {number}</p>
      </div>
    </div>
  )
}

export default function Projects() {
  const projects = useSelector((state: RootState) => state.projects.items)
  const ref = useScrollIntoView()

  return (
    <section id="projects" className="projects-section">
      <div className="container-custom">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Proyectos que <span className="gradient-text">Cuentan Historias</span>
          </h2>
          <p className="section-subtitle">Cada línea de código tiene un propósito</p>
        </div>

        {/* Projects Grid */}
        <div ref={ref} className="projects-grid">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <div key={project.id} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ProjectCard {...project} />
              </div>
            ))
          ) : (
            <>
              <ProjectPlaceholder number={1} />
              <ProjectPlaceholder number={2} />
            </>
          )}
        </div>
      </div>
    </section>
  )
}
