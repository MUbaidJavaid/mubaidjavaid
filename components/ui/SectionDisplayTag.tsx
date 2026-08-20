import { cn } from '@/lib/utils'

export type SectionDisplayPattern =
  | 'jsx'
  | 'terminal'
  | 'brace'
  | 'comment'
  | 'hash'
  | 'bracket'
  | 'angle'
  | 'pipe'
  | 'scope'
  | 'chevron'

type SectionDisplayTagProps = {
  tag: string
  pattern?: SectionDisplayPattern
  variant?: 'default' | 'light'
  className?: string
  id?: string
  as?: 'h1' | 'h2' | 'p'
}

function normalizeTag (tag: string) {
  return tag.replace(/\s+/g, '').toUpperCase()
}

/** Oversized section title — Kanit 900, site theme, varied code-style patterns */
export function SectionDisplayTag ({
  tag,
  pattern = 'jsx',
  variant = 'default',
  className,
  id,
  as: Tag = 'h2'
}: SectionDisplayTagProps) {
  const label = normalizeTag(tag)
  const isCompact = label.length > 9

  const syntax = cn(
    'section-display-tag-syntax',
    variant === 'light' && 'section-display-tag-syntax--light'
  )
  const text = cn(
    'section-display-tag-text',
    variant === 'light' && 'section-display-tag-text--light'
  )

  const renderPattern = () => {
    switch (pattern) {
      case 'terminal':
        return (
          <>
            <span className={syntax} aria-hidden>
              &gt;_
            </span>
            <span className={text}>{label}</span>
          </>
        )
      case 'brace':
        return (
          <>
            <span className={syntax} aria-hidden>
              {'{ '}
            </span>
            <span className={text}>{label}</span>
            <span className={syntax} aria-hidden>
              {' }'}
            </span>
          </>
        )
      case 'comment':
        return (
          <>
            <span className={syntax} aria-hidden>
              //{' '}
            </span>
            <span className={text}>{label}</span>
          </>
        )
      case 'hash':
        return (
          <>
            <span className={syntax} aria-hidden>
              #{' '}
            </span>
            <span className={text}>{label}</span>
          </>
        )
      case 'bracket':
        return (
          <>
            <span className={syntax} aria-hidden>
              [
            </span>
            <span className={text}>{label}</span>
            <span className={syntax} aria-hidden>
              ]
            </span>
          </>
        )
      case 'angle':
        return (
          <>
            <span className={syntax} aria-hidden>
              &lt;&lt;
            </span>
            <span className={text}>{label}</span>
            <span className={syntax} aria-hidden>
              &gt;&gt;
            </span>
          </>
        )
      case 'pipe':
        return (
          <>
            <span className={syntax} aria-hidden>
              |
            </span>
            <span className={text}>{label}</span>
            <span className={syntax} aria-hidden>
              |
            </span>
          </>
        )
      case 'scope':
        return (
          <>
            <span className={syntax} aria-hidden>
              ::{' '}
            </span>
            <span className={text}>{label}</span>
            <span className={syntax} aria-hidden>
              {' '}
              ::
            </span>
          </>
        )
      case 'chevron':
        return (
          <>
            <span className={syntax} aria-hidden>
              &gt;{' '}
            </span>
            <span className={text}>{label}</span>
          </>
        )
      case 'jsx':
      default:
        return (
          <>
            <span className={syntax} aria-hidden>
              &lt;
            </span>
            <span className={text}>{label}</span>
            <span className={syntax} aria-hidden>
              {' '}
              /&gt;
            </span>
          </>
        )
    }
  }

  return (
    <Tag
      id={id}
      className={cn(
        'section-display-tag',
        isCompact && 'section-display-tag--compact',
        className
      )}
      aria-label={tag}
    >
      {renderPattern()}
    </Tag>
  )
}
