import { qsa } from '../utils/dom.js'

export function initLanguageSwitcher() {
  qsa('[data-language-switcher]').forEach((switcher) => {
    const trigger = switcher.querySelector('[data-language-trigger]')

    trigger?.addEventListener('click', () => {
      const isOpen = switcher.classList.toggle('is-open')
      trigger.setAttribute('aria-expanded', String(isOpen))
    })

    switcher.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        switcher.classList.remove('is-open')
        trigger?.setAttribute('aria-expanded', 'false')
      })
    })
  })

  document.addEventListener('click', (event) => {
    qsa('[data-language-switcher].is-open').forEach((switcher) => {
      if (switcher.contains(event.target)) return

      switcher.classList.remove('is-open')
      switcher.querySelector('[data-language-trigger]')?.setAttribute('aria-expanded', 'false')
    })
  })
}
