'use client'

import { projects } from '@/data/projects'
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

  // Auto-scroll images
  const nextImage = useCallback(() => {
    setActiveImage(prev => (prev + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    if (isPaused) return
    autoPlayRef.current = setInterval(nextImage, 3000)
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [nextImage, isPaused, activeProject])

  // Reset image index when switching projects
  useEffect(() => {
    setActiveImage(0)
  }, [activeProject])

  const prevImage = () => {
    setActiveImage(prev => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className='section-anchor relative overflow-hidden surface-muted py-10'>
      <div className='absolute inset-0'>
        <div className='absolute left-0 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl' />
        <div className='absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-primary/[0.06] blur-3xl' />
      </div>

      <div className='container-wide relative z-10 space-y-10 py-16 lg:py-20'>
        {/* Header */}
        <div className='flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end'>
          <div className='max-w-3xl space-y-4'>
            <p className='section-label'>Portfolio Showcase</p>
            <h2 className='section-heading text-2xl sm:text-3xl lg:text-4xl'>
              Featured <span className='section-heading-accent'>Projects</span>
            </h2>
            <p className='max-w-2xl text-sm leading-relaxed text-body'>
              Real production applications built end-to-end — from architecture design to deployment.
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

        {/* Project Tabs */}
        <div className='flex flex-wrap gap-3'>
          {featuredProjects.map((p, i) => (
            <button
              key={p.slug}
              onClick={() => setActiveProject(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeProject === i
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'border border-border/60 bg-white/60 text-body hover:border-primary/30 hover:bg-white dark:bg-slate-900/40 dark:text-slate-300 dark:hover:bg-slate-900/60'
              }`}
            >
              {p.title.split('—')[0].trim()}
            </button>
          ))}
        </div>

        {/* Main Project Card */}
        <div
          className='grid gap-8 rounded-2xl border border-border/60 bg-card p-4 shadow-card sm:p-6 lg:grid-cols-[1.1fr_1fr] lg:p-8 dark:border-border/40 dark:bg-card'
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Image Slider */}
          <div className='relative'>
            <div className='relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-secondary'>
              {images.map((img, i) => (
                <div
                  key={img}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    i === activeImage
                      ? 'translate-x-0 opacity-100'
                      : i < activeImage
                        ? '-translate-x-full opacity-0'
                        : 'translate-x-full opacity-0'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    sizes='(max-width: 1024px) 100vw, 55vw'
                    className='object-contain'
                    priority={i === 0 && activeProject === 0}
                  />
                </div>
              ))}

              {/* Gradient overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent' />

              {/* Nav arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className='absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110 dark:bg-slate-800/90 dark:text-slate-200'
                    aria-label='Previous image'
                  >
                    <ChevronLeft className='h-5 w-5' />
                  </button>
                  <button
                    onClick={nextImage}
                    className='absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110 dark:bg-slate-800/90 dark:text-slate-200'
                    aria-label='Next image'
                  >
                    <ChevronRight className='h-5 w-5' />
                  </button>
                </>
              )}

              {/* Image counter */}
              <div className='absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm'>
                {activeImage + 1} / {images.length}
              </div>
            </div>

            {/* Dot indicators */}
            {images.length > 1 && (
              <div className='mt-4 flex items-center justify-center gap-1.5'>
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeImage
                        ? 'w-8 bg-primary'
                        : 'w-1.5 bg-border hover:bg-primary/40'
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Thumbnail strip */}
            <div className='mt-3 hidden gap-2 sm:flex'>
              {images.slice(0, 6).map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  className={`relative h-14 flex-1 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                    i === activeImage
                      ? 'border-primary shadow-md'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    fill
                    sizes='120px'
                    className='object-cover'
                  />
                </button>
              ))}
              {images.length > 6 && (
                <div className='flex flex-1 items-center justify-center rounded-lg border-2 border-dashed border-border/60 text-xs text-body/60'>
                  +{images.length - 6}
                </div>
              )}
            </div>
          </div>

          {/* Project Details */}
          <div className='flex flex-col justify-between'>
            <div>
              <p className='text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/80'>
                {project.role}
              </p>
              <h3 className='mt-2 font-heading text-2xl font-bold leading-tight text-heading sm:text-3xl'>
                {project.title}
              </h3>
              <p className='mt-3 text-[15px] leading-relaxed text-body/80'>
                {project.summary}
              </p>

              {/* Key Features */}
              <div className='mt-5'>
                <p className='mb-2 text-xs font-semibold uppercase tracking-wider text-heading/60'>
                  Key Features
                </p>
                <ul className='grid gap-1.5 sm:grid-cols-2'>
                  {project.keyFeatures.slice(0, 6).map(feature => (
                    <li
                      key={feature}
                      className='flex items-start gap-2 text-[13px] leading-snug text-body/75'
                    >
                      <span className='mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary' />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className='mt-5 flex flex-wrap gap-2'>
                {project.stack.map(item => (
                  <span
                    key={item}
                    className='rounded-full border border-border/60 bg-white/60 px-3 py-1 text-[11px] font-medium text-body/70 dark:bg-slate-800/40'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className='mt-6 flex flex-wrap items-center gap-3'>
              <Link
                href={`/projects/${project.slug}`}
                className='inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:brightness-110'
              >
                View Case Study
                <ArrowRight className='h-4 w-4' />
              </Link>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/80 px-5 py-2.5 text-sm font-medium text-heading transition-all hover:border-primary/30 hover:bg-white hover:shadow-md dark:bg-slate-900/60 dark:text-slate-200 dark:hover:bg-slate-900'
                >
                  Live Demo
                  <ExternalLink className='h-3.5 w-3.5' />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Impact stats bar */}
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
          {project.impact.map(item => (
            <div
              key={item}
              className='rounded-xl border border-border/50 bg-white/60 p-4 text-center shadow-sm backdrop-blur-sm dark:bg-slate-900/30'
            >
              <p className='text-[12px] font-medium leading-snug text-body/70'>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
