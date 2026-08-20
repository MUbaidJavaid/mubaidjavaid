'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type TypingTaglineProps = {
  phrases: readonly string[]
  className?: string
  typingSpeedMs?: number
  deletingSpeedMs?: number
  pauseMs?: number
}

/**
 * Kinetic typography: cycles phrases with type / delete; respects reduced motion.
 */
export function TypingTagline ({
  phrases,
  className,
  typingSpeedMs = 40,
  deletingSpeedMs = 26,
  pauseMs = 2100
}: TypingTaglineProps) {
  const [display, setDisplay] = useState('')
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    if (mq.matches) {
      setDisplay(phrases[0] ?? '')
      return
    }

    let cancelled = false
    let idx = 0

    const sleep = (ms: number) =>
      new Promise<void>(resolve => {
        setTimeout(resolve, ms)
      })

    const loop = async () => {
      while (!cancelled) {
        const full = phrases[idx % phrases.length] ?? ''
        for (let i = 0; i <= full.length; i++) {
          if (cancelled) return
          setDisplay(full.slice(0, i))
          await sleep(typingSpeedMs)
        }
        await sleep(pauseMs)
        for (let i = full.length; i >= 0; i--) {
          if (cancelled) return
          setDisplay(full.slice(0, i))
          await sleep(deletingSpeedMs)
        }
        await sleep(380)
        idx += 1
      }
    }

    void loop()
    return () => {
      cancelled = true
    }
  }, [phrases, typingSpeedMs, deletingSpeedMs, pauseMs])

  return (
    <span className={cn('inline-flex min-h-[1.5em] items-center', className)}>
      <span className='text-primary' aria-live='polite'>
        {display}
        {!reduced ? (
          <motion.span
            className='ml-0.5 inline-block h-[1em] w-px bg-primary align-[-0.15em] sm:align-[-0.12em]'
            animate={{ opacity: [1, 0.15, 1] }}
            transition={{
              duration: 0.85,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            aria-hidden
          />
        ) : null}
      </span>
    </span>
  )
}
