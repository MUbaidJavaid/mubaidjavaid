'use client'

import { useGsapReveal } from '@/components/motion/useGsapReveal'
import { experience } from '@/data/site'
import { useRef } from 'react'

export function ExperienceSnapshot () {
  const headerRef   = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useGsapReveal(headerRef,   { y: 24, stagger: 0.12 })
  useGsapReveal(timelineRef, { y: 36, stagger: 0.14, start: 'top 85%' })

  const sortedRoles = [...experience.roles].sort((a, b) =>
    a.current === b.current ? 0 : a.current ? -1 : 1
  )

  return (
    <section className='section-anchor surface-page py-16 md:py-20'>
      <div className='container-wide space-y-12'>

        {/* Header */}
        <div ref={headerRef} className='max-w-2xl space-y-4'>
          <p className='section-label' data-reveal>Professional Journey</p>
          <h2 className='section-heading' data-reveal>
            Experience &amp; <span className='section-heading-accent'>Career</span>
          </h2>
          <p className='text-body-base text-body' data-reveal>
            Full-stack developer with hands-on production experience in MERN and
            Next.js — building scalable applications, leading delivery cycles, and
            shipping maintainable code in real business environments.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className='relative'>
          {/* Vertical guide line */}
          <div
            className='absolute bottom-0 left-4 top-2 hidden w-px bg-gradient-to-b from-primary/50 via-primary/15 to-transparent sm:block'
            aria-hidden
          />

          <div className='space-y-6 sm:pl-20'>
            {sortedRoles.map(role => (
              <article
                key={role.id}
                data-reveal
                className='group relative border border-border/60 bg-white shadow-sm transition-all duration-200 hover:border-primary/25 hover:shadow-md dark:border-border/50 dark:bg-card'
              >
                {/* Timeline dot */}
                <div className='absolute -left-[50px] top-5 hidden sm:block' aria-hidden>
                  <div className='relative h-3.5 w-3.5'>
                    <div className='h-3.5 w-3.5 rounded-full border-2 border-white bg-primary shadow-sm dark:border-card' />
                    {role.current && (
                      <div className='absolute inset-0 h-3.5 w-3.5 animate-ping rounded-full bg-primary/60' />
                    )}
                  </div>
                </div>

                <div className='p-6 sm:p-7'>
                  {/* Role header */}
                  <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
                    <div>
                      <h3 className='text-[1.05rem] font-bold tracking-tight text-heading'>
                        {role.role}
                      </h3>
                      <p className='mt-0.5 text-[0.76rem] font-semibold uppercase tracking-[0.1em] text-body/60'>
                        {role.company}
                      </p>
                    </div>
                    {role.current && (
                      <div className='flex w-fit items-center gap-2 border border-emerald-200 bg-emerald-50/70 px-2.5 py-1 dark:border-emerald-900/50 dark:bg-emerald-950/40 sm:ml-auto'>
                        <span className='relative flex h-2 w-2'>
                          <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75' />
                          <span className='relative inline-flex h-2 w-2 rounded-full bg-green-500' />
                        </span>
                        <span className='text-[11px] font-semibold text-green-700 dark:text-emerald-400'>
                          Current
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Meta grid */}
                  <div className='mt-4 grid gap-2 border-t border-border/40 pt-4 text-[0.78rem] sm:grid-cols-3'>
                    {[
                      { label: 'Duration', value: role.duration },
                      { label: 'Type',     value: role.type },
                      { label: 'Location', value: role.location }
                    ].map(m => (
                      <div key={m.label} className='space-y-0.5'>
                        <p className='text-[10px] font-semibold uppercase tracking-wider text-body/50'>{m.label}</p>
                        <p className='font-semibold text-heading'>{m.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <p className='mt-4 text-[0.8375rem] leading-[1.8] text-body'>
                    {role.copy}
                  </p>

                  {/* Key contributions */}
                  {role.highlights && role.highlights.length > 0 && (
                    <div className='mt-5 space-y-2.5'>
                      <p className='text-[10px] font-semibold uppercase tracking-wider text-body/55'>
                        Key Contributions
                      </p>
                      <ul className='grid gap-x-6 gap-y-1.5 sm:grid-cols-2'>
                        {role.highlights.map((h, i) => (
                          <li key={i} className='flex items-start gap-2 text-[0.8rem] leading-relaxed text-body/85'>
                            <span className='mt-[3px] h-1.5 w-1.5 shrink-0 rounded-sm bg-primary/70' aria-hidden />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech stack */}
                  {role.technologies && role.technologies.length > 0 && (
                    <div className='mt-5 space-y-2'>
                      <p className='text-[10px] font-semibold uppercase tracking-wider text-body/55'>
                        Tech Stack
                      </p>
                      <div className='flex flex-wrap gap-1.5'>
                        {role.technologies.map(tech => (
                          <span
                            key={tech}
                            className='border border-border/70 bg-secondary px-2.5 py-1 text-[10px] font-semibold text-heading transition-colors hover:border-primary/40 hover:text-primary'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
