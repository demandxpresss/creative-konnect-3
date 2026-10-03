import Link from 'next/link'
import { SERVICES } from '@/lib/constants'
import { Camera, Bot, Gamepad2, Gift, Mic, ClipboardList } from 'lucide-react'

const SERVICE_ICONS: Record<string, any> = {
  'photo-video-booths':  Camera,
  'ai-tech-experiences': Bot,
  'games':               Gamepad2,
  'merch-giveaways':     Gift,
  'guest-engagement':    Mic,
  'registration':        ClipboardList,
}

const SERVICE_DESC: Record<string, string> = {
  'photo-video-booths':  'Glambot, mirror, ring booth, GIF & more — fully branded, instant sharing.',
  'ai-tech-experiences': 'AI photobooth, mosaic wall, AR mind reader & digital sling shot.',
  'games':               'VR stations, car simulator, touch screen games & buzzer.',
  'merch-giveaways':     'Fridge magnets, bag tags, bobble heads & laser engraving.',
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
            const Icon = SERVICE_ICONS[s.slug]
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="card p-5 group hover:border-ck-blue hover:-translate-y-0.5 transition-all duration-150"
              >
                <div className="w-10 h-10 rounded-[8px] bg-ck-sky flex items-center justify-center mb-3">
                  <Icon size={19} className="text-ck-blue" strokeWidth={2.1} />
                </div>
                <h3 className="text-sm font-bold text-ck-deep mb-1.5 group-hover:text-ck-blue transition-colors">
                  {s.name}
                </h3>
                <p className="text-[11px] text-[#7aaccc] leading-relaxed mb-3">
                  {SERVICE_DESC[s.slug]}
                </p>
                <div className="text-[10px] font-bold text-ck-blue">
                  Explore →
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
