import LogoLoop, { type LogoItem } from '@/components/ui/LogoLoop'
import type { SimpleIcon } from 'simple-icons'
import * as SI from 'simple-icons'

type StackLogo = {
  name: string
  icon: SimpleIcon
  group: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Deployment'
}

function getIcon (key: string, fallbackKey: string): SimpleIcon {
  const mod = SI as Record<string, SimpleIcon | undefined>
  return mod[key] ?? mod[fallbackKey] ?? mod.siGithub!
}

const logos: StackLogo[] = [
  { name: 'React', icon: getIcon('siReact', 'siReact'), group: 'Frontend' },
  {
    name: 'Next.js',
    icon: getIcon('siNextdotjs', 'siVercel'),
    group: 'Frontend'
  },
  {
    name: 'TypeScript',
    icon: getIcon('siTypescript', 'siJavascript'),
    group: 'Frontend'
  },
  {
    name: 'JavaScript',
    icon: getIcon('siJavascript', 'siTypescript'),
    group: 'Frontend'
  },
  {
    name: 'Tailwind CSS',
    icon: getIcon('siTailwindcss', 'siCss'),
    group: 'Frontend'
  },
  {
    name: 'Framer Motion',
    icon: getIcon('siFramer', 'siReact'),
    group: 'Frontend'
  },
  {
    name: 'ShadCN UI',
    icon: getIcon('siShadcnui', 'siRadixui'),
    group: 'Frontend'
  },
  {
    name: 'TanStack Query',
    icon: getIcon('siReactquery', 'siTanstack'),
    group: 'Frontend'
  },
  {
    name: 'React Hook Form',
    icon: getIcon('siReacthookform', 'siReact'),
    group: 'Frontend'
  },
  {
    name: 'Redux Toolkit',
    icon: getIcon('siRedux', 'siRedux'),
    group: 'Frontend'
  },
  { name: 'Node.js', icon: getIcon('siNodedotjs', 'siNpm'), group: 'Backend' },
  {
    name: 'Express.js',
    icon: getIcon('siExpress', 'siNodedotjs'),
    group: 'Backend'
  },
  { name: 'Redis', icon: getIcon('siRedis', 'siDatabricks'), group: 'Backend' },
  {
    name: 'JWT',
    icon: getIcon('siJsonwebtokens', 'siAuth0'),
    group: 'Backend'
  },
  {
    name: 'EmailJS',
    icon: getIcon('siMaildotru', 'siGmail'),
    group: 'Backend'
  },
  {
    name: 'MongoDB',
    icon: getIcon('siMongodb', 'siMongodb'),
    group: 'Database'
  },
  {
    name: 'PostgreSQL',
    icon: getIcon('siPostgresql', 'siMysql'),
    group: 'Database'
  },
  {
    name: 'MySQL',
    icon: getIcon('siMysql', 'siPostgresql'),
    group: 'Database'
  },
  { name: 'Git', icon: getIcon('siGit', 'siGithub'), group: 'Tools' },
  { name: 'GitHub', icon: getIcon('siGithub', 'siGit'), group: 'Tools' },
  {
    name: 'VS Code',
    icon: getIcon('siVisualstudiocode', 'siVscodium'),
    group: 'Tools'
  },
  { name: 'Postman', icon: getIcon('siPostman', 'siInsomnia'), group: 'Tools' },
  {
    name: 'Docker',
    icon: getIcon('siDocker', 'siGithubactions'),
    group: 'Tools'
  },
  {
    name: 'Vercel',
    icon: getIcon('siVercel', 'siNetlify'),
    group: 'Deployment'
  },
  {
    name: 'Netlify',
    icon: getIcon('siNetlify', 'siVercel'),
    group: 'Deployment'
  },
  {
    name: 'Render',
    icon: getIcon('siRender', 'siRailway'),
    group: 'Deployment'
  }
]

const groups = [
  'Frontend',
  'Backend',
  'Database',
  'Tools',
  'Deployment'
] as const

const logoItems: LogoItem[] = logos.map(logo => ({
  node: (
    <div
      className='flex items-center justify-center px-1 py-0.5'
      title={logo.name}
    >
      <svg
        role='img'
        aria-label={logo.name}
        viewBox='0 0 24 24'
        className='h-10 w-auto max-w-[132px] opacity-90 transition-all duration-200 group-hover/item:-translate-y-px group-hover/item:opacity-100 sm:h-11 sm:max-w-[148px]'
        style={{ color: `#${logo.icon.hex}` }}
      >
        <title>{logo.name}</title>
        <path fill='currentColor' d={logo.icon.path} />
      </svg>
    </div>
  ),
  title: logo.name,
  ariaLabel: logo.name
}))

export function LogoStrip () {
  return (
    <section className='section-anchor border-y border-border/55 surface-muted py-12 md:py-14 dark:border-border/50'>
      <div className='container-wide'>
        <div className='mb-8 flex flex-col items-center gap-3 text-center'>
          <p className='text-[10px] font-bold uppercase tracking-[0.3em] text-body/50'>
            Technologies I Build With
          </p>
        </div>

        <LogoLoop
          logos={logoItems}
          speed={38}
          gap={26}
          logoHeight={62}
          fadeOut
          pauseOnHover
          scaleOnHover
          ariaLabel='Professional tech stack showcase'
          className='w-full py-2'
        />

        <div className='mt-7 flex flex-wrap items-center justify-center gap-3'>
          {groups.map(group => {
            const count = logos.filter(logo => logo.group === group).length
            return (
              <span
                key={group}
                className='inline-flex items-center gap-2 rounded-full border border-border/55 bg-white/85 px-4 py-2 text-sm font-semibold text-body/80 dark:border-border/50 dark:bg-slate-900/30 dark:text-slate-300 sm:px-5 sm:py-2.5 sm:text-base'
              >
                {group}
                <span className='rounded-full bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary sm:px-2.5 sm:text-sm'>
                  {count}
                </span>
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
