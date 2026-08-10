'use client'

import { brandMotion, brandType } from '@/lib/brand-system'
import { cn } from '@/lib/utils'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useMemo, useRef } from 'react'

type Node = { id: string; x: number; y: number; label: string }

/**
 * Editorial product stack — clean layers, no glow blobs / orbital rings.
 * Background comes from BrandStage tone (paper / muted / ink).
 */
export function NetworkGraph ({
  className,
  nodes
}: {
  className?: string
  nodes?: Node[]
  links?: Array<[string, string]>
}) {
  const root = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const inView = useInView(root, { once: true, margin: '-10%' })

  const layers = useMemo(() => {
    if (nodes?.length) {
      const mid = Math.ceil(nodes.length / 2)
      return [
        { key: 'surface', title: 'Interface', items: nodes.slice(0, mid).map(n => n.label) },
        { key: 'system', title: 'System', items: nodes.slice(mid).map(n => n.label) }
      ]
    }
    return [
      {
        key: 'experience',
        title: 'Experience',
        items: ['Web app', 'Admin', 'PWA']
      },
      {
        key: 'application',
        title: 'Application',
        items: ['API routes', 'Auth', 'Workflows']
      },
      {
        key: 'data',
        title: 'Data & jobs',
        items: ['Models', 'Realtime', 'Queues']
      },
      {
        key: 'platform',
        title: 'Platform',
        items: ['Edge', 'Hosting', 'Observability']
      }
    ]
  }, [nodes])

  return (
    <div
      ref={root}
      className={cn(
        'relative flex h-full min-h-[300px] flex-col justify-center text-current',
        className
      )}
      role='img'
      aria-label='Product architecture stack'
    >
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.12]'
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage: 'linear-gradient(180deg, black 8%, transparent 92%)'
        }}
      />

      <div className='relative z-10 w-full px-1 py-2 md:px-2'>
        <div className='mb-5 flex items-end justify-between gap-4'>
          <div>
            <p className={cn(brandType.mono, 'text-current/55')}>Architecture</p>
            <p className='mt-1 text-sm font-medium text-current/80'>
              Layers that stay readable in production
            </p>
          </div>
          <span className='hidden font-mono text-[0.625rem] uppercase tracking-[0.14em] text-current/45 sm:inline'>
            {String(layers.length).padStart(2, '0')} tiers
          </span>
        </div>

        <div className='space-y-2'>
          {layers.map((layer, i) => (
            <motion.div
              key={layer.key}
              className='border border-current/15 bg-current/[0.04]'
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={inView || reduce ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: brandMotion.duration,
                delay: reduce ? 0 : i * 0.08,
                ease: brandMotion.ease
              }}
            >
              <div className='flex items-stretch'>
                <div className='flex w-10 shrink-0 items-center justify-center border-r border-current/15 bg-current/[0.06] md:w-12'>
                  <span className='font-mono text-[0.625rem] text-current/50'>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className='min-w-0 flex-1 px-4 py-3 md:px-5 md:py-3.5'>
                  <div className='flex flex-wrap items-baseline justify-between gap-2'>
                    <p className='font-display text-sm font-semibold tracking-tight text-current md:text-base'>
                      {layer.title}
                    </p>
                    <span className='font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-current/45'>
                      {i < layers.length - 1 ? '↓ feeds' : 'Foundation'}
                    </span>
                  </div>
                  <div className='mt-2 flex flex-wrap gap-1.5'>
                    {layer.items.map(item => (
                      <span
                        key={item}
                        className='border border-current/20 px-2 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.08em] text-current/70'
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
