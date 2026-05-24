'use client'
import { useState, useEffect } from 'react'

const COOKIE_KEY = 'ck_cookie_consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Show banner if consent not yet given
    const consent = localStorage.getItem(COOKIE_KEY)
    if (!consent) {
      // Small delay so it doesn't flash on load
      const t = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted')
    setVisible(false)
    // Enable GA4 after consent
    if (typeof window !== 'undefined') {
      // @ts-ignore
      window.gtag?.('consent', 'update', {
        analytics_storage:     'granted',
        ad_storage:            'denied',
        functionality_storage: 'granted',
      })
    }
  }

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[150] p-4 animate-slide-up">
      <div className="max-w-3xl mx-auto bg-ck-navy border border-[#1e3a52] rounded-card-lg p-4 shadow-popup flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-xs text-[#c8dce9] leading-relaxed">
            🍪 We use cookies to improve your experience and analyse site traffic.
            By clicking "Accept", you consent to our use of analytics cookies.
            <a href="/privacy" className="text-ck-electric hover:underline ml-1">Privacy Policy</a>
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={decline}
            className="text-xs font-semibold text-[#5a8aaa] bg-transparent border border-[#1e3a52] px-4 py-2 rounded-[7px] hover:border-[#2a4a60] transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="text-xs font-bold text-white bg-ck-blue px-4 py-2 rounded-[7px] hover:bg-[#1568b0] transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
