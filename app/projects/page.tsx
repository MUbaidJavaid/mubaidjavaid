import { EmptyState } from '@/components/system/EmptyState'
import { ProjectCardsGridSkeleton } from '@/components/system/page-skeletons'
import { PageHeroHeader } from '@/components/sections/PageHeroHeader'
import { evolvoWork } from '@/data/evolvo-work'
import { projects } from '@/data/projects'
import { pageMetadata } from '@/lib/seo'
import { ArrowUpRight, FolderOpen } from 'lucide-react'
import type { Metadata } from 'next'
import dynamicImport from 'next/dynamic'
import Link from 'next/link'

const ProjectsPortfolioGrid = dynamicImport(
  () =>
    import('@/components/sections/ProjectsPortfolioGrid').then(m => ({
      default: m.ProjectsPortfolioGrid
    })),
  { loading: () => <ProjectCardsGridSkeleton count={projects.length} /> }
)

const EvolvoWorkGallery = dynamicImport(
  () =>
    import('@/components/sections/EvolvoWorkGallery').then(m => ({
      default: m.EvolvoWorkGallery
    })),
  { loading: () => <ProjectCardsGridSkeleton count={6} /> }
)

export const dynamic = 'force-static'
export const revalidate = 86400

export const metadata: Metadata = pageMetadata({
  title: 'Projects · Fintech, Healthcare & SaaS',
  description:
    'Case studies and live products delivered with Next.js and MERN — fintech, healthcare, POS, and housing-society systems. Built in production roles at Evolvo-Technologies.',
  path: '/projects'
})

export default function ProjectsPage () {
  return (
    <>
      <PageHeroHeader
        subtitle='Work · Production delivery'
        watermark='WORK'
        title={
          <>
            Selected work &amp;
            <span className='block text-[hsl(263_48%_42%)]'>
              production delivery.
            </span>
          </>
        }
        description='Case studies and live products delivered with Next.js and MERN — fintech, healthcare, POS, and housing-society systems. Evolvo client sites are labeled as employment delivery.'
      >
        <div className='flex flex-wrap items-center gap-5'>
          <p className='font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-heading/[0.35]'>
            {String(evolvoWork.length).padStart(2, '0')} live products ·{' '}
            {String(projects.length).padStart(2, '0')} case studies
          </p>
          <Link
            href='#evolvo'
            className='group inline-flex items-center gap-2 text-sm font-semibold text-heading'
          >
            Browse Evolvo work
            <ArrowUpRight
              size={15}
              className='transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
              aria-hidden
            />
          </Link>
        </div>
      </PageHeroHeader>

      <section className='bg-[hsl(214_28%_98%)]'>
        <div className='mx-auto grid w-full max-w-[1280px] gap-8 border-b border-heading/10 px-6 py-10 sm:px-8 md:grid-cols-3 md:gap-12 md:px-10 md:py-12 lg:px-12'>
          <div>
            <p className='font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-[hsl(211_48%_42%)]'>
              Client delivery
            </p>
            <p className='mt-3 text-sm leading-relaxed text-body'>
              Fintech, healthcare, prop trading, real estate, and brand sites
              shipped with Evolvo-Technologies — each with a live URL.
            </p>
          </div>
          <div>
            <p className='font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-[hsl(211_48%_42%)]'>
              Case studies
            </p>
            <p className='mt-3 text-sm leading-relaxed text-body'>
              Selected products with problem framing, architecture choices, and
              implementation depth you can evaluate.
            </p>
          </div>
          <div>
            <p className='font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-[hsl(211_48%_42%)]'>
              Next step
            </p>
            <p className='mt-3 text-sm leading-relaxed text-body'>
              If a direction matches your goals,{' '}
              <Link href='/contact' className='link-underline text-heading'>
                discuss your project
              </Link>
              .
            </p>
          </div>
        </div>

        <EvolvoWorkGallery />

        <div className='border-t border-heading/10'>
          <div className='mx-auto w-full max-w-[1280px] px-6 py-12 sm:px-8 md:px-10 md:py-16 lg:px-12'>
            <p className='font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-[hsl(211_48%_42%)]'>
              Documented case studies
            </p>
            <h2 className='mt-3 font-display text-[clamp(1.8rem,3.4vw,3rem)] font-semibold leading-[1.05] tracking-tight text-heading'>
              Implementation depth.
            </h2>
            <p className='mt-4 max-w-[54ch] text-sm leading-relaxed text-body'>
              Longer write-ups for products where architecture, workflow, and
              delivery decisions are worth inspecting closely.
            </p>
          </div>
        </div>

        {projects.length === 0 ? (
          <div className='container-wide py-16'>
            <EmptyState
              icon={FolderOpen}
              title='No projects to show yet'
              description='Case studies will appear here as they are published.'
              primaryAction={{ label: 'Discuss your project', href: '/contact' }}
              secondaryAction={{ label: 'Go home', href: '/' }}
              className='max-w-xl'
            />
          </div>
        ) : (
          <ProjectsPortfolioGrid />
        )}
      </section>
    </>
  )
}
