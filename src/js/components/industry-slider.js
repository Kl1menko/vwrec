import { qsa } from '../utils/dom.js'

function getScrollStep(track) {
  const firstSlide = track.querySelector('.industry-slide')
  if (!firstSlide) return track.clientWidth

  const styles = window.getComputedStyle(track)
  const gap = Number.parseFloat(styles.columnGap || styles.gap || '0')

  return firstSlide.getBoundingClientRect().width + gap
}

export function initIndustrySlider() {
  qsa('[data-industry-slider]').forEach((slider) => {
    const track = slider.querySelector('[data-industry-slider-track]')
    const prevButton = slider.querySelector('[data-industry-slider-prev]')
    const nextButton = slider.querySelector('[data-industry-slider-next]')

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
