import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt     = 'Creative Konnect — Event Engagement Solutions'
export const size    = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0D1F2E',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
          borderBottom: '6px solid #1A7FD4',
        }}
      >
        {/* Logo mark */}
        <div style={{
          width: 72, height: 72,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #2AACEE, #1A7FD4, #1A3A5C)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 24,
        }}>
          <span style={{ color: '#fff', fontWeight: 900, fontSize: 28 }}>CK</span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 64,
          fontWeight: 900,
          color: '#ffffff',
          lineHeight: 1.05,
          letterSpacing: '-2px',
          margin: '0 0 16px',
          maxWidth: 800,
        }}>
          Event Experiences That{' '}
          <span style={{ color: '#2AACEE' }}>Go Viral</span>
        </h1>

        {/* Sub */}
        <p style={{
          fontSize: 24,
          color: '#6a98b5',
          margin: '0 0 32px',
          maxWidth: 700,
          lineHeight: 1.5,
        }}>
          360 Video Booths · AI Experiences · VR Games · Custom Merch
        </p>

        {/* Footer row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <span style={{
            background: '#1A7FD4',
            color: '#fff',
            fontSize: 16,
            fontWeight: 700,
            padding: '8px 20px',
            borderRadius: 8,
          }}>
            Creative Konnect
          </span>
          <span style={{ color: '#4a7090', fontSize: 16 }}>
            Event Engagement Solutions · India
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
