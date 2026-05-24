const EVENT_ICONS: Record<string, string> = {
  'Corporate Event':       '🏢',
  'Wedding / Sangeet':     '💍',
  'Brand Activation / BTL':'🎯',
  'Award Night / Gala':    '🏆',
  'College Fest':          '🎓',
  'Product Launch':        '🚀',
  'Birthday Party':        '🎂',
  'Conference / Expo':     '🎪',
  'Sports Event':          '⚽',
  'Virtual Event':         '💻',
}

interface EventTypeGridProps {
  types?:     string[]
  className?: string
}

export function EventTypeGrid({ types, className = '' }: EventTypeGridProps) {
  const items = types ?? Object.keys(EVENT_ICONS)

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map(et => (
        <div
          key={et}
          className="flex items-center gap-2 bg-ck-sky border border-[#c0d8ee] rounded-[8px] px-3.5 py-2"
        >
          <span className="text-sm">{EVENT_ICONS[et] ?? '✦'}</span>
          <span className="text-xs font-semibold text-ck-deep">{et}</span>
        </div>
      ))}
    </div>
  )
}
