import { qsa } from '../utils/dom.js'

const PREFERRED_LOCALE_KEY = 'preferred-locale'

function isMobileLanguageSheet() {
  return window.matchMedia('(max-width: 767px)').matches
}

function syncViewportHeight() {
  document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
}

function closeSwitcher(switcher) {
  switcher.classList.remove('is-open', 'is-open-up')
  switcher.querySelector('[data-language-trigger]')?.setAttribute('aria-expanded', 'false')
  document.body.classList.remove('has-language-sheet-open')
}

function updateMenuPosition(switcher) {
  const trigger = switcher.querySelector('[data-language-trigger]')
  const menu = switcher.querySelector('[data-language-menu]')

  if (!trigger || !menu || !switcher.classList.contains('is-open')) return

  if (isMobileLanguageSheet()) {
    switcher.classList.remove('is-open-up')
    menu.style.removeProperty('--language-menu-max-height')
    return
  }

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

  syncViewportHeight()

  const syncOpenMenus = () => {
    syncViewportHeight()
    switchers.forEach((switcher) => updateMenuPosition(switcher))
  }

  switchers.forEach((switcher) => {
    const trigger = switcher.querySelector('[data-language-trigger]')
    const menu = switcher.querySelector('[data-language-menu]')
    const closeButton = switcher.querySelector('[data-language-close]')

    trigger?.addEventListener('click', () => {
      const isOpen = switcher.classList.toggle('is-open')
      trigger.setAttribute('aria-expanded', String(isOpen))

      if (!isOpen) {
        switcher.classList.remove('is-open-up')
        document.body.classList.remove('has-language-sheet-open')
        return
      }

      switchers.forEach((otherSwitcher) => {
        if (otherSwitcher === switcher) return
        closeSwitcher(otherSwitcher)
      })

      document.body.classList.toggle('has-language-sheet-open', isMobileLanguageSheet())

      window.requestAnimationFrame(() => {
        updateMenuPosition(switcher)

        if (!menu) return

        const activeOption = menu.querySelector('.language-switcher__option.is-active')
        const scrollContainer = menu.querySelector('.language-switcher__sheet-body') ?? menu
        scrollContainer.scrollTop = 0

        if (activeOption instanceof HTMLElement) {
          const offsetTop = activeOption.offsetTop - (scrollContainer instanceof HTMLElement ? scrollContainer.offsetTop : 0)
          scrollContainer.scrollTop = Math.max(0, offsetTop - 8)
        }
      })
    })

    closeButton?.addEventListener('click', () => {
      closeSwitcher(switcher)
    })

    switcher.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        const localeMatch = link.getAttribute('href')?.match(/^\/([a-z]{2})(?:\/|$)/i)

        if (localeMatch?.[1]) {
          try {
            window.localStorage.setItem(PREFERRED_LOCALE_KEY, localeMatch[1].toLowerCase())
          } catch {
            // Ignore storage failures and let navigation continue.
          }
        }

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
  window.visualViewport?.addEventListener('resize', syncOpenMenus, { passive: true })
}
