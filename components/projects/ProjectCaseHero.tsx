'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

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

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <section className='border-b border-border/70 bg-background'>
      <div className='container-wide grid gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16'>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className='section-label'>
            Case {caseNo} · {role}
          </p>
          <h1 className='mt-5 font-display text-fluid-display font-normal tracking-tight text-heading'>
            {shortTitle}
          </h1>
          <p className='mt-6 max-w-xl text-fluid-base text-body'>{description}</p>
          <p className='mt-6 font-mono text-[0.6875rem] tracking-wide text-muted-foreground'>
            {stackPreview}
          </p>
          <div className='mt-8 flex flex-wrap gap-3'>
            {liveUrl ? (
              <Link
                href={liveUrl}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover'
              >
                <ExternalLink className='h-3.5 w-3.5' aria-hidden />
                Live product
              </Link>
            ) : null}
            {githubUrl ? (
              <Link
                href={githubUrl}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm font-medium text-heading transition-colors hover:border-heading'
              >
                <Github className='h-3.5 w-3.5' aria-hidden />
                GitHub
              </Link>
            ) : null}
          </div>
        </motion.div>

        <motion.div
          className='relative'
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex'>
              {images.map((img, i) => (
                <div
                  key={img}
                  className='relative aspect-[4/3] min-w-0 flex-[0_0_100%]'
                >
                  <Image
                    src={img}
                    alt={
                      i === 0
                        ? `${title} product preview`
                        : `${title} view ${i + 1}`
                    }
                    fill
                    sizes='(max-width: 1024px) 100vw, 50vw'
                    className='object-cover object-top'
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </div>
          {images.length > 1 ? (
            <div className='mt-4 flex items-center justify-between'>
              <p className='font-mono text-[0.6875rem] tabular-nums text-muted-foreground'>
                {String(selectedIndex + 1).padStart(2, '0')} /{' '}
                {String(images.length).padStart(2, '0')}
              </p>
              <div className='flex gap-2'>
                <button
                  type='button'
                  onClick={scrollPrev}
                  className='px-3 py-1.5 text-sm text-heading transition-opacity hover:opacity-60'
                  aria-label='Previous image'
                >
                  Prev
                </button>
                <button
                  type='button'
                  onClick={scrollNext}
                  className='px-3 py-1.5 text-sm text-heading transition-opacity hover:opacity-60'
                  aria-label='Next image'
                >
                  Next
                </button>
              </div>
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  )
}
