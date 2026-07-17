import { AboutPersonJsonLd } from '@/components/about/AboutPersonJsonLd'
import { AboutIdentityOrbit } from '@/components/sections/AboutIdentityOrbit'
import { CodeQualitySection } from '@/components/sections/CodeQualitySection'
import { ExperienceSnapshot } from '@/components/sections/ExperienceSnapshot'
import { MernStackShowcase } from '@/components/sections/MernStackShowcase'
import { PageHeroHeader } from '@/components/sections/PageHeroHeader'
import { site } from '@/data/site'
import { pageMetadata } from '@/lib/seo'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'
export const revalidate = 86400

export const metadata: Metadata = pageMetadata({
  title: 'About M Ubaid Javaid - Full-Stack Developer | MERN Stack & Next.js',
  description:
    'Learn how M Ubaid Javaid approaches full-stack product delivery: from problem framing and architecture decisions to scalable implementation with React, Next.js, Node.js, Express, and MongoDB.',
  path: '/about'
})

export default function AboutPage () {
  return (
    <>
      <AboutPersonJsonLd />

      <PageHeroHeader
        subtitle='About'
        tagPattern='jsx'
        title={
          <>
            Building business-ready web products with{' '}
            <span style={{ color: '#256e99' }}>clean engineering</span>
          </>
        }
        description="I'm M Ubaid Javaid — a full-stack developer in Multan, Pakistan. I help teams ship React / Next.js / MERN products with clear scope and architecture that lasts."
      />

      <section className='section-anchor surface-page overflow-visible py-10 md:py-14'>
        <div className='container-wide'>
          <AboutIdentityOrbit detailed />
        </div>
      </section>

      <ExperienceSnapshot />

      <MernStackShowcase />

      <section className='section-anchor border-t border-border/50 surface-page py-10 md:py-12'>
        <div className='container-wide flex flex-wrap items-center justify-center gap-3'>
          <Link
            href='/contact'
            className='inline-flex items-center gap-2 bg-heading px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary'
          >
            Get in touch
            <ArrowRight className='h-4 w-4' aria-hidden />
          </Link>
          <Link
            href='/projects'
            className='inline-flex items-center gap-2 border border-border/70 px-5 py-2.5 text-sm font-semibold text-heading transition-colors hover:border-primary/35 hover:text-primary dark:border-border/50'
          >
            Case studies
          </Link>
          <Link
            href={site.github}
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-2 border border-border/70 px-5 py-2.5 text-sm font-semibold text-heading transition-colors hover:border-primary/35 hover:text-primary dark:border-border/50'
          >
            GitHub
          </Link>
        </div>
      </section>

      <CodeQualitySection />
    </>
  )
}
