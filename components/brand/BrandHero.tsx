'use client'

import { heroContent, site } from '@/data/site'
import { brandMotion } from '@/lib/brand-system'
import { cn } from '@/lib/utils'
import { motion, useReducedMotion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const scrollCueItems = [
  { label: 'Scroll', href: '#proof' },
  { label: 'Work', href: '#impact' },
  { label: 'Connect', href: '#contact' }
] as const

function HeroScrollCue ({ reduce }: { reduce: boolean | null }) {
  const [active, setActive] = useState(0)
  const [hovered, setHovered] = useState<number | null>(null)
  const current = hovered ?? active

  useEffect(() => {
    if (reduce || hovered !== null) return
    const id = window.setInterval(() => {
      setActive(i => (i + 1) % scrollCueItems.length)
    }, 2200)
    return () => window.clearInterval(id)
  }, [reduce, hovered])

  return (
    <div className='absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center md:right-8 lg:flex'>
      <div
        className='flex flex-col items-center gap-5'
        role='navigation'
        aria-label='Section shortcuts'
      >
        {scrollCueItems.map((item, i) => {
          const isActive = current === i
          return (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              aria-current={isActive ? 'true' : undefined}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
              className='relative flex h-4 w-4 items-center justify-center'
            >
              <span
                className={cn(
                  'absolute rounded-full border transition-all duration-300',
                  isActive
                    ? 'h-3.5 w-3.5 border-[hsl(211_90%_60%)]'
                    : 'h-0 w-0 border-transparent'
                )}
                aria-hidden
              />
              <span
                className={cn(
                  'rounded-full transition-all duration-300',
                  isActive
                    ? 'h-1.5 w-1.5 bg-[hsl(211_90%_60%)]'
                    : 'h-1 w-1 bg-white/25 hover:bg-white/50'
                )}
                aria-hidden
              />
            </a>
          )
        })}
      </div>

      <a
        href={scrollCueItems[current].href}
        className='mt-10 font-mono text-[0.5625rem] uppercase tracking-[0.35em] text-white/40 [writing-mode:vertical-rl] transition-colors hover:text-white/70'
      >
        {scrollCueItems[current].label}
      </a>
    </div>
  )
}

/**
 * Cinematic hero — composition inspired by editorial designer portfolios
 * (full-bleed presence, vertical role, ghost portrait, watermark, scroll cue).
 * Adapted for Product Engineer brand — not a feature list, not a split card.
 */
export function BrandHero () {
  const reduce = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const portraitReady = mounted && (imageLoaded || !!reduce)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id='hero'
      data-hero-theme='ink'
      className='relative min-h-[100svh] overflow-hidden bg-[#06080f] text-white'
      style={{ backgroundColor: '#06080f' }}
    >
      {/* Dot grid */}
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.35]'
        aria-hidden
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.22) 0.7px, transparent 0.8px)',
          backgroundSize: '22px 22px'
        }}
      />

      {/* Soft blue bloom */}
      <div
        className='pointer-events-none absolute -right-24 top-1/4 h-[55%] w-[50%] rounded-full bg-[hsl(211_80%_48%/0.16)] blur-3xl'
        aria-hidden
      />
      <div
        className='pointer-events-none absolute -left-20 bottom-0 h-[40%] w-[40%] rounded-full bg-[hsl(215_48%_30%/0.35)] blur-3xl'
        aria-hidden
      />

      {/* Ghost portrait — hidden until decoded so raw image never flashes before CSS */}
      <motion.div
        className='pointer-events-none absolute inset-y-0 right-0 w-[64%] max-w-3xl overflow-hidden'
        initial={reduce ? false : { opacity: 0, x: 40 }}
        animate={{ opacity: portraitReady ? 1 : 0, x: 0 }}
        transition={{ duration: 1.1, ease: brandMotion.ease }}
        aria-hidden
      >
        <div className='absolute inset-x-0 bottom-0 top-[14%]'>
          <Image
            src='/mubaidjavaid-hero-banaer.jpg'
            alt=''
            fill
            priority
            sizes='(max-width: 1024px) 75vw, 55vw'
            onLoad={() => setImageLoaded(true)}
            onLoadingComplete={() => setImageLoaded(true)}
            style={{
              objectFit: 'cover',
              objectPosition: '50% 0%',
              opacity: portraitReady ? 0.78 : 0,
              transition: 'opacity 0.45s ease'
            }}
            className='mix-blend-multiply contrast-[1.06] brightness-[1.04]'
          />
        </div>
        <div className='absolute inset-0 bg-gradient-to-r from-[#06080f] via-[#06080f]/50 to-transparent' />
        <div className='absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-[#06080f] to-transparent' />
        <div className='absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-[#06080f]/45 to-transparent' />
      </motion.div>

      {/* Giant watermark */}
      <motion.p
        className='pointer-events-none absolute bottom-[-0.08em] right-[-0.04em] select-none font-display text-[clamp(5rem,22vw,14rem)] font-bold leading-none tracking-[-0.06em] text-white/[0.04]'
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        aria-hidden
      >
        MERN
      </motion.p>

      {/* Vertical role — left of name block */}
      <p
        className='pointer-events-none absolute left-3 top-1/2 hidden -translate-y-1/2 font-mono text-[0.625rem] uppercase tracking-[0.42em] text-white/35 [writing-mode:vertical-rl] rotate-180 md:left-5 lg:left-8 lg:block'
        aria-hidden
      >
        product · engineer
      </p>

      {/* Main copy */}
      <div className='relative z-10 mx-auto flex min-h-[100svh] max-w-[1180px] flex-col justify-center px-6 pb-24 pt-28 md:px-10 lg:px-12'>
        <div className='max-w-xl lg:max-w-2xl'>
          <motion.p
            className='font-mono text-[0.6875rem] uppercase tracking-[0.28em] text-[hsl(211_90%_68%)]'
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: brandMotion.duration,
              ease: brandMotion.ease
            }}
          >
            {site.role}
          </motion.p>

          <div className='mt-5 flex items-start gap-4 md:gap-5'>
            <motion.span
              className='mt-3 hidden font-mono text-[0.625rem] uppercase tracking-[0.35em] text-white/40 [writing-mode:vertical-rl] rotate-180 sm:block'
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              aria-hidden
            >
              Engineer
            </motion.span>

            <motion.h1
              className='font-display text-[clamp(3.25rem,8.5vw,6.75rem)] font-bold leading-[0.92] tracking-[-0.045em] text-white'
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: brandMotion.durationSlow,
                delay: reduce ? 0 : 0.06,
                ease: brandMotion.ease
              }}
            >
              {site.name}
            </motion.h1>
          </div>

          <motion.p
            className='mt-7 max-w-[34ch] text-base leading-relaxed text-white/65 md:text-lg'
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: brandMotion.duration,
              delay: reduce ? 0 : 0.14,
              ease: brandMotion.ease
            }}
          >
            {heroContent.line} {site.role} based in {site.location} — building
            platforms teams can ship and extend.
          </motion.p>

          <motion.ul
            className='mt-5 flex max-w-xl flex-wrap gap-2.5'
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: brandMotion.duration,
              delay: reduce ? 0 : 0.18,
              ease: brandMotion.ease
            }}
            aria-label='Core skills'
          >
            {heroContent.skills.map(skill => (
              <li
                key={skill}
                className='rounded-full bg-white/[0.08] px-4 py-2 text-[0.8125rem] font-semibold tracking-tight text-white'
              >
                {skill}
              </li>
            ))}
          </motion.ul>

          <motion.div
            className='mt-10'
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: brandMotion.duration,
              delay: reduce ? 0 : 0.22,
              ease: brandMotion.ease
            }}
          >
            <Link
              href='/projects'
              className={cn(
                'group relative inline-flex items-center overflow-visible',
                'border border-white/40 bg-white/[0.03] px-8 py-3.5 pl-10',
                'text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-white',
                'transition-all duration-300',
                'hover:border-white/70 hover:bg-white/[0.06]'
              )}
            >
              <span
                className={cn(
                  'absolute left-0 top-1/2 h-[2px] w-10 -translate-x-1/2 -translate-y-1/2',
                  'bg-[hsl(211_90%_60%)]',
                  'transition-all duration-300 group-hover:w-14 group-hover:bg-[hsl(211_90%_68%)]'
                )}
                aria-hidden
              />
              View work
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Left social rail */}
      <div className='absolute bottom-8 left-5 z-20 hidden flex-col gap-4 md:left-8 lg:flex'>
        {[
          { href: `mailto:${site.email}`, label: 'Email', Icon: Mail },
          { href: site.github, label: 'GitHub', Icon: Github },
          { href: site.linkedin, label: 'LinkedIn', Icon: Linkedin }
        ].map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
            aria-label={label}
            className='text-white/45 transition-colors hover:text-[hsl(211_90%_68%)]'
          >
            <Icon size={16} strokeWidth={1.5} />
          </a>
        ))}
      </div>

      <HeroScrollCue reduce={reduce} />

      {/* Mobile social + scroll */}
      <div className='absolute bottom-6 left-0 right-0 z-20 flex items-center justify-between px-6 lg:hidden'>
        <div className='flex gap-4'>
          <a
            href={`mailto:${site.email}`}
            aria-label='Email'
            className='text-white/50'
          >
            <Mail size={16} strokeWidth={1.5} />
          </a>
          <a
            href={site.github}
            target='_blank'
            rel='noreferrer'
            aria-label='GitHub'
            className='text-white/50'
          >
            <Github size={16} strokeWidth={1.5} />
          </a>
          <a
            href={site.linkedin}
            target='_blank'
            rel='noreferrer'
            aria-label='LinkedIn'
            className='text-white/50'
          >
            <Linkedin size={16} strokeWidth={1.5} />
          </a>
        </div>
        <a
          href='#proof'
          className='font-mono text-[0.5625rem] uppercase tracking-[0.22em] text-white/40'
        >
          Scroll ↓
        </a>
      </div>
    </section>
  )
}
