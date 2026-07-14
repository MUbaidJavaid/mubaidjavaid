'use client'

import { projects } from '@/data/projects'
import { SectionDisplayTag } from '@/components/ui/SectionDisplayTag'
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'

export function FeaturedProjects () {
  const featuredProjects = projects.filter(p => p.featured)
  const [activeProject, setActiveProject] = useState(0)
  const [activeImage, setActiveImage] = useState(0)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  const project = featuredProjects[activeProject]
  const images = project?.images ?? [project?.image]

  const nextImage = useCallback(() => {
    setActiveImage(prev => (prev + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    if (isPaused) return
    autoPlayRef.current = setInterval(nextImage, 3500)
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [nextImage, isPaused, activeProject])

  useEffect(() => {
    setActiveImage(0)
  }, [activeProject])

  const prevImage = () => {
    setActiveImage(prev => (prev - 1 + images.length) % images.length)
  }

  if (!project) return null

  return (
    <section className='section-anchor surface-muted py-12 md:py-14'>
      <div className='container-wide space-y-8'>
        {/* Header */}
        <div className='section-header gap-4'>
          <SectionDisplayTag tag='Projects' pattern='bracket' />
          <p className='section-lead'>
            End-to-end builds — architecture through deployment.
          </p>
          <Link
            href='/projects'
            className='inline-flex items-center gap-2 border border-border/70 surface-panel px-4 py-2 text-sm font-semibold text-heading transition-colors hover:border-primary/30 hover:text-primary dark:border-border/50'
          >
            View all
            <ArrowRight className='h-3.5 w-3.5' />
          </Link>
        </div>

        {/* Project tabs */}
        <div className='flex flex-wrap justify-center gap-2'>
          {featuredProjects.map((p, i) => (
            <button
              key={p.slug}
              type='button'
              onClick={() => setActiveProject(i)}
              className={`px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                activeProject === i
                  ? 'bg-primary text-white'
                  : 'border border-border/70 bg-white/70 text-body hover:border-primary/30 hover:text-heading dark:border-border/50 dark:bg-slate-900/50 dark:text-slate-300'
              }`}
            >
              {p.title.split('—')[0].trim()}
            </button>
          ))}
        </div>

        {/* Compact split showcase */}
        <div
          className='overflow-hidden border border-border/70 bg-card dark:border-border/50'
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className='grid lg:grid-cols-[1.05fr_0.95fr]'>
            {/* Image */}
            <div className='relative border-b border-border/70 bg-secondary lg:border-b-0 lg:border-r dark:border-border/50'>
              <div className='relative aspect-[16/11] w-full lg:aspect-auto lg:min-h-[280px] lg:h-full'>
                {images.map((img, i) => (
                  <div
                    key={img}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      i === activeImage ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      fill
                      sizes='(max-width: 1024px) 100vw, 50vw'
                      className='object-contain p-2 sm:p-3'
                      priority={i === 0 && activeProject === 0}
                    />
                  </div>
                ))}

                {images.length > 1 && (
                  <>
                    <button
                      type='button'
                      onClick={prevImage}
                      className='absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-border/60 bg-white/90 text-heading transition-colors hover:bg-white dark:border-border/50 dark:bg-slate-900/90 dark:text-slate-100'
                      aria-label='Previous image'
                    >
                      <ChevronLeft className='h-4 w-4' />
                    </button>
                    <button
                      type='button'
                      onClick={nextImage}
                      className='absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-border/60 bg-white/90 text-heading transition-colors hover:bg-white dark:border-border/50 dark:bg-slate-900/90 dark:text-slate-100'
                      aria-label='Next image'
                    >
                      <ChevronRight className='h-4 w-4' />
                    </button>
                    <div className='absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1'>
                      {images.map((_, i) => (
                        <button
                          key={i}
                          type='button'
                          onClick={() => setActiveImage(i)}
                          className={`h-1 rounded-full transition-all ${
                            i === activeImage
                              ? 'w-5 bg-primary'
                              : 'w-1.5 bg-heading/25 hover:bg-primary/50'
                          }`}
                          aria-label={`Go to image ${i + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Details */}
            <div className='flex flex-col justify-between gap-5 p-5 sm:p-6 lg:p-7'>
              <div>
                <p className='font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/80'>
                  {project.role}
                </p>
                <h3 className='mt-2 font-heading !font-semibold uppercase text-xl leading-snug tracking-[0.04em] text-heading sm:text-[1.65rem]'>
                  {project.title}
                </h3>
                <p className='section-copy mt-2.5 line-clamp-3 text-body/80'>
                  {project.summary}
                </p>

                <ul className='mt-4 space-y-1.5 border-t border-border/60 pt-4'>
                  {project.keyFeatures.slice(0, 4).map(feature => (
                    <li
                      key={feature}
                      className='section-copy flex items-start gap-2 text-body/75'
                    >
                      <span
                        className='mt-1.5 h-1 w-1 shrink-0 bg-primary'
                        aria-hidden
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className='mt-4 flex flex-wrap gap-1.5'>
                  {project.stack.slice(0, 5).map(item => (
                    <span
                      key={item}
                      className='border border-border/60 bg-muted/50 px-2 py-0.5 text-[11px] font-medium text-body/70 dark:border-border/45'
                    >
                      {item}
                    </span>
                  ))}
                  {project.stack.length > 5 && (
                    <span className='border border-border/60 bg-muted/50 px-2 py-0.5 text-[11px] font-medium text-body/70 dark:border-border/45'>
                      +{project.stack.length - 5}
                    </span>
                  )}
                </div>

                {project.impact[0] ? (
                  <p className='mt-4 text-[13.5px] font-medium text-heading/80'>
                    {project.impact[0]}
                  </p>
                ) : null}
              </div>

              <div className='flex flex-wrap gap-2.5'>
                <Link
                  href={`/projects/${project.slug}`}
                  className='inline-flex items-center gap-2 bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover'
                >
                  Case study
                  <ArrowRight className='h-3.5 w-3.5' />
                </Link>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 border border-border/70 px-4 py-2 text-sm font-medium text-heading transition-colors hover:border-primary/30 hover:text-primary dark:border-border/50'
                  >
                    Live
                    <ExternalLink className='h-3.5 w-3.5' />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
