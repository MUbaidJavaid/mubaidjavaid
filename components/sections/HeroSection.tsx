'use client'

import { TypingTagline } from '@/components/hero/TypingTagline'
import ClickSpark from '@/components/ui/ClickSpark'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { Button } from '@/components/ui/button'
import { heroContent, heroTaglines } from '@/data/site'
import { motion, useReducedMotion } from 'framer-motion'

export function HeroSection () {
  const reduce = useReducedMotion()

  return (
    <section className='section-anchor relative overflow-hidden surface-page py-12 md:py-16 lg:py-20'>
      {/* Subtle floating gradient orb: depth without clutter */}
      <div
        className='pointer-events-none absolute -left-[18%] top-[8%] h-[min(52vw,420px)] w-[min(52vw,420px)] rounded-full opacity-[0.38] blur-3xl dark:opacity-[0.22]'
        aria-hidden
        style={{
          background:
            'radial-gradient(circle at 40% 40%, hsl(var(--primary) / 0.45), transparent 62%)'
        }}
      />
      <motion.div
        className='pointer-events-none absolute right-[-12%] top-[22%] h-[min(42vw,320px)] w-[min(42vw,320px)] rounded-full opacity-[0.28] blur-3xl dark:opacity-[0.18]'
        aria-hidden
        style={{
          background:
            'radial-gradient(circle at 50% 50%, hsl(188 72% 42% / 0.35), transparent 65%)'
        }}
        animate={
          reduce
            ? undefined
            : {
                y: [0, -14, 0],
                x: [0, 6, 0]
              }
        }
        transition={
          reduce
            ? undefined
            : { duration: 14, repeat: Infinity, ease: 'easeInOut' }
        }
      />

      <div className='container-wide relative z-10 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pt-1'>
        <motion.div
          className='space-y-6 lg:space-y-7'
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className='inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/85'>
            <span className='h-1.5 w-1.5 bg-primary' />
            Full-Stack Developer
          </p>
          <h1 className='section-heading max-w-[22ch] text-[2.25rem] leading-[1.04] sm:text-[2.8rem] lg:text-[3.3rem]'>
            <span className='text-heading dark:text-slate-50'>M Ubaid </span>
            <span className='section-heading-accent'>Javaid</span>
            <div className=' min-h-[2.1rem]'>
              <TypingTagline
                phrases={heroTaglines}
                className='text-lg font-medium tracking-normal text-body sm:text-[1.35rem] dark:text-slate-300'
              />
            </div>
          </h1>
          <p className='max-w-2xl text-base leading-[1.95] text-body sm:text-[1.05rem]'>
            {heroContent.paragraph}
          </p>
          <p className='max-w-2xl text-sm leading-[1.85] text-body sm:text-base'>
            {heroContent.support}
          </p>
          <div className='flex flex-wrap items-center gap-4'>
            <ClickSpark>
              <Button
                href='/projects'
                className='group relative overflow-hidden bg-[#0F172A] px-7 py-3 text-sm font-semibold text-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1e293b] hover:shadow-float dark:bg-slate-800 dark:hover:bg-slate-700'
              >
                View Projects
                <span className='ml-2 inline-block transition-transform duration-200 group-hover:translate-x-0.5'>
                  →
                </span>
              </Button>
            </ClickSpark>
            <MagneticButton
              href='/contact'
              className='group flex items-center justify-center gap-2 border border-primary/35 bg-transparent px-6 py-3 text-sm font-semibold text-primary shadow-none transition-[box-shadow,background-color,border-color] hover:border-primary/55 hover:bg-primary/10 hover:shadow-card dark:hover:bg-primary/15'
            >
              Hire Me
              <span className='inline-block transition-transform duration-200 group-hover:translate-x-0.5'>
                →
              </span>
            </MagneticButton>
          </div>
          <p className='flex items-center gap-2 text-[.82rem] text-body/75'>
            <span className='h-2 w-2 animate-pulse rounded-full bg-emerald-500' />
            {heroContent.availability}
          </p>
          <ul className='grid max-w-xl grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2'>
            {[
              'Full-stack delivery from brief to launch.',
              'Clean React / Next.js frontend architecture.',
              'Reliable Node.js / Express & MongoDB backends.',
              'Performance, usability & production readiness.'
            ].map((item, i) => (
              <motion.li
                key={item}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className='flex items-start gap-2 text-[.82rem] leading-[1.65] text-body/75'
              >
                <span className='mt-0.5 flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[3px] bg-primary/12 text-[9px] text-primary dark:bg-primary/20'>
                  ✦
                </span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className='relative grid gap-4 sm:mx-auto sm:max-w-lg lg:mx-0'
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className='overflow-hidden rounded-2xl border border-border/55 bg-white shadow-card ring-1 ring-black/[0.02] dark:border-border/60 dark:bg-card dark:ring-white/5'>
            <div className='flex items-center justify-between border-b border-border/55 bg-[#F8FAFC] px-4 py-2.5 dark:border-border/50 dark:bg-slate-900/80'>
              <div className='flex items-center gap-2'>
                <span className='h-2.5 w-2.5 rounded-full bg-[#FF5F57]' />
                <span className='h-2.5 w-2.5 rounded-full bg-[#FEBC2E]' />
                <span className='h-2.5 w-2.5 rounded-full bg-[#28C840]' />
              </div>
              <p className='font-mono text-[11px] text-body/60'>
                build-profile.ts
              </p>
            </div>
            <div className='space-y-4 p-5'>
              <div className='p-4'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.13em] text-primary/80'>
                  Focus Areas
                </p>
                <p className='mt-2 text-sm leading-relaxed text-body/85'>
                  Product architecture, maintainable frontend systems, reliable
                  backend workflows, and delivery-ready execution.
                </p>
              </div>

              <div className='relative grid overflow-hidden sm:grid-cols-2 before:pointer-events-none before:absolute before:inset-y-0 before:left-1/2 before:w-px before:-translate-x-1/2 before:bg-border/70 after:pointer-events-none after:absolute after:inset-x-0 after:top-1/2 after:h-px after:-translate-y-1/2 after:bg-border/70'>
                {[
                  { label: 'Primary stack', value: 'MERN + Next.js' },
                  {
                    label: 'Delivery mode',
                    value: 'End-to-end product builds'
                  },
                  { label: 'Response', value: 'Within 24 hours' },
                  { label: 'Timezone', value: 'PKT · Remote friendly' }
                ].map(item => (
                  <div key={item.label} className='bg-white p-3.5 dark:bg-card'>
                    <p className='text-[10px] font-semibold uppercase tracking-[0.12em] text-body/55'>
                      {item.label}
                    </p>
                    <p className='mt-1 text-[13px] font-semibold text-heading'>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className='rounded-md bg-gradient-to-br from-slate-600 via-slate-700 to-[hsl(202_42%_36%)] p-4 text-white shadow-sm ring-1 ring-slate-900/10 dark:bg-[linear-gradient(145deg,#0F172A_0%,#1e1b4b_58%,#1d4ed8_120%)] dark:shadow-none dark:ring-0'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-200/95'>
                  Collaboration Promise
                </p>
                <p className='mt-2 text-sm leading-relaxed text-slate-100/95'>
                  Clear scope, weekly updates, and production-safe delivery
                  decisions, so progress stays visible and reliable.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
