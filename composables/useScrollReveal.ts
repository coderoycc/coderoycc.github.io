import { onMounted, onUnmounted } from 'vue'

/**
 * useScrollReveal — Intersection Observer para animaciones de entrada al scroll.
 * Uso: llamar en onMounted de cualquier componente que quiera reveal animations.
 */
export const useScrollReveal = () => {
  let observer: IntersectionObserver | null = null

  const init = () => {
    if (typeof window === 'undefined') return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible')
            observer?.unobserve(entry.target) // animación solo una vez
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    // Observar todos los elementos marcados con la clase reveal
    document.querySelectorAll('.reveal').forEach((el) => {
      observer!.observe(el)
    })
  }

  onMounted(() => {
    // Pequeño delay para asegurar que el DOM esté listo
    setTimeout(init, 50)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { init }
}
