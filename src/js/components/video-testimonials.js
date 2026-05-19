export function initVideoTestimonials() {
  const wraps = document.querySelectorAll('.video-testimonial-card__video-wrap')
  if (!wraps.length) return

  wraps.forEach((wrap) => {
    const video = wrap.querySelector('.video-testimonial-card__video')
    const btn = wrap.querySelector('.video-testimonial-card__play')
    if (!video || !btn) return

    btn.addEventListener('click', () => {
      if (video.paused) {
        video.play()
        wrap.classList.add('is-playing')
      } else {
        video.pause()
        wrap.classList.remove('is-playing')
      }
    })

    video.addEventListener('pause', () => wrap.classList.remove('is-playing'))
    video.addEventListener('ended', () => wrap.classList.remove('is-playing'))
  })
}
