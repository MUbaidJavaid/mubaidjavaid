import { projects } from '@/data/projects'
import { ProjectCard } from './ProjectCard'

export function ProjectsPortfolioGrid () {
  return (
    <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
      {projects.map(project => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}
