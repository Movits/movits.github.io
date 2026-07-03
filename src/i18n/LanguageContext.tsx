import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Content, Lang } from './types'
import { pt } from './content.pt'
import { en } from './content.en'

const CONTENT: Record<Lang, Content> = { pt, en }
const STORAGE_KEY = 'lang'

interface LanguageValue {
  lang: Lang
  content: Content
  toggle: () => void
}

const LanguageContext = createContext<LanguageValue | null>(null)

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'pt' || saved === 'en') return saved
  } catch {
    /* localStorage indisponível (modo privado) — segue o padrão */
  }
  return 'pt'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)
  const content = CONTENT[lang]

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    document.title = content.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', content.meta.description)
  }, [lang, content])

  const toggle = () => {
    setLang((prev) => {
      const next = prev === 'pt' ? 'en' : 'pt'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        /* sem persistência, sem problema */
      }
      return next
    })
  }

  return (
    <LanguageContext.Provider value={{ lang, content, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
