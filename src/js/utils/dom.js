export function qs(selector, parent = document) {
  return parent.querySelector(selector)
}

export function qsa(selector, parent = document) {
  return [...parent.querySelectorAll(selector)]
}

export function createElementFromHTML(html) {
  const template = document.createElement('template')
  template.innerHTML = html.trim()
  return template.content.firstElementChild
}
