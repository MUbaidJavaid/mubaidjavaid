"use client"

import { useEffect, useRef } from "react"

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number
    }> = []

    const createParticle = (x: number, y: number) => {
      if (particles.length < 50) {
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1,
          maxLife: Math.random() * 100 + 50,
        })
      }
    }

    let frameCount = 0
    const animate = () => {
      ctx.fillStyle = "rgba(15, 23, 42, 0.9)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.life -= 1 / p.maxLife

        const opacity = Math.max(0, p.life)
        ctx.fillStyle = `rgba(139, 92, 246, ${opacity * 0.5})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2)
        ctx.fill()

        if (p.life <= 0) {
          particles.splice(i, 1)
        }
      }

      frameCount++
      requestAnimationFrame(animate)
    }

    let lastMouseMove = 0
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastMouseMove > 30) {
        for (let i = 0; i < 2; i++) {
          createParticle(e.clientX, e.clientY)
        }
        lastMouseMove = now
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-50" />
}
