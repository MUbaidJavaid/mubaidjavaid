export type BlogCodeExample = {
  language: string
  code: string
  caption?: string
}

export type BlogSection = {
  id: string
  title: string
  paragraphs: string[]
  codeExample?: BlogCodeExample
}

export type BlogPost = {
  slug: string
  title: string
  /** Optional one-line hook under the title */
  subtitle?: string
  summary: string
  publishedAt: string
  readTime: string
  category: string
  tags: string[]
  intro: string
  sections: BlogSection[]
  keyTakeaways: string[]
  conclusion: string
  relatedLinks: Array<{
    label: string
    href: string
  }>
}
