'use client'

import { brandMotion } from '@/lib/brand-system'
import { cn } from '@/lib/utils'
import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

export function MotionReveal ({
  children,
  className,
  delay = 0
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={cn('h-full', className)}
      initial={{ opacity: 0, y: brandMotion.revealY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{
        duration: brandMotion.duration,
        delay,
        ease: brandMotion.ease
      }}
    >
      {children}
    </motion.div>
  )
}

export function MotionRevealIn ({
  children,
  className,
  delay = 0
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: brandMotion.revealY }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: brandMotion.durationSlow,
        delay,
        ease: brandMotion.ease
      }}
    >
      {children}
    </motion.div>
  )
}
