import type { CSSProperties } from 'react'
import { Section } from '../components/Section'
import { ArrowDownIcon } from '../components/Icons'
import { SITE_NAME } from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'

export function Hero() {
  const { content } = useLanguage()
  const { hero } = content

  return (
    <Section id="hero" index={0} className="hero">
      <p className="hero-greeting reveal">{hero.greeting}</p>
      <h1 className="hero-name reveal" style={{ '--stagger-i': 1 } as CSSProperties}>
        {SITE_NAME}
      </h1>
      <p className="hero-tagline reveal" style={{ '--stagger-i': 2 } as CSSProperties}>
        {hero.tagline}
      </p>
      <p className="hero-location reveal" style={{ '--stagger-i': 3 } as CSSProperties}>
        {hero.location}
      </p>
      <div className="hero-ctas reveal" style={{ '--stagger-i': 4 } as CSSProperties}>
        <a className="btn btn-primary" href="#projects">
          {hero.ctaProjects}
        </a>
        <a className="btn btn-ghost" href="#contact">
          {hero.ctaContact}
        </a>
      </div>
      <a className="scroll-hint" href="#about" aria-label={hero.scrollHint}>
        <span>{hero.scrollHint}</span>
        <ArrowDownIcon size={18} className="bounce" />
      </a>
    </Section>
  )
}
