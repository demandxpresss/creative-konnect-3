import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICES, SUB_SERVICES, SITE_CONFIG } from '@/lib/constants'
import { CtaBanner } from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Event Engagement Services — Photo Booths, AI, Games & More',
  description: 'Explore Creative Konnect\'s full range of event services — 360 video booths, AI experiences, VR games, merch and guest engagement across India.',
  alternates: { canonical: `${SITE_CONFIG.url}/services` },
}

const SERVICE_ICONS: Record<string, string>  = {
  'photo-video-booths': '📸', 'ai-tech-experiences': '🤖',
  'games': '🎮', 'merch-giveaways': '🎁',
  'guest-engagement': '🎙️', 'registration': '📋',
}
const SERVICE_DESC: Record<string, string> = {
  'photo-video-booths':  'Ring, Mirror, 360°, Glambot, GIF & more — 9 booth types for every event.',
  'ai-tech-experiences': 'Celebrity AI, AR Mind Reader, Mosaic Wall & Slingshot experiences.',
  'games':               'VR stations, car simulators, touch screen games & Buzzer Pro.',
  'merch-giveaways':     'Custom fridge magnets, bag tags and bobble heads guests keep forever.',
  'guest-engagement':    'Audio & video guestbooks that capture every guest\'s message.',
  'registration':        'Customised registration apps & interactive check-in experiences.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-ck-navy border-b-[3px] border-ck-blue px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs text-[#4a7090] mb-3">
            <Link href="/" className="hover:text-ck-electric transition-colors">Home</Link>
            {' › '}<span className="text-ck-electric">Services</span>
          </div>
          <h1 className="text-[36px] font-black text-white leading-tight tracking-tight mb-3">
            Event Experiences Built to <span className="text-ck-electric">Go Viral</span>
          </h1>
          <p className="text-sm text-[#6a98b5] leading-relaxed max-w-[560px]">
            From AI-powered booths to VR games and custom merch — everything you need to make
            your guests share, engage, and remember your event.
          </p>
        </div>
      </div>

      {/* Services grid */}
      <section className="section-ghost">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(s => {
              const subs = SUB_SERVICES[s.slug] || []
              return (
                <div key={s.slug} className="card overflow-visible">
                  {/* Card header */}
                  <div className="bg-gradient-to-br from-ck-blue to-ck-navy p-6">
                    <div className="text-3xl mb-2">{SERVICE_ICONS[s.slug]}</div>
                    <h2 className="text-base font-black text-white mb-1">{s.name}</h2>
                    <p className="text-xs text-white/60 leading-relaxed">{SERVICE_DESC[s.slug]}</p>
                  </div>

                  {/* Sub-services list */}
                  <div className="p-4">
                    <div className="text-[9px] font-bold text-[#7aaccc] uppercase tracking-[2px] mb-3">
                      Included options
                    </div>
                    <div className="space-y-1.5 mb-4">
                      {subs.map(sub => (
                        <Link
                          key={sub.slug}
                          href={`/services/${s.slug}/${sub.slug}`}
                          className="flex items-center gap-2 text-xs font-medium text-ck-deep hover:text-ck-blue transition-colors group"
                        >
                          <span className="text-ck-blue group-hover:translate-x-0.5 transition-transform">›</span>
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                    <Link
                      href={`/services/${s.slug}`}
                      className="block text-center bg-ck-sky text-ck-blue text-xs font-bold py-2.5 rounded-[7px] hover:bg-[#d4eaf8] transition-colors"
                    >
                      Explore {s.name} →
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
