import { BlogPostHero } from '@/components/blog/BlogPostHero'
import { BlogReadingAside } from '@/components/blog/BlogReadingAside'
import { getPostBySlug, posts } from '@/data/posts'
import { site } from '@/data/site'
import { pageMetadata } from '@/lib/seo'
import { ArrowRight, ChevronLeft } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const dynamic = 'force-static'
export const dynamicParams = false
export const revalidate = 86400

export function generateStaticParams () {
  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata ({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return pageMetadata({
      title: 'Post Not Found',
      description: 'The requested blog post does not exist.',
      path: '/blog'
    })
  }

  const canonical = new URL(`/blog/${post.slug}`, site.url)

  return {
    title: `${post.title} | ${site.name}`,
    description: post.summary,
    keywords: [post.category, ...post.tags, site.role],
    alternates: {
      canonical
    },
    openGraph: {
      title: `${post.title} | ${site.name}`,
      description: post.summary,
      url: canonical,
      siteName: site.name,
      type: 'article',
      publishedTime: post.publishedAt,
      tags: post.tags,
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: `${post.title} article preview`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | ${site.name}`,
      description: post.summary,
      images: ['/opengraph-image']
    }
  }
}

export default async function BlogPostPage ({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.summary,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: site.name
    },
    publisher: {
      '@type': 'Person',
      name: site.name
    },
    mainEntityOfPage: `${site.url}blog/${post.slug}`,
    articleSection: post.category,
    keywords: post.tags.join(', ')
  }

  const currentIndex = posts.findIndex(p => p.slug === post.slug)
  const noteNo = String(currentIndex + 1).padStart(2, '0')
  const nextPost =
    currentIndex >= 0 && currentIndex < posts.length - 1
      ? posts[currentIndex + 1]
      : null
  const [leadTakeaway, ...restTakeaways] = post.keyTakeaways

  return (
    <article className='surface-page'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <BlogPostHero
        title={post.title}
        subtitle={post.subtitle}
        summary={post.summary}
        category={post.category}
        publishedAt={post.publishedAt}
        readTime={post.readTime}
        noteNo={noteNo}
        tags={post.tags}
      />

      <div className='border-t border-border/55 dark:border-border/40'>
        <div className='container-wide grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-14 lg:py-16'>
          <div id='article-body' className='min-w-0 scroll-mt-28 space-y-12'>
            {/* Mobile TOC */}
            <nav
              aria-label='On this page'
              className='border border-border/60 p-4 lg:hidden dark:border-border/45'
            >
              <p className='font-mono text-[10px] font-bold tracking-[0.16em] text-primary'>
                ON THIS PAGE
              </p>
              <div className='mt-3 flex max-h-[min(40vh,14rem)] flex-col gap-1 overflow-y-auto text-sm'>
                {post.sections.map((section, i) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className='px-1 py-1.5 text-body transition-colors hover:text-primary'
                  >
                    <span className='mr-2 font-mono text-[10px] text-primary/60'>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {section.title}
                  </a>
                ))}
                <a
                  href='#key-takeaways'
                  className='px-1 py-1.5 font-semibold text-heading transition-colors hover:text-primary'
                >
                  Key takeaways
                </a>
                <a
                  href='#conclusion'
                  className='px-1 py-1.5 font-semibold text-heading transition-colors hover:text-primary'
                >
                  Conclusion
                </a>
              </div>
            </nav>

            {/* Intro */}
            <section>
              <p className='font-mono text-[10px] font-bold tracking-[0.18em] text-primary'>
                INTRO
              </p>
              <p className='mt-4 max-w-[42rem] text-[15px] leading-[1.9] text-body/80 md:text-base'>
                {post.intro}
              </p>
            </section>

            {/* Sections */}
            {post.sections.map((section, i) => (
              <section
                key={section.id}
                id={section.id}
                className='scroll-mt-28 space-y-4'
              >
                <div className='flex items-center gap-3'>
                  <span className='font-mono text-[10px] font-bold tracking-[0.16em] text-primary'>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className='h-px flex-1 bg-border/55 dark:bg-border/40'
                    aria-hidden
                  />
                </div>
                <h2 className='font-heading !font-semibold uppercase text-[1.2rem] leading-snug tracking-[0.03em] text-heading sm:text-[1.35rem]'>
                  {section.title}
                </h2>
                <div className='space-y-4'>
                  {section.paragraphs.map((paragraph, index) => (
                    <p
                      key={`${section.id}-${index}`}
                      className='max-w-[42rem] text-[15px] leading-[1.9] text-body/80'
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.codeExample ? (
                  <figure className='mt-5 space-y-2'>
                    {section.codeExample.caption ? (
                      <figcaption className='text-[10px] font-bold uppercase tracking-[0.14em] text-body/50'>
                        {section.codeExample.caption}
                      </figcaption>
                    ) : null}
                    <div className='overflow-hidden border border-[#0F172A]/25 bg-[#0B1220] shadow-[0_18px_40px_-24px_rgba(15,23,42,0.8)] dark:border-border/50'>
                      <div className='flex items-center justify-between border-b border-white/10 bg-[#0F172A] px-4 py-2.5'>
                        <div className='flex items-center gap-1.5' aria-hidden>
                          <span className='h-2.5 w-2.5 bg-[#FF5F57]' />
                          <span className='h-2.5 w-2.5 bg-[#FEBC2E]' />
                          <span className='h-2.5 w-2.5 bg-[#28C840]' />
                        </div>
                        <p className='font-mono text-[11px] text-slate-300/90'>
                          code-snippet.{section.codeExample.language}
                        </p>
                      </div>
                      <pre className='overflow-x-auto p-4 text-left text-[12px] leading-relaxed text-slate-100 sm:p-5 sm:text-[13px]'>
                        <code className='font-mono text-[12px] sm:text-[13px]'>
                          {section.codeExample.code}
                        </code>
                      </pre>
                    </div>
                  </figure>
                ) : null}
              </section>
            ))}

            {/* Takeaways */}
            <section
              id='key-takeaways'
              className='scroll-mt-28 border-l-[3px] border-primary bg-[linear-gradient(90deg,hsl(202_61%_42%/0.06),transparent_70%)] py-2 pl-5 sm:pl-6'
            >
              <p className='font-mono text-[10px] font-bold tracking-[0.18em] text-primary'>
                KEY TAKEAWAYS
              </p>
              {leadTakeaway ? (
                <p className='mt-4 max-w-3xl font-heading text-[1.25rem] font-semibold leading-snug text-heading sm:text-[1.45rem]'>
                  “{leadTakeaway}”
                </p>
              ) : null}
              {restTakeaways.length > 0 ? (
                <ul className='mt-5 max-w-3xl space-y-0 divide-y divide-border/50 dark:divide-border/40'>
                  {restTakeaways.map((item, i) => (
                    <li
                      key={i}
                      className='flex gap-4 py-3.5 first:pt-0 last:pb-0'
                    >
                      <span className='font-mono text-[11px] font-bold tracking-[0.14em] text-primary'>
                        {String(i + 2).padStart(2, '0')}
                      </span>
                      <p className='text-[14px] leading-[1.75] text-body/80'>
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>

            {/* Conclusion */}
            <section id='conclusion' className='scroll-mt-28 space-y-4'>
              <p className='font-mono text-[10px] font-bold tracking-[0.18em] text-primary'>
                CONCLUSION
              </p>
              <h2 className='font-heading !font-semibold uppercase text-[1.2rem] tracking-[0.03em] text-heading sm:text-[1.35rem]'>
                Closing thought
              </h2>
              <p className='max-w-[42rem] text-[15px] leading-[1.9] text-body/80'>
                {post.conclusion}
              </p>
            </section>

            {/* Related */}
            {post.relatedLinks.length > 0 ? (
              <section className='border-t border-border/55 pt-8 dark:border-border/40'>
                <p className='font-mono text-[10px] font-bold tracking-[0.18em] text-primary'>
                  CONTINUE
                </p>
                <h2 className='mt-2 font-heading !font-semibold uppercase text-[1.1rem] tracking-[0.03em] text-heading'>
                  Related pages
                </h2>
                <div className='mt-4 flex flex-wrap gap-2'>
                  {post.relatedLinks.map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className='border border-border/65 px-4 py-2 text-sm font-semibold text-heading transition-colors hover:border-primary/35 hover:text-primary dark:border-border/50'
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}

            {/* Next */}
            {nextPost ? (
              <section className='border-t border-border/55 pt-8 dark:border-border/40'>
                <p className='font-mono text-[10px] font-bold tracking-[0.18em] text-primary'>
                  UP NEXT
                </p>
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className='group mt-4 block border border-border/60 bg-card p-6 transition-colors hover:border-primary/30 dark:border-border/45'
                >
                  <div className='flex flex-wrap items-center gap-2 text-[11px] text-body/50'>
                    <span className='border border-border/55 px-2 py-0.5 font-bold uppercase tracking-[0.1em] text-body/65 dark:border-border/40'>
                      {nextPost.category}
                    </span>
                    <span>{nextPost.readTime}</span>
                  </div>
                  <h3 className='mt-3 font-heading !font-semibold uppercase text-[1.05rem] leading-snug tracking-[0.03em] text-heading transition-colors group-hover:text-primary sm:text-[1.15rem]'>
                    {nextPost.title}
                  </h3>
                  <p className='mt-2 line-clamp-2 text-[13px] leading-relaxed text-body/65'>
                    {nextPost.summary}
                  </p>
                  <span className='mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary transition-all group-hover:gap-3'>
                    Read next article
                    <ArrowRight className='h-3.5 w-3.5' />
                  </span>
                </Link>
              </section>
            ) : null}

            <div className='flex flex-wrap gap-3 border-t border-border/55 pt-8 dark:border-border/40'>
              <Link
                href='/blog'
                className='inline-flex items-center gap-2 border border-border/70 px-4 py-2.5 text-sm font-semibold text-heading transition-colors hover:border-primary/30 hover:text-primary dark:border-border/50'
              >
                <ChevronLeft className='h-4 w-4' aria-hidden />
                All articles
              </Link>
              <Link
                href='/contact'
                className='inline-flex items-center gap-2 bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover'
              >
                Start a conversation
                <ArrowRight className='h-3.5 w-3.5' aria-hidden />
              </Link>
            </div>
          </div>

          <BlogReadingAside
            noteNo={noteNo}
            category={post.category}
            readTime={post.readTime}
            sections={post.sections}
          />
        </div>
      </div>
    </article>
  )
}
