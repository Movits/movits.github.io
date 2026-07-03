import type { CSSProperties } from 'react'
import { Section } from '../components/Section'
import { useLanguage } from '../i18n/LanguageContext'
import avatar from '../assets/avatar.webp'

export function About() {
  const { content } = useLanguage()
  const { about } = content

  return (
    <Section id="about" index={1} className="about">
      <h2 className="section-title reveal">{about.title}</h2>
      <div className="about-grid">
        <div className="about-avatar reveal" style={{ '--stagger-i': 1 } as CSSProperties}>
          <img src={avatar} alt={about.avatarAlt} width={400} height={400} loading="lazy" />
        </div>
        <div className="about-text">
          {about.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="reveal"
              style={{ '--stagger-i': i + 2 } as CSSProperties}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  )
}
