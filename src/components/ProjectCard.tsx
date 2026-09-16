import { useState } from 'react'
import type { Project } from '../data/projects'

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="tech-tags">
        {project.techStack.map((tech) => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>

      <div className="project-links">
        {project.links.live && <a href={project.links.live} target="_blank" rel="noreferrer">Live</a>}
        {project.links.code && <a href={project.links.code} target="_blank" rel="noreferrer">Code</a>}
      </div>

      <button
        className="more-details-btn"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        {expanded ? '\u2212 hide details' : '+ view details'}
      </button>

      {expanded && (
        <div className="project-details">
          <p>{project.longDescription}</p>
          {project.highlights && project.highlights.length > 0 && (
            <ul className="project-highlights">
              {project.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

export default ProjectCard