import { qsa } from '../utils/dom.js'

function animateCounter(element) {
  const target = Number(element.dataset.counterTarget || 0)
  const duration = Number(element.dataset.counterDuration || 1400)
  const start = performance.now()

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    const value = Math.round(target * eased)
    element.textContent = String(value)

    if (progress < 1) {
      requestAnimationFrame(tick)
    }
  }

  requestAnimationFrame(tick)
}

export function initCounters() {
  const counters = qsa('[data-counter-target]')
  if (!counters.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        animateCounter(entry.target)
        observer.unobserve(entry.target)
      })
    },
    { threshold: 0.35 },
  )

  counters.forEach((counter) => observer.observe(counter))
}
