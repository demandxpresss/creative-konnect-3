import Link from 'next/link'
import Image from 'next/image'

interface ServiceCardProps {
  title:       string
  description: string
  href:        string
  badge?:      string
  isNew?:      boolean
  isPopular?:  boolean
  tags?:       string[]
  gradient?:   string
}

export function ServiceCard({
  title, description, href,
  badge, isNew, isPopular,
  tags = [],
  gradient = 'from-ck-blue to-ck-navy',
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="card group hover:border-ck-blue hover:-translate-y-0.5 transition-all duration-150 overflow-hidden"
    >
      {/* Image / gradient placeholder */}
      <div className={`h-24 bg-gradient-to-br ${gradient} relative flex items-end p-3`}>
        {isPopular && (
          <span className="absolute top-2 right-2 badge-new">Popular</span>
        )}
        {isNew && !isPopular && (
          <span className="absolute top-2 right-2 badge-new">New</span>
        )}
        {badge && !isNew && !isPopular && (
          <span className="absolute top-2 right-2 badge-new">{badge}</span>
        )}
        <span className="text-[8px] text-white/50 font-bold uppercase tracking-wider">
          {title}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-sm font-bold text-ck-deep mb-1.5 group-hover:text-ck-blue transition-colors leading-snug">
          {title}
        </h3>
        <p className="text-[11px] text-[#7aaccc] leading-relaxed mb-3">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {tags.slice(0, 3).map(tag => (
              <span key={tag} className="badge">{tag}</span>
            ))}
          </div>
        )}

        <span className="text-xs font-bold text-ck-blue group-hover:text-ck-electric transition-colors">
          View details →
        </span>
      </div>
    </Link>
  )
}
