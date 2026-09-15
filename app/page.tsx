import { BrandBuiltWith } from '@/components/brand/BrandBuiltWith'
import { BrandHero } from '@/components/brand/BrandHero'
import { pageMetadata } from '@/lib/seo'
import type { Metadata } from 'next'
import nextDynamic from 'next/dynamic'

const BrandFitSignals = nextDynamic(() =>
  import('@/components/brand/BrandFitSignals').then(m => ({
    default: m.BrandFitSignals
  }))
)
const BrandProof = nextDynamic(() =>
  import('@/components/brand/BrandProof').then(m => ({ default: m.BrandProof }))
)
const BrandImpact = nextDynamic(() =>
  import('@/components/brand/BrandImpact').then(m => ({ default: m.BrandImpact }))
)
const BrandProcess = nextDynamic(() =>
  import('@/components/brand/BrandProcess').then(m => ({
    default: m.BrandProcess
  }))
)
const BrandPhilosophy = nextDynamic(() =>
  import('@/components/brand/BrandPhilosophy').then(m => ({
    default: m.BrandPhilosophy
  }))
)
const BrandTechnologies = nextDynamic(() =>
  import('@/components/brand/BrandTechnologies').then(m => ({
    default: m.BrandTechnologies
  }))
)
const BrandOpenSource = nextDynamic(() =>
  import('@/components/brand/BrandOpenSource').then(m => ({
    default: m.BrandOpenSource
  }))
)
const BrandTimeline = nextDynamic(() =>
  import('@/components/brand/BrandTimeline').then(m => ({
    default: m.BrandTimeline
  }))
)
const BrandWriting = nextDynamic(() =>
  import('@/components/brand/BrandWriting').then(m => ({
    default: m.BrandWriting
  }))
)
const BrandContact = nextDynamic(() =>
  import('@/components/brand/BrandContact').then(m => ({
    default: m.BrandContact
  }))
)

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
      <link
        rel='preload'
        as='image'
        href='/mubaidjavaid-hero-sm.webp'
        type='image/webp'
        media='(max-width: 767px)'
        fetchPriority='high'
      />
      <link
        rel='preload'
        as='image'
        href='/mubaidjavaid-hero.webp'
        type='image/webp'
        media='(min-width: 768px)'
        fetchPriority='high'
      />
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
