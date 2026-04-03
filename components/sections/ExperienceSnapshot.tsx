'use client'

import { experience } from '@/data/site'
import { motion } from 'framer-motion'

export function ExperienceSnapshot () {
  // Sort by current first, then reverse-chronological
  const sortedRoles = [...experience.roles].sort((a, b) =>
    a.current === b.current ? 0 : a.current ? -1 : 1
  )

  return (
    <section className='section-anchor surface-page py-10'>
      <div className='container-wide space-y-10'>
        {/* Header */}
        <div className='space-y-3 sm:space-y-4'>
          <p className='section-label'>Professional Journey</p>
          <h2 className='section-heading text-2xl sm:text-3xl lg:text-4xl'>
            Experience & <span className='section-heading-accent'>Career</span>
          </h2>
          <p className='max-w-3xl text-base leading-[1.8] text-body sm:text-[1.05rem]'>
            Full-stack developer specializing in MERN stack and Next.js. Leading
            teams to build scalable applications with clean architecture and
            production-ready code.
          </p>
        </div>

        {/* Timeline */}
        <div className='relative pt-4'>
          {/* Vertical line */}
          <div className='absolute bottom-0 left-4 top-1 hidden w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent sm:block' />

          <div className='space-y-5 sm:pl-20'>
            {sortedRoles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='relative'
              >
                {/* Timeline dot */}
                <div className='absolute -left-[50px] top-4 hidden sm:block'>
                  <div className='relative'>
                    <div className='h-3.5 w-3.5 rounded-full border-2 border-white bg-primary shadow-sm dark:border-card' />
                    {role.current && (
                      <div className='absolute inset-0 h-3.5 w-3.5 rounded-full bg-primary/70 animate-ping' />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className='group border border-border/70 surface-panel p-5 shadow-sm transition-all duration-200 hover:border-primary/20 hover:shadow-[0_10px_30px_-20px_rgba(15,23,42,0.28)] dark:border-border/50 dark:hover:shadow-[0_10px_30px_-20px_rgba(0,0,0,0.4)] sm:p-6'>
                  <div className='space-y-4'>
                    {/* Header with role and status */}
                    <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4'>
                      <div>
                        <h3 className='font-heading text-[1.02rem] text-heading sm:text-[1.2rem]'>
                          {role.role}
                        </h3>
                        <p className='mt-0.5 text-xs font-medium uppercase tracking-[0.08em] text-body/60'>
                          {role.company}
                        </p>
                      </div>

                      {role.current && (
                        <div className='flex w-fit items-center gap-2 border border-green-200 bg-green-50/80 px-2.5 py-1 dark:border-emerald-900/50 dark:bg-emerald-950/40 sm:ml-auto'>
                          <span className='relative flex h-2 w-2'>
                            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75'></span>
                            <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
                          </span>
                          <span className='text-[11px] font-semibold text-green-700 dark:text-emerald-400'>
                            Current Role
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Meta info */}
                    <div className='grid gap-2 text-xs sm:grid-cols-3 sm:gap-3'>
                      <div className='md:border-r md:border-border/60  px-3 py-2.5'>
                        <p className='mb-0.5 text-[10px] font-semibold uppercase tracking-wider text-body/55'>
                          Duration
                        </p>
                        <p className='text-xs font-semibold text-heading'>
                          {role.duration}
                        </p>
                      </div>
                      <div className='md:border-r md:border-border/60  px-3 py-2.5'>
                        <p className='mb-0.5 text-[10px] font-semibold uppercase tracking-wider text-body/55'>
                          Type
                        </p>
                        <p className='text-xs font-semibold text-heading'>
                          {role.type}
                        </p>
                      </div>
                      <div className='px-3 py-2.5'>
                        <p className='mb-0.5 text-[10px] font-semibold uppercase tracking-wider text-body/55'>
                          Location
                        </p>
                        <p className='text-xs font-semibold text-heading'>
                          {role.location}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className='border-t border-border/50 pt-3 text-sm leading-[1.75] text-body'>
                      {role.copy}
                    </p>

                    {/* Highlights */}
                    {role.highlights && role.highlights.length > 0 && (
                      <div className='space-y-2 pt-1'>
                        <p className='text-[11px] font-semibold uppercase tracking-wider text-body/60'>
                          Key Contributions
                        </p>
                        <ul className='grid gap-x-4 gap-y-1.5 sm:grid-cols-2'>
                          {role.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className='flex items-start gap-2 text-[13px] leading-relaxed text-body/85'
                            >
                              <span className='mt-1 text-primary font-bold'>
                                ✓
                              </span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech stack */}
                    {role.technologies && role.technologies.length > 0 && (
                      <div className='space-y-2 pt-2'>
                        <p className='text-[11px] font-semibold uppercase tracking-wider text-body/60'>
                          Tech Stack
                        </p>
                        <div className='flex flex-wrap gap-1.5'>
                          {role.technologies.map(tech => (
                            <span
                              key={tech}
                              className='border border-border/80 bg-secondary px-2.5 py-1 text-[10px] font-semibold text-heading transition-colors hover:border-primary/40'
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
