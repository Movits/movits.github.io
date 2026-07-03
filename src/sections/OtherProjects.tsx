import { Section } from '../components/Section'
import { MiniProjectCard } from '../components/MiniProjectCard'
import { useLanguage } from '../i18n/LanguageContext'

export function OtherProjects() {
  const { content } = useLanguage()
  const { moreProjects, projects } = content

  return (
    <Section id="more-projects" index={4} className="more-projects">
      <h2 className="section-title reveal">{moreProjects.title}</h2>
      <div className="mini-grid">
        {moreProjects.items.map((project, i) => (
          <MiniProjectCard
            key={project.id}
            project={project}
            index={i + 1}
            repoLabel={projects.repoLabel}
            liveLabel={projects.liveLabel}
          />
        ))}
      </div>
    </Section>
  )
}
