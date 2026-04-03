'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * Page scroll progress: functional feedback (where you are on long pages).
 */
export function ScrollProgressIndicator () {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001
  })

  return (
    <motion.div
      className='pointer-events-none fixed left-0 right-0 top-[calc(70px+env(safe-area-inset-top,0px))] z-[49] h-[2px] origin-left bg-gradient-to-r from-primary/25 via-primary to-primary/40 dark:from-primary/35 dark:via-primary dark:to-primary/50'
      style={{ scaleX }}
      aria-hidden
    />
  )
}
