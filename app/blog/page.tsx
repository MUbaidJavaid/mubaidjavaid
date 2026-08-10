import { BlogArticlesSection } from '@/components/blog/BlogArticlesSection'
import { PageHeroHeader } from '@/components/sections/PageHeroHeader'
import { EmptyState } from '@/components/system/EmptyState'
import { posts } from '@/data/posts'
import { blogPreview, site } from '@/data/site'
import { pageMetadata } from '@/lib/seo'
import { BookOpen } from 'lucide-react'
import type { Metadata } from 'next'

export const dynamic = 'force-static'
export const revalidate = 86400

export const metadata: Metadata = pageMetadata({
  title: 'Writing',
  description:
    'Engineering notes by M Ubaid Javaid on React, Next.js, Node.js, MongoDB, and shipping production web products.',
  path: '/blog'
})

export default function BlogPage () {
  const isEmpty = posts.length === 0

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: `${site.name} — Writing`,
            description:
              'Practical product engineering articles on React, Next.js, Node.js and MongoDB.',
            url: `${site.url}blog`,
            author: {
              '@type': 'Person',
              name: site.name,
              url: site.url,
              jobTitle: site.role
            },
            blogPost: posts.map(p => ({
              '@type': 'BlogPosting',
              headline: p.title,
              description: p.summary,
              datePublished: p.publishedAt,
              url: `${site.url}blog/${p.slug}`,
              author: { '@type': 'Person', name: site.name },
              keywords: p.category
            }))
          })
        }}
      />

      <PageHeroHeader
        subtitle={`${blogPreview.title} · Field notes`}
        watermark='W.'
        title={
          <>
            Notes from the
            <span className='block text-[hsl(211_48%_42%)]'>workbench.</span>
          </>
        }
        description={blogPreview.description}
      >
        <p className='font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-heading/[0.35]'>
          {String(posts.length).padStart(2, '0')} published entries
        </p>
      </PageHeroHeader>

      <section className='bg-background py-14 md:py-20' aria-labelledby='blog-page-heading'>
        <h2 id='blog-page-heading' className='sr-only'>
          Articles
        </h2>
        <div className='mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-10 lg:px-12'>
          {isEmpty ? (
            <EmptyState
              icon={BookOpen}
              title='No articles yet'
              description='Writing will appear here as it is published.'
              primaryAction={{ label: 'Contact', href: '/contact' }}
              secondaryAction={{ label: 'Go home', href: '/' }}
              className='max-w-xl'
            />
          ) : (
            <BlogArticlesSection />
          )}
        </div>
      </section>
    </>
  )
}
