import Link from 'next/link'

interface SectionHeaderProps {
  eyebrow:   string
  title:     string
  subtitle?: string
  viewAllHref?:  string
  viewAllLabel?: string
  light?: boolean
}

export function SectionHeader({
  eyebrow, title, subtitle,
  viewAllHref, viewAllLabel = 'View all →',
  light = false,
}: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between mb-5">
      <div>
        <div className={`text-[10px] font-bold letter-spacing-[2px] uppercase mb-1 ${light ? 'text-ck-electric' : 'text-ck-blue'}`}
          style={{ letterSpacing: '2px' }}>
          {eyebrow}
        </div>
        <h2 className={`text-[20px] font-black tracking-tight ${light ? 'text-white' : 'text-ck-deep'}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-xs mt-1 ${light ? 'text-[#4a7090]' : 'text-[#7aaccc]'}`}>
            {subtitle}
          </p>
        )}
      </div>
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className={`text-xs font-bold transition-colors flex-shrink-0 ${
            light
              ? 'text-ck-electric hover:text-white'
              : 'text-ck-blue hover:text-ck-electric'
          }`}
        >
          {viewAllLabel}
        </Link>
      )}
    </div>
  )
}
