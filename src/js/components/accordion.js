import { qsa } from '../utils/dom.js'

export function initAccordion() {
  qsa('[data-accordion-item]').forEach((item, index) => {
    const button = item.querySelector('[data-accordion-trigger]')
    const content = item.querySelector('[data-accordion-content]')
    if (!button || !content) return

    if (!content.id) {
      content.id = `accordion-panel-${index + 1}`
    }

    button.setAttribute('aria-controls', content.id)
    content.hidden = !item.classList.contains('is-open')

    button.addEventListener('click', () => {
      const isOpen = item?.classList.toggle('is-open')
      button.setAttribute('aria-expanded', String(Boolean(isOpen)))
      content.hidden = !isOpen
    })
  })
}
