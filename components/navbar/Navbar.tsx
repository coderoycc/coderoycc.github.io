"use client"

import { useState } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "../../hooks/useTheme"
import "./Navbar.css"

const NAV_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre Mí", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Proyectos", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  const handleLinkClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="navbar-container">
      <div className="container-custom flex items-center justify-between h-full">
        {/* Logo */}
        <div className="navbar-logo group">
          <a href="#" className="text-xl font-bold gradient-text">
            &lt;Dev /&gt;
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <button key={link.label} onClick={() => handleLinkClick(link.href)} className="nav-link">
              {link.label}
            </button>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            {NAV_LINKS.map((link, index) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="mobile-menu-link"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
