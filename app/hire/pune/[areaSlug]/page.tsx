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
//
// Folder is named [areaSlug] (not [serviceSlug]) because Next.js requires every dynamic
// segment at the same position in the route tree to share one param name — and the
// sibling route app/hire/pune/[areaSlug]/[serviceSlug]/page.tsx already claims "areaSlug"
// at this exact position. The value it holds here is actually a service slug; see the
// rename below.
import type { Metadata } from 'next'
import { SERVICES, SUB_SERVICES } from '@/lib/constants'
import CityServicePage, { generateMetadata as baseGenerateMetadata } from '../../[citySlug]/[serviceSlug]/page'

interface Props {
  params: { areaSlug: string } // actually a serviceSlug — see comment above
}

export async function generateStaticParams() {
  const slugs: { areaSlug: string }[] = []
  SERVICES.forEach(s => slugs.push({ areaSlug: s.slug }))
  Object.values(SUB_SERVICES).forEach(subs => subs.forEach(sub => slugs.push({ areaSlug: sub.slug })))
  return slugs
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return baseGenerateMetadata({ params: { citySlug: 'pune', serviceSlug: params.areaSlug } })
}

export default function PuneServicePage({ params }: Props) {
  return <CityServicePage params={{ citySlug: 'pune', serviceSlug: params.areaSlug }} />
}
