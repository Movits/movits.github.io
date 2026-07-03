import { useEffect, useRef, useState } from 'react'

/**
 * Revela uma vez quando o elemento entra no viewport.
 * threshold 0 + rootMargin negativo em vez de um threshold proporcional:
 * seções mais altas que o viewport nunca atingem ratios como 0.15
 * (o ratio máximo é viewport/elemento), o que deixaria a seção invisível.
 */
export function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return { ref, inView }
}
