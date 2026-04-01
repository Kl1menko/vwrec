import createGlobe from 'cobe'
import { qs } from '../utils/dom.js'

const BRAND_ORANGE = [242 / 255, 122 / 255, 36 / 255]

const LANGUAGE_MARKERS = [
  { id: 'ua', label: 'UA', location: [50.4501, 30.5234] },
  { id: 'gb', label: 'EN', location: [51.5072, -0.1276] },
  { id: 'cz', label: 'CZ', location: [50.0755, 14.4378] },
  { id: 'pl', label: 'PL', location: [52.2298, 21.0118] },
  { id: 'sk', label: 'SK', location: [48.1486, 17.1077] },
  { id: 'de', label: 'DE', location: [52.52, 13.405] },
  { id: 'lt', label: 'LT', location: [54.6872, 25.2797] },
  { id: 'ee', label: 'EE', location: [59.437, 24.7536] },
  { id: 'hu', label: 'HU', location: [47.4979, 19.0402] },
  { id: 'hr', label: 'HR', location: [45.815, 15.9819] },
  { id: 'ro', label: 'RO', location: [44.4268, 26.1025] },
  { id: 'bg', label: 'BG', location: [42.6977, 23.3219] },
]

const NETWORK_MARKERS = [
  { id: 'europe', label: 'EUROPE', location: [50.1109, 8.6821], size: 0.085, color: [0.95, 0.52, 0.14] },
  { id: 'mena', label: 'MENA', location: [25.2048, 55.2708], size: 0.072, color: [0.96, 0.56, 0.18] },
  { id: 'africa', label: 'AFRICA', location: [-1.2921, 36.8219], size: 0.074, color: [0.94, 0.48, 0.12] },
  { id: 'asia', label: 'ASIA', location: [1.3521, 103.8198], size: 0.072, color: [0.97, 0.6, 0.22] },
  { id: 'apac', label: 'APAC', location: [-33.8688, 151.2093], size: 0.07, color: [0.96, 0.5, 0.16] },
  { id: 'americas', label: 'AMERICAS', location: [40.7128, -74.006], size: 0.072, color: [0.95, 0.58, 0.2] },
]

function mapMarkers() {
  const languageMarkers = LANGUAGE_MARKERS.map((marker, index) => ({
    ...marker,
    size: index === 0 ? 0.04 : 0.024,
    color: index === 0 ? [0.85, 0.35, 0.08] : [0.72, 0.72, 0.72],
  }))

  return [...languageMarkers, ...NETWORK_MARKERS]
}

function mapArcs() {
  const hub = NETWORK_MARKERS[0].location

  return NETWORK_MARKERS.slice(1).map((marker) => ({
    from: hub,
    to: marker.location,
    color: [0.95, 0.64, 0.25],
  }))
}

export function initHeroGlobe() {
  const canvas = qs('[data-hero-globe-canvas]')
  const stage = qs('[data-hero-globe-stage]')

  if (!canvas || !stage) return

  let width = 0
  let currentPhi = 1.12
  let currentTheta = 0.34
  let pointerActive = false
  let lastX = 0
  let lastY = 0
  let frameId = 0
  let globe

  const markers = mapMarkers()
  const arcs = mapArcs()
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const render = () => {
    const size = stage.offsetWidth
    if (!size) return

    width = size
    globe?.destroy()

    globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio ?? 1, 2),
      width: size * 2,
      height: size * 2,
      phi: currentPhi,
      theta: currentTheta,
      dark: 0,
      diffuse: 1.15,
      mapSamples: 22000,
      mapBrightness: 5.2,
      mapBaseBrightness: 0.05,
      baseColor: [1, 1, 1],
      markerColor: BRAND_ORANGE,
      glowColor: [1, 1, 1],
      markers,
      arcs,
      arcColor: [0.95, 0.56, 0.17],
      arcWidth: 0.35,
      arcHeight: 0.18,
      markerElevation: 0.018,
      opacity: 1,
      scale: 1,
    })
  }

  const animate = () => {
    if (globe && !pointerActive && !prefersReducedMotion) {
      currentPhi += 0.00115
      globe.update({ phi: currentPhi, theta: currentTheta })
    }

    frameId = window.requestAnimationFrame(animate)
  }

  const onPointerMove = (event) => {
    if (!pointerActive || !globe || !width) return

    const deltaX = event.clientX - lastX
    const deltaY = event.clientY - lastY
    lastX = event.clientX
    lastY = event.clientY

    currentPhi += deltaX / width * 2.2
    currentTheta = Math.max(-0.45, Math.min(0.45, currentTheta + deltaY / width * 1.4))
    globe.update({ phi: currentPhi, theta: currentTheta })
  }

  const stopPointer = () => {
    pointerActive = false
    stage.classList.remove('is-dragging')
  }

  stage.addEventListener('pointerdown', (event) => {
    pointerActive = true
    lastX = event.clientX
    lastY = event.clientY
    stage.classList.add('is-dragging')
  })

  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', stopPointer)
  window.addEventListener('pointercancel', stopPointer)

  const resizeObserver = new ResizeObserver(() => render())
  resizeObserver.observe(stage)

  render()
  animate()

  window.addEventListener(
    'beforeunload',
    () => {
      window.cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
      globe?.destroy()
    },
    { once: true },
  )
}
