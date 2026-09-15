import { posts } from '@/data/posts'
import { projects } from '@/data/projects'
import { site } from '@/data/site'
import type { MetadataRoute } from 'next'

export default function sitemap (): MetadataRoute.Sitemap {
  const origin = new URL(site.url).origin
  const now = new Date()

  const staticRoutes = [
    '',
    '/about',
    '/projects',
    '/services',
    '/blog',
    '/contact'
  ].map(path => ({
    url: new URL(path, origin).toString(),
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8
  }))

  const projectRoutes = projects.map(project => ({
    url: new URL(`/projects/${project.slug}`, origin).toString(),
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    ...(project.image
      ? {
          images: [new URL(project.image, origin).toString()]
        }
      : {})
  }))

  const blogRoutes = posts.map(post => {
    const published = new Date(post.publishedAt)
    return {
      url: new URL(`/blog/${post.slug}`, origin).toString(),
      lastModified: Number.isNaN(published.getTime()) ? now : published,
      changeFrequency: 'monthly' as const,
      priority: 0.6
    }
  })

  return [...staticRoutes, ...projectRoutes, ...blogRoutes]
}
