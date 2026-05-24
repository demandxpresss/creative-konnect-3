import type { Metadata } from 'next'
import { SITE_CONFIG } from './constants'

interface SeoInput {
  title:        string
  description:  string
  path:         string
  image?:       string
  type?:        'website' | 'article'
  publishedAt?: string
  author?:      string
  noIndex?:     boolean
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  type       = 'website',
  publishedAt,
  author,
  noIndex    = false,
}: SeoInput): Metadata {
  const url      = `${SITE_CONFIG.url}${path}`
  const ogImage  = image || `${SITE_CONFIG.url}/opengraph-image.png`
  const fullTitle = `${title} | ${SITE_CONFIG.name}`

  return {
    title:       fullTitle,
    description,
    alternates:  { canonical: url },
    robots:      noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
    openGraph: {
      title:       fullTitle,
      description,
      url,
      siteName:    SITE_CONFIG.name,
      type,
      locale:      'en_IN',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(type === 'article' && publishedAt ? { publishedTime: publishedAt } : {}),
      ...(author ? { authors: [author] } : {}),
    },
    twitter: {
      card:        'summary_large_image',
      title:       fullTitle,
      description,
      images:      [ogImage],
    },
  }
}

// ── Pre-built metadata for common pages ──────────────────────────
export const HOME_META = buildMetadata({
  title:       'Event Engagement Solutions India',
  description: SITE_CONFIG.description,
  path:        '/',
})

export const GALLERY_META = buildMetadata({
  title:       'Gallery — Event Photos & Reels',
  description: 'See Creative Konnect in action — reels, photos and moments from 500+ events across India.',
  path:        '/gallery',
})

export const BLOG_META = buildMetadata({
  title:       'Blog — Event Planning Guides & Ideas',
  description: 'Expert guides on photo booths, AI experiences, corporate event planning and guest engagement across India.',
  path:        '/blog',
})

export const ABOUT_META = buildMetadata({
  title:       'About Us',
  description: "Learn about Creative Konnect — India's leading event engagement company. Our story, mission, team and journey.",
  path:        '/about',
})

export const CONTACT_META = buildMetadata({
  title:       'Contact Us — Get A Free Quote',
  description: "Get a free quote for your event. Tell us your details and we'll respond within 2 hours with a full proposal.",
  path:        '/contact',
})

// ── Dynamic metadata builders ─────────────────────────────────────
export function servicePageMeta(serviceName: string, serviceSlug: string): Metadata {
  return buildMetadata({
    title:       `${serviceName} for Events India`,
    description: `Hire ${serviceName} for your event across India. Fully branded, on-site operator, instant social sharing. Get a free quote in 2 hours.`,
    path:        `/services/${serviceSlug}`,
  })
}

export function subServicePageMeta(subName: string, catSlug: string, subSlug: string): Metadata {
  return buildMetadata({
    title:       `${subName} Hire India`,
    description: `Book ${subName} for your event across India. Fully branded setup, on-site operator, instant WhatsApp sharing. Quote in 2 hours.`,
    path:        `/services/${catSlug}/${subSlug}`,
  })
}

export function seoPageMeta(serviceName: string, city: string, citySlug: string, serviceSlug: string): Metadata {
  return buildMetadata({
    title:       `${serviceName} in ${city} — Hire for Events`,
    description: `Book ${serviceName} in ${city} for your event. Fully branded, on-site operator, instant social sharing. Get a free quote in 2 hours from Creative Konnect.`,
    path:        `/hire/${citySlug}/${serviceSlug}`,
  })
}

export function blogPostMeta(post: { title: string; excerpt: string; slug: string; publishedAt?: string; author?: string }): Metadata {
  return buildMetadata({
    title:       post.title,
    description: post.excerpt,
    path:        `/blog/${post.slug}`,
    type:        'article',
    publishedAt: post.publishedAt,
    author:      post.author,
  })
}
