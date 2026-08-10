'use client'

import { BrandSection } from '@/components/brand/system/BrandSection'
import { brandMotion } from '@/lib/brand-system'
import { impactOutcomes } from '@/lib/homepage-media'
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
          <p className='font-mono text-[0.6875rem] uppercase tracking-[0.26em] text-[hsl(211_48%_42%)]'>
            Impact · Shipped evidence
          </p>
          <h2 className='mt-5 font-display text-[clamp(2.7rem,6vw,5.6rem)] font-bold leading-[0.92] tracking-[-0.055em] text-heading'>
            Outcomes
            <span className='block text-[hsl(211_48%_42%)]'>you can see.</span>
          </h2>
          <p className='mt-6 max-w-[48ch] text-sm leading-relaxed text-body md:text-base'>
            Observable results from shipped products—real workflows,
            production systems, and usable releases. No invented percentages.
          </p>
        </div>

        <div className='flex items-center gap-4 lg:pb-2'>
          <div className='relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-heading/[0.15]'>
            <div className='absolute inset-2 rounded-full border border-dashed border-[hsl(211_48%_42%/0.28)]' />
            <span className='text-center font-mono text-[0.5rem] uppercase leading-relaxed tracking-[0.15em] text-heading/[0.45]'>
              Shipped
              <br />
              not claimed
            </span>
          </div>
          <div className='hidden lg:block'>
            <p className='font-display text-2xl font-semibold text-heading'>
              {String(items.length).padStart(2, '0')}
            </p>
            <p className='mt-1 font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-heading/[0.35]'>
              Product outcomes
            </p>
          </div>
        </div>
      </div>

      {featured ? (
        <motion.article
          className='relative z-10 border-y border-heading/10'
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: brandMotion.durationSlow, ease: brandMotion.ease }}
        >
          <Link
            href={`/projects/${featured.slug}`}
            className='group mx-auto grid w-full max-w-[1280px] lg:grid-cols-[1.35fr_0.65fr]'
          >
            <div className='relative aspect-[16/10] overflow-hidden bg-muted lg:aspect-auto lg:min-h-[500px]'>
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
              <span className='absolute left-5 top-5 bg-primary px-3 py-2 font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-primary-foreground md:left-7 md:top-7'>
                Evidence 01
              </span>
            </div>

            <div className='relative flex flex-col justify-between overflow-hidden bg-background px-6 py-9 sm:px-8 md:px-10 lg:px-11 lg:py-12'>
              <span
                className='pointer-events-none absolute -right-[0.06em] -top-[0.12em] font-display text-[9rem] font-bold leading-none tracking-[-0.08em] text-heading/[0.035]'
                aria-hidden
              >
                01
              </span>
              <div className='relative'>
                <p className='font-mono text-[0.625rem] uppercase tracking-[0.18em] text-[hsl(211_48%_42%)]'>
                  Lead outcome
                </p>
                <h3 className='mt-5 font-display text-[clamp(2rem,3.5vw,3.3rem)] font-semibold leading-[1] tracking-[-0.04em] text-heading'>
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
                      className='inline-flex items-center gap-2 font-mono text-[0.5625rem] uppercase tracking-[0.1em] text-heading/40'
                    >
                      {technologyIndex > 0 ? (
                        <span className='h-0.5 w-0.5 rounded-full bg-[hsl(211_48%_42%)]' />
                      ) : null}
                      {technology}
                    </span>
                  ))}
                </div>
                <span className='mt-6 inline-flex items-center gap-2 text-sm font-semibold text-heading'>
                  Open case study
                  <ArrowUpRight
                    size={15}
                    className='transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                    aria-hidden
                  />
                </span>
              </div>
            </div>
          </Link>
        </motion.article>
      ) : null}

      <div className='relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-16 pt-10 sm:px-8 md:px-10 md:pb-20 md:pt-14 lg:px-12 lg:pb-24'>
        <div className='mb-2 flex items-center gap-4'>
          <p className='font-mono text-[0.625rem] uppercase tracking-[0.18em] text-heading/[0.35]'>
            More shipped outcomes
          </p>
          <span className='h-px flex-1 bg-heading/10' aria-hidden />
          <p className='font-mono text-[0.5625rem] uppercase tracking-[0.15em] text-heading/30'>
            Proof index
          </p>
        </div>

        <ol className='divide-y divide-heading/10 border-b border-heading/10'>
          {rest.map((item, i) => (
            <motion.li
              key={item.slug}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-6%' }}
              transition={{ duration: brandMotion.duration, ease: brandMotion.ease }}
            >
              <Link
                href={`/projects/${item.slug}`}
                className='group grid gap-5 py-7 sm:grid-cols-[2.5rem_10rem_1fr_auto] sm:items-center md:grid-cols-[3rem_14rem_1fr_auto] md:gap-7 md:py-8'
              >
                <span className='font-mono text-[0.625rem] text-[hsl(211_48%_42%)]'>
                  {String(i + 2).padStart(2, '0')}
                </span>

                <div className='relative aspect-[16/9] overflow-hidden bg-muted'>
                  <Image
                    src={encodeSrc(item.image)}
                    alt={item.imageAlt}
                    fill
                    sizes='(max-width: 640px) 100vw, 224px'
                    className='object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]'
                    unoptimized={isSvg(item.image)}
                  />
                </div>

                <div className='min-w-0'>
                  <h3 className='font-display text-xl font-semibold tracking-tight text-heading transition-colors group-hover:text-[hsl(211_48%_38%)] md:text-2xl'>
                    {item.title}
                  </h3>
                  <p className='mt-2 max-w-[52ch] text-sm leading-relaxed text-body'>
                    {item.line}
                  </p>
                  <p className='mt-3 font-mono text-[0.5rem] uppercase tracking-[0.1em] text-heading/[0.35]'>
                    {item.stack.join(' · ')}
                  </p>
                </div>

                <span className='flex h-10 w-10 items-center justify-center rounded-full border border-heading/[0.15] text-heading/[0.45] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-heading/[0.35] group-hover:text-heading'>
                  <ArrowUpRight size={15} aria-hidden />
                </span>
              </Link>
            </motion.li>
          ))}
        </ol>

        <div className='mt-9 flex justify-end'>
          <Link
            href='/projects'
            className='group inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover'
          >
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
