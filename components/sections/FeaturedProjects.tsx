'use client'

import { projects } from '@/data/projects'
import { SectionDisplayTag } from '@/components/ui/SectionDisplayTag'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
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
  const reduce = useReducedMotion()

  const project = featuredProjects[activeProject]
  const images = project?.images?.length ? project.images : [project?.image].filter(Boolean) as string[]

  const nextImage = useCallback(() => {
    setActiveImage(prev => (prev + 1) % Math.max(images.length, 1))
  }, [images.length])

  useEffect(() => {
    if (isPaused || images.length < 2) return
    autoPlayRef.current = setInterval(nextImage, 3800)
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [nextImage, isPaused, activeProject, images.length])

  useEffect(() => {
    setActiveImage(0)
  }, [activeProject])

  const prevImage = () => {
    setActiveImage(prev => (prev - 1 + images.length) % images.length)
  }

  if (!project) return null

  const shortTitle = project.title.split('—')[0].trim()

  return (
    <section className='section-anchor relative overflow-hidden surface-muted py-14 md:py-16'>
      <div
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,hsl(202_61%_42%/0.1),transparent_65%)]'
        aria-hidden
      />

      <div className='container-wide relative z-10 space-y-9 md:space-y-11'>
        {/* Header */}
        <header className='section-header gap-3'>
          <SectionDisplayTag tag='Projects' pattern='bracket' />
          <p className='section-lead'>
            End-to-end builds — architecture through deployment.
          </p>
        </header>

        {/* Project picker */}
        <div
          className='mx-auto flex w-full max-w-4xl justify-center gap-2 sm:gap-3'
          role='tablist'
          aria-label='Featured projects'
        >
          {featuredProjects.map((p, i) => {
            const isActive = activeProject === i
            const label = p.title.split('—')[0].trim()

            return (
              <button
                key={p.slug}
                type='button'
                role='tab'
                aria-selected={isActive}
                onClick={() => setActiveProject(i)}
                className={`relative flex min-w-0 flex-1 flex-col items-start gap-1 border px-3.5 py-3 text-left transition-all duration-300 sm:px-4 sm:py-3.5 ${
                  isActive
                    ? 'border-primary/40 bg-primary text-white shadow-[0_12px_28px_-14px_hsl(202_61%_37%/0.55)]'
                    : 'border-border/60 bg-white/80 text-body hover:border-primary/25 hover:text-heading dark:border-border/45 dark:bg-slate-900/50'
                }`}
              >
                <span
                  className={`font-mono text-[10px] font-bold tracking-[0.18em] ${
                    isActive ? 'text-white/70' : 'text-primary/70'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className='truncate text-[12px] font-semibold uppercase tracking-[0.06em] sm:text-[13px]'>
                  {label}
                </span>
              </button>
            )
          })}
        </div>

        {/* Showcase — image first, content below (no clipped height) */}
        <AnimatePresence mode='wait'>
          <motion.article
            key={project.slug}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className='overflow-hidden border border-border/60 bg-card dark:border-border/45'
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            role='tabpanel'
          >
            {/* Media band */}
            <div className='relative bg-[linear-gradient(160deg,#E8EEF5_0%,#F4F7FA_45%,#EEF3F8_100%)] dark:bg-[linear-gradient(160deg,hsl(222_41%_11%)_0%,hsl(222_47%_9%)_100%)]'>
              <div className='relative mx-auto aspect-[16/9] w-full max-w-5xl sm:aspect-[2/1]'>
                {images.map((img, i) => (
                  <div
                    key={`${project.slug}-${img}`}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      i === activeImage ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      fill
                      sizes='(max-width: 1024px) 100vw, 960px'
                      className='object-contain p-4 sm:p-6 md:p-8'
                      priority={i === 0 && activeProject === 0}
                    />
                  </div>
                ))}

                {/* Ghost index */}
                <span
                  className='pointer-events-none absolute bottom-2 right-4 select-none font-heading text-[4.5rem] font-black leading-none tracking-tighter text-heading/[0.05] dark:text-white/[0.06] sm:text-[6rem]'
                  aria-hidden
                >
                  {String(activeProject + 1).padStart(2, '0')}
                </span>

                {images.length > 1 && (
                  <>
                    <div className='absolute left-3 top-3 z-10 font-mono text-[10px] font-semibold tracking-[0.14em] text-heading/60 dark:text-slate-300/65'>
                      <span className='border border-border/40 bg-white/90 px-2 py-1 backdrop-blur-sm dark:border-border/40 dark:bg-slate-950/75'>
                        {String(activeImage + 1).padStart(2, '0')} /{' '}
                        {String(images.length).padStart(2, '0')}
                      </span>
                    </div>

                    <button
                      type='button'
                      onClick={prevImage}
                      className='absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-border/45 bg-white/90 text-heading shadow-sm backdrop-blur-sm transition-colors hover:border-primary/35 hover:text-primary dark:border-border/40 dark:bg-slate-950/80 dark:text-slate-100'
                      aria-label='Previous image'
                    >
                      <ChevronLeft className='h-4 w-4' />
                    </button>
                    <button
                      type='button'
                      onClick={nextImage}
                      className='absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-border/45 bg-white/90 text-heading shadow-sm backdrop-blur-sm transition-colors hover:border-primary/35 hover:text-primary dark:border-border/40 dark:bg-slate-950/80 dark:text-slate-100'
                      aria-label='Next image'
                    >
                      <ChevronRight className='h-4 w-4' />
                    </button>

                    <div className='absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5'>
                      {images.map((_, i) => (
                        <button
                          key={i}
                          type='button'
                          onClick={() => setActiveImage(i)}
                          className={`h-1 rounded-full transition-all duration-300 ${
                            i === activeImage
                              ? 'w-6 bg-primary'
                              : 'w-1.5 bg-heading/20 hover:bg-primary/45'
                          }`}
                          aria-label={`Go to image ${i + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Content band */}
            <div className='border-t border-border/55 px-5 py-5 sm:px-7 sm:py-6 dark:border-border/40'>
              <div className='flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-8'>
                <div className='min-w-0 flex-1'>
                  <div className='flex flex-wrap items-center gap-x-3 gap-y-1'>
                    <span className='font-mono text-[11px] font-bold tracking-[0.16em] text-primary'>
                      {String(activeProject + 1).padStart(2, '0')}
                    </span>
                    <span className='text-[11px] font-semibold uppercase tracking-[0.12em] text-body/55'>
                      {project.role}
                    </span>
                  </div>

                  <h3 className='mt-2 font-heading !font-semibold uppercase text-[1.15rem] leading-snug tracking-[0.03em] text-heading sm:text-[1.35rem]'>
                    {project.title}
                  </h3>

                  <p className='mt-2 max-w-2xl text-[13.5px] leading-relaxed text-body/75 sm:text-sm'>
                    {project.summary}
                  </p>

                  <ul className='mt-4 grid gap-2 sm:grid-cols-2'>
                    {project.keyFeatures.slice(0, 4).map(feature => (
                      <li
                        key={feature}
                        className='flex items-start gap-2 text-[12.5px] leading-snug text-body/70'
                      >
                        <span
                          className='mt-[0.4em] h-1 w-1 shrink-0 bg-primary'
                          aria-hidden
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className='mt-4 flex flex-wrap gap-1.5'>
                    {project.stack.slice(0, 6).map(item => (
                      <span
                        key={item}
                        className='border border-border/55 px-2 py-0.5 text-[10.5px] font-medium text-body/65 dark:border-border/40'
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='flex shrink-0 flex-col gap-2.5 sm:flex-row lg:flex-col xl:flex-row'>
                  <Link
                    href={`/projects/${project.slug}`}
                    className='inline-flex items-center justify-center gap-2 bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover'
                  >
                    Case study
                    <ArrowRight className='h-4 w-4' />
                  </Link>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center justify-center gap-2 border border-border/70 px-5 py-2.5 text-sm font-medium text-heading transition-colors hover:border-primary/30 hover:text-primary dark:border-border/50'
                    >
                      Live demo
                      <ExternalLink className='h-3.5 w-3.5' />
                    </a>
                  ) : (
                    <Link
                      href='/projects'
                      className='inline-flex items-center justify-center gap-2 border border-border/70 px-5 py-2.5 text-sm font-medium text-heading transition-colors hover:border-primary/30 hover:text-primary dark:border-border/50'
                    >
                      All projects
                      <ArrowRight className='h-3.5 w-3.5' />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>

        <p className='text-center text-[12px] text-body/50'>
          Viewing <span className='font-semibold text-heading/70'>{shortTitle}</span>
          {' · '}
          {activeProject + 1} of {featuredProjects.length} featured
        </p>
      </div>
    </section>
  )
}
