// "use client"

// import { useEffect, useRef } from "react"

// export default function ParticleBackground() {
//   const canvasRef = useRef<HTMLCanvasElement>(null)

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return

//     const ctx = canvas.getContext("2d")
//     if (!ctx) return

//     canvas.width = window.innerWidth
//     canvas.height = window.innerHeight

//     const particles: Array<{
//       x: number
//       y: number
//       vx: number
//       vy: number
//       life: number
//       maxLife: number
//     }> = []

//     const createParticle = (x: number, y: number) => {
//       if (particles.length < 50) {
//         particles.push({
//           x,
//           y,
//           vx: (Math.random() - 0.5) * 2,
//           vy: (Math.random() - 0.5) * 2,
//           life: 1,
//           maxLife: Math.random() * 100 + 50,
//         })
//       }
//     }

//     let frameCount = 0
//     const animate = () => {
//       ctx.fillStyle = "rgba(15, 23, 42, 0.9)"
//       ctx.fillRect(0, 0, canvas.width, canvas.height)

//       for (let i = particles.length - 1; i >= 0; i--) {
//         const p = particles[i]
//         p.x += p.vx
//         p.y += p.vy
//         p.life -= 1 / p.maxLife

//         const opacity = Math.max(0, p.life)
//         ctx.fillStyle = `rgba(139, 92, 246, ${opacity * 0.5})`
//         ctx.beginPath()
//         ctx.arc(p.x, p.y, 1, 0, Math.PI * 2)
//         ctx.fill()

//         if (p.life <= 0) {
//           particles.splice(i, 1)
//         }
//       }

//       frameCount++
//       requestAnimationFrame(animate)
//     }

//     let lastMouseMove = 0
//     const handleMouseMove = (e: MouseEvent) => {
//       const now = Date.now()
//       if (now - lastMouseMove > 30) {
//         for (let i = 0; i < 2; i++) {
//           createParticle(e.clientX, e.clientY)
//         }
//         lastMouseMove = now
//       }
//     }

//     window.addEventListener("mousemove", handleMouseMove)
//     animate()

//     const handleResize = () => {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight
//     }

//     window.addEventListener("resize", handleResize)

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove)
//       window.removeEventListener("resize", handleResize)
//     }
//   }, [])

//   return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-60" />
// }



"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useMotionPreference } from "@/hooks/use-motion-preference"

/**
 * Pattern 3A: GPU-Accelerated Gradient Orbs
 * Premium, performant background with interactive elements
 * Uses pure CSS transforms (GPU-accelerated) for optimal performance
 */

interface Orb {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
}

export default function ParticleBackground() {
  const { prefersReducedMotion } = useMotionPreference()
  const containerRef = useRef<HTMLDivElement>(null)
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  const mousePos = useRef({ x: 0, y: 0 })
  const targetMousePos = useRef({ x: 0, y: 0 })

  // Theme detection
  useEffect(() => {
    const detectTheme = () => {
      const isDark = document.documentElement.classList.contains("dark") ||
                     window.matchMedia("(prefers-color-scheme: dark)").matches
      setTheme(isDark ? "dark" : "light")
    }

    detectTheme()

    const observer = new MutationObserver(detectTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    })

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => detectTheme()
    mediaQuery.addEventListener("change", handleChange)

    return () => {
      observer.disconnect()
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  // Inject CSS custom properties for dynamic orb colors
  useEffect(() => {
    if (!containerRef.current) return

    const colors = theme === "dark"
      ? {
          primary: "6366f1",    // indigo-500
          secondary: "8b5cf6",  // violet-500
          tertiary: "a855f7",   // purple-500
          quaternary: "ec4899"  // pink-500
        }
      : {
          primary: "818cf8",    // indigo-400
          secondary: "a78bfa",  // violet-400
          tertiary: "c084fc",   // purple-300
          quaternary: "f472b6"  // pink-400
        }

    const root = containerRef.current
    root.style.setProperty("--color-primary", colors.primary)
    root.style.setProperty("--color-secondary", colors.secondary)
    root.style.setProperty("--color-tertiary", colors.tertiary)
    root.style.setProperty("--color-quaternary", colors.quaternary)
    root.style.setProperty("--blending-value", "multiply")
  }, [theme])

  // Mouse tracking for smooth pointer orb
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetMousePos.current = {
        x: e.clientX,
        y: e.clientY
      }
    }

    const handleMouseLeave = () => {
      targetMousePos.current = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      // Any resize handling needed
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      {/* Main container for orbs with GPU acceleration */}
      <div
        ref={containerRef}
        className="fixed inset-0 z-[-1] overflow-hidden"
        style={{
          background: theme === "dark"
            ? "linear-gradient(135deg, #0f1729 0%, #1a1a3e 50%, #0a0f2c 100%)"
            : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f0f4f8 100%)",
          // CSS custom properties for orb colors
          "--color-primary": "6366f1",
          "--color-secondary": "8b5cf6",
          "--color-tertiary": "a855f7",
          "--color-quaternary": "ec4899",
          "--blending-value": "multiply"
        } as React.CSSProperties & Record<string, string>}
      >
        {/* Blur Container - Essential for goo effect */}
        <svg
          className="absolute inset-0 w-full h-full"
          style={{
            filter: "url(#gooey)",
            mixBlendMode: "screen"
          }}
        >
          <defs>
            <filter id="gooey">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* Primary animated orb - Purple/Indigo */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-50"
          style={{
            background: theme === "dark"
              ? "radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.8) 0%, rgba(99, 102, 241, 0.3) 40%, transparent 100%)"
              : "radial-gradient(circle at 30% 30%, rgba(129, 140, 248, 0.6) 0%, rgba(129, 140, 248, 0.2) 40%, transparent 100%)",
            mixBlendMode: "screen",
            filter: "blur(40px)"
          }}
          animate={prefersReducedMotion ? {} : {
            x: [0, 50, -30, 20, 0],
            y: [0, -40, 60, -30, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Secondary animated orb - Violet */}
        <motion.div
          className="absolute w-80 h-80 rounded-full opacity-40 top-1/4 right-1/4"
          style={{
            background: theme === "dark"
              ? "radial-gradient(circle at 40% 60%, rgba(139, 92, 246, 0.7) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 100%)"
              : "radial-gradient(circle at 40% 60%, rgba(167, 139, 250, 0.5) 0%, rgba(167, 139, 250, 0.15) 50%, transparent 100%)",
            mixBlendMode: "screen",
            filter: "blur(45px)"
          }}
          animate={prefersReducedMotion ? {} : {
            x: [-50, 30, -40, 60, -50],
            y: [50, -60, 40, -50, 50]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Tertiary animated orb - Pink */}
        <motion.div
          className="absolute w-72 h-72 rounded-full opacity-35 bottom-1/3 left-1/3"
          style={{
            background: theme === "dark"
              ? "radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.6) 0%, rgba(236, 72, 153, 0.15) 60%, transparent 100%)"
              : "radial-gradient(circle at 50% 50%, rgba(244, 114, 182, 0.4) 0%, rgba(244, 114, 182, 0.1) 60%, transparent 100%)",
            mixBlendMode: "screen",
            filter: "blur(50px)"
          }}
          animate={prefersReducedMotion ? {} : {
            x: [30, -60, 40, -30, 30],
            y: [-40, 50, -60, 40, -40]
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* Quaternary animated orb - Purple */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-30 top-0 right-0"
          style={{
            background: theme === "dark"
              ? "radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.5) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 100%)"
              : "radial-gradient(circle at 20% 80%, rgba(196, 181, 253, 0.35) 0%, rgba(196, 181, 253, 0.05) 50%, transparent 100%)",
            mixBlendMode: "screen",
            filter: "blur(55px)"
          }}
          animate={prefersReducedMotion ? {} : {
            x: [-40, 70, -50, 60, -40],
            y: [40, -30, 60, -40, 40]
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Vignette overlay for text contrast */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: theme === "dark"
              ? "radial-gradient(ellipse at center, transparent 0%, rgba(15, 23, 42, 0.4) 100%)"
              : "radial-gradient(ellipse at center, transparent 0%, rgba(248, 250, 252, 0.2) 100%)"
          }}
        />

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                rgba(255, 255, 255, 0.5),
                rgba(255, 255, 255, 0.5) 1px,
                transparent 1px,
                transparent 2px
              ),
              repeating-linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.5),
                rgba(255, 255, 255, 0.5) 1px,
                transparent 1px,
                transparent 2px
              )
            `,
            backgroundSize: "50px 50px, 50px 50px",
            backgroundPosition: "0 0, 25px 25px"
          }}
        />
      </div>

      {/* Floating premium glow effect */}
      <motion.div
        className="fixed top-1/4 left-1/4 w-96 h-96 z-[-1] pointer-events-none"
        style={{
          background: theme === "dark"
            ? "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          borderRadius: "50%"
        }}
        animate={prefersReducedMotion ? {} : {
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </>
  )
}