'use client'

import { AboutIdentityOrbit } from '@/components/sections/AboutIdentityOrbit'
import { SectionDisplayTag } from '@/components/ui/SectionDisplayTag'
import { aboutPreview } from '@/data/site'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function AboutPreview () {
  return (
    <section className='section-anchor surface-page overflow-visible py-12 md:py-16'>
      <div className='container-wide space-y-8 md:space-y-10'>
        <header className='section-header'>
          <SectionDisplayTag tag='About Me' pattern='jsx' />
          <p className='section-lead'>{aboutPreview.bodyOne}</p>
        </header>

        <AboutIdentityOrbit detailed />

        <div className='flex flex-wrap items-center justify-center gap-3 pt-2'>
          <Link
            href='/about'
            className='inline-flex items-center gap-2 bg-heading px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary'
          >
            Full profile
            <ArrowRight className='h-4 w-4' aria-hidden />
          </Link>
          <Link
            href='/contact'
            className='inline-flex items-center gap-2 border border-border/70 px-5 py-2.5 text-sm font-semibold text-heading transition-colors hover:border-primary/35 hover:text-primary dark:border-border/50'
          >
            Start a conversation
          </Link>
        </div>
      </div>
    </section>
  )
}
