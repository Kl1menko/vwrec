function isPlainObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}

function cloneValue(value) {
  if (Array.isArray(value)) {
    return value.map((item) => cloneValue(item))
  }

  if (isPlainObject(value)) {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, cloneValue(item)]))
  }

  return value
}

function mergeDeep(baseValue, overrideValue) {
  if (overrideValue === undefined) {
    return cloneValue(baseValue)
  }

  if (Array.isArray(overrideValue) || Array.isArray(baseValue)) {
    return cloneValue(overrideValue)
  }

  if (isPlainObject(baseValue) && isPlainObject(overrideValue)) {
    const result = cloneValue(baseValue)

    for (const [key, value] of Object.entries(overrideValue)) {
      result[key] = mergeDeep(baseValue?.[key], value)
    }

    return result
  }

  return cloneValue(overrideValue)
}

export function buildLocalizedContent(baseContent, localeMeta, overrides = {}) {
  const content = mergeDeep(baseContent, overrides)

  content.locale = {
    ...content.locale,
    code: localeMeta.code,
    name: localeMeta.name,
    nativeName: localeMeta.nativeName,
    translated: localeMeta.translated ?? false,
  }

  return content
}
