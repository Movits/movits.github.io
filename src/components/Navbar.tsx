import { SECTION_IDS } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { useLanguage } from '../i18n/LanguageContext'
import { LanguageToggle } from './LanguageToggle'

const NAV_ITEMS = ['about', 'experience', 'projects', 'skills', 'contact'] as const

export function Navbar() {
  const { content } = useLanguage()
  const active = useActiveSection(SECTION_IDS)

  return (
    <header className="navbar">
      <nav className="container" aria-label={content.nav.ariaLabel}>
        <a href="#hero" className="nav-logo" aria-label="Roberto França — início">
          RF
        </a>
        <ul className="nav-links">
          {NAV_ITEMS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={
                  active === id || (id === 'projects' && active === 'more-projects')
                    ? 'active'
                    : ''
                }
              >
                {content.nav[id]}
              </a>
            </li>
          ))}
        </ul>
        <LanguageToggle />
      </nav>
    </header>
  )
}
