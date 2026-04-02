import { submitLead } from '../services/forms.js'
import { trackEvent } from '../services/analytics.js'
import { createElementFromHTML, qs, qsa } from '../utils/dom.js'

function getStepValue(step, container) {
  if (step.type === 'options') {
    return container.querySelector('input:checked')?.value ?? ''
  }

  return step.fields.reduce((acc, field) => {
    acc[field.name] = container.querySelector(`[name="${field.name}"]`)?.value?.trim() ?? ''
    return acc
  }, {})
}

function isStepValid(step, value) {
  if (step.type === 'options') return Boolean(value)
  return step.fields.every((field) => !field.required || value[field.name])
}

function renderOptions(step, state) {
  return `
    <div class="quiz-options">
      ${step.options
        .map(
          (option) => `
            <label class="quiz-option">
              <input type="radio" name="${step.id}" value="${option}" ${state[step.id] === option ? 'checked' : ''} />
              <span>${option}</span>
            </label>
          `,
        )
        .join('')}
    </div>
  `
}

function renderFields(step, state) {
  return `
    <div class="form-grid">
      ${step.fields
        .map(
          (field) => `
            <label class="field">
              <span>${field.label}${field.required ? ' *' : ''}</span>
              <input name="${field.name}" type="${field.name === 'email' ? 'email' : 'text'}" value="${state[step.id]?.[field.name] ?? ''}" ${field.required ? 'required' : ''} />
            </label>
          `,
        )
        .join('')}
    </div>
  `
}

function initQuizInstance(root, content) {
  const quizSource = root.dataset.quizSource ?? 'quiz'
  const state = {}
  let currentStep = 0

  const draw = () => {
    const step = content.quiz.steps[currentStep]
    const isLastStep = currentStep === content.quiz.steps.length - 1

    root.innerHTML = `
      <div class="quiz-card">
        <p class="eyebrow">${content.quiz.progressLabel} ${currentStep + 1}/${content.quiz.steps.length}</p>
        <h3>${step.label}</h3>
        <div class="quiz-body">
          ${step.type === 'options' ? renderOptions(step, state) : renderFields(step, state)}
        </div>
        <div class="quiz-actions">
          <button class="button button--ghost" type="button" data-quiz-back ${currentStep === 0 ? 'disabled' : ''}>Back</button>
          <button class="button" type="button" data-quiz-next>${isLastStep ? 'Submit' : 'Continue'}</button>
        </div>
        <p class="form-status" data-quiz-status></p>
      </div>
    `

    qs('[data-quiz-back]', root)?.addEventListener('click', () => {
      currentStep = Math.max(0, currentStep - 1)
      draw()
    })

    qs('[data-quiz-next]', root)?.addEventListener('click', async () => {
      const value = getStepValue(step, root)

      if (!isStepValid(step, value)) {
        qs('[data-quiz-status]', root).textContent = 'Please complete the current step.'
        return
      }

      state[step.id] = value
      trackEvent(`quiz_step_${currentStep + 1}_complete`, { step: step.id, quizSource })

      if (!isLastStep) {
        if (currentStep === 0) {
          trackEvent('quiz_start', {
            locale: document.body.dataset.locale,
            quizSource,
          })
        }
        currentStep += 1
        draw()
        return
      }

      try {
        await submitLead({
          source: quizSource,
          locale: document.body.dataset.locale,
          page: document.body.dataset.page,
          answers: state,
        })
        trackEvent('quiz_submit', {
          locale: document.body.dataset.locale,
          quizSource,
        })
        root.replaceChildren(
          createElementFromHTML(`
            <div class="quiz-card quiz-card--success">
              <p class="eyebrow">Ready</p>
              <h3>${content.quiz.completionTitle}</h3>
              <p>${content.quiz.completionLead}</p>
            </div>
          `),
        )
      } catch (error) {
        console.error(error)
        qs('[data-quiz-status]', root).textContent = 'Submission failed. Please try again.'
      }
    })
  }

  draw()
}

export function initQuiz(content) {
  const roots = qsa('[data-quiz]')
  if (!roots.length) return

  roots.forEach((root) => initQuizInstance(root, content))
}
