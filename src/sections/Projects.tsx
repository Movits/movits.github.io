import type { CSSProperties } from 'react'
import { Section } from '../components/Section'
import { ProjectCard } from '../components/ProjectCard'
import { useLanguage } from '../i18n/LanguageContext'

export function Projects() {
  const { content } = useLanguage()
  const { projects } = content

  return (
    <Section id="projects" index={3} className="projects">
      <h2 className="section-title reveal">{projects.title}</h2>
      <p className="section-subtitle reveal" style={{ '--stagger-i': 1 } as CSSProperties}>
        {projects.subtitle}
      </p>
      <div className="project-grid">
        {projects.items.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            repoLabel={projects.repoLabel}
            liveLabel={projects.liveLabel}
          />
        ))}
      </div>
    </Section>
  )
}
