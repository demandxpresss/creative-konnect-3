import Link from 'next/link'
import { SITE_CONFIG, SERVICES } from '@/lib/constants'

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
      <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="white"/>
    </svg>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ck-navy text-white">
      {/* Main footer — responsive grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-10 pb-8">

        {/* Brand row — always full width on top */}
        <div className="mb-8 pb-8 border-b border-[#1e3a52] flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ck-logo-v2.svg"
              alt="Creative Konnect"
              style={{ height: '52px', width: 'auto', display: 'block', filter: 'brightness(0) invert(1)', marginBottom: '12px' }}
            />
            <p className="text-xs text-[#6a98b5] leading-relaxed max-w-[260px]">
              India's leading event engagement company — turning events into experiences people never forget.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-2.5">
            {[
              { Icon: FacebookIcon,  href: SITE_CONFIG.socialLinks.facebook,  label: 'Facebook' },
              { Icon: InstagramIcon, href: SITE_CONFIG.socialLinks.instagram, label: 'Instagram' },
              { Icon: YouTubeIcon,   href: SITE_CONFIG.socialLinks.youtube,   label: 'YouTube' },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-10 h-10 rounded-full bg-[#1e3a52] flex items-center justify-center text-[#7aaccc] hover:bg-ck-blue hover:text-white transition-colors">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Links grid — 2 cols on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-8">

          {/* Services */}
          <div>
            <div className="text-[10px] font-bold text-ck-electric uppercase tracking-[2px] mb-3">🛠️ Services</div>
            {SERVICES.map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`}
                className="block text-xs text-[#6a98b5] hover:text-white mb-2 transition-colors">
                {s.name}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <div className="text-[10px] font-bold text-ck-electric uppercase tracking-[2px] mb-3">🏢 Company</div>
            {[
              { href: '/about',   label: 'About Us' },
              { href: '/gallery', label: 'Gallery' },
              { href: '/contact', label: 'Contact' },
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="block text-xs text-[#6a98b5] hover:text-white mb-2 transition-colors">
                {l.label}
              </Link>
            ))}
            <div className="mt-5">
              <div className="text-[10px] font-bold text-ck-electric uppercase tracking-[2px] mb-2">🗺️ We Serve</div>
              <p className="text-xs text-[#6a98b5]">We serve pan India with ❤️</p>
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <div className="text-[10px] font-bold text-ck-electric uppercase tracking-[2px] mb-3">📬 Contact</div>
            <div className="space-y-3">
              <div>
                <div className="text-[9px] text-[#4a7090] uppercase tracking-[1px] mb-1">📞 Phone & WhatsApp</div>
                <a href={`tel:+918432258944`}
                  className="block text-xs font-semibold text-[#c8dce9] hover:text-white transition-colors">
                  +91 84322 58944
                </a>
                {SITE_CONFIG.phone.map(p => (
                  <a key={p} href={`tel:${p.replace(/\s/g, '')}`}
                    className="block text-xs text-[#6a98b5] hover:text-white transition-colors mt-0.5">
                    {p}
                  </a>
                ))}
              </div>
              <div>
                <div className="text-[9px] text-[#4a7090] uppercase tracking-[1px] mb-1">✉️ Email</div>
                <a href={`mailto:${SITE_CONFIG.email}`}
                  className="text-xs font-semibold text-[#c8dce9] hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div>
                <div className="text-[9px] text-[#4a7090] uppercase tracking-[1px] mb-1">📍 Office</div>
                <div className="text-xs text-[#6a98b5] leading-relaxed">{SITE_CONFIG.address}</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1e3a52]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left">
          <div className="text-[10px] text-[#3a5a70]">
            © {year} {SITE_CONFIG.name}. All rights reserved.
          </div>
          <div className="text-[10px] text-[#3a5a70]">
            Developed by{' '}
            <a href="https://demandxpress.com" target="_blank" rel="noopener noreferrer"
              className="text-ck-electric hover:text-white transition-colors font-semibold">
              Demand Xpress
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
