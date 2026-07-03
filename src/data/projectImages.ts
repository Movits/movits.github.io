import type { MiniProject, Project } from '../i18n/types'
import nimbus from '../assets/projects/nimbus.webp'
import apologetica from '../assets/projects/apologetica.webp'
import museu from '../assets/projects/museu.webp'
import memora from '../assets/projects/memora.webp'
import lojaFrance from '../assets/projects/loja-france.webp'

/**
 * Thumbnails dos projetos (screenshots dos sites ao vivo, geradas por
 * scripts/capture-screenshots.mjs). Projetos sem imagem usam placeholder
 * ou o TerminalMock (DigitsBot).
 */
export const projectImages: Partial<Record<Project['id'] | MiniProject['id'], string>> = {
  nimbus,
  apologetica,
  museu,
  memora,
  'loja-france': lojaFrance,
}
