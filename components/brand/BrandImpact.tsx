'use client'

import { BrandSection } from '@/components/brand/system/BrandSection'
import { brandMotion, brandType } from '@/lib/brand-system'
import { impactOutcomes } from '@/lib/homepage-media'
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

/** Shared case-study action signifier (Issues 15, 26). */
function CaseStudyCue ({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 text-sm font-semibold text-heading',
        className
      )}
    >
      Open case study
      <ArrowUpRight
        size={15}
        className='transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
        aria-hidden
      />
    </span>
  )
}

export function BrandImpact () {
  const items = impactOutcomes()
  const [featured, ...rest] = items
  const reduce = useReducedMotion()

  return (
    <BrandSection
      id='impact'
      layout='band'
      className='relative isolate min-h-0 overflow-hidden bg-[hsl(214_28%_98%)]'
    >
      <p
        className='pointer-events-none absolute -right-[0.035em] top-[0.05em] select-none font-display text-[clamp(6rem,17vw,14rem)] font-bold leading-none tracking-[-0.08em] text-heading/[0.025]'
        aria-hidden
      >
        EVIDENCE
      </p>
      <div
        className='pointer-events-none absolute -left-40 top-32 h-[30rem] w-[30rem] rounded-full bg-[hsl(211_70%_58%/0.07)] blur-3xl'
        aria-hidden
      />

      <div className='relative z-10 mx-auto grid w-full max-w-[1280px] gap-10 px-6 py-16 sm:px-8 md:px-10 md:py-20 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12 lg:py-24'>
        <div>
          <p className='font-mono text-xs tracking-wide text-highlight'>
            Impact · Shipped evidence
          </p>
          <h2 className={cn('mt-5', brandType.title)}>
            Outcomes
            <br />
            <span className='text-highlight'>you can see.</span>
          </h2>
          <p className='mt-6 max-w-[48ch] text-sm leading-relaxed text-body md:text-base'>
            Observable results from shipped products—real workflows,
            production systems, and usable releases. No invented percentages.
          </p>
        </div>

        <div className='flex items-center gap-4 lg:pb-2'>
          <div className='relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-heading/[0.15]'>
            <div className='absolute inset-2 rounded-full border border-dashed border-[hsl(211_48%_42%/0.28)]' />
            <span className='text-center font-mono text-xs leading-snug tracking-wide text-heading/55'>
              Shipped
              <br />
              not claimed
            </span>
          </div>
          <div className='hidden lg:block'>
            <p className='font-display text-2xl font-semibold text-heading'>
              {String(items.length).padStart(2, '0')}
            </p>
            <p className='mt-1 font-mono text-xs tracking-wide text-muted-foreground'>
              Product outcomes
            </p>
          </div>
        </div>
      </div>

      {featured ? (
        <motion.article
          className='relative z-10'
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: brandMotion.durationSlow, ease: brandMotion.ease }}
        >
          {/* Issue 27: same horizontal inset as heading / list */}
          <div className='mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-10 lg:px-12'>
            <Link
              href={`/projects/${featured.slug}`}
              className='group grid overflow-hidden border border-heading/10 lg:grid-cols-[1.35fr_0.65fr]'
            >
              <div className='relative aspect-[16/10] overflow-hidden bg-muted lg:aspect-auto lg:min-h-[460px]'>
                <Image
                  src={encodeSrc(featured.image)}
                  alt={featured.imageAlt}
                  fill
                  sizes='(max-width: 1024px) 100vw, 68vw'
                  className='object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]'
                  unoptimized={isSvg(featured.image)}
                />
                <div
                  className='pointer-events-none absolute inset-0 bg-gradient-to-t from-heading/20 via-transparent to-transparent'
                  aria-hidden
                />
              </div>

              <div className='relative flex flex-col justify-between bg-background px-6 py-9 sm:px-8 md:px-10 lg:px-11 lg:py-12'>
                {/* Issue 16: same index treatment as list rows */}
                <div className='relative'>
                  <p className='font-mono text-xs tracking-wide text-highlight'>
                    01 · Lead outcome
                  </p>
                  <h3 className={cn('mt-5', brandType.title, 'font-semibold')}>
                    {featured.title}
                  </h3>
                  <p className='mt-6 text-sm leading-relaxed text-body md:text-base'>
                    {featured.line}
                  </p>
                </div>

                <div className='relative mt-10'>
                  <div className='flex flex-wrap items-center gap-x-2 gap-y-2'>
                    {featured.stack.map((technology, technologyIndex) => (
                      <span
                        key={technology}
                        className='inline-flex items-center gap-2 font-mono text-xs tracking-wide text-heading/40'
                      >
                        {technologyIndex > 0 ? (
                          <span className='h-0.5 w-0.5 rounded-full bg-primary' />
                        ) : null}
                        {technology}
                      </span>
                    ))}
                  </div>
                  <CaseStudyCue className='mt-6' />
                </div>
              </div>
            </Link>
          </div>
        </motion.article>
      ) : null}

      <div className='relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-16 pt-10 sm:px-8 md:px-10 md:pb-20 md:pt-14 lg:px-12 lg:pb-24'>
        <div className='mb-2 flex items-center gap-4'>
          <p className='font-mono text-xs tracking-wide text-muted-foreground'>
            More shipped outcomes
          </p>
          <span className='h-px flex-1 bg-heading/10' aria-hidden />
          <p className='font-mono text-xs tracking-wide text-muted-foreground'>
            Proof index
          </p>
        </div>

        <ol className='divide-y divide-heading/10 border-y border-heading/10'>
          {rest.map((item, i) => (
            <motion.li
              key={item.slug}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-6%' }}
              transition={{ duration: brandMotion.duration, ease: brandMotion.ease }}
            >
              {/* Issue 26: tighter grid — cue sits with copy, not far-right orphan */}
              <Link
                href={`/projects/${item.slug}`}
                className='group grid gap-4 py-7 sm:grid-cols-[2.5rem_minmax(0,9rem)_1fr] sm:items-start md:grid-cols-[3rem_minmax(0,11rem)_1fr] md:gap-6 md:py-8'
              >
                <span className='font-mono text-xs tracking-wide text-highlight'>
                  {String(i + 2).padStart(2, '0')}
                </span>

                <div className='relative aspect-[16/9] overflow-hidden bg-muted sm:aspect-[4/3]'>
                  <Image
                    src={encodeSrc(item.image)}
                    alt={item.imageAlt}
                    fill
                    sizes='(max-width: 640px) 100vw, 176px'
                    className='object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]'
                    unoptimized={isSvg(item.image)}
                  />
                </div>

                <div className='min-w-0'>
                  <h3 className='font-display text-xl font-semibold tracking-tight text-heading transition-colors group-hover:text-highlight md:text-2xl'>
                    {item.title}
                  </h3>
                  <p className='mt-2 max-w-[52ch] text-sm leading-relaxed text-body'>
                    {item.line}
                  </p>
                  <p className='mt-3 font-mono text-xs tracking-wide text-heading/40'>
                    {item.stack.join(' · ')}
                  </p>
                  <CaseStudyCue className='mt-4' />
                </div>
              </Link>
            </motion.li>
          ))}
        </ol>

        <div className='mt-9 flex justify-end'>
          <Link href='/projects' className='cta-primary group'>
            View all case studies
            <ArrowUpRight
              size={15}
              className='transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </BrandSection>
  )
}
