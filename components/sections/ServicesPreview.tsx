'use client'

import { SectionDisplayTag } from '@/components/ui/SectionDisplayTag'
import { services } from '@/data/site'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export function ServicesPreview () {
  const items = services.slice(0, 6)

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

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className='group'
              >
                <Link
                  href='/services'
                  className='grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2 py-6 sm:gap-x-8 sm:py-7 md:gap-x-10'
                >
                  <span className='text-fluid-mega font-heading font-semibold leading-none tracking-tight text-heading/90 transition-colors group-hover:text-primary'>
                    {num}
                  </span>

                  <div className='min-w-0'>
                    <div className='flex items-start gap-2'>
                      <h3 className='font-heading !font-semibold uppercase text-[1.05rem] leading-snug tracking-[0.04em] text-heading transition-colors group-hover:text-primary sm:text-lg md:text-xl'>
                        {service.title}
                      </h3>
                      <ArrowUpRight
                        className='mt-0.5 h-4 w-4 shrink-0 text-primary opacity-80 transition-transform duration-300 ease-out group-hover:-translate-y-1.5 group-hover:translate-x-1.5 sm:mt-1 sm:h-5 sm:w-5'
                        strokeWidth={2.25}
                        aria-hidden
                      />
                    </div>
                    <p className='section-copy mt-2.5 max-w-2xl text-body/80'>
                      {service.description}
                    </p>
                  </div>
                </Link>

                {!isLast && (
                  <div className='h-px w-full bg-border/80 dark:bg-border/50' aria-hidden />
                )}
              </motion.article>
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
