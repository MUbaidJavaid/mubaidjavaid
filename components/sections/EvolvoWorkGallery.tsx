'use client'

import { brandMotion, brandType } from '@/lib/brand-system'
import {
  evolvoCategories,
  evolvoWork,
  type EvolvoCategoryId
} from '@/data/evolvo-work'
import { cn } from '@/lib/utils'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'

type FilterId = 'all' | EvolvoCategoryId

export function EvolvoWorkGallery () {
  const reduce = useReducedMotion()
  const [filter, setFilter] = useState<FilterId>('all')

  const items = useMemo(
    () =>
      filter === 'all'
        ? evolvoWork
        : evolvoWork.filter(item => item.category === filter),
    [filter]
  )

  const filters: { id: FilterId; label: string; count: number }[] = [
    { id: 'all', label: 'All work', count: evolvoWork.length },
    ...evolvoCategories.map(cat => ({
      id: cat.id,
      label: cat.label,
      count: evolvoWork.filter(item => item.category === cat.id).length
    }))
  ]

  const activeLine =
    filter === 'all'
      ? 'Production sites shipped at Evolvo-Technologies — live URLs, categorized by domain.'
      : evolvoCategories.find(cat => cat.id === filter)?.line

  return (
    <div id='evolvo' className='scroll-mt-28'>
      <div className='mx-auto w-full max-w-[1280px] px-6 py-12 sm:px-8 md:px-10 md:py-16 lg:px-12'>
        <div className='flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
          <div>
            <p className='font-mono text-xs tracking-wide text-highlight'>
              Evolvo-Technologies · Client delivery
            </p>
            <h2 className={cn('mt-3', brandType.title)}>
              Live products, by domain.
            </h2>
            <p className='mt-4 max-w-[54ch] text-sm leading-relaxed text-body'>
              {activeLine}
            </p>
          </div>
          <p className='font-mono text-xs tracking-wide text-heading/[0.35]'>
            {String(items.length).padStart(2, '0')} / {String(evolvoWork.length).padStart(2, '0')} sites
          </p>
        </div>

        <div
          className='mt-8 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
          role='tablist'
          aria-label='Evolvo work categories'
        >
          {filters.map(tab => {
            const active = filter === tab.id
            return (
              <button
                key={tab.id}
                type='button'
                role='tab'
                aria-selected={active}
                onClick={() => setFilter(tab.id)}
                className={cn(
                  'shrink-0 border px-3.5 py-2 font-mono text-xs tracking-wide transition-colors',
                  active
                    ? 'border-heading bg-heading text-white'
                    : 'border-heading/15 text-heading/60 hover:border-heading/35 hover:text-heading'
                )}
              >
                {tab.label}
                <span className='ml-2 text-current/50'>
                  {String(tab.count).padStart(2, '0')}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <ul className='mx-auto grid w-full max-w-[1280px] overflow-hidden border-t border-heading/10 sm:grid-cols-2 xl:grid-cols-3'>
        {items.map((item, i) => {
          const category = evolvoCategories.find(cat => cat.id === item.category)
          const host = new URL(item.liveUrl).hostname.replace(/^www\./, '')

          return (
            <motion.li
              key={item.slug}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-6%' }}
              transition={{
                duration: brandMotion.duration,
                delay: reduce ? 0 : Math.min((i % 6) * 0.04, 0.16),
                ease: brandMotion.ease
              }}
              className='border-b border-heading/10 sm:border-r [content-visibility:auto] [contain-intrinsic-size:auto_420px]'
            >
              <article className='group flex h-full flex-col'>
                <a
                  href={item.liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='relative block aspect-[16/10] overflow-hidden bg-muted'
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes='(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw'
                    className='object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]'
                  />
                  <div
                    className='pointer-events-none absolute inset-0 bg-gradient-to-t from-heading/30 via-transparent to-transparent'
                    aria-hidden
                  />
                  <span className='absolute left-4 top-4 bg-white/92 px-2 py-1 font-mono text-xs tracking-wide text-heading'>
                    {category?.label.split(' & ')[0]}
                  </span>
                </a>

                <div className='flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6'>
                  <p className='font-mono text-xs tracking-wide text-heading/[0.35]'>
                    {host}
                  </p>
                  <h3 className='mt-2 font-display text-lg font-semibold leading-snug tracking-tight text-heading sm:text-xl'>
                    {item.title}
                  </h3>
                  <p className='mt-2 flex-1 text-sm leading-relaxed text-body'>
                    {item.summary}
                  </p>
                  <div className='mt-5 flex flex-wrap items-center gap-4'>
                    <a
                      href={item.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-1.5 text-sm font-semibold text-heading'
                    >
                      Open live
                      <ExternalLink size={13} aria-hidden />
                    </a>
                    {item.caseStudySlug ? (
                      <Link
                        href={`/projects/${item.caseStudySlug}`}
                        className='inline-flex items-center gap-1.5 text-sm font-medium text-highlight'
                      >
                        Case study
                        <ArrowUpRight size={13} aria-hidden />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </article>
            </motion.li>
          )
        })}
      </ul>
    </div>
  )
}
