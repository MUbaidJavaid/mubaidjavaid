/**
 * 3D Hover Tilt Card Component
 * Premium interactive card with perspective effects
 * Uses Framer Motion's useSpring and useTransform for physics-based motion
 */

"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import type React from "react"

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  rotationMultiplier?: number
  scale?: number
}

export function TiltCard({
  children,
  className = "",
  rotationMultiplier = 1,
  scale = 1.05
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useRef(0)
  const y = useRef(0)
  const rotateX = useRef(0)
  const rotateY = useRef(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate distance from center
    const distX = (e.clientX - centerX) / (rect.width / 2)
    const distY = (e.clientY - centerY) / (rect.height / 2)

    // Clamp values between -1 and 1
    const clampedX = Math.max(-1, Math.min(1, distX))
    const clampedY = Math.max(-1, Math.min(1, distY))

    // Set rotation values
    rotateY.current = clampedX * 10 * rotationMultiplier
    rotateX.current = clampedY * -10 * rotationMultiplier

    // Smooth transition
    x.current = clampedX * 10
    y.current = clampedY * 10
  }

  const handleMouseLeave = () => {
    rotateX.current = 0
    rotateY.current = 0
    x.current = 0
    y.current = 0
  }

  return (
    <motion.div
      ref={ref}
      className={`relative w-full h-full ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
      animate={{
        rotateX: rotateX.current,
        rotateY: rotateY.current,
        scale: 1
      }}
      whileHover={{
        scale
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
    >
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-lg"
        style={{
          background: `radial-gradient(
            circle at ${50 + x.current}% ${50 + y.current}%,
            rgba(255, 255, 255, 0.25) 0%,
            rgba(255, 255, 255, 0.1) 20%,
            transparent 80%
          )`,
          mixBlendMode: "screen"
        }}
      />

      {/* Main content */}
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(20px)"
        }}
      >
        {children}
      </div>
    </motion.div>
  )
}

export default TiltCard
