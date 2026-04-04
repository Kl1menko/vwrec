import { qsa } from '../utils/dom.js'

export function initAccordion() {
  qsa('[data-accordion-trigger]').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('[data-accordion-item]')
      const isOpen = item?.classList.toggle('is-open')
      button.setAttribute('aria-expanded', String(Boolean(isOpen)))
    })
  })
}
