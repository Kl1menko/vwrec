import { qsa } from '../utils/dom.js'
import { getStorageValue, setStorageValue } from '../utils/storage.js'
import { trackEvent } from '../services/analytics.js'

let modalScrollY = 0
let isModalScrollLocked = false

function lockPageScroll() {
  if (isModalScrollLocked) return

  modalScrollY = window.scrollY
  document.body.style.position = 'fixed'
  document.body.style.top = `-${modalScrollY}px`
  document.body.style.left = '0'
  document.body.style.right = '0'
  document.body.style.width = '100%'
  isModalScrollLocked = true
}

function unlockPageScroll() {
  if (!isModalScrollLocked) return

  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.left = ''
  document.body.style.right = ''
  document.body.style.width = ''
  window.scrollTo(0, modalScrollY)
  isModalScrollLocked = false
}

function closeModal(modal) {
  if (modal.dataset.modal === 'video') {
    const video = modal.querySelector('[data-video-modal-media]')
    if (video) {
      video.pause()
      video.removeAttribute('src')
      video.load()
    }
  }

  modal.classList.remove('is-open')

  if (!document.querySelector('[data-modal].is-open')) {
    document.body.classList.remove('has-modal-open')
    unlockPageScroll()
  }
}

function openModal(modal) {
  if (!document.querySelector('[data-modal].is-open')) {
    lockPageScroll()
    document.body.classList.add('has-modal-open')
  }

  modal.classList.add('is-open')
  setStorageValue(`modal:${modal.dataset.modal}`, 'opened')
  trackEvent('popup_open', { popup: modal.dataset.modal })
}

export function closeAllModals() {
  qsa('[data-modal].is-open').forEach((modal) => closeModal(modal))
}

export function openModalByName(name) {
  const modal = document.querySelector(`[data-modal="${name}"]`)
  if (!modal) return
  closeAllModals()
  openModal(modal)
}

export function initModals() {
  const registerReportScrollPrompt = () => {
    const reportModal = document.querySelector('[data-modal="report"]')
    const trigger = document.querySelector('[data-report-prompt-trigger]')
    if (!reportModal || !trigger || getStorageValue('modal:report')) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          if (getStorageValue('modal:report')) {
            observer.disconnect()
            return
          }

          const activeModal = document.querySelector('[data-modal].is-open')
          if (activeModal) return

          observer.disconnect()
          openModalByName('report')
        })
      },
      {
        threshold: 0.35,
        rootMargin: '0px 0px -12% 0px',
      },
    )

    observer.observe(trigger)
  }

  qsa('[data-video-trigger]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const modal = document.querySelector('[data-modal="video"]')
      const video = modal?.querySelector('[data-video-modal-media]')
      const src = trigger.dataset.videoSrc

      if (!modal || !video || !src) return
      video.src = src

      if (trigger.dataset.videoPoster) {
        video.poster = trigger.dataset.videoPoster
      } else {
        video.removeAttribute('poster')
      }

      video.load()

      closeAllModals()
      openModal(modal)

      const playPromise = video.play()
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {})
      }
    })
  })

  qsa('[data-open-modal]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      if (!trigger.dataset.openModal) return
      openModalByName(trigger.dataset.openModal)
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

  registerReportScrollPrompt()
}
