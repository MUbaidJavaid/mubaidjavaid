'use client'

import { BrandSection } from '@/components/brand/system/BrandSection'
import { contactCta, site } from '@/data/site'
import { brandMotion } from '@/lib/brand-system'
import { cn } from '@/lib/utils'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Handshake, Mail, MessageCircle, Phone } from 'lucide-react'
import Link from 'next/link'

function FloatingHex ({ className }: { className?: string }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={cn(
        'relative h-[180px] w-[180px] md:h-[210px] md:w-[210px]',
        className
      )}
      initial={reduce ? false : { opacity: 0, scale: 0.88, y: 18 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-6%' }}
      transition={{ duration: 0.8, ease: brandMotion.ease }}
    >
      <svg
        viewBox='0 0 220 220'
        className='absolute inset-0 h-full w-full'
        aria-hidden
      >
        <polygon
          points='110,10 200,58 200,162 110,210 20,162 20,58'
          fill='hsl(215 48% 13%)'
        />
        <polygon
          points='110,26 184,68 184,152 110,194 36,152 36,68'
          fill='hsl(215 32% 24% / 0.5)'
          stroke='hsl(0 0% 100% / 0.3)'
          strokeWidth='1.75'
        />
        {/* <polygon
          points='110,50 162,80 162,140 110,170 58,140 58,80'
          fill='hsl(211 48% 42%)'
        /> */}
      </svg>

      <div className='absolute inset-0 flex items-center justify-center'>
        <Handshake
          className='text-white'
          size={38}
          strokeWidth={1.45}
          aria-hidden
        />
      </div>
    </motion.div>
  )
}

const rows = [
  {
    label: "Let's Talk",
    note: 'Share your product goals',
    href: '/contact',
    Icon: MessageCircle
  },
  {
    label: 'Email Us',
    note: site.email,
    href: `mailto:${site.email}`,
    Icon: Mail
  },
  {
    label: 'Call Us',
    note: 'Book a discovery call',
    href: '/contact',
    Icon: Phone
  }
] as const

export function BrandContact () {
  const reduce = useReducedMotion()

  return (
    <BrandSection
      id='contact'
      layout='band'
      className='min-h-0 border-t border-border/70'
    >
      <div className='mx-auto w-full max-w-[1400px] px-3 py-10 sm:px-4 md:px-5 md:py-14 lg:px-6 lg:py-16'>
        <div
          className={cn(
            'relative isolate overflow-hidden bg-[hsl(214_32%_97%)]',
            'rounded-[1.75rem] md:rounded-[2.25rem]',
            'lg:min-h-[400px]'
          )}
        >
          <div
            className='absolute inset-0 hidden bg-[hsl(215_48%_13%)] lg:block'
            aria-hidden
          />

          <svg
            className='pointer-events-none absolute inset-0 hidden h-full w-full lg:block'
            viewBox='0 0 1200 560'
            preserveAspectRatio='none'
            aria-hidden
          >
            <path
              d='M620 0
                 C 540 70, 700 120, 580 200
                 C 480 270, 700 330, 560 410
                 C 480 470, 640 520, 600 560
                 L 1200 560 L 1200 0 Z'
              fill='hsl(214 32% 97%)'
            />
          </svg>

          {/* Bottom-right dots */}
          <div
            className='pointer-events-none absolute bottom-6 right-6 z-20 h-18 w-28 opacity-70 md:bottom-8 md:right-8 md:h-16 md:w-32'
            aria-hidden
            style={{
              backgroundImage:
                'radial-gradient(circle, hsl(215 48% 18% / 0.32) 1.05px, transparent 1.15px)',
              backgroundSize: '9px 9px',
              backgroundPosition: 'bottom right'
            }}
          />

          <div className='relative z-10 grid lg:grid-cols-2 lg:items-center'>
            {/* LEFT */}
            <div className='bg-[hsl(215_48%_13%)] px-5 py-10 text-white sm:px-7 md:px-10 md:py-14 lg:bg-transparent lg:px-8 lg:py-16 lg:pr-16'>
              <p className='font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[hsl(211_70%_72%)]'>
                Let&apos;s work together
              </p>

              <h2 className='mt-4 font-display text-[clamp(2rem,4vw,3.1rem)] font-bold leading-[1.06] tracking-tight'>
                <span className='text-white'>Your Vision.</span>
                <br />
                <span className='text-[hsl(211_55%_68%)]'>My Commitment.</span>
              </h2>

              <p className='mt-4 max-w-[34ch] text-sm leading-relaxed text-white/70'>
                {contactCta.body}
              </p>

              <div className='mt-8 flex items-center gap-3'>
                <Link
                  href='/contact'
                  className='inline-flex items-center bg-[hsl(211_48%_42%)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[hsl(211_48%_36%)]'
                >
                  Start a Project
                </Link>
                <Link
                  href='/contact'
                  aria-label='Go to contact'
                  className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:border-white hover:bg-white/10'
                >
                  <ArrowRight size={17} strokeWidth={1.75} />
                </Link>
              </div>

              <p className='mt-6 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-white/40'>
                {contactCta.support}
              </p>
            </div>

            {/* RIGHT — icon column | copy+chevrons (parked toward right edge) */}
            <div className='relative px-5 py-8 sm:px-7 md:px-10 md:py-10 lg:py-16 lg:pl-20 lg:pr-10'>
              <div
                className='pointer-events-none absolute -right-8 -top-8 h-24 w-24 opacity-60 lg:hidden'
                aria-hidden
                style={{
                  backgroundImage:
                    'radial-gradient(circle, hsl(215 48% 18% / 0.25) 1px, transparent 1.1px)',
                  backgroundSize: '8px 8px'
                }}
              />
              <div className='flex w-full max-w-md gap-4 sm:max-w-lg lg:ml-auto lg:max-w-[28rem]'>
                {/* 1) Icon column */}
                <div className='flex shrink-0 flex-col'>
                  {rows.map((row, i) => (
                    <div
                      key={row.label}
                      className={cn(
                        'flex items-center py-5',
                        i > 0 && 'border-t border-transparent'
                      )}
                    >
                      <Link
                        href={row.href}
                        aria-label={row.label}
                        className='flex h-11 w-11 items-center justify-center rounded-full bg-[hsl(215_48%_13%)] text-white transition-colors hover:bg-[hsl(211_48%_42%)]'
                      >
                        <row.Icon size={17} strokeWidth={1.6} />
                      </Link>
                    </div>
                  ))}
                </div>

                {/* 2) Text + chevrons + dividers */}
                <ul className='min-w-0 flex-1'>
                  {rows.map((row, i) => (
                    <motion.li
                      key={row.label}
                      initial={reduce ? false : { opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: brandMotion.duration,
                        delay: reduce ? 0 : 0.1 + i * 0.07,
                        ease: brandMotion.ease
                      }}
                    >
                      <Link
                        href={row.href}
                        className={cn(
                          'group flex min-h-[3.75rem] items-center gap-3 py-5',
                          i > 0 && 'border-t border-heading/10'
                        )}
                      >
                        <span className='min-w-0 flex-1'>
                          <span className='block font-display text-base font-semibold tracking-tight text-heading'>
                            {row.label}
                          </span>
                          <span className='mt-0.5 block truncate text-sm text-body'>
                            {row.note}
                          </span>
                        </span>
                        <ArrowRight
                          size={15}
                          strokeWidth={1.75}
                          className='shrink-0 text-heading/40 transition-transform group-hover:translate-x-1 group-hover:text-heading'
                        />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Center floating hex on seam */}
          <div className='pointer-events-none absolute left-[48%] top-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 lg:block'>
            <FloatingHex />
          </div>
        </div>
      </div>
    </BrandSection>
  )
}
