import { renderFooter } from '../js/components/footer.js'
import { renderHeader } from '../js/components/header.js'

function renderModal(title, formType, buttonLabel) {
  return `
    <div class="modal" data-modal="${formType}">
      <div class="modal__dialog">
        <button class="modal__close" type="button" data-close-modal aria-label="Close modal">×</button>
        <p class="eyebrow">Lead capture</p>
        <h3>${title}</h3>
        <form class="stack" data-form data-form-type="${formType}">
          <input class="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" />
          <label class="field">
            <span>Name *</span>
            <input type="text" name="name" required />
          </label>
          <label class="field">
            <span>Company *</span>
            <input type="text" name="company" required />
          </label>
          <label class="field">
            <span>Email *</span>
            <input type="email" name="email" required />
          </label>
          <label class="field">
            <span>Phone</span>
            <input type="text" name="phone" />
          </label>
          <button class="button" type="submit">${buttonLabel}</button>
          <p class="form-status" data-form-status></p>
        </form>
      </div>
    </div>
  `
}

function renderVideoModal() {
  return `
    <div class="modal" data-modal="video">
      <div class="modal__dialog">
        <button class="modal__close" type="button" data-close-modal aria-label="Close modal">×</button>
        <p class="eyebrow">Video</p>
        <h3>Презентація VW Recruit</h3>
        <div class="card">
          <p>Місце для вашого відео. Після отримання файлу або посилання я підключу повноцінний плеєр у це вікно.</p>
        </div>
      </div>
    </div>
  `
}

function renderHeroQuizModal(content) {
  return `
    <div class="modal" data-modal="hero-quiz">
      <div class="modal__dialog modal__dialog--quiz">
        <button class="modal__close" type="button" data-close-modal aria-label="Close modal">×</button>
        <h3>${content.home.calculator?.title ?? content.quiz.title}</h3>
        <p>${content.home.calculator?.lead ?? 'Step-based mobile-friendly flow with analytics events and a single submission payload.'}</p>
        <div data-quiz data-quiz-source="hero_quiz"></div>
      </div>
    </div>
  `
}

export function renderLayout({ content, locale, pageKey, mainContent }) {
  return `
    ${renderHeader(content, locale, pageKey)}
    <main id="main-content">
      ${mainContent}
    </main>
    ${renderFooter(locale)}
    ${renderModal(content.forms.callback.title, 'callback', 'Request callback')}
    ${renderModal(content.forms.report.title, 'report', 'Get report')}
    ${renderHeroQuizModal(content)}
    ${renderVideoModal()}
  `
}
