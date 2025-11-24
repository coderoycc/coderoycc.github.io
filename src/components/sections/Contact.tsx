"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Linkedin, Github, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  const socials = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:contact@example.com" },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-center text-gradient">
          ¿Listo para construir algo increíble?
        </h2>
        <p className="text-center text-slate-300 mb-12 text-lg">
          Tengo disponibilidad para nuevos proyectos. Déjame un mensaje y te responderé pronto.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="glass-morphism rounded-2xl p-8 mb-12">
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-slate-300">Tu Nombre</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none smooth-transition text-white"
              placeholder="Juan Pérez"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-slate-300">Tu Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none smooth-transition text-white"
              placeholder="tu@email.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-slate-300">Mensaje</label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none smooth-transition text-white resize-none min-h-32"
              placeholder="Cuéntame sobre tu proyecto..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-400 text-white font-bold rounded-lg hover:scale-105 smooth-transition flex items-center justify-center gap-2"
          >
            <Send size={20} />
            Enviar Mensaje
          </button>

          {submitted && (
            <div className="mt-4 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center">
              ✓ Mensaje enviado exitosamente
            </div>
          )}
        </form>

        {/* Social Links */}
        <div className="text-center">
          <p className="text-slate-400 mb-6">O encuéntrame en:</p>
          <div className="flex justify-center gap-4">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="glass-morphism rounded-lg p-4 hover:bg-white/20 smooth-transition hover:scale-110"
                  title={social.label}
                >
                  <Icon size={24} className="text-cyan-400" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Availability Badge */}
        <div className="mt-12 flex justify-center">
          <div className="glass-morphism rounded-full px-6 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-slate-300">Disponible para proyectos</span>
          </div>
        </div>
      </div>
    </section>
  )
}
