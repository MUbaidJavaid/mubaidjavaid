'use client'

import { BrandSection } from '@/components/brand/system/BrandSection'
import { MotionReveal } from '@/components/brand/system/MotionReveal'
import { builtWithTools } from '@/data/site'
import { cn } from '@/lib/utils'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

/**
 * Post-hero strip — production tools on light paper (brand theme).
 */
export function BrandBuiltWith () {
  const reduce = useReducedMotion()
  const loop = [...builtWithTools, ...builtWithTools]

  return (
    <BrandSection
      id='built-with'
      layout='band'
      className='min-h-0 border-t border-border/70 bg-white'
    >
      <div className='container-wide py-10 md:py-12'>
        <MotionReveal>
          <p className='text-center font-mono text-[0.625rem] uppercase tracking-[0.22em] text-muted-foreground'>
            Built with production-grade tools
          </p>
        </MotionReveal>

        <div className='relative mt-7 overflow-hidden'>
          <div
            className='pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-24'
            aria-hidden
          />
          <div
            className='pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-24'
            aria-hidden
          />

          <motion.ul
            className='flex w-max gap-10 md:gap-12'
            animate={reduce ? undefined : { x: ['0%', '-50%'] }}
            transition={
              reduce
                ? undefined
                : {
                    duration: 42,
                    ease: 'linear',
                    repeat: Infinity
                  }
            }
            aria-label='Production tools'
          >
            {loop.map((tool, i) => (
              <li
                key={`${tool.name}-${i}`}
                className='flex shrink-0 items-center gap-2.5'
              >
                <span className='grid h-7 w-7 shrink-0 place-items-center'>
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    width={24}
                    height={24}
                    className='!h-6 !w-6 object-contain'
                  />
                </span>
                <span className='whitespace-nowrap text-sm font-medium tracking-tight text-heading'>
                  {tool.name}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>

        <ul
          className={cn(
            'mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3',
            reduce ? 'flex' : 'sr-only'
          )}
        >
          {builtWithTools.map(tool => (
            <li key={tool.name} className='text-sm text-body'>
              {tool.name}
            </li>
          ))}
        </ul>
      </div>
    </BrandSection>
  )
}
