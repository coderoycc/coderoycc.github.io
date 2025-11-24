"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react"
import { useScrollIntoView } from "../../hooks/useScrollIntoView"
import "./Contact.css"

interface FormData {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const ref = useScrollIntoView()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({ name: "", email: "", message: "" })

      setTimeout(() => setIsSuccess(false), 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container-custom">
        {/* Section Header */}
        <div ref={ref} className="section-header">
          <h2 className="contact-title">
            ¿Listo para construir algo <span className="gradient-text">increíble?</span>
          </h2>
          <p className="contact-subtitle">Tengo passion por proyectos desafiantes donde pueda crear impacto real</p>
        </div>

        {/* Content Grid */}
        <div className="contact-content">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form animate-slide-in-left">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Tu nombre"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="tu@email.com"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Cuéntame sobre tu proyecto..."
                rows={5}
                required
                className="form-input form-textarea"
              />
            </div>

            <button type="submit" disabled={isSubmitting} className={`btn-submit ${isSuccess ? "success" : ""}`}>
              {isSuccess ? (
                <>✓ Mensaje enviado</>
              ) : isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Enviando...
                </>
              ) : (
                <>
                  Enviar Mensaje
                  <Send size={20} />
                </>
              )}
            </button>
          </form>

          {/* Contact Links */}
          <div className="contact-links animate-slide-in-right">
            <h3 className="links-title">O encuéntrame en:</h3>

            <div className="social-cards">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-card">
                <Github size={24} />
                <span>GitHub</span>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-card">
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-card">
                <Twitter size={24} />
                <span>Twitter</span>
              </a>

              <a href="mailto:hello@example.com" className="social-card">
                <Mail size={24} />
                <span>Email</span>
              </a>
            </div>

            <div className="availability-info">
              <p className="availability-text">
                <span className="availability-dot"></span>
                Disponible para nuevos proyectos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
