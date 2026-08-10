'use client'

import { brandMotion } from '@/lib/brand-system'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function encodeSrc (src: string) {
  return encodeURI(src)
}

function isSvg (src: string) {
  return /\.svg($|\?)/i.test(src)
}

export function ProjectsPortfolioGrid () {
  const reduce = useReducedMotion()

  return (
    <ol className='space-y-0'>
      {projects.map((project, i) => {
        const short = project.title.split('—')[0].trim()
        const image = project.images?.[0] ?? project.image
        const reverse = i % 2 === 1

        return (
          <motion.li
            key={project.slug}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{
              duration: brandMotion.durationSlow,
              delay: reduce ? 0 : Math.min(i * 0.04, 0.16),
              ease: brandMotion.ease
            }}
            className='border-b border-heading/10'
          >
            <Link
              href={`/projects/${project.slug}`}
              className={cn(
                'group mx-auto grid w-full max-w-[1280px] lg:grid-cols-2',
                reverse && 'lg:[&>*:first-child]:order-2'
              )}
            >
              <div className='relative aspect-[16/10] overflow-hidden bg-muted lg:aspect-auto lg:min-h-[360px]'>
                <Image
                  src={encodeSrc(image)}
                  alt={project.imageAlt ?? short}
                  fill
                  sizes='(max-width: 1024px) 100vw, 50vw'
                  className='object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]'
                  unoptimized={isSvg(image)}
                />
                <div
                  className='pointer-events-none absolute inset-0 bg-gradient-to-t from-heading/25 via-transparent to-transparent'
                  aria-hidden
                />
                <span className='absolute left-4 top-4 bg-primary px-2.5 py-1.5 font-mono text-[0.5rem] uppercase tracking-[0.16em] text-primary-foreground md:left-5 md:top-5'>
                  Case {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div className='relative flex flex-col justify-center overflow-hidden px-6 py-8 sm:px-8 md:px-10 md:py-12 lg:px-12'>
                <span
                  className='pointer-events-none absolute -right-[0.05em] -top-[0.18em] font-display text-[7.5rem] font-bold leading-none tracking-[-0.08em] text-heading/[0.03]'
                  aria-hidden
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <p className='font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-[hsl(211_48%_42%)]'>
                  {project.role}
                </p>
                <h2 className='mt-3 font-display text-[clamp(1.7rem,3vw,2.6rem)] font-semibold leading-[1.05] tracking-tight text-heading transition-colors group-hover:text-[hsl(211_48%_38%)]'>
                  {short}
                </h2>
                <p className='mt-4 max-w-[46ch] text-sm leading-relaxed text-body'>
                  {project.impact[0] ?? project.summary}
                </p>

                <p className='mt-6 font-mono text-[0.5rem] uppercase tracking-[0.1em] text-heading/[0.35]'>
                  {project.stack.slice(0, 5).join(' · ')}
                </p>

                <span className='mt-7 inline-flex items-center gap-2 text-sm font-semibold text-heading'>
                  Open case study
                  <ArrowUpRight
                    size={15}
                    className='transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                    aria-hidden
                  />
                </span>
              </div>
            </Link>
          </motion.li>
        )
      })}
    </ol>
  )
}
