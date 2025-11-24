"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"

interface NavbarProps {
  isDark: boolean
  setIsDark: (value: boolean) => void
}

export default function Navbar({ isDark, setIsDark }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Inicio", href: "#home" },
    { label: "Sobre Mí", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Proyectos", href: "#projects" },
    { label: "Contacto", href: "#contact" },
  ]

  const handleScroll = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 smooth-transition ${
        scrolled ? "bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-700" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="text-2xl font-bold text-gradient">Portfolio</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleScroll(item.href)}
                className="text-slate-300 hover:text-cyan-400 smooth-transition font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 smooth-transition"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-800 hover:bg-slate-700"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleScroll(item.href)}
                className="block w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-800 hover:text-cyan-400 rounded-lg smooth-transition"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
