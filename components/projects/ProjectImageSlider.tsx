'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

type ProjectImageSliderProps = {
  images: string[]
  title: string
  /** strip = secondary frames row under the story */
  variant?: 'strip' | 'default'
  className?: string
}

export function ProjectImageSlider ({
  images,
  title,
  variant = 'default',
  className = ''
}: ProjectImageSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: images.length > 1,
    align: variant === 'strip' ? 'start' : 'center',
    containScroll: variant === 'strip' ? 'trimSnaps' : undefined
  })
  const [selectedIndex, setSelectedIndex] = useState(0)

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

  if (variant === 'strip') {
    return (
      <div className={`relative ${className}`}>
        <div className='mb-4 flex items-end justify-between gap-3'>
          <div>
            <p className='font-mono text-[10px] font-bold tracking-[0.16em] text-primary/80'>
              MORE FRAMES
            </p>
            <p className='mt-1 text-sm text-body/55'>
              Additional UI direction from this build
            </p>
          </div>
          {images.length > 1 ? (
            <p className='font-mono text-[11px] text-body/40'>
              {String(selectedIndex + 1).padStart(2, '0')} /{' '}
              {String(images.length).padStart(2, '0')}
            </p>
          ) : null}
        </div>

        <div
          ref={emblaRef}
          className='overflow-hidden border border-border/55 dark:border-border/40'
        >
          <div className='flex'>
            {images.map((img, i) => (
              <div
                key={img}
                className='min-w-0 flex-[0_0_85%] sm:flex-[0_0_48%] lg:flex-[0_0_32%]'
              >
                <button
                  type='button'
                  onClick={() => scrollTo(i)}
                  className='relative aspect-[16/10] w-full overflow-hidden bg-slate-950'
                >
                  <Image
                    src={img}
                    alt={`${title} frame ${i + 1}`}
                    fill
                    sizes='(max-width: 640px) 85vw, (max-width: 1024px) 48vw, 32vw'
                    className={`object-cover object-center transition-opacity duration-300 ${
                      i === selectedIndex
                        ? 'opacity-100'
                        : 'opacity-75 hover:opacity-90'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {images.length > 1 ? (
          <div className='mt-3 flex items-center justify-center gap-2'>
            <button
              type='button'
              onClick={scrollPrev}
              className='flex h-8 w-8 items-center justify-center border border-border/60 text-heading transition-colors hover:border-primary/35 hover:text-primary dark:border-border/45'
              aria-label='Previous frame'
            >
              <ChevronLeft className='h-4 w-4' />
            </button>
            <button
              type='button'
              onClick={scrollNext}
              className='flex h-8 w-8 items-center justify-center border border-border/60 text-heading transition-colors hover:border-primary/35 hover:text-primary dark:border-border/45'
              aria-label='Next frame'
            >
              <ChevronRight className='h-4 w-4' />
            </button>
          </div>
        ) : null}
      </div>
    )
  }

  return (
    <div className={`relative bg-slate-950 ${className}`}>
      <div ref={emblaRef} className='overflow-hidden'>
        <div className='flex'>
          {images.map((img, i) => (
            <div key={img} className='min-w-0 flex-[0_0_100%]'>
              <div className='relative aspect-[16/10] w-full sm:aspect-[2/1]'>
                <Image
                  src={img}
                  alt={
                    i === 0
                      ? `${title} - product preview`
                      : `${title} - screenshot ${i + 1}`
                  }
                  fill
                  sizes='(max-width: 1240px) 100vw, 1240px'
                  className='object-cover object-center'
                  priority={i === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <div className='absolute left-3 top-3 z-10 font-mono text-[10px] font-semibold tracking-[0.12em] text-white/90'>
            <span className='bg-black/55 px-2 py-1 backdrop-blur-sm'>
              {String(selectedIndex + 1).padStart(2, '0')} /{' '}
              {String(images.length).padStart(2, '0')}
            </span>
          </div>

          <button
            type='button'
            onClick={scrollPrev}
            className='absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-white/92 text-heading shadow-sm transition-colors hover:text-primary dark:bg-slate-950/85 dark:text-slate-100'
            aria-label='Previous image'
          >
            <ChevronLeft className='h-4 w-4' />
          </button>
          <button
            type='button'
            onClick={scrollNext}
            className='absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-white/92 text-heading shadow-sm transition-colors hover:text-primary dark:bg-slate-950/85 dark:text-slate-100'
            aria-label='Next image'
          >
            <ChevronRight className='h-4 w-4' />
          </button>

          <div className='absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5'>
            {images.map((_, i) => (
              <button
                key={i}
                type='button'
                onClick={() => scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === selectedIndex
                    ? 'w-5 bg-white'
                    : 'w-1.5 bg-white/35 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
