import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PUNE_AREAS, SERVICES, SITE_CONFIG } from '@/lib/constants'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { FaqAccordion } from '@/components/ui/FaqAccordion'
import { SubServiceQuoteButton } from '@/components/ui/SubServiceQuoteButton'

interface Props {
  params: { areaSlug: string; serviceSlug: string }
}

function findArea(slug: string) {
  return PUNE_AREAS.find(a => a.slug === slug)
}

function findService(slug: string) {
  return SERVICES.find(s => s.slug === slug)
}

export async function generateStaticParams() {
  const params: { areaSlug: string; serviceSlug: string }[] = []
  PUNE_AREAS.forEach(area => {
    SERVICES.forEach(s => {
      params.push({ areaSlug: area.slug, serviceSlug: s.slug })
    })
  })
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area    = findArea(params.areaSlug)
  const service = findService(params.serviceSlug)
  if (!area || !service) return {}

  const title       = `${service.name} in ${area.name}, Pune | Creative Konnect`
  const description = `Book ${service.name} in ${area.name}, Pune. Fully branded, on-site operator, instant social sharing. Free quote in 2 hours from Pune's own event engagement team.`
  const url         = `${SITE_CONFIG.url}/hire/pune/${params.areaSlug}/${params.serviceSlug}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
  }
}

function buildFaqs(serviceName: string, areaName: string) {
  return [
    {
      question: `Do you charge extra to travel to ${areaName}?`,
      answer: `No. ${areaName} is within our standard Pune service radius — we're based in Pune ourselves, so there's no additional travel charge anywhere in the city, including ${areaName}.`,
    },
    {
      question: `How much does ${serviceName} hire cost in ${areaName}?`,
      answer: `Cost depends on event duration, guest count and customisation. Since we're a Pune-based team, quotes for ${areaName} come back fast — usually within 2 hours — with transparent, itemised pricing and no hidden costs.`,
    },
    {
      question: `How far in advance should I book for a ${areaName} event?`,
      answer: `We recommend 2 weeks' notice for standard events in ${areaName}, and 4–6 weeks for weekends or peak wedding season. Being local, we can often accommodate last-minute ${areaName} bookings too, subject to availability.`,
    },
    {
      question: `Can the ${serviceName} setup be branded with our logo?`,
      answer: `Absolutely. Every setup is customised with your logo, brand colors and event messaging — our design team handles it, typically within 48 hours.`,
    },
    {
      question: `Do you provide an on-site operator in ${areaName}?`,
      answer: `Yes, always. A trained operator from our Pune team arrives at your ${areaName} venue 2 hours before your event and manages the entire setup, run and breakdown.`,
    },
  ]
}

const localBusinessSchema = (serviceName: string, areaName: string, url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_CONFIG.name,
  description: `${serviceName} hire in ${areaName}, Pune, for events.`,
  url,
  telephone: SITE_CONFIG.phone[0],
  areaServed: `${areaName}, Pune`,
  address: { '@type': 'PostalAddress', addressLocality: 'Pune', addressRegion: areaName, addressCountry: 'IN' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: SITE_CONFIG.googleRating, reviewCount: '120' },
})

export default function PuneAreaSeoPage({ params }: Props) {
  const area    = findArea(params.areaSlug)
  const service = findService(params.serviceSlug)
  if (!area || !service) notFound()

  const faqs    = buildFaqs(service.name, area.name)
  const pageUrl = `${SITE_CONFIG.url}/hire/pune/${params.areaSlug}/${params.serviceSlug}`

  const otherAreas       = PUNE_AREAS.filter(a => a.slug !== area.slug).slice(0, 6)
  const relatedServices  = SERVICES.filter(s => s.slug !== service.slug).slice(0, 4)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema(service.name, area.name, pageUrl)) }} />

      {/* Hero */}
      <div className="bg-ck-navy border-b-[3px] border-ck-blue px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs text-[#4a7090] mb-3">
            <Link href="/" className="hover:text-ck-electric transition-colors">Home</Link>
            {' › '}<Link href="/services" className="hover:text-ck-electric transition-colors">Services</Link>
            {' › '}<Link href={`/hire/pune/${service.slug}`} className="hover:text-ck-electric transition-colors">{service.name} in Pune</Link>
            {' › '}<span className="text-ck-electric">{area.name}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 bg-ck-electric/15 border border-ck-electric/30 text-ck-electric text-[9px] font-bold px-2.5 py-1 rounded-full mb-3 uppercase tracking-wide">
            Pune-Based Team
          </div>
          <h1 className="text-[34px] font-black text-white tracking-tight leading-tight mb-3">
            {service.name} Hire in <span className="text-ck-electric">{area.name}, Pune</span>
          </h1>
          <p className="text-sm text-[#6a98b5] leading-relaxed max-w-[560px] mb-6">
            {area.blurb}
          </p>
          <div className="flex flex-wrap gap-3">
            <SubServiceQuoteButton service={`${service.name} in ${area.name}, Pune`} />
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi! I'd like to book ${service.name} for an event in ${area.name}, Pune.`}
              target="_blank" rel="noopener noreferrer"
              className="btn-wa text-sm"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Why CK in this area */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow mb-1">Why Creative Konnect in {area.name}</div>
          <h2 className="text-[20px] font-black text-ck-deep tracking-tight mb-5">
            {area.name}'s Local Event Engagement Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '📍', title: `Based in Pune, Not Just Visiting`, desc: `We're headquartered in Pune — no inter-city travel charges or logistics delays for ${area.name} events.` },
              { icon: '⏱',  title: 'Quote in 2 Hours',                 desc: `Share your ${area.name} event details and get a full itemised quote within 2 hours.` },
              { icon: '✓',  title: 'Fully Branded',                    desc: `Every ${service.name} setup is customised with your logo, brand colors and messaging.` },
              { icon: '👤', title: 'On-Site Operator',                 desc: `A dedicated operator arrives at your ${area.name} venue 2 hours early and manages everything.` },
              { icon: '📱', title: 'Instant Social Sharing',           desc: `Guests get their content via WhatsApp and email within seconds of capture.` },
              { icon: '★',  title: `${SITE_CONFIG.googleRating}★ Google Rating`, desc: `${SITE_CONFIG.eventsCount} events delivered across Pune and India, rated ${SITE_CONFIG.googleRating} stars.` },
            ].map((item, i) => (
              <div key={i} className="card p-4">
                <div className="text-2xl mb-2.5">{item.icon}</div>
                <h3 className="text-sm font-bold text-ck-deep mb-1.5">{item.title}</h3>
                <p className="text-[11px] text-[#7aaccc] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the service */}
      <section className="section-ghost">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="eyebrow mb-1">About This Service</div>
            <h2 className="text-[20px] font-black text-ck-deep tracking-tight mb-4">
              {service.name} for {area.name} Events
            </h2>
            <p className="text-sm text-[#5a7a92] leading-relaxed mb-4">
              {area.blurb}
            </p>
            <p className="text-sm text-[#5a7a92] leading-relaxed mb-5">
              Creative Konnect has delivered {service.name.toLowerCase()} experiences across hundreds of events
              throughout Pune — from {area.name} to every other corner of the city — with the same Pune-based
              team handling setup, operation and breakdown every time.
            </p>
            <Link href={`/services/${service.slug}`} className="btn-primary text-sm">
              View Full {service.name} Details →
            </Link>
          </div>
          <div className="bg-gradient-to-br from-ck-blue to-ck-navy rounded-card-lg h-48 flex items-center justify-center relative">
            <div className="play-btn">
              <div className="w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[13px] border-l-white ml-0.5" />
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <span className="reel-tag">{service.name.toUpperCase()}</span>
              <p className="text-xs font-bold text-white mt-1">See it in action in {area.name}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal links: other Pune areas */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow mb-1">Other Areas We Cover</div>
          <h2 className="text-[20px] font-black text-ck-deep tracking-tight mb-4">
            {service.name} Across Pune
          </h2>
          <div className="flex flex-wrap gap-2">
            {otherAreas.map(a => (
              <Link
                key={a.slug}
                href={`/hire/pune/${a.slug}/${params.serviceSlug}`}
                className="flex items-center gap-2 bg-ck-sky border border-[#c0d8ee] rounded-[7px] px-3.5 py-2 text-xs font-semibold text-ck-deep hover:border-ck-blue hover:text-ck-blue transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-ck-blue" />
                {service.name} in {a.name}
              </Link>
            ))}
            <Link href={`/hire/pune/${params.serviceSlug}`} className="flex items-center gap-2 bg-ck-sky border border-[#c0d8ee] rounded-[7px] px-3.5 py-2 text-xs font-semibold text-ck-blue hover:bg-ck-sky transition-colors">
              + All of Pune
            </Link>
          </div>
        </div>
      </section>

      {/* Internal links: related services in same area */}
      <section className="section-ghost">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow mb-1">Related Services in {area.name}</div>
          <h2 className="text-[20px] font-black text-ck-deep tracking-tight mb-4">
            More Event Services in {area.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map(s => (
              <Link
                key={s.slug}
                href={`/hire/pune/${params.areaSlug}/${s.slug}`}
                className="card p-4 group hover:border-ck-blue hover:-translate-y-0.5 transition-all"
              >
                <div className="text-xs font-bold text-ck-deep mb-1 group-hover:text-ck-blue transition-colors">
                  {s.name}
                </div>
                <div className="text-[10px] text-[#7aaccc]">in {area.name} →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-light">
        <div className="max-w-3xl mx-auto">
          <div className="eyebrow mb-1">FAQs</div>
          <h2 className="text-[20px] font-black text-ck-deep tracking-tight mb-5">
            {service.name} in {area.name} — Common Questions
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <CtaBanner
        title={`Book ${service.name} for your ${area.name} event`}
        sub={`Pune-based team · No travel charges within the city · Quote in 2 hours`}
      />
    </>
  )
}
