import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { SITE_CONFIG } from '@/lib/constants'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      name, phone, email, company,
      eventType, city, eventDate, guestCount,
      services, message,
    } = body

    // Validate required fields
    if (!name || !phone || !email || !eventType || !city) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const servicesList = Array.isArray(services) ? services.join(', ') : services || '—'

    // ── Email to team ─────────────────────────────────────────────
    await resend.emails.send({
      from:    'Creative Konnect Website <noreply@creativekonnect.com>',
      to:      [SITE_CONFIG.email],
      reply_to: email,
      subject: `📋 New Contact Form — ${name} | ${eventType} in ${city}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
          <div style="background:#0D1F2E;padding:20px 24px;border-radius:10px 10px 0 0;border-bottom:3px solid #1A7FD4;">
            <h1 style="color:#fff;font-size:18px;margin:0;font-weight:800;">New Contact Form Submission</h1>
            <p style="color:#6a98b5;font-size:12px;margin:4px 0 0;">From the Creative Konnect website</p>
          </div>
          <div style="background:#F7FAFE;padding:20px 24px;border:1px solid #dceaf5;border-top:none;border-radius:0 0 10px 10px;">
            <table style="width:100%;border-collapse:collapse;font-size:13px;">
              ${[
                ['Name',         name],
                ['Phone',        phone],
                ['Email',        email],
                ['Company',      company      || '—'],
                ['Event Type',   eventType],
                ['City',         city],
                ['Event Date',   eventDate    || '—'],
                ['Guest Count',  guestCount   || '—'],
                ['Services',     servicesList],
                ['Message',      message      || '—'],
              ].map(([k, v]) => `
                <tr>
                  <td style="padding:8px 12px;font-weight:600;color:#1A3A5C;background:#E8F4FD;width:140px;border-bottom:1px solid #dceaf5;">${k}</td>
                  <td style="padding:8px 12px;color:#5a7a92;border-bottom:1px solid #dceaf5;">${v}</td>
                </tr>
              `).join('')}
            </table>
            <div style="margin-top:16px;text-align:center;">
              <a href="https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi+${encodeURIComponent(name)}!"
                 style="display:inline-block;background:#25D366;color:#fff;padding:10px 24px;border-radius:8px;font-weight:700;font-size:13px;text-decoration:none;">
                💬 Reply on WhatsApp
              </a>
            </div>
          </div>
        </div>
      `,
    })

    // ── Confirmation to client ────────────────────────────────────
    await resend.emails.send({
      from:    'Creative Konnect <hello@creativekonnect.com>',
      to:      [email],
      subject: `Got your message! We'll reply within 2 hours — Creative Konnect`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px;">
          <div style="background:#0D1F2E;padding:24px;border-radius:10px 10px 0 0;border-bottom:3px solid #1A7FD4;text-align:center;">
            <div style="font-size:20px;font-weight:800;color:#fff;">Creative Konnect</div>
            <div style="font-size:10px;color:#4a7090;letter-spacing:2px;text-transform:uppercase;margin-top:4px;">Event Engagement Solutions</div>
          </div>
          <div style="background:#F7FAFE;padding:24px;border:1px solid #dceaf5;border-top:none;border-radius:0 0 10px 10px;">
            <h2 style="color:#1A3A5C;font-size:16px;margin:0 0 12px;">Hi ${name}! 👋</h2>
            <p style="color:#5a7a92;font-size:13px;line-height:1.7;margin:0 0 12px;">
              We've received your enquiry for a <strong>${eventType}</strong> in <strong>${city}</strong>.
            </p>
            <p style="color:#5a7a92;font-size:13px;line-height:1.7;margin:0 0 20px;">
              Our team will review your requirements and get back to you within <strong style="color:#1A7FD4;">2 hours</strong> with a detailed, itemised quote.
            </p>
            <div style="background:#E8F4FD;border-left:3px solid #1A7FD4;border-radius:0 8px 8px 0;padding:12px 16px;margin-bottom:16px;">
              <p style="margin:0;font-size:12px;color:#1A3A5C;font-weight:600;">
                Need something faster? WhatsApp us at ${SITE_CONFIG.phone[0]}
              </p>
            </div>
            <a href="https://wa.me/${SITE_CONFIG.whatsapp}"
               style="display:block;background:#25D366;color:#fff;text-align:center;padding:12px;border-radius:8px;font-weight:700;font-size:13px;text-decoration:none;">
              💬 WhatsApp Us Now
            </a>
            <p style="color:#aac0d0;font-size:11px;text-align:center;margin-top:16px;">
              © Creative Konnect · ${SITE_CONFIG.email}
            </p>
          </div>
        </div>
      `,
    })

    // ── Save to Notion ────────────────────────────────────────────
    if (process.env.NOTION_API_KEY && process.env.NOTION_DATABASE_ID) {
      await fetch('https://api.notion.com/v1/pages', {
        method: 'POST',
        headers: {
          Authorization:    `Bearer ${process.env.NOTION_API_KEY}`,
          'Content-Type':   'application/json',
          'Notion-Version': '2022-06-28',
        },
        body: JSON.stringify({
          parent:     { database_id: process.env.NOTION_DATABASE_ID },
          properties: {
            Name:          { title:       [{ text: { content: name } }] },
            Phone:         { phone_number: phone },
            Email:         { email },
            Company:       { rich_text:   [{ text: { content: company || '' } }] },
            'Event Type':  { select:      { name: eventType } },
            City:          { select:      { name: city } },
            'Event Date':  { rich_text:   [{ text: { content: eventDate  || '' } }] },
            'Guest Count': { rich_text:   [{ text: { content: guestCount || '' } }] },
            Services:      { rich_text:   [{ text: { content: servicesList } }] },
            Message:       { rich_text:   [{ text: { content: message    || '' } }] },
            Source:        { select:      { name: 'Contact Form' } },
            Status:        { select:      { name: 'New Lead' } },
          },
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 })
  }
}
