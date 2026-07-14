import { TechStackSectionDynamic } from '@/components/home/TechStackSectionDynamic'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { BlogPreviewSection } from '@/components/sections/BlogPreviewSection'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { ExperienceSnapshot } from '@/components/sections/ExperienceSnapshot'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { HeroSection } from '@/components/sections/HeroSection'
import { LogoStrip } from '@/components/sections/LogoStrip'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { ProofSnapshot } from '@/components/sections/ProofSnapshot'
import { ServicesPreview } from '@/components/sections/ServicesPreview'
import { pageMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

export const dynamic = 'force-static'
export const revalidate = 86400

export const metadata: Metadata = pageMetadata({
  title: 'Full-Stack Developer | MERN Stack | Next.js',
  description:
    'M Ubaid Javaid is a Full-Stack Developer specializing in MERN Stack and Next.js, building fast, scalable, SEO-friendly business websites and web applications with React, Next.js, Node.js, Express, and MongoDB.',
  path: '/'
})

export default function HomePage () {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <ProofSnapshot />

      <AboutPreview />
      <ExperienceSnapshot />
      <ServicesPreview />
      <TechStackSectionDynamic />
      <LogoStrip />
      <ProcessSection />
      <BlogPreviewSection />
      <ContactCTA />
    </>
  )
}
