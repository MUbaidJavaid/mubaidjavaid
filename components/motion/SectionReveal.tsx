'use client'

import { cn } from '@/lib/utils'
import { motion, useReducedMotion } from 'framer-motion'

type SectionRevealProps = {
  children: React.ReactNode
  className?: string
  /** Slight delay for staggered children */
  delay?: number
}

/**
 * Purposeful scroll-driven entrance: guides attention without decorative noise.
 */
export function SectionReveal ({
  children,
  className,
  delay = 0
}: SectionRevealProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px -8% 0px' }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  )
}
