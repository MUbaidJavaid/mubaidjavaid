import { ProjectCaseHero } from '@/components/projects/ProjectCaseHero'
import { ProjectDetailBody } from '@/components/projects/ProjectDetailBody'
import { ProjectImageSlider } from '@/components/projects/ProjectImageSlider'
import { getProjectBySlug, projects } from '@/data/projects'
import { pageMetadata } from '@/lib/seo'
import { ChevronLeft } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const dynamic = 'force-static'
export const dynamicParams = false
export const revalidate = 86400

export function generateStaticParams () {
  return projects.map(project => ({ slug: project.slug }))
}

export async function generateMetadata ({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return pageMetadata({
      title: 'Project Not Found',
      description: 'The requested project page could not be found.',
      path: '/projects'
    })
  }

  return pageMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`
  })
}

export default async function ProjectDetailPage ({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const projectIndex = projects.findIndex(p => p.slug === project.slug)
  const caseNo = String(projectIndex + 1).padStart(2, '0')
  const shortTitle = project.title.split('—')[0].trim()
  const images = project.images?.length ? project.images : [project.image]
  const stripImages = images.length > 1 ? images.slice(1) : []
  const stackPreview =
    project.stack.slice(0, 3).join(' · ') +
    (project.stack.length > 3 ? ` +${project.stack.length - 3}` : '')

  return (
    <div className='surface-page'>
      {/* Slim top bar */}
      <div className='absolute inset-x-0 top-0 z-30'>
        <div className='container-wide flex items-center justify-between py-4'>
          <Link
            href='/projects'
            className='inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition-colors hover:text-white'
          >
            <ChevronLeft className='h-4 w-4' aria-hidden />
            All projects
          </Link>
          <span className='font-mono text-[10px] font-bold tracking-[0.18em] text-white/45'>
            CASE {caseNo}
          </span>
        </div>
      </div>

      <ProjectCaseHero
        images={images}
        title={project.title}
        description={project.description}
        role={project.role}
        caseNo={caseNo}
        shortTitle={shortTitle}
        stackPreview={stackPreview}
        liveUrl={project.liveUrl}
        githubUrl={project.githubUrl}
      />

      <ProjectDetailBody project={project} caseNo={caseNo} />

      {stripImages.length > 0 ? (
        <section className='border-t border-border/55 py-12 dark:border-border/40 md:py-14'>
          <div className='container-wide'>
            <ProjectImageSlider
              images={stripImages}
              title={project.title}
              variant='strip'
            />
          </div>
        </section>
      ) : null}
    </div>
  )
}
