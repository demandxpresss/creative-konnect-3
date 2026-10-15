import { NextRequest } from 'next/server'
import { SITE_CONFIG } from '@/lib/constants'

/**
 * Lightweight, dependency-free spam defenses for the public quote/contact
 * API routes. None of this needs an external service or API key — it's
 * meant to stop the obvious automated junk (scripts POSTing straight to
 * the API with randomised names/emails and the same reused phone number)
 * without adding friction for real visitors filling in the actual form.
 *
 * This is NOT a substitute for something like reCAPTCHA if a more
 * determined bot (one that runs a real headless browser, so it gets a
 * legitimate Origin header and can wait out the timing check) shows up —
 * see the note in CLAUDE.md / ask the dev before adding anything heavier.
 */

const SITE_HOST = new URL(SITE_CONFIG.url).hostname // "www.creative-konnect.com"

/** Hosts allowed to submit forms, beyond the production domain. */
function isAllowedHost(host: string): boolean {
  if (host === SITE_HOST) return true
  if (host === SITE_HOST.replace(/^www\./, '')) return true // bare apex domain
  if (host.endsWith('.vercel.app')) return true // preview deployments
  if (host === 'localhost' || host.startsWith('localhost:')) return true // local dev
  return false
}

/**
 * A real browser sets the Origin header on every POST (same-origin or
 * not) — only a script hitting the API directly, or one spoofing headers,
 * would have it missing or pointed elsewhere. Falls back to Referer if
 * Origin isn't present (some older/edge-case clients only send Referer).
 */
export function hasValidOrigin(req: NextRequest): boolean {
  const origin = req.headers.get('origin')
  if (origin) {
    try { return isAllowedHost(new URL(origin).hostname) } catch { return false }
  }
  const referer = req.headers.get('referer')
  if (referer) {
    try { return isAllowedHost(new URL(referer).hostname) } catch { return false }
  }
  // No Origin and no Referer at all is itself a strong signal of a
  // script making a raw request rather than a browser form submission.
  return false
}

/** Honeypot field was filled in — only an automated field-filler would do this. */
export function honeypotTripped(body: Record<string, unknown>): boolean {
  const hp = body.website
  return typeof hp === 'string' && hp.trim().length > 0
}

/**
 * Client stamps `formLoadedAt` (ms epoch) when the form first renders, and
 * we compare it to "now" on submit. No real person fills in a multi-field
 * quote form in under ~1.5s; a bot constructing the POST body in one shot
 * does it instantly.
 */
export function submittedTooFast(formLoadedAt: unknown): boolean {
  const loadedAt = typeof formLoadedAt === 'number' ? formLoadedAt : Number(formLoadedAt)
  if (!loadedAt || Number.isNaN(loadedAt)) return true // missing/garbled timestamp is itself suspicious
  return Date.now() - loadedAt < 1500
}
