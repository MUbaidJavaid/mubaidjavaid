import { EmptyState } from '@/components/system/EmptyState'
import { ProjectCardsGridSkeleton } from '@/components/system/page-skeletons'
import { projects } from '@/data/projects'
import { pageMetadata } from '@/lib/seo'
import { FolderOpen } from 'lucide-react'
import type { Metadata } from 'next'
import dynamicImport from 'next/dynamic'

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
  title: 'Projects',
  description:
    'Explore case studies from the M Ubaid Javaid portfolio, covering business websites, full-stack web applications, frontend architecture, and maintainable product execution.',
  path: '/projects'
})

export default function ProjectsPage () {
  return (
    <section className='section-anchor surface-page py-10'>
      <div className='container-wide space-y-9'>
        <header className='space-y-3'>
          <p className='section-label'>Projects</p>
          <h1 className='section-heading text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem]'>
            Project <span className='section-heading-accent'>portfolio</span>{' '}
            with implementation depth
          </h1>
          <p className='max-w-4xl text-sm leading-[1.85] text-body md:text-base'>
            This section is designed to help you evaluate delivery quality, not
            just visual output. Each case study is documented with context,
            technical direction, and execution details so you can understand how
            decisions were made and what was actually shipped.
          </p>
        </header>
        <div className='grid gap-4   p-5 md:grid-cols-3 md:p-6'>
          <div className='md:border-r md:border-border/70'>
            <p className='text-xs font-semibold uppercase tracking-[0.14em] text-primary/75'>
              What you will see
            </p>
            <p className='mt-2 text-sm leading-relaxed text-body/80'>
              Problem framing, architecture choices, stack constraints, and
              implementation decisions that affected delivery.
            </p>
          </div>
          <div className='md:border-r md:border-border/70'>
            <p className='text-xs  font-semibold uppercase tracking-[0.14em] text-primary/75'>
              Why it matters
            </p>
            <p className='mt-2 text-sm leading-relaxed text-body/80'>
              This helps founders and hiring teams assess engineering judgment,
              maintainability mindset, and product execution maturity.
            </p>
          </div>
          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.14em] text-primary/75'>
              Next step
            </p>
            <p className='mt-2 text-sm leading-relaxed text-body/80'>
              If a project direction matches your goals, continue with the
              contact flow for scope discussion and implementation planning.
            </p>
          </div>
        </div>
        {projects.length === 0 ? (
          <EmptyState
            icon={FolderOpen}
            title='No projects to show yet'
            description='Case studies will appear here as they are published. In the meantime, reach out if you would like to discuss a build or see relevant work in conversation.'
            primaryAction={{ label: 'Contact', href: '/contact' }}
            secondaryAction={{ label: 'Go home', href: '/' }}
            className='max-w-xl'
          />
        ) : (
          <>
            <ProjectsPortfolioGrid />
            <div className='surface-panel px-5 py-4 text-sm text-body/75 dark:border-border/50'>
              Looking for a specific industry, workflow, or architecture
              pattern? Share your requirements through the contact page and I
              will map you to the most relevant implementations.
            </div>
          </>
        )}
      </div>
    </section>
  )
}
