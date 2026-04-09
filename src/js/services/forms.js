const endpoint = import.meta.env.VITE_GOOGLE_SCRIPT_URL

export async function submitLead(payload) {
  if (!endpoint) {
    if (!import.meta.env.DEV) {
      throw new Error('Form endpoint is not configured')
    }

    console.info('[forms] demo submit', payload)
    await new Promise((resolve) => window.setTimeout(resolve, 450))
    return { ok: true, mode: 'demo' }
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error('Form request failed')
  }

  return response.json().catch(() => ({ ok: true, mode: 'remote' }))
}
