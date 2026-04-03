import { contactPageJsonLd } from '@/lib/seo'

export default function ContactLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = contactPageJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  )
}
