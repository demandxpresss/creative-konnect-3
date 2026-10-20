import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import './globals.css'
import { Navbar }         from '@/components/layout/Navbar'
import { Footer }         from '@/components/layout/Footer'
import { SITE_CONFIG }    from '@/lib/constants'
// Imported statically (not via next/dynamic) and WITHOUT ssr:false — this
// is the <noscript> fallback for visitors with JavaScript disabled, so it
// has to actually be present in the server-rendered HTML to do its job.
// Everything else below is fine as a client-only dynamic import since it
// requires JS to do anything useful anyway.
import { GTMBodyNoscript } from '@/lib/gtm'

const Analytics = dynamic(() => import('@/lib/analytics').then((m) => m.Analytics), { ssr: false })
const GTMHeadScript = dynamic(() => import('@/lib/gtm').then((m) => m.GTMHeadScript), { ssr: false })
const Clarity = dynamic(() => import('@/lib/clarity').then((m) => m.Clarity), { ssr: false })
const WhatsAppWidget = dynamic(() => import('@/components/ui/WhatsAppWidget').then((m) => m.WhatsAppWidget), { ssr: false })
const ScrollToTop = dynamic(() => import('@/components/ui/ScrollToTop').then((m) => m.ScrollToTop), { ssr: false })
const CookieBanner = dynamic(() => import('@/components/ui/CookieBanner').then((m) => m.CookieBanner), { ssr: false })

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    '360 video booth India', 'photo booth hire India', 'event engagement',
    'glambot India', 'AI photo booth', 'VR games events',
    'corporate event entertainment', 'wedding photo booth',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
    // Bing Webmaster Tools meta-tag verification. If you verify via the
    // "import from Search Console" option instead (recommended — no code
    // change needed), leave NEXT_PUBLIC_BING_VERIFICATION unset.
    other: process.env.NEXT_PUBLIC_BING_VERIFICATION
      ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION }
      : undefined,
  },
}

// JSON-LD Organization schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/images/logo.png`,
  description: SITE_CONFIG.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    addressCountry: 'IN',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.phone[0],
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
  ],
  sameAs: Object.values(SITE_CONFIG.socialLinks),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <GTMHeadScript />
      </head>
      <body>
        {/* GTM's noscript fallback must be the very first thing in <body> per
            Google's own install instructions — fires for users with JS off. */}
        <GTMBodyNoscript />
        <Analytics />
        <Clarity />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
        <ScrollToTop />
        <CookieBanner />
      </body>
    </html>
  )
}
