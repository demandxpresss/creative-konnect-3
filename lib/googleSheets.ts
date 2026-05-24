export type SheetPayload = {
  formType: 'contact' | 'quote'
  timestamp: string
  name?: string
  phone?: string
  email?: string
  company?: string
  eventType?: string
  city?: string
  eventDate?: string
  guestCount?: string
  service?: string
  services?: string
  message?: string
}

function getSheetWebhook(): string | null {
  return process.env.GOOGLE_SHEETS_WEBHOOK_URL || null
}

export async function pushLeadToGoogleSheets(payload: SheetPayload) {
  const webhookUrl = getSheetWebhook()
  if (!webhookUrl) return

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    cache: 'no-store',
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`Google Sheets webhook failed: ${res.status} ${text}`)
  }
}
