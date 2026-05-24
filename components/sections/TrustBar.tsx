import { SITE_CONFIG } from '@/lib/constants'

const TRUST_ITEMS = [
  { icon: '🎉', label: `${SITE_CONFIG.eventsCount} Events Delivered` },
  { icon: '⭐', label: `${SITE_CONFIG.googleRating} Google Rating` },
  { icon: '🗺️', label: 'Pan India Coverage' },
  { icon: '🎨', label: '100% Branded Setup' },
  { icon: '⏱️', label: '2-Hr Quote Response' },
  { icon: '🧑‍💼', label: 'On-Site Operator Always' },
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
          {TRUST_ITEMS.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 bg-ck-ghost border border-[#dceaf5] rounded-[10px] px-3.5 py-3"
            >
              <span className="text-base leading-none flex-shrink-0">{item.icon}</span>
              <span className="text-[11px] font-semibold text-ck-deep leading-tight">{item.label}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
