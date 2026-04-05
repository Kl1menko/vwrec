import { initAccordion } from '../components/accordion.js'
import { initForms } from '../components/forms.js'
import { initAnimatedBeam } from '../components/animated-beam.js'
import { initLanguageSwitcher } from '../components/language-switcher.js'
import { initMobileMenu } from '../components/mobile-menu.js'
import { initModals } from '../components/modal.js'
import { initQuiz } from '../components/quiz.js'
import { initRevealAnimations } from '../components/animations.js'
import { initCounters } from '../components/counters.js'
import { initHeroVideo } from '../components/hero-video.js'
import { initIndustrySlider } from '../components/industry-slider.js'
import { initReviewsSlider } from '../components/reviews-slider.js'
import { initRipple } from '../components/ripple.js'
import { initServicesFit } from '../components/services-fit.js'

function getEmbeddedContent() {
  const node = document.querySelector('#page-content')
  if (!node?.textContent) return null

  try {
    return JSON.parse(node.textContent)
  } catch (error) {
    console.error('[content] Failed to parse embedded page content.', error)
    return null
  }
}

export async function initApp() {
  const content = getEmbeddedContent()

  initMobileMenu()
  initLanguageSwitcher()
  if (content) {
    initForms(content)
  }
  initAccordion()
  initModals()
  if (content) {
    initQuiz(content)
  }
  initRevealAnimations()
  initCounters()
  initHeroVideo()
  initIndustrySlider()
  initReviewsSlider()
  initRipple()
  initAnimatedBeam()
  initServicesFit()

  if (document.querySelector('[data-hero-globe-canvas]')) {
    const { initHeroGlobe } = await import('../components/globe.js')
    initHeroGlobe()
  }
}
