export type Lang = 'pt' | 'en'

export interface TimelineItem {
  period: string
  role: string
  org: string
  description: string
}

export interface Project {
  id: 'nimbus' | 'apologetica' | 'museu' | 'digitsbot'
  name: string
  description: string
  tags: string[]
  repoUrl: string
  liveUrl?: string
  imageAlt?: string
  /** Linhas do terminal fake (só para o DigitsBot) */
  terminal?: string[]
}

export interface MiniProject {
  id: 'memora' | 'loja-france' | 'seja-meu-guia'
  name: string
  description: string
  tags: string[]
  repoUrl: string
  liveUrl?: string
  status?: string
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export interface Content {
  nav: {
    about: string
    experience: string
    projects: string
    skills: string
    contact: string
    ariaLabel: string
  }
  hero: {
    greeting: string
    tagline: string
    location: string
    ctaProjects: string
    ctaContact: string
    scrollHint: string
  }
  about: {
    title: string
    paragraphs: string[]
    avatarAlt: string
  }
  experience: {
    title: string
    items: TimelineItem[]
  }
  projects: {
    title: string
    subtitle: string
    repoLabel: string
    liveLabel: string
    items: Project[]
  }
  moreProjects: {
    title: string
    items: MiniProject[]
  }
  skills: {
    title: string
    groups: SkillGroup[]
  }
  contact: {
    title: string
    text: string
    ctaEmail: string
    footerNote: string
  }
  a11y: {
    langToggle: string
    skipToContent: string
  }
  meta: {
    title: string
    description: string
  }
}
