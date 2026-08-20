'use client'

import { SectionDisplayTag } from '@/components/ui/SectionDisplayTag'
import { codeQuality, site } from '@/data/site'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Github } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const PRIMARY = '#246b96'

const PRINCIPLES = [
  {
    id: '01',
    title: 'Maintainable',
    line: 'Clear structure and naming so the next feature does not fight the last one.'
  },
  {
    id: '02',
    title: 'Reusable',
    line: 'Shared components and patterns that cut repeat work across screens and flows.'
  },
  {
    id: '03',
    title: 'Reliable',
    line: 'APIs, auth, and data paths that behave under real traffic — not just demos.'
  },
  {
    id: '04',
    title: 'Practical',
    line: 'Ship what the product needs now, with room to grow without a rewrite.'
  }
] as const

const EASE = [0.22, 1, 0.36, 1] as const

/**
 * Code quality — numbered principles + live snippet. No busy orbit gimmicks.
 */
export function CodeQualitySection () {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduceMotion = useReducedMotion()
  const current = PRINCIPLES[active]

  useEffect(() => {
    if (paused || reduceMotion) return
    const id = window.setInterval(() => {
      setActive(prev => (prev + 1) % PRINCIPLES.length)
    }, 3800)
    return () => window.clearInterval(id)
  }, [paused, reduceMotion])

  return (
    <section className='section-anchor border-t border-border/50 surface-page py-14 md:py-20'>
      <div className='container-wide space-y-10 md:space-y-12'>
        <header className='section-header'>
          <SectionDisplayTag tag='Code' pattern='chevron' />
          <p className='section-lead'>{codeQuality.copy}</p>
        </header>

        <div
          className='mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-12 lg:items-start'
          onMouseLeave={() => setPaused(false)}
        >
          {/* Principles list */}
          <ol className='space-y-0' onMouseEnter={() => setPaused(true)}>
            {PRINCIPLES.map((item, i) => {
              const isActive = active === i
              return (
                <li key={item.id}>
                  <button
                    type='button'
                    onMouseEnter={() => {
                      setActive(i)
                      setPaused(true)
                    }}
                    onFocus={() => {
                      setActive(i)
                      setPaused(true)
                    }}
                    onClick={() => {
                      setActive(i)
                      setPaused(true)
                    }}
                    className='group flex w-full items-start gap-4 border-b border-border/60 py-4 text-left transition-colors last:border-b-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 sm:gap-5 sm:py-5'
                    aria-pressed={isActive}
                  >
                    <span
                      className='font-heading text-2xl font-black tabular-nums leading-none tracking-tight sm:text-3xl'
                      style={{
                        color: isActive ? PRIMARY : 'hsl(var(--heading) / 0.14)'
                      }}
                    >
                      {item.id}
                    </span>
                    <span className='min-w-0 flex-1 pt-0.5'>
                      <span
                        className='font-heading text-base font-semibold uppercase tracking-[0.06em] sm:text-lg'
                        style={{
                          color: isActive ? PRIMARY : 'hsl(var(--heading))'
                        }}
                      >
                        {item.title}
                      </span>
                      <AnimatePresence initial={false}>
                        {isActive ? (
                          <motion.p
                            key={item.id}
                            initial={
                              reduceMotion ? false : { opacity: 0, height: 0 }
                            }
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={
                              reduceMotion
                                ? undefined
                                : { opacity: 0, height: 0 }
                            }
                            transition={{ duration: 0.28, ease: EASE }}
                            className='section-copy mt-1.5 overflow-hidden text-body/80'
                          >
                            {item.line}
                          </motion.p>
                        ) : null}
                      </AnimatePresence>
                    </span>
                  </button>
                </li>
              )
            })}
          </ol>

          {/* Quiet code panel */}
          <div className='overflow-hidden border border-border/70 bg-[#0c1222] shadow-[0_18px_40px_-28px_rgba(15,23,42,0.45)] dark:border-border/40'>
            <div className='flex items-center gap-2 border-b border-white/10 px-4 py-2.5'>
              <span className='h-2.5 w-2.5 rounded-full bg-[#ff5f57]' aria-hidden />
              <span className='h-2.5 w-2.5 rounded-full bg-[#febc2e]' aria-hidden />
              <span className='h-2.5 w-2.5 rounded-full bg-[#28c840]' aria-hidden />
              <span className='ml-2 font-mono text-[11px] tracking-wide text-slate-500'>
                quality.ts
              </span>
            </div>

            <pre className='overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed text-slate-300 sm:p-6 sm:text-[13px]'>
              <code>
                <span className='text-slate-500'>{'// how the work ships'}</span>
                {'\n'}
                <span className='text-[#7dd3fc]'>export const</span>
                <span className='text-white'> quality </span>
                <span className='text-slate-500'>=</span>
                {' {\n'}
                {PRINCIPLES.map((item, i) => {
                  const on = active === i
                  return (
                    <span key={item.id}>
                      {'  '}
                      <span className={on ? 'text-white' : 'text-slate-400'}>
                        {item.title.toLowerCase()}
                      </span>
                      <span className='text-slate-500'>: </span>
                      <span className={on ? 'text-[#86efac]' : 'text-slate-500'}>
                        true
                      </span>
                      {i < PRINCIPLES.length - 1 ? ',\n' : '\n'}
                    </span>
                  )
                })}
                {'}\n\n'}
                <span className='text-slate-500'>{'// focus →'}</span>
                {'\n'}
                <AnimatePresence mode='wait'>
                  <motion.span
                    key={current.id}
                    initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -4 }}
                    transition={{ duration: 0.28, ease: EASE }}
                    className='inline-block'
                  >
                    <span className='text-[#7dd3fc]'>quality.</span>
                    <span className='text-[#fde68a]'>
                      {current.title.toLowerCase()}
                    </span>
                    <span className='text-slate-500'>
                      {' // '}
                      {current.line}
                    </span>
                  </motion.span>
                </AnimatePresence>
              </code>
            </pre>
          </div>
        </div>

        <div className='flex flex-wrap items-center justify-center gap-3'>
          <Link
            href='/projects'
            className='inline-flex items-center gap-2 bg-heading px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary'
          >
            Review case studies
            <ArrowRight className='h-4 w-4' aria-hidden />
          </Link>
          <Link
            href={site.github}
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-2 border border-border/70 px-5 py-2.5 text-sm font-semibold text-heading transition-colors hover:border-primary/35 hover:text-primary dark:border-border/50'
          >
            <Github className='h-4 w-4' aria-hidden />
            View GitHub
          </Link>
        </div>
      </div>
    </section>
  )
}
