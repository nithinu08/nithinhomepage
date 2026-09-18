import { useState } from 'react'
import type { Project } from '../data/projects'

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false)
  const [screenshotOpen, setScreenshotOpen] = useState(false)

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
          {project.guestAccess && (
            <div className="guest-access">
              <p className="guest-access-label">Guest login</p>
              <p><code>{project.guestAccess.username}</code> / <code>{project.guestAccess.password}</code></p>
              {project.guestAccess.note && <p className="guest-access-note">{project.guestAccess.note}</p>}
            </div>
          )}
          {project.screenshot && (
            <button
              className="screenshot-thumb-btn"
              onClick={() => setScreenshotOpen(true)}
              aria-label={`View full size screenshot of ${project.title}`}
            >
              <img
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                className="project-screenshot-thumb"
              />
              <span className="screenshot-hint">Click to enlarge</span>
            </button>
          )}
        </div>
      )}

      {screenshotOpen && project.screenshot && (
        <div className="screenshot-overlay" onClick={() => setScreenshotOpen(false)}>
          <button
            className="screenshot-close"
            onClick={() => setScreenshotOpen(false)}
            aria-label="Close screenshot"
          >
            ×
          </button>
          <img
            src={project.screenshot}
            alt={`${project.title} screenshot, full size`}
            className="project-screenshot-full"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

export default ProjectCard