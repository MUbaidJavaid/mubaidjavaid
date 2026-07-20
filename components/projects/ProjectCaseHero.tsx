'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

type ProjectCaseHeroProps = {
  images: string[]
  title: string
  description: string
  role: string
  caseNo: string
  shortTitle: string
  stackPreview: string
  liveUrl?: string
  githubUrl?: string
}

export function ProjectCaseHero ({
  images,
  title,
  description,
  role,
  caseNo,
  shortTitle,
  stackPreview,
  liveUrl,
  githubUrl
}: ProjectCaseHeroProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: images.length > 1 })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const reduce = useReducedMotion()

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  )

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi])

  return (
    <section className='relative min-h-[70vh] overflow-hidden bg-slate-950'>
      {/* Media plane */}
      <div ref={emblaRef} className='absolute inset-0'>
        <div className='flex h-full'>
          {images.map((img, i) => (
            <div key={img} className='relative min-h-[70vh] min-w-0 flex-[0_0_100%]'>
              <Image
                src={img}
                alt={
                  i === 0
                    ? `${title} - product preview`
                    : `${title} - screenshot ${i + 1}`
                }
                fill
                sizes='100vw'
                className='object-cover object-center'
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scrim — readable overlay, keeps image present */}
      <div
        className='pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(11,18,32,0.92)_0%,rgba(11,18,32,0.72)_42%,rgba(11,18,32,0.35)_68%,rgba(11,18,32,0.55)_100%)]'
        aria-hidden
      />
      <div
        className='pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/90 to-transparent'
        aria-hidden
      />

      {/* Content */}
      <div className='container-wide relative z-10 flex min-h-[70vh] flex-col justify-end pb-10 pt-24 md:pb-14 md:pt-28'>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className='max-w-3xl'
        >
          <div className='flex flex-wrap items-center gap-3'>
            <span className='font-mono text-[11px] font-bold tracking-[0.2em] text-[#7DD3FC]'>
              CASE {caseNo}
            </span>
            <span className='h-px w-10 bg-white/25' aria-hidden />
            <span className='text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55'>
              Case study
            </span>
          </div>

          <h1 className='mt-4 font-heading font-semibold uppercase leading-[1.05] tracking-[-0.02em] text-white text-[clamp(1.85rem,1.1rem+3vw,3.15rem)]'>
            {title}
          </h1>

          <p className='mt-4 max-w-2xl text-[15px] leading-[1.8] text-white/70 md:text-base'>
            {description}
          </p>

          <div className='mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px]'>
            <span className='font-semibold uppercase tracking-[0.1em] text-[#9BC9E0]'>
              {role}
            </span>
            <span className='hidden h-3 w-px bg-white/20 sm:block' aria-hidden />
            <span className='text-white/45'>
              {shortTitle} · {stackPreview}
            </span>
          </div>

          <div className='mt-7 flex flex-wrap gap-2.5'>
            {liveUrl ? (
              <Link
                href={liveUrl}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover'
              >
                <ExternalLink className='h-4 w-4' aria-hidden />
                Live demo
              </Link>
            ) : null}
            {githubUrl ? (
              <Link
                href={githubUrl}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 border border-white/30 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-[2px] transition-colors hover:border-white/50 hover:bg-white/10'
              >
                <Github className='h-4 w-4' aria-hidden />
                GitHub
                <ArrowUpRight className='h-3.5 w-3.5 opacity-60' aria-hidden />
              </Link>
            ) : null}
            <Link
              href='/contact'
              className='inline-flex items-center gap-2 border border-white/20 px-4 py-2.5 text-sm font-medium text-white/85 transition-colors hover:border-white/40 hover:text-white'
            >
              Discuss a similar build
            </Link>
          </div>
        </motion.div>

        {/* Ghost case number */}
        <span
          className='pointer-events-none absolute bottom-6 right-4 select-none font-heading text-[clamp(5rem,12vw,9rem)] font-black leading-none tracking-tighter text-white/[0.06] md:right-8'
          aria-hidden
        >
          {caseNo}
        </span>
      </div>

      {/* Carousel chrome */}
      {images.length > 1 ? (
        <>
          <div className='absolute left-4 top-5 z-20 font-mono text-[10px] font-semibold tracking-[0.14em] text-white/85 sm:left-6 sm:top-6'>
            <span className='bg-black/45 px-2.5 py-1'>
              {String(selectedIndex + 1).padStart(2, '0')} /{' '}
              {String(images.length).padStart(2, '0')}
            </span>
          </div>

          <button
            type='button'
            onClick={scrollPrev}
            className='absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/90 text-heading transition-colors hover:text-primary dark:bg-slate-950/80 dark:text-slate-100 sm:left-6'
            aria-label='Previous image'
          >
            <ChevronLeft className='h-4 w-4' />
          </button>
          <button
            type='button'
            onClick={scrollNext}
            className='absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/90 text-heading transition-colors hover:text-primary dark:bg-slate-950/80 dark:text-slate-100 sm:right-6'
            aria-label='Next image'
          >
            <ChevronRight className='h-4 w-4' />
          </button>

          <div className='absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 md:bottom-8'>
            {images.map((_, i) => (
              <button
                key={i}
                type='button'
                onClick={() => scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === selectedIndex
                    ? 'w-6 bg-white'
                    : 'w-1.5 bg-white/35 hover:bg-white/55'
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </section>
  )
}
