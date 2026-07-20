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
  const images = project?.images?.length
    ? project.images
    : ([project?.image].filter(Boolean) as string[])

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

  return (
    <section className='section-anchor relative overflow-hidden surface-muted py-12 md:py-16'>
      <div
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_0%,hsl(202_61%_42%/0.09),transparent_68%)]'
        aria-hidden
      />

      <div className='container-wide relative z-10 space-y-8 md:space-y-10'>
        {/* Header — same mega heading size as other sections */}
        <header className='section-header gap-3'>
          <SectionDisplayTag tag='Projects' pattern='bracket' />
          <p className='section-lead'>
            End-to-end builds — architecture through deployment.
          </p>
          <Link
            href='/projects'
            className='group inline-flex items-center gap-2 border border-border/70 surface-panel px-4 py-2 text-sm font-semibold text-heading transition-colors hover:border-primary/30 hover:text-primary dark:border-border/50'
          >
            View all projects
            <ArrowRight className='h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5' />
          </Link>
        </header>

        {/* Project tabs */}
        <div
          className='mx-auto flex w-full max-w-3xl items-stretch justify-center border-y border-border/55 dark:border-border/40'
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
                className={`group relative flex min-w-0 flex-1 flex-col items-center gap-1 px-3 py-3.5 text-center transition-colors duration-200 sm:px-4 ${
                  isActive
                    ? 'text-heading'
                    : 'text-body/50 hover:text-heading/80'
                }`}
              >
                <span
                  className={`font-mono text-[10px] font-bold tracking-[0.16em] ${
                    isActive ? 'text-primary' : 'text-body/35 group-hover:text-primary/60'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className='truncate text-[12px] font-semibold uppercase tracking-[0.07em] sm:text-[13px]'>
                  {label}
                </span>
                <span
                  className={`absolute inset-x-4 bottom-0 h-0.5 transition-all duration-300 ${
                    isActive
                      ? 'bg-primary'
                      : 'bg-transparent group-hover:bg-primary/25'
                  }`}
                  aria-hidden
                />
              </button>
            )
          })}
        </div>

        {/* Showcase */}
        <AnimatePresence mode='wait'>
          <motion.article
            key={project.slug}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className='mx-auto max-w-5xl overflow-hidden border border-border/60 bg-card shadow-[0_18px_44px_-26px_rgba(15,23,42,0.35)] dark:border-border/45 dark:shadow-[0_18px_44px_-26px_rgba(0,0,0,0.55)]'
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            role='tabpanel'
          >
            <div className='grid lg:grid-cols-[1.2fr_0.8fr]'>
              {/* Media */}
              <div className='relative min-h-[240px] bg-slate-950 sm:min-h-[280px] lg:min-h-full'>
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
                      sizes='(max-width: 1024px) 100vw, 60vw'
                      className='object-cover object-center'
                      priority={i === 0 && activeProject === 0}
                    />
                  </div>
                ))}

                {images.length > 1 && (
                  <>
                    <div className='absolute left-3 top-3 z-10 font-mono text-[10px] font-semibold tracking-[0.12em] text-white/90'>
                      <span className='bg-black/55 px-2 py-1 backdrop-blur-sm'>
                        {String(activeImage + 1).padStart(2, '0')} /{' '}
                        {String(images.length).padStart(2, '0')}
                      </span>
                    </div>

                    <button
                      type='button'
                      onClick={prevImage}
                      className='absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center bg-white/92 text-heading shadow-sm transition-colors hover:text-primary dark:bg-slate-950/85 dark:text-slate-100'
                      aria-label='Previous image'
                    >
                      <ChevronLeft className='h-4 w-4' />
                    </button>
                    <button
                      type='button'
                      onClick={nextImage}
                      className='absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center bg-white/92 text-heading shadow-sm transition-colors hover:text-primary dark:bg-slate-950/85 dark:text-slate-100'
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
                              ? 'w-5 bg-white'
                              : 'w-1.5 bg-white/35 hover:bg-white/60'
                          }`}
                          aria-label={`Go to image ${i + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Details */}
              <div className='flex flex-col justify-between gap-5 border-t border-border/55 p-5 sm:p-6 lg:border-l lg:border-t-0 dark:border-border/40'>
                <div className='min-w-0'>
                  <div className='flex items-center gap-2.5'>
                    <span className='font-mono text-[10px] font-bold tracking-[0.16em] text-primary'>
                      {String(activeProject + 1).padStart(2, '0')}
                    </span>
                    <span className='h-px flex-1 bg-border/55' aria-hidden />
                    <span className='max-w-[60%] truncate text-[10px] font-semibold uppercase tracking-[0.1em] text-body/50'>
                      {project.role}
                    </span>
                  </div>

                  <h3 className='mt-3 font-heading !font-semibold uppercase text-[1.1rem] leading-snug tracking-[0.03em] text-heading sm:text-[1.2rem]'>
                    {project.title}
                  </h3>

                  <p className='mt-2 text-[13px] leading-relaxed text-body/70'>
                    {project.summary}
                  </p>

                  <ul className='mt-4 space-y-2 border-t border-border/50 pt-4'>
                    {project.keyFeatures.slice(0, 3).map(feature => (
                      <li
                        key={feature}
                        className='flex items-start gap-2.5 text-[12.5px] leading-snug text-body/65'
                      >
                        <span
                          className='mt-[0.45em] h-1 w-1 shrink-0 bg-primary'
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
                        className='border border-border/50 px-2 py-0.5 text-[10.5px] font-medium text-body/60 dark:border-border/40'
                      >
                        {item}
                      </span>
                    ))}
                    {project.stack.length > 5 && (
                      <span className='border border-border/50 px-2 py-0.5 text-[10.5px] font-medium text-body/60 dark:border-border/40'>
                        +{project.stack.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                <div className='flex flex-wrap gap-2.5'>
                  <Link
                    href={`/projects/${project.slug}`}
                    className='inline-flex items-center gap-2 bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover'
                  >
                    Case study
                    <ArrowRight className='h-3.5 w-3.5' />
                  </Link>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 border border-border/65 px-4 py-2 text-sm font-medium text-heading transition-colors hover:border-primary/30 hover:text-primary dark:border-border/50'
                    >
                      Live demo
                      <ExternalLink className='h-3.5 w-3.5' />
                    </a>
                  ) : (
                    <Link
                      href='/projects'
                      className='inline-flex items-center gap-2 border border-border/65 px-4 py-2 text-sm font-medium text-heading transition-colors hover:border-primary/30 hover:text-primary dark:border-border/50'
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
      </div>
    </section>
  )
}
