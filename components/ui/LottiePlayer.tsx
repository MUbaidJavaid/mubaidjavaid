'use client'

import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

type LottiePlayerProps = {
  src: string
  className?: string
  /** Pause looping when user prefers reduced motion */
  loop?: boolean
  autoplay?: boolean
  speed?: number
  'aria-label'?: string
}

/**
 * Thin DotLottie wrapper — respects prefers-reduced-motion and keeps layout stable.
 */
export function LottiePlayer ({
  src,
  className,
  loop = true,
  autoplay = true,
  speed = 1,
  'aria-label': ariaLabel = 'Decorative animation'
}: LottiePlayerProps) {
  const reduce = useReducedMotion()

  return (
    <div
      className={cn('pointer-events-none select-none', className)}
      role='img'
      aria-label={ariaLabel}
    >
      <DotLottieReact
        src={src}
        loop={reduce ? false : loop}
        autoplay={reduce ? false : autoplay}
        speed={speed}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}
