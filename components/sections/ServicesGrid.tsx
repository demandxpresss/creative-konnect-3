import Link from 'next/link'
import { SERVICES, SUB_SERVICES } from '@/lib/constants'

const SERVICE_ICONS: Record<string, string> = {
  'photo-video-booths':  '📸',
  'ai-tech-experiences': '🤖',
  'games':               '🎮',
  'merch-giveaways':     '🎁',
  'guest-engagement':    '🎙️',
  'registration':        '📋',
}

const SERVICE_DESC: Record<string, string> = {
  'photo-video-booths':  '360 video, mirror, glambot, GIF & more — 9 booth types.',
  'ai-tech-experiences': 'Celebrity AI, AR mind reader, mosaic wall & slingshot.',
  'games':               'VR stations, car simulator, touch screen games & buzzer.',
  'merch-giveaways':     'Fridge magnets, bag tags and custom bobble heads.',
  'guest-engagement':    'Audio & video guestbooks for lasting memories.',
  'registration':        'Customised apps, games & event registration solutions.',
}

export function ServicesGrid() {
  return (
    <section className="section-light">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="eyebrow">What We Offer</div>
            <h2 className="text-[22px] font-black text-ck-deep tracking-tight">Our Services</h2>
          </div>
          <Link href="/services" className="text-xs font-bold text-ck-blue hover:text-ck-electric transition-colors">
            View all services →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map(s => {
            const subs = SUB_SERVICES[s.slug] || []
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="card p-5 group hover:border-ck-blue hover:-translate-y-0.5 transition-all duration-150"
              >
                <div className="w-10 h-10 rounded-[8px] bg-ck-sky flex items-center justify-center mb-3 text-xl">
                  {SERVICE_ICONS[s.slug]}
                </div>
                <h3 className="text-sm font-bold text-ck-deep mb-1.5 group-hover:text-ck-blue transition-colors">
                  {s.name}
                </h3>
                <p className="text-[11px] text-[#7aaccc] leading-relaxed mb-3">
                  {SERVICE_DESC[s.slug]}
                </p>
                <div className="text-[10px] font-bold text-ck-blue">
                  {subs.length} {subs.length === 1 ? 'option' : 'options'} →
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
