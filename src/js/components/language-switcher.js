import { qsa } from '../utils/dom.js'

function closeSwitcher(switcher) {
  switcher.classList.remove('is-open', 'is-open-up')
  switcher.querySelector('[data-language-trigger]')?.setAttribute('aria-expanded', 'false')
}

function updateMenuPosition(switcher) {
  const trigger = switcher.querySelector('[data-language-trigger]')
  const menu = switcher.querySelector('[data-language-menu]')

  if (!trigger || !menu || !switcher.classList.contains('is-open')) return

  const viewportPadding = 12
  const offset = 8
  const triggerRect = trigger.getBoundingClientRect()
  const menuHeight = menu.scrollHeight
  const availableBelow = Math.max(0, window.innerHeight - triggerRect.bottom - viewportPadding - offset)
  const availableAbove = Math.max(0, triggerRect.top - viewportPadding - offset)
  const shouldOpenUp = menuHeight > availableBelow && availableAbove > availableBelow
  const maxHeight = Math.max(160, Math.floor(shouldOpenUp ? availableAbove : availableBelow))

  switcher.classList.toggle('is-open-up', shouldOpenUp)
  menu.style.setProperty('--language-menu-max-height', `${maxHeight}px`)
}

export function initLanguageSwitcher() {
  const switchers = qsa('[data-language-switcher]')
  if (!switchers.length) return

  const syncOpenMenus = () => {
    switchers.forEach((switcher) => updateMenuPosition(switcher))
  }

  switchers.forEach((switcher) => {
    const trigger = switcher.querySelector('[data-language-trigger]')

    trigger?.addEventListener('click', () => {
      const isOpen = switcher.classList.toggle('is-open')
      trigger.setAttribute('aria-expanded', String(isOpen))

      if (!isOpen) {
        switcher.classList.remove('is-open-up')
        return
      }

      switchers.forEach((otherSwitcher) => {
        if (otherSwitcher === switcher) return
        closeSwitcher(otherSwitcher)
      })

      window.requestAnimationFrame(() => updateMenuPosition(switcher))
    })

    switcher.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        closeSwitcher(switcher)
      })
    })
  })

  document.addEventListener('click', (event) => {
    switchers.forEach((switcher) => {
      if (!switcher.classList.contains('is-open')) return
      if (switcher.contains(event.target)) return

      closeSwitcher(switcher)
    })
  })

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return
    switchers.forEach((switcher) => closeSwitcher(switcher))
  })

  window.addEventListener('resize', syncOpenMenus, { passive: true })
  window.addEventListener('orientationchange', syncOpenMenus, { passive: true })
  window.addEventListener('scroll', syncOpenMenus, { passive: true, capture: true })
}
