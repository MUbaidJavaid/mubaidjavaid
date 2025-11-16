"use client"

import type React from "react"

import { useEffect, useRef } from "react"

export default function InteractiveEffects() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let lastUpdate = 0
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastUpdate > 16) {
        const x = (e.clientX / window.innerWidth) * 100
        const y = (e.clientY / window.innerHeight) * 100

        container.style.setProperty("--mouse-x", `${x}%`)
        container.style.setProperty("--mouse-y", `${y}%`)
        lastUpdate = now
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "50%",
        } as React.CSSProperties & { "--mouse-x": string; "--mouse-y": string }
      }
    >
      {/* Glow effect following mouse */}
      <div
        className="absolute w-96 h-96 bg-linear-to-r from-primary/20 to-accent/20 rounded-full blur-3xl opacity-0 hover:opacity-50 transition-opacity duration-300"
        style={{
          left: "var(--mouse-x)",
          top: "var(--mouse-y)",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  )
}
