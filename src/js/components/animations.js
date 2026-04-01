import { qsa } from '../utils/dom.js'

export function initRevealAnimations() {
  const elements = qsa('[data-reveal]')
  if (!elements.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    },
    { threshold: 0.15 },
  )

  elements.forEach((element) => observer.observe(element))
}
