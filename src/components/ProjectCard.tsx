import { useRef, type CSSProperties, type PointerEvent } from 'react'
import type { Project } from '../i18n/types'
import { projectImages } from '../data/projectImages'
import { TerminalMock } from './TerminalMock'
import { ExternalIcon, GitHubIcon } from './Icons'

interface ProjectCardProps {
  project: Project
  index: number
  repoLabel: string
  liveLabel: string
}

export function ProjectCard({ project, index, repoLabel, liveLabel }: ProjectCardProps) {
  const ref = useRef<HTMLElement>(null)

  const onPointerMove = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse') return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    el.style.setProperty('--rx', `${((0.5 - py) * 5).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${((px - 0.5) * 7).toFixed(2)}deg`)
    el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`)
    el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`)
  }

  const onPointerLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  const image = projectImages[project.id]

  return (
    <article
      ref={ref}
      className="project-card reveal"
      style={{ '--stagger-i': index } as CSSProperties}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div className="project-media">
        {project.terminal ? (
          <TerminalMock lines={project.terminal} title={project.name} />
        ) : image ? (
          <img
            src={image}
            alt={project.imageAlt ?? project.name}
            width={800}
            height={500}
            loading="lazy"
          />
        ) : (
          <div className="project-placeholder" aria-hidden="true">
            {project.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="project-body">
        <h3>{project.name}</h3>
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
            <GitHubIcon size={18} />
            {repoLabel}
          </a>
          {project.liveUrl && (
            <a className="live" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalIcon size={16} />
              {liveLabel}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
