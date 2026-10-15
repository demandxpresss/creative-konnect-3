import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { SITE_CONFIG, LEAD_NOTIFICATION_EMAILS } from '@/lib/constants'
import { pushLeadToGoogleSheets } from '@/lib/googleSheets'
import { hasValidOrigin, honeypotTripped, submittedTooFast, isValidName, isValidPhone, normalizePhone } from '@/lib/spamProtection'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      name, phone, email, company,
      eventType, city, eventDate, guestCount,
      duration, activities,
      services, message, service,
      formLoadedAt, // spam-defense field — never real form data (see lib/spamProtection.ts)
    } = body
    const activitiesStr = Array.isArray(activities) ? activities.join(', ') : (activities || '')

    // ── Spam defenses ───────────────────────────────────────────────
    // A direct script POSTing straight to this route (not a real visitor
    // filling in the form on the site) won't have a matching Origin/
    // Referer header. Reject those outright — they're not real leads.
    if (!hasValidOrigin(req)) {
      return NextResponse.json({ error: 'Invalid request origin' }, { status: 403 })
    }
    // Honeypot filled in, or submitted faster than a human could possibly
    // fill the form: silently "succeed" without sending emails or writing
    // anywhere, so the bot has no signal to adapt against.
    if (honeypotTripped(body) || submittedTooFast(formLoadedAt)) {
      return NextResponse.json({ success: true })
    }
    // Bare-minimum required fields — this route previously had zero
    // server-side validation at all.
    if (!name || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    // Real-looking name (letters only, no digits/symbols) and a real
    // 10-digit Indian mobile number — this is the other half of what was
    // letting obvious junk ("zXvUyREtMvDAJvCTEPvlPWh", the same reused
    // phone number) straight through.
    if (!isValidName(name)) {
      return NextResponse.json({ error: 'Please enter a valid name' }, { status: 400 })
    }
    if (!isValidPhone(phone)) {
      return NextResponse.json({ error: 'Please enter a valid 10-digit phone number' }, { status: 400 })
    }
    const normalizedPhone = normalizePhone(phone)

    // ── 1. Send email notification via Resend ─────────────────────
    // The Resend SDK does NOT throw on a failed send — a bad/unverified
    // "from" domain, an invalid key, etc. all come back as `{ error }`
    // on a resolved promise, not a rejection. Previously this was never
    // checked, so a send could fail completely and the route would still
    // report success to the browser. Capture and log it so failures are
    // actually visible (check Vercel's function logs for "Resend error").
    const { data: notifyData, error: notifyError } = await resend.emails.send({
      from:    'Creative Konnect Website <noreply@creative-konnect.com>',
      to:      LEAD_NOTIFICATION_EMAILS,
      reply_to: email || undefined,
      subject: `New Quote Request — ${eventType || 'Event'} in ${city || 'India'}`,
      html: `
        <div style="font-family: Plus Jakarta Sans, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <div style="background: #0D1F2E; padding: 20px 24px; border-radius: 10px 10px 0 0; border-bottom: 3px solid #1A7FD4;">
            <h1 style="color: #fff; font-size: 18px; margin: 0; font-weight: 800;">
              New Quote Request 🎉
            </h1>
            <p style="color: #6a98b5; font-size: 12px; margin: 4px 0 0;">
              From the Creative Konnect website
            </p>
          </div>

          <div style="background: #F7FAFE; padding: 20px 24px; border: 1px solid #dceaf5; border-top: none; border-radius: 0 0 10px 10px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
              ${[
                ['Name',          name         || '—'],
                ['Phone',         normalizedPhone || '—'],
                ['Email',         email        || '—'],
                ['Company',       company      || '—'],
                ['Event Type',    eventType    || '—'],
                ['City',          city         || '—'],
                ['Event Date',    eventDate    || '—'],
                ['Duration',      duration     || '—'],
                ['Activities',    activitiesStr || '—'],
                ['Guest Count',   guestCount   || '—'],
                ['Service',       service || (Array.isArray(services) ? services.join(', ') : '—')],
                ['Message',       message      || '—'],
              ].map(([label, value]) => `
                <tr>
                  <td style="padding: 8px 12px; font-weight: 600; color: #1A3A5C; background: #E8F4FD; width: 140px; border-bottom: 1px solid #dceaf5;">
                    ${label}
                  </td>
                  <td style="padding: 8px 12px; color: #5a7a92; border-bottom: 1px solid #dceaf5;">
                    ${value}
                  </td>
                </tr>
              `).join('')}
            </table>

            <div style="margin-top: 20px; padding: 14px; background: #1A7FD4; border-radius: 8px; text-align: center;">
              <a href="https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi ${encodeURIComponent(name || '')}! Thanks for your quote request."
                 style="color: #fff; font-weight: 700; font-size: 13px; text-decoration: none;">
                💬 Reply on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      `,
    })
    if (notifyError) {
      console.error('Resend error (quote → team notification):', JSON.stringify(notifyError))
    } else {
      console.log('Resend: team notification sent, id =', notifyData?.id)
    }

    // ── 2. Send confirmation email to client ──────────────────────
    if (email) {
      const { error: confirmError } = await resend.emails.send({
        from:    'Creative Konnect <hello@creative-konnect.com>',
        to:      [email],
        subject: `We've received your quote request! — Creative Konnect`,
        html: `
          <div style="font-family: Plus Jakarta Sans, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px;">
            <div style="background: #0D1F2E; padding: 24px; border-radius: 10px 10px 0 0; border-bottom: 3px solid #1A7FD4; text-align: center;">
              <div style="font-size: 22px; font-weight: 800; color: #fff;">Creative Konnect</div>
              <div style="font-size: 10px; color: #4a7090; letter-spacing: 2px; text-transform: uppercase; margin-top: 4px;">Event Engagement Solutions</div>
            </div>
            <div style="background: #F7FAFE; padding: 24px; border: 1px solid #dceaf5; border-top: none; border-radius: 0 0 10px 10px;">
              <h2 style="color: #1A3A5C; font-size: 16px; margin: 0 0 12px;">Hi ${name || 'there'}! 👋</h2>
              <p style="color: #5a7a92; font-size: 13px; line-height: 1.7;">
                Thanks for reaching out! We've received your quote request for a <strong>${eventType || 'event'}</strong> in <strong>${city || 'India'}</strong>.
              </p>
              <p style="color: #5a7a92; font-size: 13px; line-height: 1.7; margin-top: 12px;">
                Our team will review your requirements and send you a detailed, itemised quote within <strong style="color: #1A7FD4;">2 hours</strong>.
              </p>
              <div style="margin: 20px 0; padding: 14px; background: #E8F4FD; border-radius: 8px; border-left: 3px solid #1A7FD4;">
                <p style="margin: 0; font-size: 12px; color: #1A3A5C; font-weight: 600;">
                  Need a faster response? WhatsApp us directly at ${SITE_CONFIG.phone[0]}
                </p>
              </div>
              <a href="https://wa.me/${SITE_CONFIG.whatsapp}"
                 style="display: block; background: #25D366; color: #fff; text-align: center; padding: 12px; border-radius: 8px; font-weight: 700; font-size: 13px; text-decoration: none; margin-top: 16px;">
                💬 WhatsApp Us Now
              </a>
              <p style="color: #aac0d0; font-size: 11px; text-align: center; margin-top: 16px;">
                Creative Konnect · Hyderabad, India · ${SITE_CONFIG.email}
              </p>
            </div>
          </div>
        `,
      })
      if (confirmError) {
        console.error('Resend error (quote → client confirmation):', JSON.stringify(confirmError))
      }
    }

    // ── 3. Save to Notion database ────────────────────────────────
    // Wrapped in its own try/catch: if 'Duration' / 'Activities' columns
    // don't exist yet in the Notion database, this fails without breaking
    // the email notification that already went out above.
    if (process.env.NOTION_API_KEY && process.env.NOTION_DATABASE_ID) {
      try {
        await fetch('https://api.notion.com/v1/pages', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
            'Content-Type': 'application/json',
            'Notion-Version': '2022-06-28',
          },
          body: JSON.stringify({
            parent: { database_id: process.env.NOTION_DATABASE_ID },
            properties: {
              Name:        { title:  [{ text: { content: name || 'Unknown' } }] },
              Phone:       { phone_number: normalizedPhone || '' },
              Email:       { email: email || '' },
              Company:     { rich_text: [{ text: { content: company || '' } }] },
              'Event Type':{ select: { name: eventType || 'Unknown' } },
              City:        { select: { name: city || 'Unknown' } },
              'Event Date':{ rich_text: [{ text: { content: eventDate || '' } }] },
              Duration:    { rich_text: [{ text: { content: duration || '' } }] },
              Activities:  { rich_text: [{ text: { content: activitiesStr } }] },
              'Guest Count':{ rich_text: [{ text: { content: guestCount || '' } }] },
              Services:    { rich_text: [{ text: { content: Array.isArray(services) ? services.join(', ') : (service || '') } }] },
              Message:     { rich_text: [{ text: { content: message || '' } }] },
              Status:      { select: { name: 'New Lead' } },
            },
          }),
        })
      } catch (notionErr) {
        console.error('Notion sync error (quote):', notionErr)
      }
    }

    // ── Save to Google Sheets (optional webhook) ────────────────
    try {
      await pushLeadToGoogleSheets({
        formType: 'quote',
        timestamp: new Date().toISOString(),
        name: name || '',
        phone: normalizedPhone || '',
        email: email || '',
        company: company || '',
        eventType: eventType || '',
        city: city || '',
        eventDate: eventDate || '',
        duration: duration || '',
        activities: activitiesStr,
        guestCount: guestCount || '',
        service: service || '',
        services: Array.isArray(services) ? services.join(', ') : (services || ''),
        message: message || '',
      })
    } catch (sheetsErr) {
      console.error('Google Sheets sync error (quote):', sheetsErr)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Quote API error:', error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
