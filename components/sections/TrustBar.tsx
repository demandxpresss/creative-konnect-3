import { SITE_CONFIG } from '@/lib/constants'
import { PartyPopper, Star, MapPinned, Palette, Clock3, UserCheck } from 'lucide-react'

const TRUST_ITEMS = [
  { Icon: PartyPopper, label: `${SITE_CONFIG.eventsCount} Events Delivered` },
  { Icon: Star,        label: `${SITE_CONFIG.googleRating} Google Rating` },
  { Icon: MapPinned,   label: 'Pan India Coverage' },
  { Icon: Palette,     label: '100% Branded Setup' },
  { Icon: Clock3,      label: '2-Hr Quote Response' },
  { Icon: UserCheck,   label: 'On-Site Operator Always' },
]

export function TrustBar() {
  return (
    <div className="bg-white border-b border-[#e8f0f8] px-4 sm:px-8 py-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-5">
          <div className="eyebrow">Our Promise</div>
          <h2 className="text-[22px] font-black text-ck-deep tracking-tight">Why Choose Us</h2>
          <p className="text-xs text-[#5a7a92] mt-1">Everything you need for a flawless event experience.</p>
        </div>

        {/* Pills grid — 2 cols on mobile, 3 on sm, 6 on lg */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {TRUST_ITEMS.map(({ Icon, label }, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-ck-ghost border border-[#dceaf5] rounded-[10px] px-3.5 py-3.5 hover:border-ck-blue hover:shadow-sm transition-all duration-150"
            >
              <div className="w-8 h-8 rounded-[8px] bg-ck-blue/10 flex items-center justify-center flex-shrink-0">
                <Icon size={16} className="text-ck-blue" strokeWidth={2.25} />
              </div>
              <span className="text-[11px] font-semibold text-ck-deep leading-tight">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
