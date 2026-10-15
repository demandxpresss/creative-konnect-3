// Pure validation helpers with no server-only imports, so both the API
// routes and the client-side form components can share one definition of
// "valid name" / "valid phone" instead of two copies that can drift apart.

/**
 * Indian mobile number: exactly 10 digits, starting 6-9, once country
 * code / punctuation a real person might type is stripped out (+91,
 * leading 0, spaces, dashes, brackets).
 */
export function normalizePhone(phone: unknown): string {
  if (typeof phone !== 'string') return ''
  let digits = phone.replace(/\D/g, '')
  if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2)
  else if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1)
  return digits
}

export function isValidPhone(phone: unknown): boolean {
  return /^[6-9]\d{9}$/.test(normalizePhone(phone))
}

/**
 * Letters, spaces, and the punctuation real names actually use
 * (apostrophes, hyphens, periods for initials) — nothing else.
 */
export function isValidName(name: unknown): boolean {
  if (typeof name !== 'string') return false
  const trimmed = name.trim()
  if (trimmed.length < 2 || trimmed.length > 60) return false
  return /^[A-Za-zÀ-ɏऀ-ॿ][A-Za-zÀ-ɏऀ-ॿ .'-]*$/.test(trimmed)
}
