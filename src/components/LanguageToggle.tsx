import { useLanguage } from '../i18n/LanguageContext'

export function LanguageToggle() {
  const { lang, content, toggle } = useLanguage()

  return (
    <div className="lang-toggle" role="group" aria-label={content.a11y.langToggle}>
      <span className={`lang-pill ${lang === 'en' ? 'en' : ''}`} aria-hidden="true" />
      <button
        type="button"
        className={lang === 'pt' ? 'active' : ''}
        aria-pressed={lang === 'pt'}
        onClick={() => lang !== 'pt' && toggle()}
      >
        PT
      </button>
      <button
        type="button"
        className={lang === 'en' ? 'active' : ''}
        aria-pressed={lang === 'en'}
        onClick={() => lang !== 'en' && toggle()}
      >
        EN
      </button>
    </div>
  )
}
