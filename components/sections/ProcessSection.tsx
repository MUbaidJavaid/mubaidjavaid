'use client'

import { useGsapReveal } from '@/components/motion/useGsapReveal'
import { process } from '@/data/site'
import {
  Compass,
  FlaskConical,
  HandshakeIcon,
  Layers3,
  LifeBuoy,
  PencilRuler,
  Rocket,
  Search
} from 'lucide-react'
import { useRef } from 'react'

import styles from './ProcessSection.module.css'

const stepIcons = [
  Search,
  Compass,
  PencilRuler,
  Layers3,
  FlaskConical,
  Rocket,
  HandshakeIcon,
  LifeBuoy
]

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
  const gridRef = useRef<HTMLDivElement>(null)

  useGsapReveal(headerRef, { y: 28, stagger: 0.12 })
  useGsapReveal(gridRef, { y: 32, stagger: 0.07, start: 'top 85%' })

  return (
    <section className='section-anchor surface-muted py-14 md:py-16'>
      <div className='container-wide space-y-8'>
        {/* Header */}
        <div ref={headerRef} className='max-w-2xl space-y-4'>
          <p className='section-label' data-reveal>
            Process
          </p>
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
        <div ref={gridRef} className={styles.grid}>
          {process.map((item, index) => {
            const Icon = stepIcons[index % stepIcons.length]
            const stepNumber = String(index + 1).padStart(2, '0')

            return (
              <article key={item.step} data-reveal className={styles.card}>
                <div className={styles.body}>
                  <div className={styles.icon}>
                    <Icon strokeWidth={1.5} aria-hidden />
                  </div>

                  <h3 className={styles.title}>{item.step}</h3>
                  <p className={styles.paragraph}>{item.description}</p>
                  <p className={styles.duration}>
                    {stepDurations[index] ?? `Phase ${index + 1}`}
                  </p>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.ribbon}>
                    <span className={styles.ribbonLabel} aria-hidden>
                      {stepNumber}
                    </span>
                    <span className='sr-only'>Step {stepNumber}</span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
