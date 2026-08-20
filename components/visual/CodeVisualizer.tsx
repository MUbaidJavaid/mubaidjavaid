'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

const SNIPPET = `const product = {
  stack: ['Next.js', 'Node', 'Mongo'],
  delivery: 'end-to-end',
  quality: {
    architecture: true,
    performance: true,
    maintainable: true
  }
}

ship(product) // → production`

/**
 * Interactive code visualization — typing + cursor, not a terminal skin.
 */
export function CodeVisualizer ({ className }: { className?: string }) {
  const reduce = useReducedMotion()
  const [shown, setShown] = useState(reduce ? SNIPPET.length : 0)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (reduce) return
    if (shown >= SNIPPET.length) {
      const t = window.setTimeout(() => {
        setShown(0)
      }, 2200)
      return () => window.clearTimeout(t)
    }
    const id = window.setTimeout(() => setShown(s => s + 1), 18 + (shown % 7))
    return () => window.clearTimeout(id)
  }, [shown, reduce])

  useEffect(() => {
    if (reduce) return
    const id = window.setInterval(() => setActive(v => !v), 520)
    return () => window.clearInterval(id)
  }, [reduce])

  const text = SNIPPET.slice(0, shown)

  return (
    <div
      className={className}
      role='img'
      aria-label='Animated product engineering code snippet'
    >
      <pre className='font-mono text-[0.7rem] leading-[1.65] text-current/90 sm:text-[0.8rem] md:text-[0.9rem]'>
        <code>
          {text}
          <motion.span
            animate={reduce ? undefined : { opacity: active ? 1 : 0 }}
            className='inline-block w-[0.55ch] translate-y-[1px] bg-current'
            aria-hidden
          >
            &nbsp;
          </motion.span>
        </code>
      </pre>
    </div>
  )
}
