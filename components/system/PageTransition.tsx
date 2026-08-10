'use client'

import { brandMotion } from '@/lib/brand-system'
import { motion, useReducedMotion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

export function PageTransition ({
  children
}: {
  children: ReactNode
}) {
  const pathname = usePathname()
  const reduce = useReducedMotion()

  if (reduce) {
    return <div key={pathname}>{children}</div>
  }

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.32,
        ease: brandMotion.ease
      }}
    >
      {children}
    </motion.div>
  )
}
