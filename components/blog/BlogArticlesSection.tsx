'use client'

import type { BlogPost } from '@/data/posts'
import { posts } from '@/data/posts'
import { brandMotion } from '@/lib/brand-system'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

function formatDate (iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

type BlogArticlesSectionProps = {
  featuredPost?: BlogPost
  otherPosts?: BlogPost[]
}

export function BlogArticlesSection ({
  featuredPost: featuredProp,
  otherPosts: otherProp
}: BlogArticlesSectionProps = {}) {
  const reduce = useReducedMotion()
  const featuredPost = featuredProp ?? posts[0]
  const otherPosts = otherProp ?? posts.slice(1)

  return (
    <div className='space-y-14 md:space-y-16'>
      {featuredPost ? (
        <motion.article
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{
            duration: brandMotion.durationSlow,
            ease: brandMotion.ease
          }}
          className='relative overflow-hidden border border-heading/10 bg-[hsl(214_28%_98%)]'
        >
          <div className='grid lg:grid-cols-[1.15fr_0.85fr]'>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className='group block px-6 py-8 sm:px-8 md:px-10 md:py-12'
            >
              <div className='flex flex-wrap items-center gap-3'>
                <p className='font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-[hsl(211_48%_42%)]'>
                  Featured note
                </p>
                <span className='font-mono text-[0.5rem] uppercase tracking-[0.14em] text-heading/[0.35]'>
                  {featuredPost.category}
                </span>
              </div>
              <h2 className='mt-5 max-w-[18ch] font-display text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[0.98] tracking-[-0.04em] text-heading transition-colors group-hover:text-[hsl(211_48%_38%)]'>
                {featuredPost.title}
              </h2>
              <p className='mt-5 max-w-2xl text-sm leading-relaxed text-body md:text-base'>
                {featuredPost.summary}
              </p>
              <div className='mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-heading/10 pt-5'>
                <span className='font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-heading/[0.4]'>
                  {formatDate(featuredPost.publishedAt)}
                </span>
                <span className='font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-heading/[0.4]'>
                  {featuredPost.readTime}
                </span>
                <span className='ml-auto inline-flex items-center gap-2 text-sm font-semibold text-heading'>
                  Read article
                  <ArrowUpRight
                    size={15}
                    className='transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                    aria-hidden
                  />
                </span>
              </div>
            </Link>

            <div className='relative hidden border-l border-heading/10 bg-primary px-8 py-10 text-primary-foreground lg:block'>
              <p
                className='pointer-events-none absolute -right-[0.05em] -bottom-[0.12em] select-none font-display text-[9rem] font-bold leading-none tracking-[-0.08em] text-white/[0.04]'
                aria-hidden
              >
                01
              </p>
              <p className='font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-[hsl(211_70%_72%)]'>
                Issue lead
              </p>
              <p className='mt-6 font-display text-2xl font-semibold leading-snug'>
                Practical decisions from shipping production systems.
              </p>
              <p className='mt-4 text-sm leading-relaxed text-white/55'>
                Architecture notes, API patterns, and delivery judgment you can
                inspect before the first call.
              </p>
            </div>
          </div>
        </motion.article>
      ) : null}

      <div>
        <div className='mb-2 flex items-center gap-4'>
          <p className='font-mono text-[0.625rem] uppercase tracking-[0.18em] text-heading/[0.35]'>
            Article index
          </p>
          <span className='h-px flex-1 bg-heading/10' aria-hidden />
          <p className='font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-heading/[0.3]'>
            {String(otherPosts.length).padStart(2, '0')} entries
          </p>
        </div>

        <ul className='divide-y divide-heading/10 border-b border-heading/10'>
          {otherPosts.map((post, i) => (
            <motion.li
              key={post.slug}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-6%' }}
              transition={{
                duration: brandMotion.duration,
                delay: reduce ? 0 : Math.min(i * 0.04, 0.2),
                ease: brandMotion.ease
              }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className='group grid gap-3 py-7 sm:grid-cols-[3rem_1fr_auto] sm:items-start sm:gap-6 md:py-8'
              >
                <span className='font-mono text-[0.625rem] text-[hsl(211_48%_42%)]'>
                  {String(i + 2).padStart(2, '0')}
                </span>
                <div className='min-w-0'>
                  <p className='font-mono text-[0.5rem] uppercase tracking-[0.14em] text-heading/[0.35]'>
                    {post.category} · {formatDate(post.publishedAt)}
                  </p>
                  <h3 className='mt-2 font-display text-xl font-semibold tracking-tight text-heading transition-colors group-hover:text-[hsl(211_48%_38%)] md:text-2xl'>
                    {post.title}
                  </h3>
                  <p className='mt-2 line-clamp-2 max-w-2xl text-sm leading-relaxed text-body'>
                    {post.summary}
                  </p>
                </div>
                <div className='flex items-center justify-between gap-4 sm:flex-col sm:items-end'>
                  <span className='font-mono text-[0.5625rem] text-heading/[0.35]'>
                    {post.readTime}
                  </span>
                  <ArrowUpRight
                    size={15}
                    className='text-heading/[0.35] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-heading'
                    aria-hidden
                  />
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}
