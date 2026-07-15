import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal(containerRef) {
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const container = containerRef?.value ?? document
    const elements = container.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  })
}
