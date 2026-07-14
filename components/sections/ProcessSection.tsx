'use client'

import { useGsapReveal } from '@/components/motion/useGsapReveal'
import { SectionDisplayTag } from '@/components/ui/SectionDisplayTag'
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
    <section className='section-anchor surface-muted pb-14 pt-8 md:pb-16 md:pt-10'>
      <div className='container-wide'>
        {/* Header */}
        <div ref={headerRef} className='section-header -mt-1'>
          <SectionDisplayTag tag='Process' pattern='jsx' />
          <p className='section-lead' data-reveal>
            From brief to launch — clear steps, no guesswork.
          </p>
        </div>

        {/* Steps grid */}
        <div ref={gridRef} className={`${styles.grid} mt-16 md:mt-24 lg:mt-28`}>
          {process.map((item, index) => {
            const Icon = stepIcons[index % stepIcons.length]
            const stepNumber = String(index + 1).padStart(2, '0')

            return (
              <article key={item.step} data-reveal className={styles.card}>
                <div className={styles.body}>
                  <div className={styles.icon}>
                    <Icon strokeWidth={1.5} aria-hidden />
                  </div>

                  <h5 className={styles.title}>{item.step}</h5>
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
