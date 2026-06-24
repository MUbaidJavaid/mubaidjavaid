'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

export function ProjectImageSlider ({
  images,
  title
}: {
  images: string[]
  title: string
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className='relative'>
      {/* Carousel viewport */}
      <div ref={emblaRef} className='overflow-hidden'>
        <div className='flex'>
          {images.map((img, i) => (
            <div key={img} className='min-w-0 flex-[0_0_100%]'>
              <div className='relative w-full'>
                <Image
                  src={img}
                  alt={
                    i === 0
                      ? `${title} - product preview`
                      : `${title} - screenshot ${i + 1}`
                  }
                  width={1440}
                  height={900}
                  sizes='(max-width: 1240px) 100vw, 1240px'
                  className='h-auto w-full'
                  priority={i === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            className='absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border/60 bg-white/90 p-2 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:shadow-xl dark:border-border/50 dark:bg-slate-900/90 dark:hover:bg-slate-900'
            aria-label='Previous image'
          >
            <ChevronLeft className='h-5 w-5 text-heading' />
          </button>
          <button
            onClick={scrollNext}
            className='absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border/60 bg-white/90 p-2 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:shadow-xl dark:border-border/50 dark:bg-slate-900/90 dark:hover:bg-slate-900'
            aria-label='Next image'
          >
            <ChevronRight className='h-5 w-5 text-heading' />
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className='mt-4 flex items-center justify-center gap-1.5'>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? 'w-6 bg-primary'
                  : 'w-2 bg-border hover:bg-primary/40'
              }`}
            />
          ))}
        </div>
      )}

      {/* Counter */}
      {images.length > 1 && (
        <p className='mt-2 text-center text-xs text-body/50'>
          {selectedIndex + 1} / {images.length}
        </p>
      )}
    </div>
  )
}
