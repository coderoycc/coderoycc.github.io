"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 text-white shadow-lg hover:scale-110 smooth-transition flex items-center justify-center z-40"
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} />
    </button>
  ) : null
}
