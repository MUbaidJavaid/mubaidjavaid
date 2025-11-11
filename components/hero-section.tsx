"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Magnetic gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`,
        }}
        transition={{ type: "tween", ease: "linear" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl px-6"
      >
        <motion.div variants={item} className="mb-6">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <p className="text-sm text-primary font-medium">Welcome to my neural workspace</p>
          </div>
        </motion.div>

        <motion.h1 variants={item} className="text-6xl md:text-8xl font-bold mb-6 text-balance">
          <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">
            Crafting Digital
          </span>
          <br />
          <span className="text-foreground">Experiences</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Full-stack developer passionate about building immersive, performant experiences that blend cutting-edge
          technology with thoughtful design.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          <motion.button
            className="px-8 py-4 border border-primary/30 text-foreground rounded-lg font-semibold hover:bg-primary/5 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-2">
          <motion.div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </div>
  )
}
