'use client'
import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'

const GA_ID = process.env.NEXT_PUBLIC_GA4_ID

export function trackEvent(action: string, params?: Record<string, string | number | boolean>) {
  if (typeof window === 'undefined' || !GA_ID) return
  // @ts-ignore
  window.gtag?.('event', action, params)
}

export function trackQuoteSubmit(service?: string, city?: string) {
  trackEvent('quote_submit', { service: service || 'unknown', city: city || 'unknown' })
}

export function trackWhatsAppClick(source: string) {
  trackEvent('whatsapp_click', { source })
}

function PageviewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  useEffect(() => {
    if (!GA_ID) return
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : '')
    // @ts-ignore
    window.gtag?.('config', GA_ID, { page_path: url })
  }, [pathname, searchParams])
  return null
}

export function Analytics() {
  if (!GA_ID) return null
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
        `}
      </Script>
      <Suspense fallback={null}>
        <PageviewTracker />
      </Suspense>
    </>
  )
}