import { SectionReveal } from '@/components/motion/SectionReveal'
import { projects } from '@/data/projects'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { ProjectCard } from './ProjectCard'

export function FeaturedProjects () {
  const featuredProjects = projects
    .filter(project => project.featured)
    .slice(0, 3)

  return (
    <section className='section-anchor relative overflow-hidden surface-muted py-10'>
      <div className='absolute inset-0'>
        <div className='absolute left-0 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl' />
        <div className='absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-primary/[0.06] blur-3xl' />
      </div>

      <SectionReveal className='container-wide relative z-10 space-y-10 py-16 lg:py-20'>
        <div className='flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end'>
          <div className='max-w-3xl space-y-4'>
            <p className='section-label'>Portfolio Showcase</p>
            <h2 className='section-heading text-2xl sm:text-3xl lg:text-4xl'>
              Featured <span className='section-heading-accent'>Case Studies</span>
            </h2>
            <p className='max-w-2xl text-sm leading-relaxed text-body'>
              Selected work with problem → solution framing, stack choices, and
              outcomes - so you can see how I think, not just what I list on a resume.
            </p>
          </div>

          <Link
            href='/projects'
            className='group flex items-center gap-2 rounded-full border border-border/50 bg-white/80 px-6 py-3 text-sm font-semibold text-heading shadow-sm backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-white hover:shadow-md dark:border-border/60 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-900'
          >
            View All Projects
            <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
          </Link>
        </div>

        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {featuredProjects.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </SectionReveal>
    </section>
  )
}
