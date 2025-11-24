"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Stack from "./components/sections/Stack"
import Projects from "./components/sections/Projects"
import Capabilities from "./components/sections/Capabilities"
import Timeline from "./components/sections/Timeline"
import Contact from "./components/sections/Contact"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Capabilities />
      <Timeline />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
