import { qs } from '../utils/dom.js'

export function initMobileMenu() {
  const button = qs('[data-menu-toggle]')
  const panel = qs('[data-menu-panel]')
  if (!button || !panel) return

  const syncState = (isOpen) => {
    button.setAttribute('aria-expanded', String(isOpen))
    panel.classList.toggle('is-open', isOpen)
    document.body.classList.toggle('has-mobile-menu-open', isOpen)
  }

  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true'
    syncState(!expanded)
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) syncState(false)
  })
}
