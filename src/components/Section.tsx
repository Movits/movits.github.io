import { useCallback, type ReactNode } from 'react'
import type { SectionId } from '../data/site'
import { registerSection } from '../scene/scrollStore'
import { useInView } from '../hooks/useInView'

interface SectionProps {
  id: SectionId
  index: number
  className?: string
  children: ReactNode
}

export function Section({ id, index, className, children }: SectionProps) {
  const { ref, inView } = useInView<HTMLElement>()

  const setRefs = useCallback(
    (el: HTMLElement | null) => {
      ref.current = el
      registerSection(index, el)
    },
    [index, ref],
  )

  const classes = ['section', className, inView ? 'is-visible' : '']
    .filter(Boolean)
    .join(' ')

  return (
    <section id={id} ref={setRefs} className={classes}>
      <div className="container">{children}</div>
    </section>
  )
}
