const prefix = 'vw-recruit:'

export function getStorageValue(key) {
  try {
    return window.localStorage.getItem(`${prefix}${key}`)
  } catch {
    return null
  }
}

export function setStorageValue(key, value) {
  try {
    window.localStorage.setItem(`${prefix}${key}`, value)
  } catch {
    // ignore storage limits in private browsing
  }
}
