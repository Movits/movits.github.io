import type { CSSProperties } from 'react'
import { Section } from '../components/Section'
import { GitHubIcon, LinkedInIcon, MailIcon, WorkanaIcon } from '../components/Icons'
import { EMAIL, GITHUB_URL, LINKEDIN_URL, WORKANA_URL } from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'

const SOCIAL_LINKS = [
  { label: 'GitHub', url: GITHUB_URL, Icon: GitHubIcon },
  { label: 'LinkedIn', url: LINKEDIN_URL, Icon: LinkedInIcon },
  { label: 'Workana', url: WORKANA_URL, Icon: WorkanaIcon },
] as const

export function Contact() {
  const { content } = useLanguage()
  const { contact } = content

  return (
    <Section id="contact" index={6} className="contact">
      <h2 className="contact-title reveal">{contact.title}</h2>
      <p className="contact-text reveal" style={{ '--stagger-i': 1 } as CSSProperties}>
        {contact.text}
      </p>
      <div className="contact-ctas reveal" style={{ '--stagger-i': 2 } as CSSProperties}>
        <a className="btn btn-primary" href={`mailto:${EMAIL}`}>
          <MailIcon size={18} />
          {contact.ctaEmail}
        </a>
      </div>
      <ul className="social-links reveal" style={{ '--stagger-i': 3 } as CSSProperties}>
        {SOCIAL_LINKS.map(({ label, url, Icon }) => (
          <li key={label}>
            <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon size={24} />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
