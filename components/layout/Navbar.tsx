'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SERVICES, SUB_SERVICES, SITE_CONFIG } from '@/lib/constants'
import { QuoteModal } from '@/components/ui/QuoteModal'
import { Menu, X, ChevronDown } from 'lucide-react'

export function Navbar() {
  const [megaOpen, setMegaOpen]       = useState(false)
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [quoteOpen, setQuoteOpen]     = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const dropRef = useRef<HTMLDivElement>(null)

  // Close mega menu on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setMegaOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const navLinks = [
    { href: '/',        label: 'Home' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about',   label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <header className="bg-white border-b-[2.5px] border-ck-blue sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            {/* Overflow-clip trick to zoom past the SVG whitespace */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ck-logo-v2.svg"
              alt="Creative Konnect"
              style={{ height: '56px', width: 'auto', display: 'block' }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-ck-deep hover:text-ck-blue transition-colors">
              Home
            </Link>

            {/* Services mega dropdown */}
            <div className="relative" ref={dropRef}>
              <button
                onClick={() => setMegaOpen(v => !v)}
                className="flex items-center gap-1 text-sm font-bold text-ck-blue hover:text-ck-electric transition-colors"
              >
                Services
                <ChevronDown size={14} className={`transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} />
              </button>

              {megaOpen && (
                <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 bg-white border border-[#dceaf5] rounded-card-lg shadow-popup w-[600px] p-5 z-50 animate-fade-in">
                  <div className="grid grid-cols-2 gap-0">
                    {/* Left column */}
                    <div className="pr-4 border-r border-[#e8f0f8]">
                      <div className="text-[9px] font-bold text-[#7aaccc] uppercase tracking-[2px] mb-3">
                        Photo & Video
                      </div>
                      {(SUB_SERVICES['photo-video-booths'] || []).slice(0, 5).map(s => (
                        <Link
                          key={s.slug}
                          href={`/services/photo-video-booths/${s.slug}`}
                          onClick={() => setMegaOpen(false)}
                          className="flex items-center gap-2.5 px-2.5 py-2 rounded-[7px] hover:bg-ck-sky group mb-0.5"
                        >
                          <div className="w-7 h-7 rounded-[6px] bg-ck-sky flex items-center justify-center flex-shrink-0">
                            <span className="text-ck-blue text-[10px]">▶</span>
                          </div>
                          <span className="text-xs font-semibold text-ck-deep group-hover:text-ck-blue transition-colors">
                            {s.name}
                          </span>
                          <span className="ml-auto text-[#c0d8ee] group-hover:text-ck-blue text-xs">›</span>
                        </Link>
                      ))}
                      <div className="text-[9px] font-bold text-[#7aaccc] uppercase tracking-[2px] mt-3 mb-3">
                        AI & Tech
                      </div>
                      {(SUB_SERVICES['ai-tech-experiences'] || []).slice(0, 3).map(s => (
                        <Link
                          key={s.slug}
                          href={`/services/ai-tech-experiences/${s.slug}`}
                          onClick={() => setMegaOpen(false)}
                          className="flex items-center gap-2.5 px-2.5 py-2 rounded-[7px] hover:bg-ck-sky group mb-0.5"
                        >
                          <div className="w-7 h-7 rounded-[6px] bg-ck-sky flex items-center justify-center flex-shrink-0">
                            <span className="text-ck-blue text-[10px]">✦</span>
                          </div>
                          <span className="text-xs font-semibold text-ck-deep group-hover:text-ck-blue transition-colors">
                            {s.name}
                          </span>
                          <span className="ml-auto text-[#c0d8ee] group-hover:text-ck-blue text-xs">›</span>
                        </Link>
                      ))}
                    </div>

                    {/* Right column */}
                    <div className="pl-4">
                      <div className="text-[9px] font-bold text-[#7aaccc] uppercase tracking-[2px] mb-3">
                        Games & Engagement
                      </div>
                      {(SUB_SERVICES['games'] || []).slice(0, 3).map(s => (
                        <Link
                          key={s.slug}
                          href={`/services/games/${s.slug}`}
                          onClick={() => setMegaOpen(false)}
                          className="flex items-center gap-2.5 px-2.5 py-2 rounded-[7px] hover:bg-ck-sky group mb-0.5"
                        >
                          <div className="w-7 h-7 rounded-[6px] bg-ck-sky flex items-center justify-center flex-shrink-0">
                            <span className="text-ck-blue text-[10px]">⬡</span>
                          </div>
                          <span className="text-xs font-semibold text-ck-deep group-hover:text-ck-blue transition-colors">
                            {s.name}
                          </span>
                          <span className="ml-auto text-[#c0d8ee] group-hover:text-ck-blue text-xs">›</span>
                        </Link>
                      ))}
                      <div className="text-[9px] font-bold text-[#7aaccc] uppercase tracking-[2px] mt-3 mb-3">
                        Merch & More
                      </div>
                      {[...SERVICES.slice(3)].map(s => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          onClick={() => setMegaOpen(false)}
                          className="flex items-center gap-2.5 px-2.5 py-2 rounded-[7px] hover:bg-ck-sky group mb-0.5"
                        >
                          <div className="w-7 h-7 rounded-[6px] bg-ck-sky flex items-center justify-center flex-shrink-0">
                            <span className="text-ck-blue text-[10px]">◈</span>
                          </div>
                          <span className="text-xs font-semibold text-ck-deep group-hover:text-ck-blue transition-colors">
                            {s.name}
                          </span>
                          <span className="ml-auto text-[#c0d8ee] group-hover:text-ck-blue text-xs">›</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Footer CTAs */}
                  <div className="border-t border-[#e8f0f8] mt-4 pt-4 flex gap-2">
                    <button
                      onClick={() => { setMegaOpen(false); setQuoteOpen(true) }}
                      className="flex-1 bg-ck-blue text-white text-xs font-bold py-2.5 rounded-[7px] hover:bg-[#1568b0] transition-colors"
                    >
                      Get A Quote →
                    </button>
                    <Link
                      href="/services"
                      onClick={() => setMegaOpen(false)}
                      className="flex-1 bg-ck-sky text-ck-blue text-xs font-bold py-2.5 rounded-[7px] hover:bg-[#d4eaf8] transition-colors text-center"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(1).map(l => (
              <Link key={l.href} href={l.href} className="text-sm font-medium text-ck-deep hover:text-ck-blue transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-brand-wa hover:text-[#1db954] transition-colors"
            >
              💬 WhatsApp
            </a>
            <button onClick={() => setQuoteOpen(true)} className="btn-primary text-xs py-2.5 px-5">
              Get A Quote →
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="lg:hidden p-2 text-ck-deep"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-[#e8f0f8] px-6 py-4 animate-slide-up">
            <Link href="/" className="block py-3 text-sm font-semibold text-ck-deep border-b border-[#f0f4f8]" onClick={() => setMobileOpen(false)}>Home</Link>
            <button
              onClick={() => setMobileServices(v => !v)}
              className="flex items-center justify-between w-full py-3 text-sm font-bold text-ck-blue border-b border-[#f0f4f8]"
            >
              Services <ChevronDown size={14} className={`transition-transform ${mobileServices ? 'rotate-180' : ''}`} />
            </button>
            {mobileServices && (
              <div className="py-2 pl-4">
                {SERVICES.map(s => (
                  <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-ck-deep hover:text-ck-blue">
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
            {navLinks.slice(1).map(l => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-semibold text-ck-deep border-b border-[#f0f4f8]">
                {l.label}
              </Link>
            ))}
            <div className="pt-4 flex gap-3">
              <button onClick={() => { setMobileOpen(false); setQuoteOpen(true) }} className="btn-primary flex-1 justify-center text-xs">
                Get A Quote →
              </button>
              <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-wa flex-1 justify-center text-xs">
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  )
}
