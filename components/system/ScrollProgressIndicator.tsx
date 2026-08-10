'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgressIndicator () {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001
  })

  return (
    <motion.div
      className='pointer-events-none fixed left-0 right-0 top-[calc(4.25rem+env(safe-area-inset-top,0px))] z-[49] h-px origin-left bg-heading'
      style={{ scaleX }}
      aria-hidden
    />
  )
}
