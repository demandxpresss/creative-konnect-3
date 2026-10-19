/**
 * Formats "now" as a readable IST (Asia/Kolkata) timestamp for the lead
 * record written to Google Sheets — e.g. "20 Oct 2026, 01:52 AM IST".
 *
 * Previously this was `new Date().toISOString()`, which is UTC and was
 * showing leads as submitted ~5.5 hours earlier than they actually were
 * (and in a less readable format) in both the sheet's `timestamp` column
 * and the "Submitted at" line of the lead-notification email.
 */
export function istTimestamp(date: Date = new Date()): string {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).formatToParts(date)

  const get = (type: string) => parts.find(p => p.type === type)?.value ?? ''
  const day = get('day')
  const month = get('month')
  const year = get('year')
  const hour = get('hour')
  const minute = get('minute')
  const dayPeriod = get('dayPeriod').toUpperCase()

  return `${day} ${month} ${year}, ${hour}:${minute} ${dayPeriod} IST`
}
