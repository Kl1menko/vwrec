export function trackEvent(name, payload = {}) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: name, ...payload })

  if (typeof window.gtag === 'function') {
    window.gtag('event', name, payload)
  }

  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', name, payload)
  }

  if (import.meta.env.DEV) {
    console.info('[analytics]', name, payload)
  }
}
