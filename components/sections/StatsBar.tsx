import { SITE_CONFIG } from '@/lib/constants'

const STATS = [
  { num: SITE_CONFIG.eventsCount, label: 'Events Delivered' },
  { num: '12+',                   label: 'Booth & Tech Types' },
  { num: SITE_CONFIG.citiesCount, label: 'Cities Across India' },
  { num: `${SITE_CONFIG.googleRating}★`, label: 'Google Rating' },
]

export function StatsBar() {
  return (
    <div className="bg-ck-blue">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={i}
            className={`text-center py-5 px-4 ${i < STATS.length - 1 ? 'border-r border-white/20' : ''}`}
          >
            <div className="text-[28px] font-black text-white leading-tight tracking-tight">{s.num}</div>
            <div className="text-[11px] text-white/70 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
