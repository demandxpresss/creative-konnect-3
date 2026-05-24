import { MetadataRoute } from 'next'
import { SITE_CONFIG, CITIES, SERVICES, SUB_SERVICES } from '@/lib/constants'

function toCitySlug(city: string) {
  return city.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url
  const now  = new Date()

  const urls: MetadataRoute.Sitemap = [
    // ── Core pages ────────────────────────────────────────────────
    { url: base,              lastModified: now, changeFrequency: 'weekly',  priority: 1.0  },
    { url: `${base}/about`,   lastModified: now, changeFrequency: 'monthly', priority: 0.8  },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.9  },
    { url: `${base}/gallery`, lastModified: now, changeFrequency: 'weekly',  priority: 0.8  },
    { url: `${base}/blog`,    lastModified: now, changeFrequency: 'daily',   priority: 0.8  },
    { url: `${base}/services`,lastModified: now, changeFrequency: 'weekly',  priority: 0.9  },

    // ── Service category pages ────────────────────────────────────
    ...SERVICES.map(s => ({
      url:             `${base}/services/${s.slug}`,
      lastModified:    now,
      changeFrequency: 'weekly'  as const,
      priority:        0.85,
    })),

    // ── Sub-service pages ─────────────────────────────────────────
    ...Object.entries(SUB_SERVICES).flatMap(([catSlug, subs]) =>
      subs.map(sub => ({
        url:             `${base}/services/${catSlug}/${sub.slug}`,
        lastModified:    now,
        changeFrequency: 'weekly'  as const,
        priority:        0.8,
      }))
    ),

    // ── Programmatic SEO: city × sub-service ──────────────────────
    ...CITIES.flatMap(city =>
      Object.entries(SUB_SERVICES).flatMap(([, subs]) =>
        subs.map(sub => ({
          url:             `${base}/hire/${toCitySlug(city)}/${sub.slug}`,
          lastModified:    now,
          changeFrequency: 'monthly' as const,
          priority:        0.7,
        }))
      )
    ),

    // ── Programmatic SEO: city × top-level service ─────────────────
    ...CITIES.flatMap(city =>
      SERVICES.map(s => ({
        url:             `${base}/hire/${toCitySlug(city)}/${s.slug}`,
        lastModified:    now,
        changeFrequency: 'monthly' as const,
        priority:        0.65,
      }))
    ),
  ]

  return urls
}
