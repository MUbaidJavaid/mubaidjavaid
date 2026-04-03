'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export function PageTransition ({
  children
}: {
  children: ReactNode
}) {
  const pathname = usePathname()

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.32,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  )
}
