import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SERVICES, SUB_SERVICES, SITE_CONFIG, EVENT_TYPES } from '@/lib/constants'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CtaBanner }           from '@/components/sections/CtaBanner'
import { FaqAccordion }        from '@/components/ui/FaqAccordion'
import { SubServiceQuoteButton } from '@/components/ui/SubServiceQuoteButton'
import { StickyCtaBar }        from '@/components/ui/StickyCtaBar'

interface Props { params: { serviceSlug: string; subServiceSlug: string } }

export async function generateStaticParams() {
  const params: { serviceSlug: string; subServiceSlug: string }[] = []
  for (const [serviceSlug, subs] of Object.entries(SUB_SERVICES)) {
    for (const sub of subs) {
      params.push({ serviceSlug, subServiceSlug: sub.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const sub = SUB_SERVICES[params.serviceSlug]?.find(s => s.slug === params.subServiceSlug)
  const svc = SERVICES.find(s => s.slug === params.serviceSlug)
  if (!sub || !svc) return {}
  return {
    title: `${sub.name} Hire India | ${svc.name} | Creative Konnect`,
    description: `Book ${sub.name} for your event across India. Fully branded, on-site operator, instant social sharing. Get a free quote in 2 hours.`,
    alternates: { canonical: `${SITE_CONFIG.url}/services/${params.serviceSlug}/${params.subServiceSlug}` },
  }
}

const USE_CASES = [
  { emoji: '💍', title: 'Weddings & Sangeets',     desc: 'Create memorable slow-mo reels of guests. Perfect content for wedding hashtags.' },
  { emoji: '🏢', title: 'Corporate Events',         desc: 'Brand-overlaid content with company logo. Great for launches, town halls and team days.' },
  { emoji: '🎯', title: 'Brand Activations',        desc: 'Drive social impressions with branded content. Guests become organic brand ambassadors.' },
  { emoji: '🏆', title: 'Award Nights & Galas',     desc: 'Red-carpet style captures for winners and attendees. Elevates your event\'s prestige.' },
  { emoji: '🎓', title: 'College Fests',             desc: 'High-energy shareable content for students. Drives massive organic reach on social.' },
  { emoji: '🎪', title: 'BTL & Exhibitions',         desc: 'Draw crowds to your stall and generate leads while guests enjoy the experience.' },
]

const DEFAULT_FAQS = [
  { question: 'How much space is needed for setup?',            answer: 'Most setups require a 10×10 ft area. We conduct a venue assessment before the event to confirm the setup is feasible and safe.' },
  { question: 'Can it be fully branded with our logo?',         answer: 'Absolutely. We add your logo, event name, custom overlays, and colors to everything. Your guests share branded content organically.' },
  { question: 'How quickly do guests receive their content?',   answer: 'Within 30 seconds of capture, guests receive their content via WhatsApp, SMS, or email for instant sharing.' },
  { question: 'Is an operator included?',                       answer: 'Always. A trained operator arrives 2 hours before your event and manages everything throughout.' },
  { question: 'What cities are you available in?',              answer: 'We operate across Hyderabad, Mumbai, Delhi NCR, Bangalore, Chennai, Pune, Jaipur and more. Contact us for other cities.' },
  { question: 'What does the price include?',                   answer: 'All quotes include equipment, branding design, on-site operator, setup and breakdown. Fully transparent — no hidden costs.' },
]

const CLIENT_LOGOS = ['TATA','GOOGLE','HDFC','AMAZON','NIKE','HYATT']

const WHY_CK = [
  { title: '500+ Events Delivered', desc: 'From 50-guest dinners to 10,000-person conferences across India.' },
  { title: 'On-Time, Every Time',   desc: 'Dedicated operator arrives 2 hours before your event. Zero delays.' },
  { title: '100% Custom Branded',   desc: 'Every element designed to your brand in 48 hours.' },
  { title: '24/7 Support',          desc: 'WhatsApp support before, during, and after your event.' },
]

const TRUST_BADGES = ['500+ Events Completed','4.9★ Google Rating','ISO Certified Equipment','Insured & Licensed','Pan India Coverage','2-Hour Quote Response']

function PlayIcon() {
  return (
    <div className="play-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65%]">
      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[11px] border-l-white ml-0.5" />
    </div>
  )
}

export default function SubServicePage({ params }: Props) {
  const service = SERVICES.find(s => s.slug === params.serviceSlug)
  const sub     = SUB_SERVICES[params.serviceSlug]?.find(s => s.slug === params.subServiceSlug)
  if (!service || !sub) notFound()

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: sub.name,
    description: `Hire ${sub.name} for your event in India.`,
    brand: { '@type': 'Brand', name: SITE_CONFIG.name },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: SITE_CONFIG.name },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE_CONFIG.googleRating,
      reviewCount: '120',
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      {/* Hero */}
      <div className="bg-ck-navy border-b-[3px] border-ck-blue px-8 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left */}
          <div>
            <div className="text-xs text-[#4a7090] mb-3">
              <Link href="/" className="hover:text-ck-electric transition-colors">Home</Link>
              {' › '}<Link href="/services" className="hover:text-ck-electric transition-colors">Services</Link>
              {' › '}<Link href={`/services/${params.serviceSlug}`} className="hover:text-ck-electric transition-colors">{service.name}</Link>
              {' › '}<span className="text-ck-electric">{sub.name}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-ck-electric/15 border border-ck-electric/30 text-ck-electric text-[9px] font-bold px-2.5 py-1 rounded-full mb-3 uppercase tracking-wide">
              ★ Most Popular
            </div>
            <h1 className="text-[36px] font-black text-white tracking-tight leading-tight mb-3">
              {sub.name}<br /><span className="text-ck-electric">Hire in India</span>
            </h1>
            <p className="text-sm text-[#6a98b5] leading-relaxed mb-5">
              Slow-motion, full-surround video capture that guests instantly share on Instagram &amp; WhatsApp.
              The most viral content generator at any event.
            </p>
            <div className="flex flex-wrap gap-3">
              <SubServiceQuoteButton service={sub.name} />
              <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-wa text-sm">
                💬 WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right: demo video + stats */}
          <div className="flex flex-col gap-3">
            <div className="relative rounded-card overflow-hidden h-40 bg-gradient-to-br from-ck-blue to-ck-navy cursor-pointer border border-[#1e3a52]">
              <PlayIcon />
              <div className="absolute bottom-3 left-3 text-xs font-semibold text-white/60">{sub.name} Demo Reel</div>
              <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">2:34</div>
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {[{ n: '360°', l: 'Video Capture' }, { n: '4K', l: 'Resolution' }, { n: '30s', l: 'Share Time' }].map(s => (
                <div key={s.l} className="bg-ck-blue/12 border border-ck-electric/20 rounded-[8px] p-3 text-center">
                  <div className="text-lg font-black text-ck-electric">{s.n}</div>
                  <div className="text-[9px] text-[#4a7090] mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Use cases */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow mb-1">Perfect For</div>
          <h2 className="text-[20px] font-black text-ck-deep tracking-tight mb-1">Use Cases &amp; Event Types</h2>
          <p className="text-xs text-[#7aaccc] mb-5">Works at virtually every event — here's where it shines most.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {USE_CASES.map((uc, i) => (
              <div key={i} className="card p-4">
                <div className="text-2xl mb-2.5">{uc.emoji}</div>
                <h3 className="text-sm font-bold text-ck-deep mb-1.5">{uc.title}</h3>
                <p className="text-[11px] text-[#7aaccc] leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reels gallery */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow-light mb-1">See It In Action</div>
          <h2 className="text-[20px] font-black text-white tracking-tight mb-1">{sub.name} Reels &amp; Gallery</h2>
          <p className="text-xs text-[#4a7090] mb-5">Real footage from actual events across India.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {['Corporate · Hyderabad','Wedding · Mumbai','Brand Activation · Delhi','Award Night · Pune'].map((label, i) => (
              <div key={i} className={`relative rounded-card overflow-hidden cursor-pointer ${i === 0 ? 'md:col-span-2' : ''}`} style={{ minHeight: 140 }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${i % 2 === 0 ? 'from-ck-blue to-ck-navy' : 'from-ck-electric to-ck-deep'}`} />
                <PlayIcon />
                <div className="absolute inset-0 flex flex-col justify-end p-3">
                  <span className="reel-tag">{sub.name.toUpperCase()}</span>
                  <p className="text-xs font-bold text-white">{label}</p>
                  {i === 0 && <p className="text-[10px] text-white/40">1.2M views</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CK + trust + client logos */}
      <section className="section-dark" style={{ paddingTop: 0 }}>
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow-light mb-1">Why Choose Us</div>
          <h2 className="text-[20px] font-black text-white tracking-tight mb-5">Why Creative Konnect?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {WHY_CK.map((w, i) => (
              <div key={i} className="card-dark rounded-card p-4">
                <div className="w-8 h-8 rounded-[7px] bg-ck-blue/20 flex items-center justify-center mb-3">
                  <span className="text-ck-electric font-black text-xs">{i + 1}</span>
                </div>
                <h3 className="text-xs font-bold text-white mb-1.5">{w.title}</h3>
                <p className="text-[11px] text-[#4a7090] leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {TRUST_BADGES.map(b => (
              <div key={b} className="flex items-center gap-2 bg-white/5 border border-[#1e3a52] rounded-[7px] px-3 py-2">
                <div className="w-4 h-4 rounded-full bg-ck-electric/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-ck-electric text-[8px] font-bold">✓</span>
                </div>
                <span className="text-[11px] font-semibold text-[#c8dce9]">{b}</span>
              </div>
            ))}
          </div>

          {/* Client logos */}
          <div className="eyebrow-light mb-3">Brands That Trust Us</div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
            {CLIENT_LOGOS.map(c => (
              <div key={c} className="bg-white/5 border border-[#1e3a52] rounded-[7px] h-12 flex items-center justify-center">
                <span className="text-[11px] font-bold text-[#2a4a60]">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Related blog */}
      <section className="section-ghost">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow mb-1">Related Reading</div>
          <h2 className="text-[20px] font-black text-ck-deep tracking-tight mb-5">{sub.name} Guides &amp; Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { cat: sub.name, title: `${sub.name} vs Glambot: Which is Right for Your Event?`,    read: '8 min' },
              { cat: 'How It Works', title: `How ${sub.name} Creates Viral Social Media Content`,   read: '5 min' },
              { cat: 'Pricing Guide', title: `${sub.name} Hire Cost in India — What to Expect`,     read: '4 min' },
            ].map((p, i) => (
              <Link key={i} href="/blog" className="card group hover:border-ck-blue transition-all duration-150">
                <div className={`h-16 bg-gradient-to-br ${i === 0 ? 'from-ck-blue to-ck-navy' : i === 1 ? 'from-ck-electric to-ck-deep' : 'from-ck-deep to-ck-navy'}`} />
                <div className="p-4">
                  <div className="text-[9px] font-bold text-ck-blue uppercase tracking-[1.5px] mb-1.5">{p.cat}</div>
                  <h3 className="text-xs font-bold text-ck-deep leading-snug mb-1.5 group-hover:text-ck-blue transition-colors">{p.title}</h3>
                  <div className="text-[10px] text-[#aac0d0]">{p.read} read</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-light">
        <div className="max-w-3xl mx-auto">
          <div className="eyebrow mb-1">FAQs</div>
          <h2 className="text-[20px] font-black text-ck-deep tracking-tight mb-5">{sub.name} — Frequently Asked Questions</h2>
          <FaqAccordion items={DEFAULT_FAQS} />
        </div>
      </section>

      {/* Sticky CTA */}
      <CtaBanner title={`Book the ${sub.name} for your event`} sub="Available across India · 2-hour quote response · Fully branded setup" />
      <StickyCtaBar service={sub.name} />
    </>
  )
}
