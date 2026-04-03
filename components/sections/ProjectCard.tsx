import type { Project } from '@/data/projects'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function ProjectCard ({ project }: { project: Project }) {
  const leadImpact = project.impact[0]

  return (
    <article className='group relative flex h-full flex-col overflow-hidden rounded-xl border border-border/80 bg-card shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-float dark:border-border/60 dark:bg-card'>
      <div className='relative h-64 w-full overflow-hidden bg-secondary'>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.07]'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent opacity-90' />
      </div>
      <div className='flex flex-1 flex-col p-5'>
        <div className='mb-3 flex items-start justify-between gap-3'>
          <p className='text-[10px] font-semibold uppercase tracking-[0.16em] text-primary/80'>
            {project.role}
          </p>
          <ArrowUpRight className='h-3.5 w-3.5 text-foreground/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary' />
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className='block font-heading text-[1.35rem] font-semibold leading-[1.25] text-heading transition-colors hover:text-primary'
        >
          {project.title}
        </Link>
        <p className='mt-2 text-[15px] leading-relaxed text-body/75'>
          {project.summary}
        </p>
        {leadImpact ? (
          <div className='mt-4'>
            <span className='inline-flex border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/35 dark:text-emerald-300'>
              {leadImpact}
            </span>
          </div>
        ) : null}
        <div className='mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border/70 pt-3'>
          <div className='flex flex-wrap gap-1.5'>
            {project.stack.slice(0, 2).map(item => (
              <span
                key={item}
                className='text-[10px] font-medium uppercase tracking-[0.06em] text-body/45'
              >
                {item}
              </span>
            ))}
            {project.stack.length > 2 ? (
              <span className='text-[10px] font-medium uppercase tracking-[0.06em] text-body/45'>
                +{project.stack.length - 2}
              </span>
            ) : null}
          </div>
          <span className='text-[11px] font-semibold text-primary'>
            Read case study
          </span>
        </div>
        {/* Keep hidden for SEO/assistive context while visual layout remains clean */}
        <div className='sr-only'>
          {project.stack.slice(0, 4).map(item => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <div className='absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100' />
    </article>
  )
}
