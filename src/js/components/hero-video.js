import { qsa } from '../utils/dom.js'

export function initHeroVideo() {
  qsa('[data-hero-video-player]').forEach((player) => {
    const video = player.querySelector('.hero-video__media')
    const trigger = player.querySelector('[data-hero-video-trigger]')

    if (!video || !trigger) return

    const syncState = () => {
      const isPlaying = !video.paused && !video.ended

      player.classList.toggle('is-playing', isPlaying)
      trigger.hidden = isPlaying
      trigger.disabled = !video.currentSrc
      video.controls = isPlaying
    }

    trigger.addEventListener('click', async () => {
      if (!video.currentSrc) return

      try {
        video.controls = true
        await video.play()
      } catch {
        video.controls = false
        return
      }

      syncState()
    })

    video.addEventListener('play', syncState)
    video.addEventListener('pause', syncState)
    video.addEventListener('ended', syncState)
    video.addEventListener('loadeddata', syncState)

    syncState()
  })
}
