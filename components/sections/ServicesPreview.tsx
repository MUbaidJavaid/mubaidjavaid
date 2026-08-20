'use client'

import { SectionDisplayTag } from '@/components/ui/SectionDisplayTag'
import { services } from '@/data/site'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export function ServicesPreview () {
  const items = services.slice(0, 6)
  const [active, setActive] = useState(0)
  const itemRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const focusY = window.innerHeight * 0.42
      let best = 0
      let bestDist = Number.POSITIVE_INFINITY

      itemRefs.current.forEach((el, i) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        if (rect.bottom < 0 || rect.top > window.innerHeight) return
        const center = rect.top + rect.height / 2
        const dist = Math.abs(center - focusY)
        if (dist < bestDist) {
          bestDist = dist
          best = i
        }
      })

      setActive(prev => (prev === best ? prev : best))
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className='section-anchor surface-page py-12 md:py-16'>
      <div className='container-wide space-y-12 md:space-y-14'>
        <div className='section-header'>
          <SectionDisplayTag tag='Services' pattern='angle' />
          <p className='section-lead'>
            Full-stack support from MVP to production scale.
          </p>
        </div>

        <div className='mx-auto max-w-4xl'>
          {items.map((service, index) => {
            const num = String(index + 1).padStart(2, '0')
            const isLast = index === items.length - 1
            const isActive = active === index

            return (
              <article
                key={service.title}
                ref={el => {
                  itemRefs.current[index] = el
                }}
                className={`group transition-[opacity,filter] duration-500 ease-out ${
                  isActive
                    ? 'opacity-100'
                    : 'opacity-[0.28] saturate-[0.65]'
                }`}
              >
                <Link
                  href='/services'
                  className='grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2 py-6 sm:gap-x-8 sm:py-7 md:gap-x-10'
                >
                  <span
                    className={`text-fluid-mega font-heading font-semibold leading-none tracking-tight transition-colors duration-500 ${
                      isActive
                        ? 'text-heading/90 group-hover:text-primary'
                        : 'text-heading/45'
                    }`}
                  >
                    {num}
                  </span>

                  <div className='min-w-0'>
                    <div className='flex items-start gap-2'>
                      <h3
                        className={`font-heading !font-semibold uppercase text-[1.05rem] leading-snug tracking-[0.04em] transition-colors duration-500 sm:text-lg md:text-xl ${
                          isActive
                            ? 'text-heading group-hover:text-primary'
                            : 'text-heading/55'
                        }`}
                      >
                        {service.title}
                      </h3>
                      <ArrowUpRight
                        className={`mt-0.5 h-4 w-4 shrink-0 transition-[transform,opacity,color] duration-300 ease-out sm:mt-1 sm:h-5 sm:w-5 ${
                          isActive
                            ? 'text-primary opacity-80 group-hover:-translate-y-1.5 group-hover:translate-x-1.5'
                            : 'text-primary/40 opacity-50'
                        }`}
                        strokeWidth={2.25}
                        aria-hidden
                      />
                    </div>
                    <p
                      className={`section-copy mt-2.5 max-w-2xl transition-colors duration-500 ${
                        isActive ? 'text-body/80' : 'text-body/45'
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </Link>

                {!isLast && (
                  <div
                    className='h-px w-full bg-border/80 dark:bg-border/50'
                    aria-hidden
                  />
                )}
              </article>
            )
          })}
        </div>

        <div className='flex justify-center pt-2'>
          <Link
            href='/services'
            className='inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-hover group/cta'
          >
            Explore all services
            <ArrowUpRight
              className='h-4 w-4 transition-transform duration-300 group-hover/cta:-translate-y-1 group-hover/cta:translate-x-1'
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
