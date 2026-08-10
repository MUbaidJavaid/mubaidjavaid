'use client'

import { BrandSection } from '@/components/brand/system/BrandSection'
import { brandMotion } from '@/lib/brand-system'
import { posts } from '@/data/posts'
import { blogPreview } from '@/data/site'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, BookOpen, Clock3 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function formatDate (iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  })
}

export function BrandWriting () {
  const latest = posts.slice(0, 4)
  const featured = latest[0]
  const index = latest.slice(1)
  const reduce = useReducedMotion()

  return (
    <BrandSection
      id='writing'
      layout='band'
      className='relative min-h-0 overflow-hidden bg-background'
    >
      <div className='grid lg:grid-cols-[0.43fr_0.57fr]'>
        {/* Ink page — featured writing */}
        <div className='relative isolate overflow-hidden bg-primary px-6 py-14 text-primary-foreground sm:px-8 md:px-10 md:py-20 lg:min-h-[720px] lg:px-12 xl:pl-[max(3rem,calc((100vw-1280px)/2))]'>
          <div
            className='pointer-events-none absolute inset-0 opacity-[0.16]'
            aria-hidden
            style={{
              backgroundImage:
                'linear-gradient(transparent 95%, rgba(255,255,255,0.16) 95%)',
              backgroundSize: '100% 28px'
            }}
          />
          <div
            className='pointer-events-none absolute -right-28 -top-24 h-72 w-72 rounded-full border border-white/10'
            aria-hidden
          />
          <div
            className='pointer-events-none absolute -right-16 -top-12 h-48 w-48 rounded-full border border-white/10'
            aria-hidden
          />
          <p
            className='pointer-events-none absolute -bottom-[0.08em] -right-[0.03em] select-none font-display text-[clamp(8rem,18vw,15rem)] font-bold leading-none tracking-[-0.09em] text-white/[0.035]'
            aria-hidden
          >
            W.
          </p>

          <motion.div
            className='relative z-10 flex h-full max-w-xl flex-col'
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{ duration: brandMotion.durationSlow, ease: brandMotion.ease }}
          >
            <div className='flex items-center justify-between gap-4 border-b border-white/[0.15] pb-4'>
              <p className='font-mono text-[0.625rem] uppercase tracking-[0.24em] text-[hsl(211_70%_72%)]'>
                The workbench
              </p>
              <p className='font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-white/[0.35]'>
                Issue 01 · 2026
              </p>
            </div>

            <div className='relative mt-8 aspect-[16/10] w-full overflow-hidden border-y border-white/10 md:mt-10'>
              <Image
                src='/writing-workbench.png'
                alt='Overhead software engineering workbench with keyboard, laptop and architecture notebook'
                fill
                sizes='(max-width: 1024px) 100vw, 43vw'
                className='object-cover object-center'
              />
              <div
                className='pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-primary/10'
                aria-hidden
              />
              <div
                className='pointer-events-none absolute bottom-0 left-0 h-px w-20 bg-[hsl(211_70%_68%)]'
                aria-hidden
              />
            </div>

            <div className='mt-9 lg:mt-11'>
              <div className='flex items-center gap-3'>
                <span className='flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.15] text-white/70'>
                  <BookOpen size={15} strokeWidth={1.55} aria-hidden />
                </span>
                <p className='font-mono text-[0.625rem] uppercase tracking-[0.2em] text-white/[0.45]'>
                  Featured note
                </p>
              </div>

              {featured ? (
                <Link
                  href={`/blog/${featured.slug}`}
                  className='group mt-6 block'
                >
                  <p className='font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-[hsl(211_70%_72%)]'>
                    {featured.category}
                  </p>
                  <h3 className='mt-4 max-w-[13ch] font-display text-[clamp(2.2rem,4.5vw,4rem)] font-bold leading-[0.98] tracking-[-0.04em] text-white'>
                    {featured.title}
                  </h3>
                  <p className='mt-5 max-w-[44ch] text-sm leading-relaxed text-white/60'>
                    {featured.summary}
                  </p>

                  <div className='mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/[0.15] pt-5'>
                    <span className='font-mono text-[0.5625rem] uppercase tracking-[0.13em] text-white/40'>
                      {formatDate(featured.publishedAt)}
                    </span>
                    <span className='inline-flex items-center gap-2 font-mono text-[0.5625rem] uppercase tracking-[0.13em] text-white/40'>
                      <Clock3 size={11} aria-hidden />
                      {featured.readTime}
                    </span>
                    <span className='ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-white/50'>
                      <ArrowUpRight size={16} aria-hidden />
                    </span>
                  </div>
                </Link>
              ) : null}
            </div>
          </motion.div>
        </div>

        {/* Paper page — article index */}
        <div className='relative px-6 py-14 sm:px-8 md:px-10 md:py-20 lg:px-12 xl:pr-[max(3rem,calc((100vw-1280px)/2))]'>
          <div className='mx-auto max-w-3xl lg:mx-0'>
            <div className='flex items-start justify-between gap-6'>
              <div>
                <p className='font-mono text-[0.6875rem] uppercase tracking-[0.26em] text-[hsl(211_48%_42%)]'>
                  {blogPreview.title} · Field notes
                </p>
                <h2 className='mt-5 max-w-[10ch] font-display text-[clamp(2.6rem,5.2vw,5rem)] font-bold leading-[0.94] tracking-[-0.05em] text-heading'>
                  Notes from the
                  <span className='block text-[hsl(211_48%_42%)]'>workbench.</span>
                </h2>
              </div>
              <p className='hidden font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-heading/30 sm:block [writing-mode:vertical-rl]'>
                Build · learn · document
              </p>
            </div>

            <div className='mt-7 flex items-end justify-between gap-6'>
              <p className='max-w-[42ch] text-sm leading-relaxed text-body'>
                {blogPreview.description}
              </p>
              <Link
                href='/blog'
                className='group hidden shrink-0 items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.15em] text-heading sm:inline-flex'
              >
                All articles
                <ArrowUpRight
                  size={13}
                  className='transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                  aria-hidden
                />
              </Link>
            </div>

            <div className='mt-10 flex items-center gap-4'>
              <span className='font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-heading/[0.35]'>
                Index
              </span>
              <span className='h-px flex-1 bg-heading/[0.15]' aria-hidden />
              <span className='font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-heading/[0.35]'>
                {String(index.length).padStart(2, '0')} entries
              </span>
            </div>

            <ol className='mt-2 divide-y divide-heading/10 border-b border-heading/10'>
              {index.map((post, i) => (
                <motion.li
                  key={post.slug}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-6%' }}
                  transition={{
                    duration: brandMotion.duration,
                    ease: brandMotion.ease
                  }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className='group grid gap-3 py-6 sm:grid-cols-[2.5rem_1fr_auto] sm:gap-5 md:py-7'
                  >
                    <span className='font-mono text-[0.625rem] text-[hsl(211_48%_42%)]'>
                      {String(i + 2).padStart(2, '0')}
                    </span>
                    <div className='min-w-0'>
                      <p className='font-mono text-[0.5rem] uppercase tracking-[0.16em] text-heading/[0.35]'>
                        {post.category}
                      </p>
                      <h3 className='mt-2 font-display text-lg font-semibold leading-tight tracking-tight text-heading transition-colors group-hover:text-[hsl(211_48%_38%)] md:text-xl'>
                        {post.title}
                      </h3>
                      <p className='mt-2 line-clamp-2 max-w-[48ch] text-xs leading-relaxed text-body'>
                        {post.summary}
                      </p>
                    </div>
                    <div className='flex items-center justify-between gap-4 sm:flex-col sm:items-end'>
                      <span className='font-mono text-[0.5625rem] text-heading/[0.35]'>
                      {post.readTime}
                      </span>
                      <ArrowUpRight
                        size={15}
                        className='text-heading/30 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-heading'
                        aria-hidden
                      />
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ol>

            <Link
              href='/blog'
              className='mt-7 inline-flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.15em] text-heading sm:hidden'
            >
              All articles <ArrowUpRight size={13} aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </BrandSection>
  )
}
