import { qsa } from '../utils/dom.js'
import { getStorageValue, setStorageValue, getSessionValue, setSessionValue } from '../utils/storage.js'
import { trackEvent } from '../services/analytics.js'

let modalScrollY = 0
let isModalScrollLocked = false

// Track which element opened the modal so we can return focus on close
const triggerMap = new WeakMap()

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ')

function getFocusable(modal) {
  return [...modal.querySelectorAll(FOCUSABLE)].filter(
    (el) => !el.closest('[hidden]') && el.offsetParent !== null,
  )
}

function trapFocus(modal, event) {
  const focusable = getFocusable(modal)
  if (!focusable.length) return

  const first = focusable[0]
  const last = focusable[focusable.length - 1]

  if (event.shiftKey) {
    if (document.activeElement === first) {
      event.preventDefault()
      last.focus()
    }
  } else {
    if (document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }
}

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
  modal.removeAttribute('aria-modal')
  modal.removeAttribute('role')

  // Return focus to the element that opened this modal
  const returnTarget = triggerMap.get(modal)
  if (returnTarget instanceof HTMLElement) {
    returnTarget.focus({ preventScroll: true })
    triggerMap.delete(modal)
  }

  if (!document.querySelector('[data-modal].is-open')) {
    document.body.classList.remove('has-modal-open')
    unlockPageScroll()
  }
}

function openModal(modal, opener = null) {
  if (!document.querySelector('[data-modal].is-open')) {
    lockPageScroll()
    document.body.classList.add('has-modal-open')
  }

  if (opener instanceof HTMLElement) {
    triggerMap.set(modal, opener)
  }

  modal.classList.add('is-open')
  modal.setAttribute('role', 'dialog')
  modal.setAttribute('aria-modal', 'true')

  trackEvent('popup_open', { popup: modal.dataset.modal })

  // Focus first focusable element after animation frame (transition runs first)
  window.requestAnimationFrame(() => {
    const focusable = getFocusable(modal)
    const target = focusable.find((el) => !el.classList.contains('modal__close')) ?? focusable[0]
    target?.focus({ preventScroll: true })
  })
}

export function closeAllModals() {
  qsa('[data-modal].is-open').forEach((modal) => closeModal(modal))
}

export function openModalByName(name, opener = null) {
  const modal = document.querySelector(`[data-modal="${name}"]`)
  if (!modal) return
  closeAllModals()
  openModal(modal, opener)
}

export function initModals() {
  const registerReportScrollPrompt = () => {
    const reportModal = document.querySelector('[data-modal="report"]')
    const trigger = document.querySelector('[data-report-prompt-trigger]')
    if (!reportModal || !trigger) return

    // dismissed this session — skip
    if (getSessionValue('report-prompt-dismissed')) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          if (getSessionValue('report-prompt-dismissed')) {
            observer.disconnect()
            return
          }

          const activeModal = document.querySelector('[data-modal].is-open')
          if (activeModal) return

          observer.disconnect()
          openModalByName('report')

          // mark dismissed for the rest of this session when user closes it
          const onClose = () => {
            setSessionValue('report-prompt-dismissed', '1')
            reportModal.removeEventListener('modal:closed', onClose)
          }

          // listen for the modal losing is-open (any close path)
          const closedObserver = new MutationObserver(() => {
            if (!reportModal.classList.contains('is-open')) {
              setSessionValue('report-prompt-dismissed', '1')
              closedObserver.disconnect()
            }
          })
          closedObserver.observe(reportModal, { attributes: true, attributeFilter: ['class'] })
        })
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -8% 0px',
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
      openModal(modal, trigger)

      const playPromise = video.play()
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {})
      }
    })
  })

  qsa('[data-open-modal]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      if (!trigger.dataset.openModal) return
      openModalByName(trigger.dataset.openModal, trigger)
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
    const activeModal = document.querySelector('[data-modal].is-open')

    if (event.key === 'Escape') {
      closeAllModals()
      return
    }

    if (event.key === 'Tab' && activeModal) {
      trapFocus(activeModal, event)
    }
  })

  registerReportScrollPrompt()
}
