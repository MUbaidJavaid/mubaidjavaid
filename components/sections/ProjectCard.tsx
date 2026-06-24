'use client'

import type { Project } from '@/data/projects'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function ProjectCard ({ project }: { project: Project }) {
  const images = project.images?.length ? project.images : [project.image]
  const [imgIdx, setImgIdx] = useState(0)
  const [hovered, setHovered] = useState(false)

  // Auto-rotate images on hover
  useEffect(() => {
    if (!hovered || images.length <= 1) return
    const interval = setInterval(() => {
      setImgIdx(prev => (prev + 1) % images.length)
    }, 1500)
    return () => clearInterval(interval)
  }, [hovered, images.length])

  // Reset on unhover
  useEffect(() => {
    if (!hovered) setImgIdx(0)
  }, [hovered])

  const leadImpact = project.impact[0]

  return (
    <article
      className='group relative flex h-full flex-col overflow-hidden rounded-xl border border-border/80 bg-card shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-float dark:border-border/60 dark:bg-card'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area with auto-rotate on hover */}
      <div className='relative h-56 w-full overflow-hidden bg-secondary sm:h-64'>
        {images.slice(0, 5).map((img, i) => (
          <Image
            key={img}
            src={img}
            alt={i === 0 ? (project.imageAlt || project.title) : `${project.title} screenshot ${i + 1}`}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className={`object-contain transition-opacity duration-500 ${
              i === imgIdx ? 'opacity-100' : 'opacity-0'
            }`}
            priority={i === 0}
          />
        ))}
        <div className='absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent opacity-90' />

        {/* Image dots indicator */}
        {images.length > 1 && (
          <div className='absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1'>
            {images.slice(0, 5).map((_, i) => (
              <span
                key={i}
                className={`block h-1 rounded-full transition-all duration-300 ${
                  i === imgIdx ? 'w-5 bg-white' : 'w-1 bg-white/50'
                }`}
              />
            ))}
            {images.length > 5 && (
              <span className='block h-1 w-1 rounded-full bg-white/30' />
            )}
          </div>
        )}

        {/* Live badge */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded-full bg-emerald-500/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-lg backdrop-blur-sm transition-all hover:bg-emerald-500'
            onClick={e => e.stopPropagation()}
          >
            <span className='relative flex h-1.5 w-1.5'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75' />
              <span className='relative inline-flex h-1.5 w-1.5 rounded-full bg-white' />
            </span>
            Live
            <ExternalLink className='h-2.5 w-2.5' />
          </a>
        )}

        {/* Image count */}
        {images.length > 1 && (
          <div className='absolute left-3 top-3 z-10 rounded-full bg-black/50 px-2.5 py-0.5 text-[10px] font-medium text-white/90 backdrop-blur-sm'>
            {images.length} screens
          </div>
        )}
      </div>

      {/* Content */}
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
        <p className='mt-2 line-clamp-3 text-[15px] leading-relaxed text-body/75'>
          {project.summary}
        </p>

        {leadImpact ? (
          <div className='mt-4'>
            <span className='inline-flex border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/35 dark:text-emerald-300'>
              {leadImpact}
            </span>
          </div>
        ) : null}

        {/* Stack tags */}
        <div className='mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border/70 pt-3'>
          <div className='flex flex-wrap gap-1.5'>
            {project.stack.slice(0, 3).map(item => (
              <span
                key={item}
                className='rounded-full bg-primary/5 px-2 py-0.5 text-[10px] font-medium text-primary/70 dark:bg-primary/10'
              >
                {item}
              </span>
            ))}
            {project.stack.length > 3 ? (
              <span className='rounded-full bg-primary/5 px-2 py-0.5 text-[10px] font-medium text-primary/70 dark:bg-primary/10'>
                +{project.stack.length - 3}
              </span>
            ) : null}
          </div>
          <span className='text-[11px] font-semibold text-primary'>
            Read case study
          </span>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100' />
    </article>
  )
}
