// Pune is both a city in CITIES (handled by the generic /hire/[citySlug]/[serviceSlug]
// route) and the parent of the neighbourhood routes at /hire/pune/[areaSlug]/[serviceSlug].
// Next.js always prefers a literal path segment ("pune") over a sibling dynamic segment
// ([citySlug]), so any request to /hire/pune/<serviceSlug> was being routed into this
// static "pune" folder — which, before this file existed, only had the 3-segment
// [areaSlug]/[serviceSlug] route underneath it. A 2-segment request had nothing to match
// and 404'd, even though it's in the sitemap and linked from the Pune service pages.
//
// This file gives that exact 2-segment shape a real page, by reusing the generic city
// page's logic with citySlug hardcoded to "pune" — so the content, metadata and internal
// links stay identical to how Pune behaves for every other city×service URL.
import type { Metadata } from 'next'
import { SERVICES, SUB_SERVICES } from '@/lib/constants'
import CityServicePage, { generateMetadata as baseGenerateMetadata } from '../../[citySlug]/[serviceSlug]/page'

interface Props {
  params: { serviceSlug: string }
}

export async function generateStaticParams() {
  const slugs: { serviceSlug: string }[] = []
  SERVICES.forEach(s => slugs.push({ serviceSlug: s.slug }))
  Object.values(SUB_SERVICES).forEach(subs => subs.forEach(sub => slugs.push({ serviceSlug: sub.slug })))
  return slugs
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return baseGenerateMetadata({ params: { citySlug: 'pune', serviceSlug: params.serviceSlug } })
}

export default function PuneServicePage({ params }: Props) {
  return <CityServicePage params={{ citySlug: 'pune', serviceSlug: params.serviceSlug }} />
}
