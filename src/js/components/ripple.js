import { qsa } from '../utils/dom.js'

function renderRipple(root) {
  const size = Number(root.dataset.rippleSize || 210)
  const opacity = Number(root.dataset.rippleOpacity || 0.24)
  const count = Number(root.dataset.rippleCount || 8)

  qsa('.ripple-ring', root).forEach((ring) => ring.remove())

  for (let index = 0; index < count; index += 1) {
    const ring = document.createElement('div')
    const ringSize = size + index * 86
    const ringOpacity = Math.max(opacity - index * (opacity / count), 0)

    ring.className = 'ripple-ring'
    ring.style.width = `${ringSize}px`
    ring.style.height = `${ringSize}px`
    ring.style.borderColor = `rgba(17, 17, 17, ${ringOpacity.toFixed(3)})`
    ring.style.animationDelay = `${index * 0.28}s`

    root.appendChild(ring)
  }
}

export function initRipple() {
  qsa('[data-ripple]').forEach((root) => {
    renderRipple(root)
  })
}
