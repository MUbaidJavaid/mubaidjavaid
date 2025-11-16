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

  
  // const handleDownloadResume = () => {
  //   const link = document.createElement("a")
  //   link.href = "https://drive.google.com/file/d/1QMNvxKId_YhdJQbw1RmVYATbIg2Q3H00/view?usp=sharing"
  //   link.download = "Ubaid_Resume_MERN.pdf"
  //   document.body.appendChild(link)
  //   link.click()
  //   document.body.removeChild(link)
  // }

  const handleDownloadResume = () => {
  const link = document.createElement("a")
  link.href = "https://drive.google.com/uc?export=download&id=1QMNvxKId_YhdJQbw1RmVYATbIg2Q3H00"
  link.download = "Ubaid_Resume_MERN.pdf"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}


  const handleViewWork = () => {
    const projectsSection = document.getElementById("projects")
    projectsSection?.scrollIntoView({ behavior: "smooth" })
  }

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
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  }

    const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        type: "spring" as const,
        damping: 12,
        stiffness: 100
      }
    })
  };

  const name = "Ubaid Javaid".split("");
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
        <motion.div variants={item} animate="active" className="mb-6" >
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-slate-200 mb-6 dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-indigo-300">
            <p className="text-sm text-white dark:text-indigo-300 font-medium">Full-Stack MERN Engineer • 3+ years building production apps</p>
          </div>

        </motion.div>

      <motion.div className="mb-6 perspective-1000">
            <div className="flex justify-center gap-1 flex-wrap">
              {/* <p className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent inline-block"> */}
              {name.map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-6xl md:text-8xl font-extrabold  inline-block text-indigo-300"
                  style={{
                    textShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    transform: "translateZ(0)"
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              {/* </p> */}
            </div>
          </motion.div>

        {/* <motion.h1 variants={item} className="text-5xl md:text-8xl font-bold mb-6 text-balance">
          <span className="bg-linear-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">
            Ubaid Javaid
          </span>        
        </motion.h1> */}

        <motion.p
          variants={item}
          className="text-lg text-white/70 md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed  dark:text-indigo-300"
        >
          I design and build performant, accessible web applications using the MERN stack — focused on clear UX, clean code, and delightful interactions.
        </motion.p>

        <motion.div variants={item} className="btn-group-responsive gap-4 md:gap-8 flex justify-center">
          <motion.button
            onClick={handleViewWork}
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-background rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-primary/90 active:bg-primary/85 transition-all duration-200 dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-indigo-300  dark:hover:bg-indigo-800/40 "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            aria-label="View my work"
          >
            View My Work
          </motion.button>

          <motion.button
            onClick={handleDownloadResume}
            className="px-6 py-3  text-white rounded-lg font-semibold bg-white/5 backdrop-blur-sm border border-slate-200 hover:bg-primary/10 hover:border-white/70 transition-all duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Download resume"
          >
            Download Resume
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-200 rounded-full flex items-start justify-center p-2">
          <motion.div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </div>
  )
}
