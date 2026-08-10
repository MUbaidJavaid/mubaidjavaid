'use client'

import { BrandSection } from '@/components/brand/system/BrandSection'
import { openSource, site } from '@/data/site'
import { brandMotion } from '@/lib/brand-system'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Code2, Eye, GitBranch, Github } from 'lucide-react'
import Link from 'next/link'

export function BrandOpenSource () {
  const reduce = useReducedMotion()

  return (
    <BrandSection
      id='open-source'
      layout='band'
      className='min-h-0 bg-[hsl(214_32%_97%)]'
    >
      <div className='mx-auto w-full max-w-[1400px] px-3 py-10 sm:px-4 md:px-5 md:py-14 lg:px-6 lg:py-16'>
        <div className='relative isolate min-h-[520px] overflow-hidden rounded-[1.75rem] bg-[#06080f] text-white shadow-[0_44px_90px_-42px_hsl(215_48%_18%/0.65)] md:rounded-[2.25rem]'>
          <div
            className='pointer-events-none absolute inset-0 opacity-30'
            aria-hidden
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(255,255,255,0.2) 0.7px, transparent 0.8px)',
              backgroundSize: '22px 22px'
            }}
          />
          <div
            className='pointer-events-none absolute -left-24 bottom-[-35%] h-[70%] w-[55%] rounded-full bg-[hsl(215_48%_30%/0.42)] blur-3xl'
            aria-hidden
          />
          <div
            className='pointer-events-none absolute -right-20 top-[-20%] h-[70%] w-[55%] rounded-full bg-[hsl(211_80%_48%/0.18)] blur-3xl'
            aria-hidden
          />
          <p
            className='pointer-events-none absolute -bottom-[0.12em] -right-[0.03em] select-none font-display text-[clamp(5rem,17vw,13rem)] font-bold leading-none tracking-[-0.07em] text-white/[0.035]'
            aria-hidden
          >
            SOURCE
          </p>

          <div className='relative z-10 grid min-h-[520px] lg:grid-cols-[0.9fr_1.1fr] lg:items-center'>
            <motion.div
              className='px-6 pb-8 pt-12 sm:px-8 md:px-10 md:pt-14 lg:px-12 lg:py-16 xl:px-16'
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: brandMotion.durationSlow, ease: brandMotion.ease }}
            >
              <p className='font-mono text-[0.6875rem] uppercase tracking-[0.26em] text-[hsl(211_90%_68%)]'>
                {openSource.title} · Public by default
              </p>

              <h2 className='mt-5 font-display text-[clamp(2.4rem,5vw,4.6rem)] font-bold leading-[0.95] tracking-[-0.045em]'>
                <span className='text-white'>Code you can open.</span>
                <br />
                <span className='text-[hsl(211_55%_68%)]'>Work you can trust.</span>
              </h2>

              <p className='mt-6 max-w-[39ch] text-sm leading-relaxed text-white/[0.62] md:text-base'>
                Repositories, experiments, and project history—inspect the
                decisions, code quality, and progress before we work together.
              </p>

              <div className='mt-8 flex flex-wrap items-center gap-3'>
                <Link
                  href={site.github}
                  target='_blank'
                  rel='noreferrer'
                  className='group inline-flex items-center gap-3 bg-[hsl(211_48%_42%)] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_-14px_hsl(211_60%_30%/0.9)] transition-colors hover:bg-[hsl(211_48%_36%)]'
                >
                  <Github size={17} strokeWidth={1.7} aria-hidden />
                  Explore repositories
                  <ArrowUpRight
                    size={15}
                    className='transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                    aria-hidden
                  />
                </Link>
                <span className='font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/[0.35]'>
                  Inspect before you hire
                </span>
              </div>
            </motion.div>

            <motion.div
              className='px-5 pb-10 sm:px-8 md:px-10 lg:px-10 lg:py-12 lg:pl-4 xl:pr-14'
              initial={reduce ? false : { opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{
                duration: brandMotion.durationSlow,
                delay: reduce ? 0 : 0.08,
                ease: brandMotion.ease
              }}
            >
              <div className='relative overflow-hidden rounded-[1.5rem] border border-white/[0.12] bg-white/[0.065] p-5 shadow-[0_28px_70px_-30px_hsl(211_80%_48%/0.55)] backdrop-blur-md sm:p-7 md:rounded-[1.75rem] md:p-8'>
                <div
                  className='pointer-events-none absolute right-0 top-0 h-44 w-44 bg-[radial-gradient(circle_at_top_right,hsl(211_75%_58%/0.2),transparent_68%)]'
                  aria-hidden
                />

                <div className='relative flex items-center justify-between gap-4'>
                  <div className='flex items-center gap-3'>
                    <span className='flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.15] bg-white/10 text-white'>
                      <Github size={19} strokeWidth={1.55} aria-hidden />
                    </span>
                    <div>
                      <p className='font-mono text-[0.5625rem] uppercase tracking-[0.22em] text-white/[0.38]'>
                        Public surface
                      </p>
                      <p className='mt-1 font-display text-sm font-semibold text-white/[0.85]'>
                        github.com/MUbaidJavaid
                      </p>
                    </div>
                  </div>
                  <span className='hidden items-center gap-2 rounded-full border border-[hsl(152_55%_55%/0.25)] bg-[hsl(152_55%_45%/0.08)] px-3 py-1.5 font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-[hsl(152_60%_70%)] sm:inline-flex'>
                    <span className='h-1.5 w-1.5 rounded-full bg-[hsl(152_60%_58%)]' />
                    Public
                  </span>
                </div>

                <div className='relative my-6 h-px bg-white/10' />

                <div className='relative space-y-3'>
                  {openSource.links.map((link, index) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target='_blank'
                      rel='noreferrer'
                      className='group block rounded-2xl border border-white/10 bg-[#090d16]/75 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(211_70%_65%/0.38)] hover:bg-[#0b111e]'
                    >
                      <div className='flex items-start justify-between gap-4'>
                        <div>
                          <p className='font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-[hsl(211_70%_68%)]'>
                            {String(index + 1).padStart(2, '0')} · Repository
                          </p>
                          <h3 className='mt-3 font-display text-xl font-semibold tracking-tight text-white md:text-2xl'>
                            {link.label}
                          </h3>
                          <p className='mt-2 text-sm text-white/50'>{link.note}</p>
                        </div>
                        <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.15] text-white/[0.55] transition-all group-hover:border-white/[0.35] group-hover:text-white'>
                          <ArrowUpRight size={15} aria-hidden />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className='relative mt-5 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-5'>
                  {[
                    { label: 'Source', Icon: Code2 },
                    { label: 'History', Icon: GitBranch },
                    { label: 'Inspectable', Icon: Eye }
                  ].map(item => (
                    <div
                      key={item.label}
                      className='flex flex-col items-center gap-2 px-2 text-center'
                    >
                      <item.Icon
                        size={15}
                        strokeWidth={1.5}
                        className='text-[hsl(211_65%_68%)]'
                        aria-hidden
                      />
                      <span className='font-mono text-[0.5rem] uppercase tracking-[0.12em] text-white/[0.38] sm:text-[0.5625rem]'>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </BrandSection>
  )
}
