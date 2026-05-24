import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'
import { CtaBanner } from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'About Us — Creative Konnect | Event Engagement Solutions India',
  description: "Learn about Creative Konnect — India's leading event engagement company. Our story, mission and journey from one booth to pan-India.",
  alternates: { canonical: `${SITE_CONFIG.url}/about` },
}

const STATS = [
  { num: '500+', label: '🎉 Events Delivered' },
  { num: '15+',  label: '🗺️ Cities Covered' },
  { num: '5.0★', label: '⭐ Google Rating' },
  { num: '50+',  label: '🤝 Brand Partners' },
]

const TIMELINE = [
  { year: '2018', title: 'Founded 🚀',   desc: 'First 360 booth launched in Pune. First 10 events delivered.',      current: false },
  { year: '2019', title: 'Expanded 📈',  desc: 'Added Mirror Booth, Glambot & GIF stations. Grew to 3 cities.',          current: false },
  { year: '2021', title: 'AI & VR 🤖',   desc: 'Launched AI Celebrity Booth & VR Games. 100+ events milestone.',         current: false },
  { year: '2023', title: 'Pan India 🇮🇳', desc: 'Reached 10 cities. AR Mind Reader & Mosaic Wall launched.',             current: false },
  { year: '2025', title: '500+ Events ✨', desc: '15+ cities, 50+ brand partners, 5.0★ Google rating.',                  current: true  },
]

const WHY = [
  { emoji: '🎯', title: 'We Obsess Over Details',  desc: 'From branded overlays to exact booth positioning — every detail is planned. Your guests will notice the difference.' },
  { emoji: '💡', title: 'Technology Meets Warmth', desc: 'We bring the most advanced event tech, but our team ensures every guest feels personally attended to.' },
  { emoji: '🎪', title: 'Full-Service, No Stress', desc: 'One call covers everything — equipment, branding, setup, operator, social sharing and breakdown. You focus on your event.' },
]

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  description: SITE_CONFIG.description,
  foundingDate: '2018',
  foundingLocation: 'Pune, India',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: '10-50' },
  areaServed: 'IN',
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      {/* Hero */}
      <div className="bg-ck-navy border-b-[3px] border-ck-blue px-8 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs text-[#5a8aaa] mb-3">
              <Link href="/" className="hover:text-ck-electric transition-colors">Home</Link>
              {' › '}<span className="text-ck-electric">About Us</span>
            </div>
            <h1 className="text-[36px] font-black text-white tracking-tight leading-tight mb-3">
              We Turn Events Into<br />
              <span className="text-ck-electric">Experiences</span> People<br />
              Never Forget
            </h1>
            <p className="text-sm text-[#6a98b5] leading-relaxed mb-6">
              Creative Konnect is India's leading event engagement company — bringing
              cutting-edge photo booths, AI experiences, VR games and custom merch
              to events of every scale.
            </p>
            <div className="flex gap-3">
              <Link href="/services" className="btn-primary text-sm">Our Services →</Link>
              <Link href="/gallery"  className="btn-ghost  text-sm">View Gallery</Link>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3">
            {STATS.map(s => (
              <div key={s.label} className="bg-ck-blue/12 border border-ck-electric/20 rounded-[8px] p-5 text-center">
                <div className="text-3xl font-black text-ck-electric leading-none">{s.num}</div>
                <div className="text-[10px] text-[#6a98b5] mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative bg-gradient-to-br from-ck-blue to-ck-navy rounded-card-lg min-h-[220px] flex flex-col justify-end p-6 overflow-hidden">
            <div className="absolute top-4 left-5 text-[64px] font-black text-white/10 leading-none select-none">2018</div>
            <span className="inline-block bg-ck-electric/20 text-ck-electric text-[9px] font-bold px-2.5 py-1 rounded-full mb-2 uppercase tracking-wide">
              Founded in Pune
            </span>
            <div className="text-base font-black text-white">Started with one booth.<br />Built a movement.</div>
            <div className="text-xs text-white/50 mt-1">From a single 360 booth to India's most trusted event tech company.</div>
          </div>

          <div>
            <div className="eyebrow mb-1">Our Story</div>
            <h2 className="text-[20px] font-black text-ck-deep tracking-tight mb-4">How Creative Konnect Began</h2>
            <p className="text-sm text-[#5a7a92] leading-relaxed mb-3">
              Creative Konnect was founded in 2018 in Pune with a single 360 video booth
              and a belief that every event deserves a moment guests will share and remember forever.
            </p>
            <p className="text-sm text-[#5a7a92] leading-relaxed mb-4">
              What started as a small photo booth rental quickly grew as brands, wedding planners,
              and corporate event managers discovered the power of immersive, shareable experiences.
              We expanded into AI booths, AR experiences, VR games, and custom merch — all while
              keeping quality and service at the centre of everything.
            </p>
            <div className="border-l-[3px] border-ck-blue bg-ck-sky rounded-r-[8px] px-4 py-3.5">
              <p className="text-sm font-semibold text-ck-deep leading-relaxed italic">
                "Our goal has always been simple — make every guest feel like the star of the event.
                When guests share their experience, your brand travels with them."
              </p>
              <p className="text-[11px] text-[#4a6a80] mt-2 font-semibold">— Founder, Creative Konnect</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-ghost">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow mb-1">What Drives Us</div>
          <h2 className="text-[20px] font-black text-ck-deep tracking-tight mb-5">Mission, Vision &amp; Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-ck-navy border border-ck-blue rounded-card-lg p-5">
              <div className="w-9 h-9 rounded-[8px] bg-ck-blue/20 flex items-center justify-center mb-3 text-lg">🎯</div>
              <div className="text-sm font-black text-white mb-2">Our Mission</div>
              <p className="text-xs text-[#6a98b5] leading-relaxed">
                To create immersive event experiences that make every guest feel special — and give
                every brand a story worth sharing. We bring the most innovative event technology
                to India, at every price point.
              </p>
            </div>
            <div className="bg-ck-blue rounded-card-lg p-5">
              <div className="w-9 h-9 rounded-[8px] bg-white/20 flex items-center justify-center mb-3 text-lg">🌐</div>
              <div className="text-sm font-black text-white mb-2">Our Vision</div>
              <p className="text-xs text-white/80 leading-relaxed">
                To be the most trusted event engagement partner across every city in India —
                known not just for the technology we bring, but for the memories we help create.
              </p>
            </div>
            <div className="card p-5">
              <div className="w-9 h-9 rounded-[8px] bg-ck-sky flex items-center justify-center mb-3 text-lg">❤️</div>
              <div className="text-sm font-black text-ck-deep mb-2">Our Values</div>
              <div className="space-y-1.5">
                {['Guest-first always', 'Flawless execution', 'Transparent pricing', 'Creative courage', 'On-time, every time', 'Technology with a human touch'].map(v => (
                  <div key={v} className="flex items-center gap-2 text-xs text-[#4a6a80]">
                    <div className="w-1.5 h-1.5 rounded-full bg-ck-blue flex-shrink-0" />{v}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow-light mb-1">Our Journey</div>
          <h2 className="text-[20px] font-black text-white tracking-tight mb-8">From One Booth to Pan India</h2>
          <div className="relative flex gap-0">
            <div className="absolute top-[18px] left-0 right-0 h-[2px] bg-[#1e3a52]" />
            {TIMELINE.map((t) => (
              <div key={t.year} className="flex-1 relative pt-9 pr-3">
                <div className={`absolute top-3 left-0 w-3 h-3 rounded-full border-2 border-ck-navy z-10 ${t.current ? 'bg-ck-electric' : 'bg-ck-blue'}`} />
                <div className={`text-xs font-black mb-1 ${t.current ? 'text-white' : 'text-ck-electric'}`}>{t.year}</div>
                <div className={`text-xs font-bold mb-1 ${t.current ? 'text-white' : 'text-[#c8dce9]'}`}>{t.title}</div>
                <div className="text-[10px] text-[#6a98b5] leading-relaxed">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-ghost">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow mb-1">Why Creative Konnect</div>
          <h2 className="text-[20px] font-black text-ck-deep tracking-tight mb-5">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {WHY.map(w => (
              <div key={w.title} className="card p-5">
                <div className="text-[36px] leading-none mb-3">{w.emoji}</div>
                <h3 className="text-sm font-bold text-ck-deep mb-2">{w.title}</h3>
                <p className="text-xs text-[#5a7a92] leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Ready to work with us?" sub="Tell us about your event — we'll have a quote ready in 2 hours." />
    </>
  )
}
