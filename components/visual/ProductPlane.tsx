'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

function mediaSrc (src: string) {
  return encodeURI(src)
}

function isSvg (src: string) {
  return /\.svg($|\?)/i.test(src)
}

function ProductImage ({
  src,
  alt,
  priority
}: {
  src: string
  alt: string
  priority?: boolean
}) {
  return (
    <Image
      src={mediaSrc(src)}
      alt={alt}
      fill
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      className='object-cover object-top'
      priority={priority}
      unoptimized={isSvg(src)}
    />
  )
}

function ParallaxPlane ({
  src,
  alt,
  priority,
  className
}: {
  src: string
  alt: string
  priority?: boolean
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], [16, -16])
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [1.04, 1, 1.02])

  return (
    <div ref={ref} className={cn('relative min-h-[inherit] h-full w-full', className)}>
      <div className='absolute inset-0 overflow-hidden bg-muted/40'>
        <motion.div
          style={{ y, scale }}
          className='absolute inset-[-6%] origin-center will-change-transform'
        >
          <ProductImage src={src} alt={alt} priority={priority} />
        </motion.div>
      </div>
    </div>
  )
}

/**
 * Full-bleed product plane. Parallax is opt-in — grids of many planes
 * should keep it off to avoid stacked scroll listeners.
 */
export function ProductPlane ({
  src,
  alt,
  className,
  priority,
  parallax = false
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
  parallax?: boolean
}) {
  const reduce = useReducedMotion()

  if (parallax && !reduce) {
    return (
      <ParallaxPlane
        src={src}
        alt={alt}
        priority={priority}
        className={className}
      />
    )
  }

  return (
    <div className={cn('relative min-h-[inherit] h-full w-full', className)}>
      <div className='absolute inset-0 overflow-hidden bg-muted/40'>
        <ProductImage src={src} alt={alt} priority={priority} />
      </div>
    </div>
  )
}
