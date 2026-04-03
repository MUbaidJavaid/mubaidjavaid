'use client'

/**
 * Code/terminal-style card: window header + syntax-highlighted object/array content.
 * Use for about.config.js style blocks.
 */
export function CodeStyleCard ({
  filename = 'about.config.js',
  user = 'ubaid',
  host = 'portfolio',
  children,
  className = '',
}: {
  filename?: string
  user?: string
  host?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={
        'overflow-hidden rounded-xl border border-slate-600/60 bg-slate-800/95 shadow-xl ' +
        className
      }
    >
      {/* Window header */}
      <div className='flex items-center justify-between border-b border-slate-600/60 bg-slate-900/80 px-4 py-2.5'>
        <div className='flex gap-2'>
          <span className='h-3 w-3 rounded-full bg-red-500/90' />
          <span className='h-3 w-3 rounded-full bg-amber-400/90' />
          <span className='h-3 w-3 rounded-full bg-emerald-500/90' />
        </div>
        <span className='font-mono text-xs text-slate-400'>
          {user}@{host} ~ {filename}
        </span>
      </div>
      {/* Code content */}
      <div className='p-4 font-mono text-sm leading-relaxed'>
        {children}
      </div>
    </div>
  )
}

/** Inline styles for code block tokens */
const keyClass = 'text-sky-300'
const stringClass = 'text-amber-300'
const boolClass = 'text-emerald-400'
const numClass = 'text-purple-400'
const punctClass = 'text-slate-500'

export function AboutConfigCode () {
  const stack = [
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Express',
    'MongoDB',
    'Tailwind CSS',
    'REST APIs',
  ]
  const approach = [
    'Engineering Excellence',
    'Product-First Approach',
    'End-to-End Delivery',
    'Flexible Collaboration',
  ]

  return (
    <CodeStyleCard filename='about.config.js'>
      <div className='space-y-0.5 text-left'>
        <div>
          <span className={keyClass}> focus</span>
          <span className={punctClass}>: </span>
          <span className={stringClass}>
            &apos;Building practical web products with clean engineering and clear UX&apos;
          </span>
          <span className={punctClass}>,</span>
        </div>
        <div>
          <span className={keyClass}> stack</span>
          <span className={punctClass}>: [</span>
        </div>
        <div className='ml-4 flex flex-wrap gap-1.5'>
          {stack.map((item, i) => (
            <span key={item}>
              <span className='rounded border border-sky-500/40 bg-slate-700/80 px-2 py-0.5 text-sky-200'>
                {item}
              </span>
              {i < stack.length - 1 && <span className={punctClass}>, </span>}
            </span>
          ))}
        </div>
        <div>
          <span className={punctClass}>],</span>
        </div>
        <div>
          <span className={keyClass}> approach</span>
          <span className={punctClass}>: [</span>
        </div>
        <div className='ml-4 flex flex-wrap gap-1.5'>
          {approach.map((item, i) => (
            <span key={item}>
              <span className='rounded border border-sky-500/40 bg-slate-700/80 px-2 py-0.5 text-sky-200'>
                {item}
              </span>
              {i < approach.length - 1 && <span className={punctClass}>, </span>}
            </span>
          ))}
        </div>
        <div>
          <span className={punctClass}>],</span>
        </div>
        <div>
          <span className={keyClass}> experience</span>
          <span className={punctClass}>: </span>
          <span className={stringClass}>&apos;3+ years&apos;</span>
          <span className={punctClass}>,</span>
        </div>
        <div>
          <span className={keyClass}> available</span>
          <span className={punctClass}>: </span>
          <span className={boolClass}>true</span>
          <span className={punctClass}>;</span>
        </div>
        <div className='pt-1'>
          <span className='text-slate-500'>&gt;</span>
          <span className='animate-pulse'>_</span>
        </div>
      </div>
    </CodeStyleCard>
  )
}

/** Props for Why Partner code-style block (dynamic content from site) */
export type WhyPartnerCodeCardProps = {
  approach: ReadonlyArray<{ title: string; desc: string }>
  philosophy: { statement: string; label: string }
}

export function WhyPartnerCodeCard ({ approach, philosophy }: WhyPartnerCodeCardProps) {
  return (
    <CodeStyleCard filename='whyPartner.config.js'>
      <div className='space-y-0.5 text-left'>
        <div>
          <span className={keyClass}> approach</span>
          <span className={punctClass}>: [</span>
        </div>
        {approach.map((item, i) => (
          <div key={item.title} className='ml-4 space-y-0.5'>
            <div>
              <span className={punctClass}>{'{'}</span>
            </div>
            <div className='ml-4'>
              <span className={keyClass}> title</span>
              <span className={punctClass}>: </span>
              <span className={stringClass}>&apos;{item.title}&apos;</span>
              <span className={punctClass}>,</span>
            </div>
            <div className='ml-4'>
              <span className={keyClass}> desc</span>
              <span className={punctClass}>: </span>
              <span className={stringClass}>&apos;{item.desc}&apos;</span>
            </div>
            <div>
              <span className={punctClass}>{' }'}{i < approach.length - 1 ? ',' : ''}</span>
            </div>
          </div>
        ))}
        <div>
          <span className={punctClass}>],</span>
        </div>
        <div>
          <span className={keyClass}> workingStyle</span>
          <span className={punctClass}>: </span>
          <span className={punctClass}>{'{'}</span>
        </div>
        <div className='ml-4'>
          <span className={keyClass}> label</span>
          <span className={punctClass}>: </span>
          <span className={stringClass}>&apos;{philosophy.label}&apos;</span>
          <span className={punctClass}>,</span>
        </div>
        <div className='ml-4'>
          <span className={keyClass}> statement</span>
          <span className={punctClass}>: </span>
          <span className={stringClass}>&apos;{philosophy.statement}&apos;</span>
        </div>
        <div>
          <span className={punctClass}>{' };'}</span>
        </div>
        <div className='pt-1'>
          <span className='text-slate-500'>&gt;</span>
          <span className='animate-pulse'>_</span>
        </div>
      </div>
    </CodeStyleCard>
  )
}
