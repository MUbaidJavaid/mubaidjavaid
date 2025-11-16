"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import MainLayout from "@/components/main-layout"
import InteractiveEffects from "@/components/interactive-effects"
import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import ParticleBackground from "@/components/particle-background"




export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "projects", "skills", "about", "contact"]

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    // <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <div className="min-h-screen bg-transparent text-foreground overflow-x-hidden">
      <ParticleBackground />
      <InteractiveEffects />
      <Navigation activeSection={activeSection} onNavigate={setActiveSection} />

      <MainLayout>
        <section id="hero" className="min-h-screen relative">
          <HeroSection />
         
          
        </section>

        <section id="projects" className="min-h-screen relative py-20">
          <ProjectsSection />
        </section>

        <section id="skills" className="min-h-screen relative py-20">
          <SkillsSection />
        </section>

        <section id="about" className="min-h-screen relative py-20">
          <AboutSection />
        </section>

        <section id="contact" className="min-h-screen relative py-20">
          <ContactSection />
        </section>
      </MainLayout>
    </div>
  )
}
