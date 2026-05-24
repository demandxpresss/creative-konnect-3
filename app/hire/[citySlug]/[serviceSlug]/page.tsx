import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CITIES, SERVICES, SUB_SERVICES, SITE_CONFIG } from '@/lib/constants'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { FaqAccordion } from '@/components/ui/FaqAccordion'
import { SubServiceQuoteButton } from '@/components/ui/SubServiceQuoteButton'

interface Props {
  params: { citySlug: string; serviceSlug: string }
}

// Build city slugs: "hyderabad", "mumbai", "delhi-ncr" etc
function toCitySlug(city: string) {
  return city.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

function fromCitySlug(slug: string) {
  return CITIES.find(c => toCitySlug(c) === slug)
}

// Build service slugs from sub-services
function getAllServiceSlugs() {
  const slugs: { serviceSlug: string; subServiceSlug?: string }[] = []
  // Top-level services
  SERVICES.forEach(s => slugs.push({ serviceSlug: s.slug }))
  // Sub-services
  Object.entries(SUB_SERVICES).forEach(([, subs]) => {
    subs.forEach(sub => slugs.push({ serviceSlug: sub.slug }))
  })
  return slugs
}

function findServiceBySlug(slug: string) {
  // Check top-level services
  const topLevel = SERVICES.find(s => s.slug === slug)
  if (topLevel) return { name: topLevel.name, href: `/services/${topLevel.slug}`, type: 'category' as const }

  // Check sub-services
  for (const [catSlug, subs] of Object.entries(SUB_SERVICES)) {
    const sub = subs.find(s => s.slug === slug)
    if (sub) return { name: sub.name, href: `/services/${catSlug}/${sub.slug}`, type: 'sub' as const }
  }
  return null
}

export async function generateStaticParams() {
  const params: { citySlug: string; serviceSlug: string }[] = []
  CITIES.forEach(city => {
    // Generate for all sub-services (most valuable for SEO)
    Object.entries(SUB_SERVICES).forEach(([, subs]) => {
      subs.forEach(sub => {
        params.push({ citySlug: toCitySlug(city), serviceSlug: sub.slug })
      })
    })
    // Also top-level services
    SERVICES.forEach(s => {
      params.push({ citySlug: toCitySlug(city), serviceSlug: s.slug })
    })
  })
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city    = fromCitySlug(params.citySlug)
  const service = findServiceBySlug(params.serviceSlug)
  if (!city || !service) return {}

  const title       = `${service.name} in ${city} | Hire for Events | Creative Konnect`
  const description = `Book ${service.name} in ${city} for your event. Fully branded, on-site operator, instant social sharing. Get a free quote in 2 hours. Pan India event engagement specialists.`

  return {
    title,
    description,
    alternates: { canonical: `${SITE_CONFIG.url}/hire/${params.citySlug}/${params.serviceSlug}` },
    openGraph: { title, description, url: `${SITE_CONFIG.url}/hire/${params.citySlug}/${params.serviceSlug}` },
  }
}

// FAQs are dynamically generated with city + service name
function buildFaqs(serviceName: string, city: string) {
  return [
    {
      question: `How much does ${serviceName} hire cost in ${city}?`,
      answer: `The cost of ${serviceName} in ${city} depends on the event duration, guest count, and customisation requirements. We provide transparent, itemised quotes with no hidden costs. Contact us and receive a full quote within 2 hours.`,
    },
    {
      question: `Is ${serviceName} available for events in ${city}?`,
      answer: `Yes! We operate across ${city} and all major areas. Our team handles complete setup, operation, and pack-down at your ${city} venue.`,
    },
    {
      question: `How far in advance do I need to book ${serviceName} in ${city}?`,
      answer: `We recommend booking at least 2 weeks in advance for standard events in ${city}. For weekends and peak seasons, 4–6 weeks ahead is ideal. We do accommodate last-minute bookings subject to availability.`,
    },
    {
      question: `Can the ${serviceName} be branded with our logo in ${city}?`,
      answer: `Absolutely. Every setup in ${city} is fully customised with your logo, brand colors, overlays, and messaging. Our design team handles everything.`,
    },
    {
      question: `Do you provide an operator for ${serviceName} events in ${city}?`,
      answer: `Yes, always. A trained operator travels to your ${city} venue, arrives 2 hours before your event, and manages everything throughout. You just focus on your guests.`,
    },
  ]
}

const localBusinessSchema = (serviceName: string, city: string, url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_CONFIG.name,
  description: `${serviceName} hire in ${city} for events.`,
  url,
  telephone: SITE_CONFIG.phone[0],
  areaServed: city,
  address: { '@type': 'PostalAddress', addressLocality: city, addressCountry: 'IN' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: SITE_CONFIG.googleRating, reviewCount: '120' },
})

export default function SeoPage({ params }: Props) {
  const city    = fromCitySlug(params.citySlug)
  const service = findServiceBySlug(params.serviceSlug)
  if (!city || !service) notFound()

  const faqs   = buildFaqs(service.name, city)
  const pageUrl = `${SITE_CONFIG.url}/hire/${params.citySlug}/${params.serviceSlug}`

  // Nearby cities for internal linking
  const nearbyCities = CITIES.filter(c => c !== city).slice(0, 5)

  // Related services for internal linking
  const relatedServices = SERVICES.slice(0, 4)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema(service.name, city, pageUrl)) }} />

      {/* Hero */}
      <div className="bg-ck-navy border-b-[3px] border-ck-blue px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs text-[#4a7090] mb-3">
            <Link href="/" className="hover:text-ck-electric transition-colors">Home</Link>
            {' › '}<Link href="/services" className="hover:text-ck-electric transition-colors">Services</Link>
            {' › '}<span className="text-ck-electric">{service.name} in {city}</span>
          </div>
          <h1 className="text-[34px] font-black text-white tracking-tight leading-tight mb-3">
            {service.name} Hire in <span className="text-ck-electric">{city}</span>
          </h1>
          <p className="text-sm text-[#6a98b5] leading-relaxed max-w-[520px] mb-6">
            Professional {service.name} for events in {city}. Fully branded, on-site operator included,
            instant social sharing for your guests. Trusted by 50+ brands across India.
          </p>
          <div className="flex flex-wrap gap-3">
            <SubServiceQuoteButton service={`${service.name} in ${city}`} />
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi! I'd like to book ${service.name} for an event in ${city}.`}
              target="_blank" rel="noopener noreferrer"
              className="btn-wa text-sm"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Why choose CK in this city */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow mb-1">Why Creative Konnect in {city}</div>
          <h2 className="text-[20px] font-black text-ck-deep tracking-tight mb-5">
            {city}'s Most Trusted {service.name} Provider
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '📍', title: `Local {city} Team`,         desc: `Our operators are based in and around ${city} — we know the venues, the traffic, and the setup requirements.` },
              { icon: '⏱',  title: 'Quote in 2 Hours',          desc: `Send us your event details and receive a full itemised quote for ${city} within 2 hours. No waiting.` },
              { icon: '✓',  title: 'Fully Branded',             desc: `Every ${service.name} is customised with your logo, brand colors and event messaging. We handle all design.` },
              { icon: '👤', title: 'On-Site Operator',          desc: `A dedicated operator arrives at your ${city} venue 2 hours early. Manages everything, troubleshoots everything.` },
              { icon: '📱', title: 'Instant Social Sharing',    desc: `Guests receive their content instantly via WhatsApp and email — shareable in seconds.` },
              { icon: '★',  title: `4.9★ Rating Across India`,  desc: `Trusted by 50+ leading brands. 500+ events delivered. Rated 4.9 stars on Google.` },
            ].map((item, i) => (
              <div key={i} className="card p-4">
                <div className="text-2xl mb-2.5">{item.icon}</div>
                <h3 className="text-sm font-bold text-ck-deep mb-1.5">{item.title.replace('{city}', city)}</h3>
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
              What is {service.name}?
            </h2>
            <p className="text-sm text-[#5a7a92] leading-relaxed mb-4">
              {service.name} is one of the most popular event engagement solutions in {city}.
              Guests love the experience, share the content instantly, and your brand gets organic
              reach with zero ad spend.
            </p>
            <p className="text-sm text-[#5a7a92] leading-relaxed mb-5">
              Creative Konnect has delivered {service.name} experiences across hundreds of events
              in {city} and across India — from intimate 50-guest dinners to 5000-person conferences.
            </p>
            <Link href={service.href} className="btn-primary text-sm">
              View Full {service.name} Details →
            </Link>
          </div>
          <div className="bg-gradient-to-br from-ck-blue to-ck-navy rounded-card-lg h-48 flex items-center justify-center relative">
            <div className="play-btn">
              <div className="w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[13px] border-l-white ml-0.5" />
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <span className="reel-tag">{service.name.toUpperCase()}</span>
              <p className="text-xs font-bold text-white mt-1">See it in action in {city}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal links: other cities */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow mb-1">Other Cities</div>
          <h2 className="text-[20px] font-black text-ck-deep tracking-tight mb-4">
            {service.name} Hire Across India
          </h2>
          <div className="flex flex-wrap gap-2">
            {nearbyCities.map(c => (
              <Link
                key={c}
                href={`/hire/${toCitySlug(c)}/${params.serviceSlug}`}
                className="flex items-center gap-2 bg-ck-sky border border-[#c0d8ee] rounded-[7px] px-3.5 py-2 text-xs font-semibold text-ck-deep hover:border-ck-blue hover:text-ck-blue transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-ck-blue" />
                {service.name} in {c}
              </Link>
            ))}
            <Link href="/contact" className="flex items-center gap-2 bg-ck-sky border border-[#c0d8ee] rounded-[7px] px-3.5 py-2 text-xs font-semibold text-ck-blue hover:bg-ck-sky transition-colors">
              + More cities
            </Link>
          </div>
        </div>
      </section>

      {/* Internal links: related services in same city */}
      <section className="section-ghost">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow mb-1">Related Services in {city}</div>
          <h2 className="text-[20px] font-black text-ck-deep tracking-tight mb-4">
            More Event Services in {city}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.filter(s => s.slug !== params.serviceSlug).map(s => (
              <Link
                key={s.slug}
                href={`/hire/${params.citySlug}/${s.slug}`}
                className="card p-4 group hover:border-ck-blue hover:-translate-y-0.5 transition-all"
              >
                <div className="text-xs font-bold text-ck-deep mb-1 group-hover:text-ck-blue transition-colors">
                  {s.name}
                </div>
                <div className="text-[10px] text-[#7aaccc]">in {city} →</div>
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
            {service.name} in {city} — Common Questions
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <CtaBanner
        title={`Book ${service.name} for your ${city} event`}
        sub={`Available across ${city} and all major venues · Quote in 2 hours · Fully branded`}
      />
    </>
  )
}
