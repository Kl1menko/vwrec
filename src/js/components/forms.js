import { submitLead } from '../services/forms.js'
import { trackEvent } from '../services/analytics.js'
import { qsa } from '../utils/dom.js'

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

function setStatus(form, message, isError = false) {
  const status = form.querySelector('[data-form-status]')
  if (!status) return
  status.textContent = message
  status.dataset.state = isError ? 'error' : 'success'
}

export function initForms(content) {
  qsa('[data-form]').forEach((form) => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault()

      const honeypot = form.querySelector('input[name="website"]')
      if (honeypot?.value) return

      const submitButton = form.querySelector('button[type="submit"]')
      submitButton?.setAttribute('disabled', 'true')

      try {
        const payload = buildPayload(form)
        await submitLead(payload)
        form.reset()
        setStatus(form, content.forms[form.dataset.formType].success)
        trackEvent('form_submit', { formType: form.dataset.formType })
      } catch (error) {
        console.error(error)
        setStatus(form, 'Something went wrong. Please try again.', true)
      } finally {
        submitButton?.removeAttribute('disabled')
      }
    })
  })
}
