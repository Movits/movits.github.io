import type { CSSProperties } from 'react'
import { Section } from '../components/Section'
import { useLanguage } from '../i18n/LanguageContext'

export function Skills() {
  const { content } = useLanguage()
  const { skills } = content

  return (
    <Section id="skills" index={5} className="skills">
      <h2 className="section-title reveal">{skills.title}</h2>
      <div className="skills-grid">
        {skills.groups.map((group, i) => (
          <div
            key={group.title}
            className="skill-group reveal"
            style={{ '--stagger-i': i + 1 } as CSSProperties}
          >
            <h3>{group.title}</h3>
            <ul className="tag-list">
              {group.skills.map((skill) => (
                <li key={skill} className="tag skill-tag">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
