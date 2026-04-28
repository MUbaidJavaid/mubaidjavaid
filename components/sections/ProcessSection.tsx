'use client'

import { useGsapReveal } from '@/components/motion/useGsapReveal'
import { process } from '@/data/site'
import {
  Compass,
  FlaskConical,
  HandshakeIcon,
  Layers3,
  PencilRuler,
  Rocket,
  Search
} from 'lucide-react'
import { useRef } from 'react'

const stepIcons = [Search, Compass, PencilRuler, Layers3, FlaskConical, Rocket, HandshakeIcon]

const stepDurations = [
  'Week 1',
  'Week 1–2',
  'Week 2–3',
  'Week 2–4',
  'Week 3–4',
  'Launch Week',
  'Week 4–5',
  'Post-launch'
]

export function ProcessSection () {
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef   = useRef<HTMLDivElement>(null)

  useGsapReveal(headerRef, { y: 28, stagger: 0.12 })
  useGsapReveal(gridRef,   { y: 32, stagger: 0.07, start: 'top 85%' })

  return (
    <section className='section-anchor surface-muted py-16 md:py-20'>
      <div className='container-wide space-y-12'>

        {/* Header */}
        <div ref={headerRef} className='max-w-2xl space-y-4'>
          <p className='section-label' data-reveal>Process</p>
          <h2 className='section-heading' data-reveal>
            A structured approach from{' '}
            <span className='section-heading-accent'>brief to delivery</span>
          </h2>
          <p className='text-body-base text-body' data-reveal>
            Every engagement follows a clear sequence: understand the goal, plan
            the architecture, build with quality checks, and launch with full
            documentation so you maintain momentum after handover.
          </p>
        </div>

        {/* Steps grid */}
        <div
          ref={gridRef}
          className='grid gap-px overflow-hidden border border-border/50 bg-border/50 sm:grid-cols-2 lg:grid-cols-4'
        >
          {process.map((item, index) => {
            const Icon = stepIcons[index % stepIcons.length]
            return (
              <article
                key={item.step}
                data-reveal
                className='group relative bg-background p-6 transition-colors duration-300 hover:bg-white dark:hover:bg-card'
              >
                {/* Step number */}
                <p
                  className='mb-5 font-heading text-[2.5rem] font-extrabold leading-none tracking-tight text-primary/15 transition-colors duration-300 group-hover:text-primary/25'
                  aria-hidden
                >
                  {String(index + 1).padStart(2, '0')}
                </p>

                {/* Icon + title */}
                <div className='mb-3 flex items-center gap-2.5'>
                  <span className='flex h-7 w-7 items-center justify-center border border-primary/20 bg-primary/6 text-primary'>
                    <Icon className='h-3.5 w-3.5' strokeWidth={1.8} aria-hidden />
                  </span>
                  <h3 className='text-[0.9rem] font-bold tracking-tight text-heading transition-colors group-hover:text-primary'>
                    {item.step}
                  </h3>
                </div>

                {/* Description — was text-body/45, fixed to readable text-body/80 */}
                <p className='text-[0.8125rem] leading-[1.75] text-body/80'>
                  {item.description}
                </p>

                {/* Timeline label */}
                <p className='mt-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary/60'>
                  {stepDurations[index] ?? `Phase ${index + 1}`}
                </p>

                {/* Bottom accent bar */}
                <div className='absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100' />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
