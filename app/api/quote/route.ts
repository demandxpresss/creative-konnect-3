import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { SITE_CONFIG } from '@/lib/constants'
import { pushLeadToGoogleSheets } from '@/lib/googleSheets'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      name, phone, email, company,
      eventType, city, eventDate, guestCount,
      services, message, service,
    } = body

    // ── 1. Send email notification via Resend ─────────────────────
    await resend.emails.send({
      from:    'Creative Konnect Website <noreply@creativekonnect.com>',
      to:      [SITE_CONFIG.email],
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
                ['Phone',         phone        || '—'],
                ['Email',         email        || '—'],
                ['Company',       company      || '—'],
                ['Event Type',    eventType    || '—'],
                ['City',          city         || '—'],
                ['Event Date',    eventDate    || '—'],
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

    // ── 2. Send confirmation email to client ──────────────────────
    if (email) {
      await resend.emails.send({
        from:    'Creative Konnect <hello@creativekonnect.com>',
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
    }

    // ── 3. Save to Notion database ────────────────────────────────
    if (process.env.NOTION_API_KEY && process.env.NOTION_DATABASE_ID) {
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
            Phone:       { phone_number: phone || '' },
            Email:       { email: email || '' },
            Company:     { rich_text: [{ text: { content: company || '' } }] },
            'Event Type':{ select: { name: eventType || 'Unknown' } },
            City:        { select: { name: city || 'Unknown' } },
            'Event Date':{ rich_text: [{ text: { content: eventDate || '' } }] },
            'Guest Count':{ rich_text: [{ text: { content: guestCount || '' } }] },
            Services:    { rich_text: [{ text: { content: Array.isArray(services) ? services.join(', ') : (service || '') } }] },
            Message:     { rich_text: [{ text: { content: message || '' } }] },
            Status:      { select: { name: 'New Lead' } },
          },
        }),
      })
    }

    // ── Save to Google Sheets (optional webhook) ────────────────
    try {
      await pushLeadToGoogleSheets({
        formType: 'quote',
        timestamp: new Date().toISOString(),
        name: name || '',
        phone: phone || '',
        email: email || '',
        company: company || '',
        eventType: eventType || '',
        city: city || '',
        eventDate: eventDate || '',
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
