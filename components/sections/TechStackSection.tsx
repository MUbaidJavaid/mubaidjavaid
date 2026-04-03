const stackGroups = [
  {
    title: 'Frontend',
    items: [
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'Material UI',
      ' ShadCN UI ',
      'ReactBits UI',
      'ReactQuery/Tanstack Query',
      'React Hook Form/Formik',
      'React Router/Next.js Router',
      'React Redux/Redux Toolkit',
      'Framer motion',
      'Payment Gateways',
      'Third Party APIs',
      'EmailJS',
      'SumSub',
      'Form Handling'
    ]
  },
  {
    title: 'Backend',
    items: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'JWT Authentication',
      'Redis',
      'Webhooks',
      'pipelines',
      'NodeMailer'
    ]
  },
  {
    title: 'Database',
    items: ['MongoDB', 'SQL', 'PostgreSQL', 'MySQL']
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker']
  },
  {
    title: 'Deployment',
    items: ['Vercel', 'Netlify', 'Render']
  }
]

export function TechStackSection () {
  return (
    <section className='section-anchor section-padding surface-page px-4'>
      <p className='section-label mx-4'>Tech Stack</p>
      <h2 className='section-heading text-2xl sm:text-3xl lg:text-4xl ml-4'>
        Organized tooling for{' '}
        <span className='section-heading-accent'>reliable delivery</span>
      </h2>
      <div className='container-wide space-y-6 '>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {stackGroups.map(group => (
            <article
              key={group.title}
              className='card-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-float'
            >
              <h3 className='text-base font-semibold text-heading'>
                {group.title}
              </h3>
              <div className='mt-3 flex flex-wrap gap-2'>
                {group.items.map(item => (
                  <span
                    key={item}
                    className='rounded-full border border-border surface-muted-soft px-3 py-1 text-xs font-medium text-body dark:border-border/50'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
