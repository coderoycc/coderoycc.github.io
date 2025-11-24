"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-slide-in-right"
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  )
}
