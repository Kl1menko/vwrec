import { submitLead } from '../services/forms.js'
import { trackEvent } from '../services/analytics.js'
import { qsa } from '../utils/dom.js'
import { openModalByName } from './modal.js'

function buildPayload(form) {
  const data = new FormData(form)
  const payload = Object.fromEntries(data.entries())

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
}

function openFormSuccessModal(content, formType) {
  const modal = document.querySelector('[data-modal="form-success"]')
  if (!modal) return

  const message = modal.querySelector('[data-form-success-message]')
  const formContent = content.forms?.[formType]

  if (message) message.textContent = formContent?.success ?? ''

  openModalByName('form-success')
}

export function initForms(content) {
  const ui = content.ui ?? {}

  qsa('[data-form]').forEach((form) => {
    form.setAttribute('novalidate', 'true')

    form.addEventListener('submit', async (event) => {
      event.preventDefault()

      const honeypot = form.querySelector('input[name="website"]')
      if (honeypot?.value) return

      if (!form.checkValidity()) {
        form.reportValidity()
        setStatus(form, ui.formRequiredError ?? 'Please complete the required form fields.', 'error')
        return
      }

      const submitButton = form.querySelector('button[type="submit"]')
      const initialButtonLabel = submitButton?.textContent ?? ''
      submitButton?.setAttribute('disabled', 'true')
      if (submitButton) submitButton.textContent = ui.formSubmittingButton ?? 'Sending...'
      setStatus(form, ui.formSubmittingStatus ?? 'Sending form...', 'loading')

      try {
        const payload = buildPayload(form)
        await submitLead(payload)
        form.reset()
        setStatus(form, '', 'success')
        trackEvent('form_submit', { formType: form.dataset.formType })

        if (form.dataset.formType === 'report') {
          window.setTimeout(() => {
            openModalByName('report-success')
          }, 120)
        } else {
          window.setTimeout(() => {
            openFormSuccessModal(content, form.dataset.formType)
          }, 120)
        }
      } catch (error) {
        console.error(error)
        setStatus(form, ui.formSubmitError ?? 'Submission failed. Please try again.', 'error')
      } finally {
        submitButton?.removeAttribute('disabled')
        if (submitButton) submitButton.textContent = initialButtonLabel
      }
    })
  })
}
