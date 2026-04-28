'use client'

import { services } from '@/data/site'
import { motion } from 'framer-motion'
import { Blocks, Brain, Cog, Database, LayoutGrid, Wrench } from 'lucide-react'
import Link from 'next/link'

const serviceIcons = [Blocks, LayoutGrid, Brain, Database, Cog, Wrench]

export function ServicesPreview () {
  return (
    <section className='section-anchor surface-page py-10'>
      <div className='container-wide space-y-12'>
        {/* Header */}
        <div className='space-y-3 sm:space-y-4 max-w-3xl'>
          <p className='section-label'>Services</p>
          <h2 className='section-heading text-2xl sm:text-3xl lg:text-4xl'>
            Development support across{' '}
            <span className='section-heading-accent'>product stages</span>
          </h2>
          <p className='max-w-2xl text-base leading-[1.8] text-body sm:text-[1.05rem]'>
            From MVP to production-scale apps, I provide full-stack development
            support with clean architecture, performance optimization, and
            scalable infrastructure.
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid gap-px overflow-hidden bg-border/70 md:grid-cols-2 lg:grid-cols-3'>
          {services.slice(0, 6).map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className='group relative bg-background p-5 sm:p-6 md:p-7 transition-all duration-500 hover:bg-card active:scale-[0.98]'
            >
              <div className='mb-6 flex items-center justify-between'>
                <div className='flex h-7 w-full items-start justify-start gap-2 transition-all duration-300 group-hover:border-primary/40 '>
                  {(() => {
                    const Icon = serviceIcons[index % serviceIcons.length]
                    return <Icon className='h-5 w-5 text-primary' />
                  })()}

                  <h3 className='font-heading text-[15px] font-bold leading-snug text-heading transition-colors duration-300 group-hover:text-primary'>
                    {service.title}
                  </h3>
                </div>
                {/* <div className='w-full items-end flex justify-end'>
                  <ArrowUpRight className='h-4 w-4 text-foreground/10 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary' />
                </div> */}
              </div>

              <p className='line-clamp-4 text-[13px] leading-relaxed text-body/70'>
                {service.description}
              </p>
              <div className='absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100' />
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <div className='pt-6'>
          <Link
            href='/services'
            className='inline-flex items-center border border-border/70 surface-panel px-5 py-2.5 text-sm font-semibold text-heading shadow-card transition-all duration-200 hover:border-primary/30 hover:text-primary hover:shadow-float dark:border-border/50 dark:hover:bg-slate-800'
          >
            Explore All Services
            <span className='ml-2 transition-transform group-hover:translate-x-0.5'>
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
