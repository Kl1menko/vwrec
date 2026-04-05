import { qs, qsa } from '../utils/dom.js'

function animateBeam(path, length, startTime, activeDuration, cycleDuration) {
  path.style.strokeDasharray = `${Math.max(length * 0.16, 52)} ${length}`
  path.style.strokeDashoffset = `${length}`

  if (typeof path.animate === 'function') {
    const startOffset = Math.max(startTime / cycleDuration, 0)
    const revealOffset = Math.min((startTime + activeDuration * 0.18) / cycleDuration, 1)
    const endOffset = Math.min((startTime + activeDuration) / cycleDuration, 1)

    path.animate(
      [
        { offset: 0, strokeDashoffset: length, opacity: 0 },
        { offset: startOffset, strokeDashoffset: length, opacity: 0 },
        { offset: revealOffset, strokeDashoffset: length * 0.82, opacity: 1 },
        { offset: endOffset, strokeDashoffset: 0, opacity: 1 },
        { offset: 1, strokeDashoffset: 0, opacity: 0 },
      ],
      {
        duration: cycleDuration,
        iterations: Infinity,
        easing: 'linear',
      },
    )
  }
}

function getAnchorPoint(node, containerRect) {
  const anchor = qs('[data-beam-anchor]', node) ?? node
  const rect = anchor.getBoundingClientRect()
  return {
    x: rect.left - containerRect.left + rect.width / 2,
    y: rect.top - containerRect.top + rect.height / 2,
  }
}

function buildBeamPath(from, to, direction = 1) {
  const dx = to.x - from.x
  const dy = to.y - from.y
  const curveX = Math.max(Math.abs(dx) * 0.32, 56) * direction
  const curveY = Math.abs(dy) < 18 ? 0 : Math.max(Math.abs(dy) * 0.14, 28)

  const c1x = from.x + curveX
  const c1y = from.y + (dy > 0 ? curveY : -curveY)
  const c2x = to.x - curveX
  const c2y = to.y - (dy > 0 ? curveY : -curveY)

  return `M ${from.x} ${from.y} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${to.x} ${to.y}`
}

function renderBeams(instance) {
  const { root, svg, center, nodes, outputs } = instance
  if (!svg || !center || !nodes.length) return

  const containerRect = root.getBoundingClientRect()
  const centerPoint = getAnchorPoint(center, containerRect)
  const width = Math.max(root.clientWidth, Math.ceil(containerRect.width))
  const height = Math.max(root.clientHeight, Math.ceil(containerRect.height))

  svg.setAttribute('viewBox', `0 0 ${width} ${height}`)
  svg.setAttribute('width', String(width))
  svg.setAttribute('height', String(height))

  svg.innerHTML = ''

  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs')
  const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient')
  gradient.setAttribute('id', 'services-beam-gradient')
  gradient.setAttribute('x1', '0%')
  gradient.setAttribute('y1', '0%')
  gradient.setAttribute('x2', '100%')
  gradient.setAttribute('y2', '0%')

  ;[
    { offset: '0%', color: '#ffcc77', opacity: '0' },
    { offset: '50%', color: '#f27a24', opacity: '1' },
    { offset: '100%', color: '#ffcc77', opacity: '0' },
  ].forEach(({ offset, color, opacity }) => {
    const stop = document.createElementNS('http://www.w3.org/2000/svg', 'stop')
    stop.setAttribute('offset', offset)
    stop.setAttribute('stop-color', color)
    stop.setAttribute('stop-opacity', opacity)
    gradient.append(stop)
  })

  defs.append(gradient)
  svg.append(defs)

  const basePaths = []
  const glowPaths = []

  const inboundDuration = 1180
  const inboundStagger = 240
  const outputDuration = 1240
  const outputGap = 180
  const cyclePause = 700
  const lastInboundStart = Math.max((nodes.length - 1) * inboundStagger, 0)
  const outputStart = lastInboundStart + inboundDuration + outputGap
  const cycleDuration = outputStart + outputDuration + cyclePause

  nodes.forEach((node, index) => {
    const fromPoint = getAnchorPoint(node, containerRect)
    const direction = fromPoint.x < centerPoint.x ? 1 : -1
    const pathData = buildBeamPath(fromPoint, centerPoint, direction)

    const basePath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    basePath.setAttribute('d', pathData)
    basePath.setAttribute('class', 'services-beam__path')

    const glowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    glowPath.setAttribute('d', pathData)
    glowPath.setAttribute('class', 'services-beam__path services-beam__path--glow')

    basePaths.push(basePath)
    glowPaths.push(glowPath)

    const length = glowPath.getTotalLength()
    animateBeam(glowPath, length, index * inboundStagger, inboundDuration, cycleDuration)
  })

  outputs.forEach((node, index) => {
    const toPoint = getAnchorPoint(node, containerRect)
    const pathData = buildBeamPath(centerPoint, toPoint, 1)

    const basePath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    basePath.setAttribute('d', pathData)
    basePath.setAttribute('class', 'services-beam__path')

    const glowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    glowPath.setAttribute('d', pathData)
    glowPath.setAttribute('class', 'services-beam__path services-beam__path--glow')

    basePaths.push(basePath)
    glowPaths.push(glowPath)

    const length = glowPath.getTotalLength()
    animateBeam(glowPath, length, outputStart + index * 220, outputDuration, cycleDuration)
  })

  svg.append(...basePaths, ...glowPaths)
}

export function initAnimatedBeam() {
  const roots = qsa('[data-animated-beam]')
  if (!roots.length) return

  const instances = roots
    .map((root) => {
      const svg = qs('[data-beam-svg]', root)
      const center = qs('[data-beam-center]', root)
      const nodes = qsa('[data-beam-node]', root)
      const outputs = qsa('[data-beam-output]', root)
      if (!svg || !center || !nodes.length) return null

      return { root, svg, center, nodes, outputs }
    })
    .filter(Boolean)

  if (!instances.length) return

  const renderAll = () => {
    instances.forEach(renderBeams)
  }

  renderAll()

  let frame = 0
  const schedule = () => {
    cancelAnimationFrame(frame)
    frame = requestAnimationFrame(renderAll)
  }

  window.addEventListener('resize', schedule, { passive: true })
  window.addEventListener('load', schedule, { passive: true })

  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(schedule)
    instances.forEach(({ root }) => observer.observe(root))
  }
}
