/**
 * Store de scroll/pointer lido diretamente pelos useFrame da cena 3D —
 * zero estado React, zero re-renders (padrão do projeto nimbus).
 */
export const scroll = {
  /** Peso por seção: 1 = viewport dentro da seção, decai a 0 a um viewport de distância. */
  weights: [] as number[],
  /** Posição do ponteiro normalizada em [-1, 1] (y positivo = cima). */
  pointer: { x: 0, y: 0 },
  /** Progresso global do scroll em [0, 1]. */
  progress: 0,
}

const sections: (HTMLElement | null)[] = []

export function registerSection(index: number, el: HTMLElement | null) {
  sections[index] = el
  recompute()
}

export function weightAt(index: number): number {
  return scroll.weights[index] ?? 0
}

function recompute() {
  const vh = window.innerHeight || 1
  const doc = document.documentElement
  const max = doc.scrollHeight - vh
  scroll.progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0

  const mid = vh / 2
  sections.forEach((el, i) => {
    if (!el) {
      scroll.weights[i] = 0
      return
    }
    const rect = el.getBoundingClientRect()
    // Distância do centro do viewport ao ponto mais próximo da seção:
    // 0 enquanto o centro está dentro dela, crescendo ao se afastar.
    const nearest = Math.min(Math.max(mid, rect.top), rect.bottom)
    const dist = Math.abs(nearest - mid)
    scroll.weights[i] = Math.max(0, 1 - dist / vh)
  })
}

let started = false

/** Liga os listeners uma única vez (vivem pela vida da página). */
export function startScrollTracking() {
  if (started) return
  started = true

  const onPointer = (e: PointerEvent) => {
    scroll.pointer.x = (e.clientX / window.innerWidth) * 2 - 1
    scroll.pointer.y = -((e.clientY / window.innerHeight) * 2 - 1)
  }

  window.addEventListener('scroll', recompute, { passive: true })
  window.addEventListener('resize', recompute, { passive: true })
  window.addEventListener('pointermove', onPointer, { passive: true })
  recompute()
}
