import type { BlogPost } from '@/data/posts'
import Link from 'next/link'

type BlogArticlesSectionProps = {
  featuredPost?: BlogPost
  otherPosts: BlogPost[]
  formatDate: (iso: string, style?: 'long' | 'short') => string
}

export function BlogArticlesSection ({
  featuredPost,
  otherPosts,
  formatDate
}: BlogArticlesSectionProps) {
  return (
    <div className='space-y-12 lg:space-y-14'>
      {featuredPost ? (
        <article className='group relative overflow-hidden border border-[#0F172A]/[.06] surface-panel shadow-[0_8px_40px_rgba(15,23,42,.07)] transition-shadow duration-300 dark:border-border/50 dark:shadow-[0_8px_40px_rgba(0,0,0,0.35)]'>
          <div className='absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent' />
          <div className='flex flex-col lg:min-h-[min(100%,320px)] lg:flex-row'>
            <div className='relative flex min-h-[220px] flex-1 flex-col justify-between overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#152B40] to-[hsl(var(--primary))] p-7 sm:p-8 text-white lg:max-w-[46%] xl:max-w-[44%]'>
              <div
                aria-hidden
                className='pointer-events-none absolute inset-0 opacity-[0.14]'
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px)',
                  backgroundSize: '28px 28px'
                }}
              />
              <div className='pointer-events-none absolute -right-8 -top-10 h-40 w-40 bg-white/[0.06] blur-2xl' />
              <div className='relative flex flex-wrap items-center gap-2'>
                <span className='inline-flex items-center gap-1.5 border border-white/15 bg-white/10 px-2.5 py-1 text-[.62rem] font-bold uppercase tracking-[.14em] text-white/95'>
                  <span className='h-1.5 w-1.5 rounded-full bg-emerald-300' />
                  Featured
                </span>
                <span className='border border-white/20 bg-black/10 px-2.5 py-1 text-[.62rem] font-bold uppercase tracking-[.1em] text-[#C8E6F5]'>
                  {featuredPost.category}
                </span>
              </div>
              <div className='relative mt-6'>
                <h2 className='font-heading text-white text-[1.35rem] font-extrabold leading-[1.15] tracking-[-0.03em] sm:text-[1.55rem] lg:text-[1.65rem]'>
                  {featuredPost.title}
                </h2>
                <p className='mt-3 max-w-xl text-sm leading-relaxed text-white/72'>
                  {featuredPost.summary}
                </p>
              </div>
              <div className='relative mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-white/55'>
                <time dateTime={featuredPost.publishedAt}>
                  {formatDate(featuredPost.publishedAt, 'long')}
                </time>
                <span className='hidden h-1 w-1  bg-white/35 sm:inline' />
                <span>{featuredPost.readTime}</span>
              </div>
            </div>

            <div className='flex flex-1 flex-col justify-center gap-5 border-t border-[#0F172A]/[.05] bg-[#FAFBFC] p-7 sm:p-8 lg:border-l lg:border-t-0 lg:bg-white dark:border-border/50 dark:bg-slate-900/50 dark:lg:bg-card'>
              {featuredPost.intro ? (
                <p className='text-sm leading-[1.8] text-body/80'>
                  {featuredPost.intro}
                </p>
              ) : (
                <p className='text-sm leading-[1.8] text-body/60'>
                  {featuredPost.summary}
                </p>
              )}
              {featuredPost.tags?.length ? (
                <div className='flex flex-wrap gap-2'>
                  {featuredPost.tags.slice(0, 6).map(tag => (
                    <span
                      key={tag}
                      className='border border-[#0F172A]/[.06] surface-panel px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-body/70 dark:border-border/50'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
              <Link
                href={`/blog/${featuredPost.slug}`}
                className='group/cta relative inline-flex w-fit items-center gap-2 overflow-hidden  bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(15,23,42,.18)] transition-all hover:gap-3 hover:bg-[#1e293b] hover:shadow-[0_8px_24px_rgba(15,23,42,.22)]'
                aria-label={`Read full article: ${featuredPost.title}`}
              >
                <span className='pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[.08] to-transparent transition-transform duration-500 group-hover/cta:translate-x-full' />
                Read full article
                <span className='text-xs transition-transform group-hover/cta:translate-x-0.5'>
                  →
                </span>
              </Link>
            </div>
          </div>
        </article>
      ) : null}

      {otherPosts.length > 0 ? (
        <div className='space-y-6'>
          <div className='flex flex-wrap items-end justify-between gap-4 border-b border-border/55 pb-4'>
            <div>
              <p className='text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/85'>
                Library
              </p>
              <h2 className='mt-1 font-heading text-lg font-bold text-heading sm:text-xl'>
                More articles
              </h2>
              <p className='mt-1 max-w-lg text-sm text-body/60'>
                Shortlist what matters quickly, then open full posts for
                technical depth, implementation context, and decision rationale.
              </p>
            </div>
            <span className='bg-secondary px-3 py-1 text-xs font-semibold text-body/70'>
              {otherPosts.length} post
              {otherPosts.length === 1 ? '' : 's'}
            </span>
          </div>

          <ul className='grid list-none gap-px overflow-hidden bg-border/70 sm:grid-cols-2 xl:grid-cols-3'>
            {otherPosts.map(post => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className='group relative flex h-full min-h-[200px] flex-col overflow-hidden bg-background p-6 transition-all duration-500 hover:bg-card active:scale-[0.98]'
                  aria-label={`Read article: ${post.title}`}
                >
                  <div className='mb-3 flex flex-wrap items-center gap-2'>
                    <span className='border border-[#0F172A]/[.06] bg-[#F8FAFC] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#475569] dark:border-border/50 dark:bg-slate-900/70 dark:text-slate-400'>
                      {post.category}
                    </span>
                    <span className='text-xs text-body/45'>
                      <time dateTime={post.publishedAt}>
                        {formatDate(post.publishedAt)}
                      </time>
                      <span className='mx-1.5 text-border'>·</span>
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className='font-heading text-base font-bold leading-snug tracking-[-0.02em] text-heading transition-colors group-hover:text-primary'>
                    {post.title}
                  </h3>
                  <p className='mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-body/60'>
                    {post.summary}
                  </p>
                  <span className='mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3'>
                    Continue reading
                    <span aria-hidden>→</span>
                  </span>
                  <div className='absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100' />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}
