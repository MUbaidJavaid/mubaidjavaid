/**
 * Scroll-Triggered Animation Wrapper
 * Triggers entrance animations when sections enter viewport
 * Implements whileInView for scroll-based choreography
 */

"use client"

import { motion } from "framer-motion"
import type React from "react"

interface ScrollTriggerProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  animationType?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleIn"
}

const animationVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  }
}

export function ScrollTrigger({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  animationType = "fadeUp"
}: ScrollTriggerProps) {
  const variants = animationVariants[animationType]

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Staggered List Animation
 * Animates list items with staggered delays
 */
interface StaggeredListProps {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
  duration?: number
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut"
    }
  }
}

export function StaggeredList({
  children,
  className = "",
  staggerDelay = 0.1,
  duration = 0.5
}: StaggeredListProps) {
  return (
    <motion.ul
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1
          }
        }
      }}
    >
      {children &&
        children.map((child, index) => (
          <motion.li
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration }
              }
            }}
          >
            {child}
          </motion.li>
        ))}
    </motion.ul>
  )
}

export default ScrollTrigger
