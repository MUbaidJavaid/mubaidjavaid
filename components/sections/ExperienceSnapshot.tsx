'use client'

import { useGsapReveal } from '@/components/motion/useGsapReveal'
import { SectionDisplayTag } from '@/components/ui/SectionDisplayTag'
import { experience } from '@/data/site'
import { getTechLogo } from '@/lib/techLogos'
import { Briefcase, Code2, GitBranch } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState, type CSSProperties } from 'react'

const roleIcons = [Code2, GitBranch, Briefcase] as const

export function ExperienceSnapshot () {
  const headerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  useGsapReveal(headerRef, { y: 24, stagger: 0.12 })
  useGsapReveal(timelineRef, { y: 28, stagger: 0.12, start: 'top 85%' })

  const sortedRoles = [...experience.roles].sort((a, b) =>
    a.current === b.current ? 0 : a.current ? -1 : 1
  )

  const toggle = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section className='section-anchor surface-page py-16 md:py-20'>
      <div className='container-wide space-y-12'>
        <div ref={headerRef} className='section-header'>
          <SectionDisplayTag tag='Experience' pattern='comment' />
          <p className='section-lead' data-reveal>
            MERN & Next.js in production — shipping maintainable code for real
            teams.
          </p>
        </div>

        <div
          ref={timelineRef}
          className='mx-auto w-full max-w-2xl'
        >
          <div
            className='relative pl-2'
            style={
              {
                '--tl-color': 'hsl(202 61% 37%)',
                '--tl-bullet-size': '1.65rem',
                '--tl-line-width': '2px',
                '--tl-offset': 'calc(var(--tl-bullet-size) / 2)'
              } as CSSProperties
            }
            role='list'
            aria-label='Work experience'
          >
            {sortedRoles.map((role, index) => {
              const Icon = roleIcons[index % roleIcons.length]
              const isOpen = Boolean(expanded[role.id])
              const isLast = index === sortedRoles.length - 1
              const lineStyle = role.current ? 'dotted' : 'solid'
              const lineColor = role.current
                ? 'var(--tl-color)'
                : 'hsl(var(--border))'

              return (
                <article
                  key={role.id}
                  data-reveal
                  role='listitem'
                  className={`group relative pl-[calc(var(--tl-bullet-size)+1rem)] ${
                    isLast ? 'pb-1' : 'pb-10'
                  }`}
                >
                  {!isLast && (
                    <span
                      aria-hidden
                      className='pointer-events-none absolute bottom-0 top-[var(--tl-bullet-size)] w-0'
                      style={{
                        left: 'calc(var(--tl-offset) - 1px)',
                        borderInlineStart: `var(--tl-line-width) ${lineStyle} ${lineColor}`
                      }}
                    />
                  )}

                  <button
                    type='button'
                    onClick={() => toggle(role.id)}
                    className={`absolute left-0 top-0 flex h-[var(--tl-bullet-size)] w-[var(--tl-bullet-size)] items-center justify-center rounded-full border-2 bg-white transition-colors dark:bg-card ${
                      role.current
                        ? 'border-primary text-primary'
                        : 'border-border text-body/70 hover:border-primary/50 hover:text-primary'
                    }`}
                    aria-expanded={isOpen}
                    aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${role.role} at ${role.company}`}
                  >
                    <Icon className='h-3.5 w-3.5' strokeWidth={2} aria-hidden />
                  </button>

                  <div>
                    <div className='flex flex-wrap items-center gap-x-2.5 gap-y-1'>
                      <h3 className='font-heading !font-semibold uppercase text-base leading-snug tracking-[0.04em] text-primary sm:text-lg'>
                        {role.company}
                      </h3>
                      {role.current && (
                        <span className='text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-600 dark:text-emerald-400'>
                          Current
                        </span>
                      )}
                    </div>

                    <p className='mt-1.5 section-copy font-medium text-heading/85'>
                      {role.role}
                    </p>

                    <p
                      className={`section-copy mt-2.5 text-body ${
                        isOpen ? '' : 'line-clamp-2'
                      }`}
                    >
                      {role.copy}
                    </p>

                    {isOpen && (
                      <div className='mt-4 space-y-4 border-t border-border/60 pt-4'>
                        {role.highlights?.length ? (
                          <ul className='space-y-2'>
                            {role.highlights.map(item => (
                              <li
                                key={item}
                                className='section-copy flex items-start gap-2.5 text-body'
                              >
                                <span
                                  className='mt-2 h-1.5 w-1.5 shrink-0 bg-primary'
                                  aria-hidden
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        ) : null}

                        {role.technologies?.length ? (
                          <div className='flex flex-wrap gap-2'>
                            {role.technologies.map(tech => {
                              const logo = getTechLogo(tech)
                              if (!logo) {
                                return (
                                  <span
                                    key={tech}
                                    className='border border-border/70 bg-muted/40 px-2.5 py-1 text-[12.5px] font-medium text-body/80 dark:border-border/45'
                                  >
                                    {tech}
                                  </span>
                                )
                              }
                              return (
                                <span
                                  key={tech}
                                  title={tech}
                                  className='relative inline-flex h-9 w-9 items-center justify-center overflow-hidden bg-transparent'
                                >
                                  <Image
                                    src={logo}
                                    alt={tech}
                                    width={36}
                                    height={36}
                                    className='h-9 w-9 object-contain'
                                  />
                                </span>
                              )
                            })}
                          </div>
                        ) : null}

                        {'note' in role && role.note ? (
                          <p className='text-[13.5px] text-body/60'>
                            {role.note}
                          </p>
                        ) : null}
                      </div>
                    )}

                    <div className='mt-3.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13.5px] text-body/65'>
                      <time dateTime={role.duration}>{role.duration}</time>
                      <span aria-hidden>·</span>
                      <span>{role.type}</span>
                      <span aria-hidden>·</span>
                      <span>{role.location}</span>
                    </div>

                    <button
                      type='button'
                      onClick={() => toggle(role.id)}
                      className='mt-2.5 text-[14.5px] font-semibold text-primary hover:underline'
                    >
                      {isOpen ? 'Show less' : 'Show more'}
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
