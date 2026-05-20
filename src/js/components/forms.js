import { submitLead } from '../services/forms.js'
import { trackEvent } from '../services/analytics.js'
import { buildPageUrl } from '../core/site-config.js'
import { qsa } from '../utils/dom.js'
import { openModalByName } from './modal.js'

function buildPayload(form) {
  const data = new FormData(form)
  const payload = Object.fromEntries(
    [...data.entries()].map(([key, value]) => [key, typeof value === 'string' ? value.trim() : value]),
  )

  delete payload.website

  return {
    source: form.dataset.formType,
    locale: document.body.dataset.locale,
    page: document.body.dataset.page,
    ...payload,
  }
}

function setStatus(form, message, state = 'success') {
  const status = form.querySelector('[data-form-status]')
  if (!status) return

  status.textContent = message
  status.dataset.state = state
  status.hidden = !message
}

function openFormSuccessModal(content, formType, opener) {
  const modal = document.querySelector('[data-modal="form-success"]')
  if (!modal) return

  const message = modal.querySelector('[data-form-success-message]')
  const formContent = content.forms?.[formType] ?? content.forms?.lead

  if (message) message.textContent = formContent?.success ?? ''

  openModalByName('form-success', opener)
}

function hasEmptyRequiredFields(form) {
  return [...form.elements].some((field) => {
    if (!(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement || field instanceof HTMLSelectElement)) {
      return false
    }

    if (field.disabled || !field.required) return false

    return typeof field.value === 'string' ? !field.value.trim() : !field.value
  })
}

export function initForms(content) {
  const ui = content.ui ?? {}

  qsa('[data-form]').forEach((form) => {
    form.setAttribute('novalidate', 'true')

    const status = form.querySelector('[data-form-status]')
    if (status) {
      status.hidden = true
      status.setAttribute('aria-live', 'polite')
    }

    form.addEventListener('submit', async (event) => {
      event.preventDefault()

      const honeypot = form.querySelector('input[name="website"]')
      if (honeypot?.value) return

      if (!form.checkValidity() || hasEmptyRequiredFields(form)) {
        form.reportValidity()
        setStatus(form, ui.formRequiredError, 'error')
        return
      }

      const submitButton = form.querySelector('button[type="submit"]')
      const initialButtonLabel = submitButton?.textContent ?? ''
      submitButton?.setAttribute('disabled', 'true')
      if (submitButton) submitButton.textContent = ui.formSubmittingButton
      setStatus(form, ui.formSubmittingStatus, 'loading')

      try {
        const payload = buildPayload(form)
        await submitLead(payload)
        form.reset()
        setStatus(form, '', 'success')
        trackEvent('form_submit', { formType: form.dataset.formType })

        if (form.dataset.formType === 'report') {
          window.setTimeout(() => {
            window.location.assign(buildPageUrl(document.body.dataset.locale ?? 'uk', 'thank-you-report'))
          }, 120)
        } else {
          window.setTimeout(() => {
            openFormSuccessModal(content, form.dataset.formType, submitButton ?? undefined)
          }, 120)
        }
      } catch (error) {
        console.error(error)
        setStatus(form, ui.formSubmitError, 'error')
      } finally {
        submitButton?.removeAttribute('disabled')
        if (submitButton) submitButton.textContent = initialButtonLabel
      }
    })
  })
}
