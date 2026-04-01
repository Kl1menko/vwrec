import { qsa } from '../utils/dom.js'
import { getStorageValue, setStorageValue } from '../utils/storage.js'
import { trackEvent } from '../services/analytics.js'

function closeModal(modal) {
  modal.classList.remove('is-open')
  document.body.classList.remove('has-modal-open')
}

function openModal(modal) {
  modal.classList.add('is-open')
  document.body.classList.add('has-modal-open')
  setStorageValue(`modal:${modal.dataset.modal}`, 'opened')
  trackEvent('popup_open', { popup: modal.dataset.modal })
}

export function initModals() {
  qsa('[data-open-modal]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const modal = document.querySelector(`[data-modal="${trigger.dataset.openModal}"]`)
      if (modal) openModal(modal)
    })
  })

  qsa('[data-close-modal]').forEach((button) => {
    button.addEventListener('click', () => {
      const modal = button.closest('[data-modal]')
      if (modal) closeModal(modal)
    })
  })

  qsa('[data-modal]').forEach((modal) => {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeModal(modal)
    })
  })

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return

    const activeModal = document.querySelector('[data-modal].is-open')
    if (activeModal) closeModal(activeModal)
  })

  const delayedPrompt = document.querySelector('[data-modal="report"]')
  if (delayedPrompt && !getStorageValue('modal:report')) {
    window.setTimeout(() => openModal(delayedPrompt), 18000)
  }
}
