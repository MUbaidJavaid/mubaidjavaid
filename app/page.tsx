import { BrandBuiltWith } from '@/components/brand/BrandBuiltWith'
import { BrandContact } from '@/components/brand/BrandContact'
import { BrandFitSignals } from '@/components/brand/BrandFitSignals'
import { BrandHero } from '@/components/brand/BrandHero'
import { BrandImpact } from '@/components/brand/BrandImpact'
import { BrandOpenSource } from '@/components/brand/BrandOpenSource'
import { BrandPhilosophy } from '@/components/brand/BrandPhilosophy'
import { BrandProcess } from '@/components/brand/BrandProcess'
import { BrandProof } from '@/components/brand/BrandProof'
import { BrandTechnologies } from '@/components/brand/BrandTechnologies'
import { BrandTimeline } from '@/components/brand/BrandTimeline'
import { BrandWriting } from '@/components/brand/BrandWriting'
import { pageMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

export const dynamic = 'force-static'
export const revalidate = 86400

export const metadata: Metadata = pageMetadata({
  title: 'Product Engineer',
  description:
    'M Ubaid Javaid is a Product Engineer building web products with clear architecture, reliable backends, and interfaces that support real business outcomes.',
  path: '/'
})

export default function HomePage () {
  return (
    <>
      <BrandHero />
      <BrandBuiltWith />
      <BrandFitSignals />
      <BrandProof />
      <BrandImpact />
      <BrandProcess />
      <BrandPhilosophy />
      <BrandTechnologies />
      <BrandOpenSource />
      <BrandTimeline />
      <BrandWriting />
      <BrandContact />
    </>
  )
}
