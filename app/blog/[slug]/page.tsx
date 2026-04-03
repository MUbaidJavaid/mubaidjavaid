import { getPostBySlug, posts } from '@/data/posts'
import { site } from '@/data/site'
import { pageMetadata } from '@/lib/seo'
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
  const nextPost =
    currentIndex >= 0 && currentIndex < posts.length - 1
      ? posts[currentIndex + 1]
      : null

  return (
    <article className='section-anchor relative overflow-hidden surface-page py-10'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_100%_0%,rgba(40,114,161,.05),transparent_65%),radial-gradient(ellipse_40%_50%_at_0%_100%,rgba(15,23,42,.025),transparent_65%)]' />
      </div>
      <div className='container-wide relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start'>
        <div>
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
          />
          <div className='relative overflow-hidden border border-[#0F172A]/[.08] surface-panel p-6 sm:p-8 lg:p-10 dark:border-border/50'>
            <div className='absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent' />
            <header className='space-y-5'>
              <Link
                href='/blog'
                className='inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover'
              >
                <span aria-hidden>←</span> Back to blog
              </Link>
              <div className='flex flex-wrap items-center gap-2 text-xs text-body'>
                <span className='rounded-full border border-[#BFD7E6] bg-[#EFF6FB] px-2.5 py-1 font-semibold text-primary'>
                  {post.category}
                </span>
                <span>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
                <span>{post.readTime}</span>
              </div>
              <h1 className='section-heading text-[1.7rem] sm:text-[2.1rem] lg:text-[2.45rem]'>
                {post.title}
              </h1>
              {post.subtitle ? (
                <p className='max-w-3xl text-base font-medium text-primary/90 sm:text-lg'>
                  {post.subtitle}
                </p>
              ) : null}
              <p className='max-w-3xl text-sm leading-[1.8] text-body sm:text-base'>
                {post.summary}
              </p>
              <div className='flex flex-wrap gap-2'>
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className='rounded-full border border-border surface-muted-soft px-3 py-1 text-xs text-body dark:border-border/50'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div className='mt-8 space-y-10'>
              <p className='max-w-3xl text-sm leading-[1.85] text-body sm:text-base'>
                {post.intro}
              </p>
              {post.sections.map(section => (
                <section
                  key={section.id}
                  id={section.id}
                  className='scroll-mt-28 space-y-4'
                >
                  <h2 className='section-heading text-lg sm:text-xl lg:text-2xl'>
                    {section.title}
                  </h2>
                  <div className='space-y-4'>
                    {section.paragraphs.map((paragraph, index) => (
                      <p
                        key={`${section.id}-${index}`}
                        className='text-sm leading-[1.85] text-body sm:text-base'
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.codeExample ? (
                    <figure className='mt-5 space-y-2'>
                      {section.codeExample.caption ? (
                        <figcaption className='text-xs font-semibold uppercase tracking-[0.12em] text-body/60'>
                          {section.codeExample.caption}
                        </figcaption>
                      ) : null}
                      <div className='overflow-hidden rounded-2xl border border-[#0F172A]/20 bg-[#0B1220] shadow-[0_20px_44px_-26px_rgba(15,23,42,0.85)]'>
                        <div className='flex items-center justify-between border-b border-white/10 bg-[#0F172A] px-4 py-2.5'>
                          <div className='flex items-center gap-2'>
                            <span className='h-2.5 w-2.5 rounded-full bg-[#FF5F57]' />
                            <span className='h-2.5 w-2.5 rounded-full bg-[#FEBC2E]' />
                            <span className='h-2.5 w-2.5 rounded-full bg-[#28C840]' />
                          </div>
                          <p className='font-mono text-[11px] text-slate-300/90'>
                            code-snippet.{section.codeExample.language}
                          </p>
                        </div>
                        <pre className='overflow-x-auto p-5 text-left text-[13px] leading-relaxed text-slate-100'>
                          <code className='font-mono text-[13px]'>
                            {section.codeExample.code}
                          </code>
                        </pre>
                      </div>
                    </figure>
                  ) : null}
                </section>
              ))}

              <section
                id='key-takeaways'
                className='scroll-mt-28 space-y-4  border border-primary/10 bg-[#EFF6FB] p-6 sm:p-8'
              >
                <h2 className='section-heading text-lg sm:text-xl lg:text-2xl'>
                  Key takeaways
                </h2>
                <ul className='list-inside list-disc space-y-2.5 text-body marker:text-primary'>
                  {post.keyTakeaways.map((item, i) => (
                    <li key={i} className='pl-1 text-sm leading-[1.8] sm:text-base'>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section id='conclusion' className='scroll-mt-28 space-y-4'>
                <h2 className='section-heading text-lg sm:text-xl lg:text-2xl'>
                  Conclusion
                </h2>
                <p className='text-sm leading-[1.85] text-body sm:text-base'>
                  {post.conclusion}
                </p>
              </section>
            </div>
          </div>

          <section className='mt-6 border border-border surface-muted p-6 dark:border-border/50'>
            <div className='space-y-4'>
              <p className='section-label'>Continue Exploring</p>
              <h2 className='section-heading text-lg sm:text-xl'>
                Related pages inside the portfolio
              </h2>
              <div className='flex flex-wrap gap-3'>
                {post.relatedLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className='border border-border surface-panel px-4 py-2 text-sm font-semibold text-heading transition-colors hover:border-primary hover:text-primary dark:border-border/50'
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {nextPost && (
            <section className='mt-6   p-6'>
              <p className='section-label'>Up Next</p>
              <h2 className='mt-2 section-heading text-lg sm:text-xl'>
                Continue reading
              </h2>
              <Link
                href={`/blog/${nextPost.slug}`}
                className='group mt-4 block border border-[#0F172A]/[.08] surface-muted-soft p-5 transition-all hover:border-primary/25 hover:shadow-[0_8px_20px_rgba(15,23,42,.08)] dark:border-border/50 dark:hover:shadow-[0_8px_20px_rgba(0,0,0,0.35)]'
              >
                <div className='mb-2 flex flex-wrap items-center gap-2 text-xs text-body/60'>
                  <span className='rounded-full border border-[#0F172A]/[.08] surface-panel px-2.5 py-1 font-semibold text-heading dark:border-border/50'>
                    {nextPost.category}
                  </span>
                  <span>{nextPost.readTime}</span>
                </div>
                <h3 className='font-heading text-base font-semibold text-heading transition-colors group-hover:text-primary'>
                  {nextPost.title}
                </h3>
                <p className='mt-2 line-clamp-2 text-sm leading-relaxed text-body'>
                  {nextPost.summary}
                </p>
                <span className='mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary'>
                  Read next article <span aria-hidden>→</span>
                </span>
              </Link>
            </section>
          )}
        </div>

        <aside className='hidden lg:block lg:sticky lg:top-28'>
          <div className='border border-border surface-muted p-6 dark:border-border/50'>
            <div className='space-y-4'>
              <p className='section-label'>On This Page</p>
              <nav className='space-y-3 text-sm text-body'>
                {post.sections.map(section => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className='block transition-colors hover:text-primary'
                  >
                    {section.title}
                  </a>
                ))}
                <a
                  href='#key-takeaways'
                  className='block font-semibold text-heading transition-colors hover:text-primary'
                >
                  Key takeaways
                </a>
                <a
                  href='#conclusion'
                  className='block font-semibold text-heading transition-colors hover:text-primary'
                >
                  Conclusion
                </a>
              </nav>
            </div>
          </div>
        </aside>
      </div>
    </article>
  )
}
