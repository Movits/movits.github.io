import type { CSSProperties } from 'react'
import type { MiniProject } from '../i18n/types'
import { projectImages } from '../data/projectImages'
import { ExternalIcon, GitHubIcon } from './Icons'

interface MiniProjectCardProps {
  project: MiniProject
  index: number
  repoLabel: string
  liveLabel: string
}

export function MiniProjectCard({ project, index, repoLabel, liveLabel }: MiniProjectCardProps) {
  const image = projectImages[project.id]

  return (
    <article className="mini-card reveal" style={{ '--stagger-i': index } as CSSProperties}>
      {image && (
        <div className="mini-media">
          <img src={image} alt={project.name} width={800} height={500} loading="lazy" />
        </div>
      )}
      <div className="mini-card-head">
        <h3>{project.name}</h3>
        {project.status && <span className="status-chip">{project.status}</span>}
      </div>
      <p>{project.description}</p>
      <ul className="tag-list">
        {project.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
      <div className="project-links">
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
          <GitHubIcon size={16} />
          {repoLabel}
        </a>
        {project.liveUrl && (
          <a className="live" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalIcon size={14} />
            {liveLabel}
          </a>
        )}
      </div>
    </article>
  )
}
