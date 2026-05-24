import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  light?: boolean
}

export function Breadcrumb({ items, light = false }: BreadcrumbProps) {
  const allItems = [{ label: 'Home', href: '/' }, ...items]

  // JSON-LD BreadcrumbList schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_CONFIG.url}${item.href}` } : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs">
          {allItems.map((item, i) => {
            const isLast = i === allItems.length - 1
            return (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && (
                  <span className={light ? 'text-[#1e3a52]' : 'text-[#c0d8ee]'}>›</span>
                )}
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className={`hover:underline transition-colors ${
                      light ? 'text-[#7aaccc] hover:text-ck-blue' : 'text-[#4a7090] hover:text-ck-electric'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className={isLast ? (light ? 'text-ck-blue font-semibold' : 'text-ck-electric font-semibold') : (light ? 'text-[#7aaccc]' : 'text-[#4a7090]')}>
                    {item.label}
                  </span>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
