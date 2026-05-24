import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SERVICES, SUB_SERVICES, SITE_CONFIG, EVENT_TYPES } from '@/lib/constants'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { FaqAccordion } from '@/components/ui/FaqAccordion'

interface Props { params: { serviceSlug: string } }

export async function generateStaticParams() {
  return SERVICES.map(s => ({ serviceSlug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES.find(s => s.slug === params.serviceSlug)
  if (!service) return {}
  return {
    title: `${service.name} for Events India | Creative Konnect`,
    description: `Hire ${service.name} for your event across India. Fully branded, on-site operator, instant social sharing. Get a free quote in 2 hours.`,
    alternates: { canonical: `${SITE_CONFIG.url}/services/${params.serviceSlug}` },
  }
}

const BENEFITS: Record<string, { title: string; desc: string }[]> = {
  'photo-video-booths': [
    { title: 'Instant Social Sharing', desc: 'Direct share to WhatsApp, Instagram & email in under 30 seconds.' },
    { title: '100% Custom Branded', desc: 'Every booth branded with your logo, colors and messaging.' },
    { title: 'Quick Setup', desc: 'All booths set up in under 60 minutes with dedicated operator.' },
    { title: 'Any Event Size', desc: 'From 50 guests to 5000+ — we scale with your event.' },
  ],
  'ai-tech-experiences': [
    { title: 'Cutting-Edge AI', desc: 'Real-time AI & AR that wows guests and drives sharing.' },
    { title: 'Fully Managed', desc: 'Our tech team handles all setup, operation and troubleshooting.' },
    { title: 'Brand Integration', desc: 'All experiences branded with your logos and messaging.' },
    { title: 'Viral Content', desc: 'AI content shared 4x more than traditional photo booths.' },
  ],
  'games': [
    { title: 'High Engagement', desc: 'Games keep guests engaged for 3x longer than passive entertainment.' },
    { title: 'All Ages', desc: 'Suitable for corporate teams, college students, families and more.' },
    { title: 'Branded Screens', desc: 'All game screens branded with your event and company identity.' },
    { title: 'No Technical Skill', desc: 'Our operator manages everything — guests just play and enjoy.' },
  ],
}

const DEFAULT_BENEFITS = [
  { title: 'Fully Managed', desc: 'Complete setup, operation and breakdown handled by our team.' },
  { title: '100% Custom', desc: 'Every element branded and customised to your event.' },
  { title: 'Quick Turnaround', desc: 'Quote within 2 hours, confirmation within 24 hours.' },
  { title: 'Pan India', desc: 'Available across 15+ cities. We travel for large events.' },
]

const DEFAULT_FAQS = [
  { q: 'How far in advance should I book?',           a: 'We recommend booking at least 2 weeks in advance for standard events, and 4-6 weeks for large corporate events or weddings. However, we can accommodate last-minute bookings subject to availability.' },
  { q: 'Do you provide an operator at the event?',    a: 'Yes, always. Every service comes with a trained on-site operator who handles setup, operation, and pack-down. You just focus on your event.' },
  { q: 'Can the services be custom branded?',         a: 'Absolutely. All our services are fully customisable with your logo, brand colors, custom overlays, and messaging. We handle all the design work.' },
  { q: 'Which cities do you operate in?',             a: 'We operate across Hyderabad, Mumbai, Delhi NCR, Bangalore, Chennai, Pune, Jaipur, Ahmedabad, and many more. Contact us for your specific city.' },
  { q: 'What is included in the quote?',              a: 'All quotes include equipment, branding design, on-site operator, technical setup and breakdown. We provide fully transparent, itemised quotes with zero hidden costs.' },
]

function PlayIcon() {
  return (
    <div className="play-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65%]">
      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[11px] border-l-white ml-0.5" />
    </div>
  )
}

export default function ServiceCategoryPage({ params }: Props) {
  const service = SERVICES.find(s => s.slug === params.serviceSlug)
  if (!service) notFound()

  const subServices = SUB_SERVICES[params.serviceSlug] || []
  const benefits    = BENEFITS[params.serviceSlug] || DEFAULT_BENEFITS
  const faqs        = DEFAULT_FAQS

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    areaServed: 'IN',
    url: `${SITE_CONFIG.url}/services/${params.serviceSlug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <div className="bg-ck-navy border-b-[3px] border-ck-blue px-8 py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-6">
          <div className="max-w-[520px]">
            <div className="text-xs text-[#4a7090] mb-3">
              <Link href="/" className="hover:text-ck-electric transition-colors">Home</Link>
              {' › '}<Link href="/services" className="hover:text-ck-electric transition-colors">Services</Link>
              {' › '}<span className="text-ck-electric">{service.name}</span>
            </div>
            <h1 className="text-[36px] font-black text-white tracking-tight leading-tight mb-3">
              {service.name}
            </h1>
            <p className="text-sm text-[#6a98b5] leading-relaxed">
              {subServices.length} booth types to capture, share and celebrate every moment.
              From 360° viral videos to Hollywood-style Glambot — we have the perfect option for every event.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            {[
              { num: `${subServices.length}`, label: 'Options' },
              { num: '360°', label: 'Video' },
              { num: 'AI', label: 'Powered' },
            ].map(s => (
              <div key={s.label} className="bg-ck-blue/12 border border-ck-electric/20 rounded-[8px] p-3.5 text-center min-w-[72px]">
                <div className="text-xl font-black text-ck-electric">{s.num}</div>
                <div className="text-[10px] text-[#4a7090] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="bg-white border-b border-[#e8f0f8] px-8 py-3.5 flex gap-2 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex gap-2 w-full">
          <button className="ftab active text-xs">All</button>
          {subServices.map(s => (
            <Link key={s.slug} href={`/services/${params.serviceSlug}/${s.slug}`} className="ftab text-xs whitespace-nowrap">
              {s.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Sub-services grid */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow mb-1">All Options</div>
          <h2 className="text-[20px] font-black text-ck-deep tracking-tight mb-1">Choose Your Experience</h2>
          <p className="text-xs text-[#7aaccc] mb-5">Each option is fully customisable with your branding, backdrop, and instant sharing to social media.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subServices.map((sub, i) => (
              <Link
                key={sub.slug}
                href={`/services/${params.serviceSlug}/${sub.slug}`}
                className="card group hover:border-ck-blue hover:-translate-y-0.5 transition-all duration-150"
              >
                <div className={`h-24 relative bg-gradient-to-br ${i % 3 === 0 ? 'from-ck-blue to-ck-navy' : i % 3 === 1 ? 'from-ck-electric to-ck-deep' : 'from-ck-deep to-ck-navy'}`}>
                  {i === 0 && <span className="absolute top-2 right-2 badge-new">Top Pick</span>}
                  {i === 1 && <span className="absolute top-2 right-2 badge-new">Popular</span>}
                  <div className="absolute bottom-2 left-3 text-[8px] text-white/50 font-bold uppercase tracking-wider">
                    {sub.name}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-ck-deep mb-1.5 group-hover:text-ck-blue transition-colors">
                    {sub.name}
                  </h3>
                  <p className="text-[11px] text-[#7aaccc] leading-relaxed mb-3">
                    Fully branded · Instant sharing · On-site operator included
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {EVENT_TYPES.slice(0, 3).map(et => (
                      <span key={et} className="badge">{et}</span>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-ck-blue group-hover:text-ck-electric transition-colors">
                    View full details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-ghost">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow mb-1">Why Our {service.name}</div>
          <h2 className="text-[20px] font-black text-ck-deep tracking-tight mb-5">Built for Engagement &amp; Sharing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="card p-4">
                <div className="w-9 h-9 rounded-[8px] bg-ck-sky flex items-center justify-center mb-3">
                  <span className="text-ck-blue font-bold text-sm">{i + 1}</span>
                </div>
                <h3 className="text-xs font-bold text-ck-deep mb-1.5">{b.title}</h3>
                <p className="text-[11px] text-[#7aaccc] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event fit */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow mb-1">Perfect For</div>
          <h2 className="text-[20px] font-black text-ck-deep tracking-tight mb-4">Which Events Are These Right For?</h2>
          <div className="flex flex-wrap gap-2">
            {EVENT_TYPES.map(et => (
              <div key={et} className="flex items-center gap-2 bg-ck-sky border border-[#c0d8ee] rounded-[8px] px-3.5 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-ck-blue" />
                <span className="text-xs font-semibold text-ck-deep">{et}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-5">
            <div>
              <div className="eyebrow-light">See It In Action</div>
              <h2 className="text-[20px] font-black text-white tracking-tight">Gallery &amp; Reels</h2>
            </div>
            <Link href="/gallery" className="text-xs font-bold text-ck-electric hover:text-white transition-colors">View all →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`relative rounded-card overflow-hidden cursor-pointer ${i === 0 ? 'md:col-span-2' : ''}`} style={{ minHeight: 140 }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${i % 2 === 0 ? 'from-ck-blue to-ck-navy' : 'from-ck-electric to-ck-deep'}`} />
                <PlayIcon />
                <div className="absolute inset-0 flex flex-col justify-end p-3">
                  <span className="reel-tag">{service.name.toUpperCase()}</span>
                  <p className="text-xs font-bold text-white">Event Highlight {i + 1}</p>
                  <p className="text-[10px] text-white/40">India · 2024</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ */}
      <section className="section-ghost">
        <div className="max-w-7xl mx-auto max-w-3xl">
          <div className="eyebrow mb-1">Common Questions</div>
          <h2 className="text-[20px] font-black text-ck-deep tracking-tight mb-5">
            FAQs — {service.name}
          </h2>
          <FaqAccordion items={faqs.map(f => ({ question: f.q, answer: f.a }))} />
        </div>
      </section>

      <CtaBanner title={`Ready to book ${service.name} for your event?`} sub="Tell us your date, venue and guest count — quote in 2 hours." />
    </>
  )
}
