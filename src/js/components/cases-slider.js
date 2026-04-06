import { qsa } from '../utils/dom.js'

function getScrollStep(track) {
  const firstSlide = track.querySelector('.case-card')
  if (!firstSlide) return track.clientWidth

  const styles = window.getComputedStyle(track)
  const gap = Number.parseFloat(styles.columnGap || styles.gap || '0')

  return firstSlide.getBoundingClientRect().width + gap
}

export function initCasesSlider() {
  qsa('[data-cases-slider]').forEach((slider) => {
    const track = slider.querySelector('[data-cases-slider-track]')
    const prevButton = slider.querySelector('[data-cases-slider-prev]')
    const nextButton = slider.querySelector('[data-cases-slider-next]')

    if (!track || !prevButton || !nextButton) return

    const syncButtons = () => {
      const maxScrollLeft = track.scrollWidth - track.clientWidth - 4
      prevButton.disabled = track.scrollLeft <= 4
      nextButton.disabled = track.scrollLeft >= maxScrollLeft
    }

    prevButton.addEventListener('click', () => {
      track.scrollBy({ left: -getScrollStep(track), behavior: 'smooth' })
    })

    nextButton.addEventListener('click', () => {
      track.scrollBy({ left: getScrollStep(track), behavior: 'smooth' })
    })

    track.addEventListener('scroll', syncButtons, { passive: true })
    window.addEventListener('resize', syncButtons, { passive: true })

    syncButtons()
  })
}
