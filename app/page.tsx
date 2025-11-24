"use client"

import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Stack from "@/components/sections/Stack"
import Projects from "@/components/sections/Projects"
import Capabilities from "@/components/sections/Capabilities"
import Timeline from "@/components/sections/Timeline"
import Contact from "@/components/sections/Contact"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Capabilities />
      <Timeline />
      <Contact />
    </main>
  )
}
