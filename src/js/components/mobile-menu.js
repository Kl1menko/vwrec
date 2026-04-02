import { qs } from '../utils/dom.js'

export function initMobileMenu() {
  const button = qs('[data-menu-toggle]')
  const panel = qs('[data-menu-panel]')
  if (!button || !panel) return
  let scrollY = 0

  const lockScroll = () => {
    scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.left = '0'
    document.body.style.right = '0'
    document.body.style.width = '100%'
  }

  const unlockScroll = () => {
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.left = ''
    document.body.style.right = ''
    document.body.style.width = ''
    window.scrollTo(0, scrollY)
  }

  const syncState = (isOpen) => {
    button.setAttribute('aria-expanded', String(isOpen))
    panel.classList.toggle('is-open', isOpen)
    document.body.classList.toggle('has-mobile-menu-open', isOpen)
    if (isOpen) {
      lockScroll()
    } else {
      unlockScroll()
    }
  }

  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true'
    syncState(!expanded)
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) syncState(false)
  })
}
