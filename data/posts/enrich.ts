import type { BlogPost } from './types'

/** Ensure every post ends with conversion + discovery paths. */
export function enrichPostForSearch (post: BlogPost): BlogPost {
  const links = [...post.relatedLinks]
  const has = (href: string) => links.some(l => l.href === href)

  if (!has('/services')) {
    links.push({ label: 'Hire Next.js & MERN', href: '/services' })
  }
  if (!has('/contact')) {
    links.push({ label: 'Discuss your project', href: '/contact' })
  }
  if (!has('/projects') && !links.some(l => l.href.startsWith('/projects/'))) {
    links.push({ label: 'View case studies', href: '/projects' })
  }

  const conclusionNeedsCta =
    !/contact|discuss|hire|services/i.test(post.conclusion)

  return {
    ...post,
    relatedLinks: links,
    conclusion: conclusionNeedsCta
      ? `${post.conclusion} Ready to talk scope? Use Contact — or browse Services for fit.`
      : post.conclusion
  }
}
