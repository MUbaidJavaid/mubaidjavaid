import { EmptyState } from '@/components/system/EmptyState'
import { ProjectCardsGridSkeleton } from '@/components/system/page-skeletons'
import { PageHeroHeader } from '@/components/sections/PageHeroHeader'
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

export const dynamic = 'force-static'
export const revalidate = 86400

export const metadata: Metadata = pageMetadata({
  title: 'Work',
  description:
    'Selected product case studies by M Ubaid Javaid — problem framing, architecture, and implementation depth.',
  path: '/projects'
})

export default function ProjectsPage () {
  return (
    <>
      <PageHeroHeader
        subtitle='Work · Evidence gallery'
        watermark='WORK'
        title={
          <>
            Case studies with
            <span className='block text-[hsl(211_48%_42%)]'>
              implementation depth.
            </span>
          </>
        }
        description='Each project documents problem framing, architecture choices, and what actually shipped—so you can evaluate judgment, not just visuals.'
      >
        <div className='flex flex-wrap items-center gap-5'>
          <p className='font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-heading/[0.35]'>
            {String(projects.length).padStart(2, '0')} documented products
          </p>
          <Link
            href='/contact'
            className='group inline-flex items-center gap-2 text-sm font-semibold text-heading'
          >
            Start a conversation
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
              What you will see
            </p>
            <p className='mt-3 text-sm leading-relaxed text-body'>
              Problem framing, architecture choices, stack constraints, and
              implementation decisions that affected delivery.
            </p>
          </div>
          <div>
            <p className='font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-[hsl(211_48%_42%)]'>
              Why it matters
            </p>
            <p className='mt-3 text-sm leading-relaxed text-body'>
              Helps founders and hiring teams assess engineering judgment and
              product execution maturity.
            </p>
          </div>
          <div>
            <p className='font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-[hsl(211_48%_42%)]'>
              Next step
            </p>
            <p className='mt-3 text-sm leading-relaxed text-body'>
              If a direction matches your goals,{' '}
              <Link href='/contact' className='link-underline text-heading'>
                start a conversation
              </Link>
              .
            </p>
          </div>
        </div>

        {projects.length === 0 ? (
          <div className='container-wide py-16'>
            <EmptyState
              icon={FolderOpen}
              title='No projects to show yet'
              description='Case studies will appear here as they are published.'
              primaryAction={{ label: 'Contact', href: '/contact' }}
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
