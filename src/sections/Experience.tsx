import type { CSSProperties } from 'react'
import { Section } from '../components/Section'
import { useLanguage } from '../i18n/LanguageContext'

export function Experience() {
  const { content } = useLanguage()
  const { experience } = content

  return (
    <Section id="experience" index={2} className="experience">
      <h2 className="section-title reveal">{experience.title}</h2>
      <ol className="timeline">
        {experience.items.map((item, i) => (
          <li
            key={item.org}
            className="timeline-item reveal"
            style={{ '--stagger-i': i + 1 } as CSSProperties}
          >
            <span className="timeline-marker" aria-hidden="true" />
            <span className="timeline-period">{item.period}</span>
            <h3>{item.role}</h3>
            <p className="timeline-org">{item.org}</p>
            <p className="timeline-desc">{item.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
