import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { HeroSection }         from '@/components/sections/HeroSection'
import { TickerStrip }         from '@/components/sections/TickerStrip'
import { TrustBar }            from '@/components/sections/TrustBar'
import { ClientLogos }         from '@/components/sections/ClientLogos'
import { StatsBar }            from '@/components/sections/StatsBar'
import { ServicesGrid }        from '@/components/sections/ServicesGrid'
import { GallerySection }      from '@/components/sections/GallerySection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CtaBanner }           from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — Event Engagement Solutions India`,
  description: SITE_CONFIG.description,
  alternates: { canonical: SITE_CONFIG.url },
}

// JSON-LD for homepage
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': SITE_CONFIG.url,
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  telephone: SITE_CONFIG.phone[0],
  email: SITE_CONFIG.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    addressCountry: 'IN',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: SITE_CONFIG.googleRating,
    reviewCount: '120',
    bestRating: '5',
  },
  areaServed: ['Hyderabad', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Pune'],
  priceRange: '₹₹',
}

// This page uses SSR so it's always fresh
export const revalidate = 3600 // revalidate every hour

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <HeroSection />
      <TickerStrip />
      <TrustBar />
      <ClientLogos />
      <StatsBar />
      <ServicesGrid />
      <GallerySection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  )
}
