import { useEffect, useState } from 'react'
import type { Project } from '../data/projects'
import ProjectCard from './ProjectCard'

function ProjectsGrid() {
  const [projects, setProjects] = useState<Project[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then(setProjects)
      .catch(() => setError('Failed to load projects'))
  }, [])

  if (error) return <p>{error}</p>

  return (
    <section className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </section>
  )
}

export default ProjectsGrid