'use client'
import { useState, useEffect } from 'react'
import { SITE_CONFIG } from '@/lib/constants'
import { QuoteModal } from './QuoteModal'

interface StickyCtaBarProps {
  service:  string
  showAfter?: number  // px scrolled before it appears
}

export function StickyCtaBar({ service, showAfter = 600 }: StickyCtaBarProps) {
  const [visible,    setVisible]    = useState(false)
  const [quoteOpen,  setQuoteOpen]  = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > showAfter)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [showAfter])

  if (!visible) return null

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-ck-navy border-t border-[#1e3a52] px-4 py-3 animate-slide-up shadow-popup">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Service name */}
          <div className="hidden sm:block">
            <div className="text-xs font-bold text-white truncate max-w-[280px]">{service}</div>
            <div className="text-[10px] text-[#4a7090]">
              Quote in 2 hrs · Pan India · Fully branded
            </div>
          </div>

          {/* Trust micro-pill */}
          <div className="hidden md:flex items-center gap-4">
            {['4.9★ Rating', '500+ Events', 'On-Site Operator'].map(t => (
              <div key={t} className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-ck-electric flex-shrink-0" />
                <span className="text-[10px] font-semibold text-[#5a8aaa]">{t}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-2.5 ml-auto flex-shrink-0">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi! I'd like to enquire about ${service}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa text-xs py-2.5 px-4"
            >
              💬 WhatsApp
            </a>
            <button
              onClick={() => setQuoteOpen(true)}
              className="btn-primary text-xs py-2.5 px-4"
            >
              Get Free Quote →
            </button>
          </div>
        </div>
      </div>

      {/* Spacer so footer isn't hidden behind bar */}
      <div className="h-[60px]" />

      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        service={service}
      />
    </>
  )
}
