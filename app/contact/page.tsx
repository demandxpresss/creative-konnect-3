import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'
import { ContactForm } from '@/components/ui/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us — Get A Quote | Creative Konnect',
  description: 'Get a free quote for your event. Tell us your event details and we\'ll respond within 2 hours with a full proposal.',
  alternates: { canonical: `${SITE_CONFIG.url}/contact` },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-ck-navy border-b-[3px] border-ck-blue px-8 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs text-[#5a8aaa] mb-3">
              <Link href="/" className="hover:text-ck-electric transition-colors">Home</Link>
              {' › '}<span className="text-ck-electric">Contact Us</span>
            </div>
            <h1 className="text-[36px] font-black text-white tracking-tight leading-tight mb-3">
              Let's Make Your<br />Event <span className="text-ck-electric">Unforgettable</span>
            </h1>
            <p className="text-sm text-[#6a98b5] leading-relaxed">
              Tell us about your event and we'll put together the perfect experience package —
              with a detailed quote in under 2 hours.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { icon: '⏱️', title: 'Quote within 2 hours', sub: 'Mon–Sat, 9am–7pm IST' },
              { icon: '✅', title: 'No hidden costs',       sub: 'Transparent, itemised quotes' },
              { icon: '🗺️', title: 'Pan India coverage',   sub: 'We serve pan India with ❤️' },
            ].map(item => (
              <div key={item.title} className="flex items-center gap-3 bg-ck-blue/10 border border-ck-electric/20 rounded-[8px] px-4 py-3">
                <div className="w-8 h-8 rounded-[7px] bg-ck-blue/20 flex items-center justify-center flex-shrink-0 text-sm">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#c8dce9]">{item.title}</div>
                  <div className="text-[10px] text-[#5a8aaa] mt-0.5">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form + Info */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_1fr]">

        {/* Form */}
        <div className="px-8 py-8 bg-white border-r border-[#e8f0f8]">
          <div className="eyebrow mb-1">Get Your Quote</div>
          <h2 className="text-[20px] font-black text-ck-deep tracking-tight mb-5">Tell Us About Your Event</h2>
          <ContactForm />
        </div>

        {/* Contact info */}
        <div className="px-6 py-8 bg-ck-ghost">
          <div className="eyebrow mb-1">Reach Us</div>
          <h2 className="text-[20px] font-black text-ck-deep tracking-tight mb-4">Get In Touch</h2>

          <div className="card p-4 mb-4 space-y-4">
            {[
              { label: 'Phone',     val: SITE_CONFIG.phone[0],  sub: SITE_CONFIG.phone[1],  icon: '📞', green: false, href: `tel:${SITE_CONFIG.phone[0].replace(/\s/g, '')}` },
              { label: 'WhatsApp', val: 'Chat with us now',      sub: 'Fastest response',    icon: '💬', green: true,  href: `https://wa.me/${SITE_CONFIG.whatsapp}` },
              { label: 'Email',     val: SITE_CONFIG.email,     sub: 'We reply within 2 hrs', icon: '✉️', green: false, href: `mailto:${SITE_CONFIG.email}` },
              { label: 'Office',    val: SITE_CONFIG.address,   sub: 'We serve pan India with ❤️', icon: '📍', green: false, href: null },
            ].map(row => (
              <div key={row.label} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-[7px] bg-ck-sky border border-[#dceaf5] flex items-center justify-center flex-shrink-0 text-sm mt-0.5">
                  {row.icon}
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-[#4a6a80] uppercase tracking-wider">{row.label}</div>
                  {row.href ? (
                    <a href={row.href} target={row.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      className={`text-sm font-bold mt-0.5 block hover:underline ${row.green ? 'text-brand-wa' : 'text-ck-deep hover:text-ck-blue'}`}>
                      {row.val}
                    </a>
                  ) : (
                    <div className="text-sm font-bold mt-0.5 text-ck-deep">{row.val}</div>
                  )}
                  {row.sub && <div className="text-xs text-[#5a7a92] mt-0.5">{row.sub}</div>}
                </div>
              </div>
            ))}
          </div>

          {/* We serve */}
          <div className="bg-ck-sky border border-[#c0d8ee] rounded-card px-4 py-4 text-center">
            <div className="text-2xl mb-1">🗺️</div>
            <div className="text-sm font-black text-ck-deep mb-1">We Serve Pan India</div>
            <p className="text-xs text-[#5a7a92]">
              From Mumbai to Hyderabad, Delhi to Bangalore — wherever your event is, we'll be there with ❤️
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
