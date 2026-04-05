import { qsa } from '../utils/dom.js'

function animateValue(from, to, duration, onUpdate) {
  const start = performance.now()

  function step(now) {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    const value = from + (to - from) * eased
    onUpdate(value)

    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}

export function initServicesFit() {
  const cards = qsa('.services-fit-card')
  if (!cards.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const card = entry.target
        const score = Number(card.querySelector('[data-fit-score]')?.dataset.fitScore ?? 0)
        const scoreValue = card.querySelector('[data-fit-score-value]')
        const scoreNode = card.querySelector('[data-fit-score]')
        const bars = qsa('[data-fit-bar]', card)

        animateValue(0, score, 900, (value) => {
          scoreNode?.style.setProperty('--fit-progress', value.toFixed(2))
          if (scoreValue) scoreValue.textContent = String(Math.round(value))
        })

        bars.forEach((bar, index) => {
          const target = Number(bar.dataset.fitBar ?? 0)
          setTimeout(() => {
            animateValue(0, target, 720, (value) => {
              bar.style.setProperty('--fit-bar-progress', value.toFixed(2))
            })
          }, index * 90)
        })

        observer.unobserve(card)
      })
    },
    { threshold: 0.3 },
  )

  cards.forEach((card) => observer.observe(card))
}
