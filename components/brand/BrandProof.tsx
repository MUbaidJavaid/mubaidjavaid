'use client'

import { BrandSection } from '@/components/brand/system/BrandSection'
import { ProofSignalStage } from '@/components/visual/ProofSignalStage'
import { posts } from '@/data/posts'
import { projects } from '@/data/projects'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export function BrandProof () {
  const stats = [
    {
      value: String(projects.length).padStart(2, '0'),
      numeric: projects.length,
      label: 'Documented case studies',
      shortLabel: 'Work',
      href: '/projects'
    },
    {
      value: String(posts.length).padStart(2, '0'),
      numeric: posts.length,
      label: 'Published articles',
      shortLabel: 'Writing',
      href: '/blog'
    },
    {
      value: '24h',
      label: 'Typical first reply',
      shortLabel: 'Contact',
      href: '/contact'
    }
  ]

  return (
    <BrandSection
      id='proof'
      layout='band'
      className='relative isolate min-h-0 overflow-hidden bg-[#070b12] text-white'
    >
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.22]'
        aria-hidden
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.19) 0.65px, transparent 0.75px)',
          backgroundSize: '24px 24px'
        }}
      />
      <div
        className='pointer-events-none absolute -right-36 -top-40 h-[32rem] w-[32rem] rounded-full bg-[hsl(211_75%_48%/0.16)] blur-3xl'
        aria-hidden
      />
      <p
        className='pointer-events-none absolute -right-[0.04em] -top-[0.06em] select-none font-display text-[clamp(7rem,18vw,15rem)] font-bold leading-none tracking-[-0.08em] text-white/[0.025]'
        aria-hidden
      >
        VERIFY
      </p>

      <div className='relative z-10 mx-auto grid w-full max-w-[1280px] gap-10 px-6 pb-12 pt-16 sm:px-8 md:px-10 md:pb-16 md:pt-20 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:px-12 lg:pb-20 lg:pt-24'>
        <div>
          <p className='font-mono text-[0.6875rem] uppercase tracking-[0.26em] text-[hsl(211_90%_68%)]'>
            Proof · Trust protocol
          </p>
          <h2 className='mt-5 font-display text-[clamp(2.8rem,6vw,5.7rem)] font-bold leading-[0.92] tracking-[-0.055em] text-white'>
            Verifiable
            <span className='block text-[hsl(211_55%_68%)]'>signals.</span>
          </h2>
        </div>

        <div className='lg:pb-1'>
          <p className='max-w-[44ch] text-sm leading-relaxed text-white/[0.62] md:text-base'>
            Inspect the work, read the thinking, and know when to expect a
            response. Trust starts with evidence you can open yourself.
          </p>
          <div className='mt-7 flex flex-wrap items-center gap-5'>
            <Link
              href='/projects'
              className='group inline-flex items-center gap-2 bg-[hsl(211_48%_42%)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[hsl(211_48%_36%)]'
            >
              Inspect the work
              <ArrowUpRight
                size={15}
                className='transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                aria-hidden
              />
            </Link>
            <span className='inline-flex items-center gap-2 font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-white/[0.35]'>
              <span className='h-1.5 w-1.5 rounded-full bg-[hsl(152_58%_55%)] shadow-[0_0_12px_hsl(152_58%_55%/0.75)]' />
              Publicly inspectable
            </span>
          </div>
        </div>
      </div>

      <ProofSignalStage stats={stats} />
    </BrandSection>
  )
}
