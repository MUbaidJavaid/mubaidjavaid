import { ProjectDetailBody } from '@/components/projects/ProjectDetailBody'
import { BrowserFrame } from '@/components/ui/BrowserFrame'
import { getProjectBySlug, projects } from '@/data/projects'
import { pageMetadata } from '@/lib/seo'
import {
  ArrowUpRight,
  ChevronLeft,
  ExternalLink,
  Github
} from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
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

  const previewPath =
    project.slug === 'inventory-management-support-ticket-system'
      ? 'app.internal / operations'
      : project.slug === 'yalla-dubai-travel-platform'
      ? 'travel.example / browse'
      : 'movies.app / discover'

  return (
    <div className='surface-page'>
      <div className='section-anchor border-b border-border/60 surface-muted dark:border-border/50'>
        <div className='container-wide flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between'>
          <Link
            href='/projects'
            className='inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover'
          >
            <ChevronLeft className='h-4 w-4' aria-hidden />
            Back to Projects
          </Link>
          <div className='flex flex-wrap gap-2'>
            {project.githubUrl ? (
              <Link
                href={project.githubUrl}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 border border-border surface-panel px-4 py-2 text-sm font-semibold text-heading shadow-sm transition-all hover:border-primary/30 hover:text-primary dark:border-border/50'
              >
                <Github className='h-4 w-4' aria-hidden />
                GitHub
                <ArrowUpRight className='h-3.5 w-3.5 opacity-60' aria-hidden />
              </Link>
            ) : null}
            {project.liveUrl ? (
              <Link
                href={project.liveUrl}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary-hover'
              >
                <ExternalLink className='h-4 w-4' aria-hidden />
                Live demo
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      <section className='pb-0 pt-10 md:pt-12'>
        <div className='container-wide space-y-6'>
          <div className='space-y-4'>
            <p className='section-label'>Case Study</p>
            <h1 className='section-heading max-w-4xl text-[1.75rem] sm:text-[2.2rem] lg:text-[2.6rem]'>
              {project.title}
            </h1>
            <p className='max-w-3xl text-sm leading-[1.85] text-body sm:text-base'>
              {project.description}
            </p>
          </div>
          <div className='flex flex-wrap items-center gap-2 border-t border-border/60 pt-4'>
            <span className='rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-sm font-semibold text-primary'>
              {project.role}
            </span>
            {project.stack.map(item => (
              <span
                key={item}
                className='rounded-full border border-border surface-muted-soft px-3 py-1 text-xs font-medium text-body dark:border-border/50'
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className='container-wide mt-10'>
        <BrowserFrame url={previewPath}>
          <div className='relative aspect-[21/10] w-full sm:aspect-[16/7]'>
            <Image
              src={project.image}
              alt={`${project.title} - product preview`}
              fill
              sizes='(max-width: 1240px) 100vw, 1240px'
              className='object-cover object-top'
              priority
            />
          </div>
        </BrowserFrame>
        <p className='mt-3 text-center text-xs text-body/50'>
          Structured preview - artwork represents UI direction for this case
          study.
        </p>
      </div>

      <ProjectDetailBody project={project} />
    </div>
  )
}
