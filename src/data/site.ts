export const SITE_NAME = import.meta.env.VITE_SITE_NAME ?? 'Roberto França'
export const SITE_URL = 'https://movits.github.io'
export const EMAIL = 'robertomovits@gmail.com'
export const GITHUB_URL = 'https://github.com/Movits'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/movits/'
export const WORKANA_URL =
  'https://www.workana.com/freelancer/b64820d3b028c5233d3b3a13043fe255'

export const SECTION_IDS = [
  'hero',
  'about',
  'experience',
  'projects',
  'more-projects',
  'skills',
  'contact',
] as const

export type SectionId = (typeof SECTION_IDS)[number]
