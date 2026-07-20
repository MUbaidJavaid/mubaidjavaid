'use client'

import type { BlogPost } from '@/data/posts'
import { LottiePlayer } from '@/components/ui/LottiePlayer'
import { lottieAssets } from '@/lib/lottie-assets'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

type BlogArticlesSectionProps = {
  featuredPost?: BlogPost
  otherPosts: BlogPost[]
}

function formatDate (iso: string, style: 'long' | 'short' = 'short') {
  return new Date(iso).toLocaleDateString('en-US', {
    month: style === 'long' ? 'long' : 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

const ease = [0.22, 1, 0.36, 1] as const

/** Editorial library — Lottie-powered featured band + motion grid. */
export function BlogArticlesSection ({
  featuredPost,
  otherPosts
}: BlogArticlesSectionProps) {
  const reduce = useReducedMotion()

  return (
    <div className='space-y-14 lg:space-y-16'>
      {featuredPost ? (
        <motion.article
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease }}
          className='relative overflow-hidden border border-border/60 bg-[linear-gradient(145deg,#0B1220_0%,#132A40_48%,#1A4A6B_100%)] text-white shadow-[0_28px_60px_-28px_rgba(15,23,42,0.65)] dark:border-border/45'
        >
          <div
            className='pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#256e99]/25 blur-3xl'
            aria-hidden
          />
          <div
            className='pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-[#7DD3FC]/10 blur-3xl'
            aria-hidden
          />
          <div
            className='pointer-events-none absolute inset-0 opacity-[0.1]'
            aria-hidden
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)',
              backgroundSize: '28px 28px'
            }}
          />

          <div className='relative z-[1] grid lg:grid-cols-[1.05fr_0.95fr]'>
            <div className='flex flex-col justify-between gap-8 border-b border-white/10 p-7 sm:p-8 lg:border-b-0 lg:border-r lg:border-white/10 lg:p-10'>
              <div>
                <div className='flex flex-wrap items-center gap-2'>
                  <span className='font-mono text-[10px] font-bold tracking-[0.18em] text-[#7DD3FC]'>
                    FEATURED NOTE
                  </span>
                  <span className='h-px w-6 bg-white/25' aria-hidden />
                  <span className='border border-white/20 bg-white/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#C8E6F5]'>
                    {featuredPost.category}
                  </span>
                  <span className='border border-emerald-400/35 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-200'>
                    Live
                  </span>
                </div>

                <h2 className='mt-5 font-heading !font-semibold uppercase text-[1.4rem] leading-snug tracking-[0.02em] text-white sm:text-[1.7rem] lg:text-[1.85rem]'>
                  {featuredPost.title}
                </h2>
                <p className='mt-4 max-w-xl text-[14px] leading-relaxed text-white/65 sm:text-[15px]'>
                  {featuredPost.summary}
                </p>
              </div>

              <div className='flex flex-wrap items-center justify-between gap-4'>
                <div className='flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-white/45'>
                  <time dateTime={featuredPost.publishedAt}>
                    {formatDate(featuredPost.publishedAt, 'long')}
                  </time>
                  <span className='h-px w-4 bg-white/20' aria-hidden />
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className='group inline-flex items-center gap-2 bg-white px-5 py-2.5 text-sm font-semibold text-[#0F172A] transition-transform hover:bg-[#E8F1F7] active:scale-[0.98]'
                  aria-label={`Read full article: ${featuredPost.title}`}
                >
                  Read deep-dive
                  <ArrowRight className='h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5' />
                </Link>
              </div>
            </div>

            <div className='relative flex min-h-[260px] flex-col justify-between gap-4 overflow-hidden bg-black/20 p-6 sm:min-h-[300px] lg:p-8'>
              <div className='relative z-[1] flex items-center justify-between gap-3'>
                <p className='font-mono text-[10px] font-bold tracking-[0.2em] text-[#7DD3FC]/80'>
                  ARTICLE FRAME
                </p>
                <span className='font-mono text-[10px] text-white/35'>
                  {featuredPost.readTime}
                </span>
              </div>
              <LottiePlayer
                src={lottieAssets.blogDoc}
                className='relative z-[1] mx-auto h-[170px] w-full max-w-[280px] sm:h-[200px]'
                aria-label='Article document animation'
                speed={0.85}
              />
              <p className='relative z-[1] line-clamp-3 text-[12px] leading-relaxed text-white/50'>
                {(featuredPost.intro || featuredPost.summary).slice(0, 140)}
                …
              </p>
            </div>
          </div>
        </motion.article>
      ) : null}

      {otherPosts.length > 0 ? (
        <div className='space-y-7'>
          <div className='flex flex-wrap items-end justify-between gap-4 border-b border-border/55 pb-4 dark:border-border/40'>
            <div>
              <p className='font-mono text-[10px] font-bold tracking-[0.18em] text-primary'>
                LIBRARY
              </p>
              <h2 className='mt-2 font-heading !font-semibold uppercase text-[1.2rem] tracking-[0.03em] text-heading sm:text-[1.35rem]'>
                More engineering notes
              </h2>
            </div>
            <div className='flex items-center gap-3'>
              <LottiePlayer
                src={lottieAssets.blogType}
                className='hidden h-14 w-14 sm:block'
                aria-label='Writing animation'
                speed={1}
              />
              <span className='font-mono text-[11px] text-body/45'>
                {String(otherPosts.length).padStart(2, '0')} notes
              </span>
            </div>
          </div>

          <ul className='grid list-none gap-4 sm:grid-cols-2 xl:grid-cols-3'>
            {otherPosts.map((post, idx) => {
              const num = String(idx + 2).padStart(2, '0')
              return (
                <motion.li
                  key={post.slug}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{
                    duration: 0.45,
                    delay: Math.min(idx * 0.06, 0.3),
                    ease
                  }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className='group relative flex h-full min-h-[230px] flex-col overflow-hidden border border-border/60 bg-card p-5 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_18px_40px_-28px_hsl(202_61%_37%/0.45)] dark:border-border/45 sm:p-6'
                    aria-label={`Read article: ${post.title}`}
                  >
                    <span
                      className='pointer-events-none absolute -right-1 -top-2 select-none font-heading text-[3.25rem] font-black leading-none tracking-tighter text-heading/[0.04] transition-colors group-hover:text-primary/[0.08] dark:text-white/[0.06]'
                      aria-hidden
                    >
                      {num}
                    </span>
                    <span
                      className='absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100'
                      aria-hidden
                    />

                    <div className='relative z-[1] flex flex-wrap items-center gap-2'>
                      <span className='font-mono text-[10px] font-bold tracking-[0.16em] text-primary'>
                        {num}
                      </span>
                      <span className='border border-border/55 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-body/60 dark:border-border/40'>
                        {post.category}
                      </span>
                    </div>

                    <h3 className='relative z-[1] mt-3 font-heading !font-semibold uppercase text-[1rem] leading-snug tracking-[0.03em] text-heading transition-colors group-hover:text-primary sm:text-[1.08rem]'>
                      {post.title}
                    </h3>
                    <p className='relative z-[1] mt-2 line-clamp-3 flex-1 text-[12.5px] leading-relaxed text-body/65'>
                      {post.summary}
                    </p>

                    <div className='relative z-[1] mt-5 flex items-center justify-between gap-3 text-[11px] text-body/45'>
                      <span>
                        <time dateTime={post.publishedAt}>
                          {formatDate(post.publishedAt)}
                        </time>
                        {' · '}
                        {post.readTime}
                      </span>
                      <span className='inline-flex items-center gap-1 font-bold text-primary transition-all group-hover:gap-2'>
                        Open
                        <ArrowRight className='h-3 w-3' />
                      </span>
                    </div>
                  </Link>
                </motion.li>
              )
            })}
          </ul>
        </div>
      ) : null}
    </div>
  )
}
