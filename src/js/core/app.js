import { CONTENT } from '../../content/index.js'
import { initAccordion } from '../components/accordion.js'
import { initForms } from '../components/forms.js'
import { initLanguageSwitcher } from '../components/language-switcher.js'
import { initMobileMenu } from '../components/mobile-menu.js'
import { initModals } from '../components/modal.js'
import { initQuiz } from '../components/quiz.js'
import { initRevealAnimations } from '../components/animations.js'
import { initHeroGlobe } from '../components/globe.js'
import { initCounters } from '../components/counters.js'
import { initHeroVideo } from '../components/hero-video.js'
import { initIndustrySlider } from '../components/industry-slider.js'
import { renderPage } from '../pages/render-page.js'
import { renderLayout } from '../../templates/layout.js'

function getContent(locale) {
  return CONTENT[locale] ?? CONTENT.en
}

export function initApp() {
  const locale = document.body.dataset.locale ?? 'en'
  const pageKey = document.body.dataset.page ?? 'home'
  const content = getContent(locale)
  const app = document.querySelector('#app')

  document.title = `${content.site.title} | ${pageKey === 'home' ? content.home.meta.title : content[pageKey]?.title ?? 'Page'}`
  document.documentElement.lang = locale

  app.innerHTML = renderLayout({
    content,
    locale,
    pageKey,
    mainContent: renderPage(content, pageKey),
  })

  initMobileMenu()
  initLanguageSwitcher()
  initForms(content)
  initAccordion()
  initModals()
  initQuiz(content)
  initRevealAnimations()
  initHeroGlobe()
  initCounters()
  initHeroVideo()
  initIndustrySlider()
}
