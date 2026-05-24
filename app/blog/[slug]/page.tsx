import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'
import { FaqAccordion }        from '@/components/ui/FaqAccordion'
import { SubServiceQuoteButton } from '@/components/ui/SubServiceQuoteButton'
import { CtaBanner }            from '@/components/sections/CtaBanner'
import { ScrollProgressBar }    from '@/components/ui/ScrollProgressBar'
import { StickyCtaBar }         from '@/components/ui/StickyCtaBar'
import { ShareButtons }         from '@/components/ui/ShareButtons'

interface Props { params: { slug: string } }

// In production this fetches from Sanity — stub data for now
const ARTICLES: Record<string, { title: string; cat: string; excerpt: string; read: number; author: { name: string; role: string; initials: string; color: string }; gradient: string }> = {
  '360-booth-vs-glambot': {
    title:   '360 Video Booth vs Glambot: Which is Right for Your Event in 2025?',
    cat:     'Photo Booths',
    excerpt: 'A comprehensive breakdown of both booths — costs, which events they suit, viral content differences, and how to make the final call.',
    read:    8,
    author:  { name: 'Sneha Rao', role: 'Head of Operations · Creative Konnect', initials: 'SR', color: '#1A7FD4' },
    gradient: 'from-ck-blue to-ck-navy',
  },
}

const FALLBACK = {
  title: 'Event Planning Guide',
  cat: 'Blog',
  excerpt: 'Expert advice on creating unforgettable event experiences.',
  read: 5,
  author: { name: 'Creative Konnect', role: 'Event Experts', initials: 'CK', color: '#1A7FD4' },
  gradient: 'from-ck-blue to-ck-navy',
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = ARTICLES[params.slug] || FALLBACK
  return {
    title: `${article.title} | Creative Konnect Blog`,
    description: article.excerpt,
    alternates: { canonical: `${SITE_CONFIG.url}/blog/${params.slug}` },
  }
}

const ARTICLE_FAQS = [
  { question: 'Which booth is better for social media?',     answer: 'The 360 Video Booth typically generates more viral content due to its dramatic all-around perspective. However, Glambot content has higher perceived quality and works exceptionally well for premium events.' },
  { question: 'Which is more expensive to hire?',            answer: 'Glambot hire is generally 30-40% more expensive than a 360 booth due to the robotic arm equipment and specialist operator required. Contact us for a transparent quote for both.' },
  { question: 'Can I have both at my event?',                answer: 'Absolutely. Many large corporate events and luxury weddings book both. They complement each other perfectly — the 360 booth for high-volume guest throughput and the Glambot for VIP moments.' },
  { question: 'How far in advance do I need to book?',       answer: 'We recommend 2-4 weeks for standard bookings. For weekends and peak wedding season (Oct-Feb), book 6-8 weeks ahead to guarantee availability.' },
]

const RELATED = [
  { slug: '360-booth-cost-india',         title: '360 Booth Cost in India — 2025 Pricing Guide',      gradient: 'from-ck-blue to-ck-navy' },
  { slug: 'top-5-photo-booths-weddings',  title: 'Top 5 Photo Booth Ideas for Indian Weddings',       gradient: 'from-ck-electric to-ck-deep' },
  { slug: 'ai-celebrity-booths-corporate',title: 'How AI Booths Drive Social Media at Brand Events',  gradient: 'from-ck-deep to-ck-navy' },
]

export default function BlogArticlePage({ params }: Props) {
  const article = ARTICLES[params.slug] || FALLBACK

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    author: { '@type': 'Person', name: article.author.name },
    publisher: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    url: `${SITE_CONFIG.url}/blog/${params.slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <ScrollProgressBar />

      {/* Article hero */}
      <div className="bg-ck-navy border-b-[3px] border-ck-blue px-8 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs text-[#4a7090] mb-4">
            <Link href="/" className="hover:text-ck-electric transition-colors">Home</Link>
            {' › '}<Link href="/blog" className="hover:text-ck-electric transition-colors">Blog</Link>
            {' › '}<span className="text-ck-electric">{article.cat}</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-ck-electric/15 border border-ck-electric/30 text-ck-electric text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
              {article.cat}
            </span>
            <span className="text-xs text-[#4a7090]">{article.read} min read</span>
            <div className="w-1 h-1 rounded-full bg-[#1e3a52]" />
            <span className="text-xs text-[#4a7090]">January 2025</span>
          </div>
          <h1 className="text-[28px] font-black text-white leading-tight tracking-tight mb-3 max-w-[600px]">
            {article.title}
          </h1>
          <p className="text-sm text-[#6a98b5] leading-relaxed max-w-[520px] mb-5">{article.excerpt}</p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center font-black text-white text-sm" style={{ background: article.author.color }}>
              {article.author.initials}
            </div>
            <div>
              <div className="text-xs font-bold text-[#c8dce9]">{article.author.name}</div>
              <div className="text-[10px] text-[#4a7090]">{article.author.role}</div>
            </div>
            <div className="ml-auto flex gap-2">
              <button className="text-xs font-semibold text-[#7aaccc] bg-white/5 border border-[#1e3a52] px-3 py-1.5 rounded-[6px] hover:text-white transition-colors">
                Share →
              </button>
              <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="text-xs font-bold text-white bg-brand-wa px-3 py-1.5 rounded-[6px] hover:bg-[#1db954] transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Article body + sidebar */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-0">

        {/* Main content */}
        <div className="px-8 py-8 bg-white border-r border-[#e8f0f8]">
          {/* Feature image/video */}
          <div className={`relative h-48 rounded-card overflow-hidden bg-gradient-to-br ${article.gradient} mb-6 cursor-pointer flex items-center justify-center`}>
            <div className="play-btn">
              <div className="w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[13px] border-l-white ml-0.5" />
            </div>
            <div className="absolute bottom-3 left-4 text-xs text-white/50">360 Video Booth vs Glambot — Event Footage</div>
          </div>

          <h2 className="text-base font-black text-ck-deep tracking-tight mb-3">What Is a 360 Video Booth?</h2>
          <p className="text-sm text-[#5a7a92] leading-relaxed mb-4">
            A 360 Video Booth is a rotating arm platform where guests stand on a raised platform while a camera arm sweeps around them, capturing a dramatic slow-motion video from every angle. The output is a 15–30 second cinematic reel that guests receive instantly on their phone.
          </p>
          <p className="text-sm text-[#5a7a92] leading-relaxed mb-5">
            The 360 booth is the single most shared content format at events in India right now — outperforming traditional photo booths by 4x on social media engagement metrics.
          </p>

          <div className="border-l-[3px] border-ck-blue bg-ck-sky rounded-r-[8px] px-4 py-3.5 mb-5">
            <p className="text-sm font-semibold text-ck-deep leading-relaxed italic">
              "Our 360 booth reel from the product launch hit 1.2 million views on Instagram within 48 hours — without a single rupee of paid promotion."
            </p>
            <p className="text-[10px] text-[#7aaccc] mt-2">— Marketing Head, Tech Company · Hyderabad</p>
          </div>

          <h2 className="text-base font-black text-ck-deep tracking-tight mb-3">What Is a Glambot?</h2>
          <p className="text-sm text-[#5a7a92] leading-relaxed mb-5">
            A Glambot is a robotic arm camera system that tracks subjects in ultra-high-definition slow motion. Originally developed for Hollywood red carpet events, the Glambot has become the premium choice for luxury weddings, award nights, and high-profile corporate galas in India.
          </p>

          <h2 className="text-base font-black text-ck-deep tracking-tight mb-3">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr>
                  {['Feature', '360 Video Booth', 'Glambot'].map(h => (
                    <th key={h} className="bg-ck-sky text-ck-deep font-bold p-2.5 text-left border border-[#dceaf5]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Output',          '360° slow-mo reel',        'Cinematic slow-mo video'],
                  ['Best for',        'Corporate, brands, fests',  'Weddings, galas, awards'],
                  ['Space needed',    '12×12 ft platform',         '15×10 ft area'],
                  ['Sharing speed',   '30 seconds',                '2–3 minutes'],
                  ['Viral potential', 'Very high',                  'High (premium feel)'],
                  ['Guest capacity',  '2–6 per shot',              '1–3 per shot'],
                ].map(([f, a, b], i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-ck-ghost' : ''}>
                    <td className="p-2.5 border border-[#dceaf5] font-semibold text-ck-deep">{f}</td>
                    <td className="p-2.5 border border-[#dceaf5] text-[#5a7a92]">{a}</td>
                    <td className="p-2.5 border border-[#dceaf5] text-[#5a7a92]">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-base font-black text-ck-deep tracking-tight mb-3">Which Should You Choose?</h2>
          <p className="text-sm text-[#5a7a92] leading-relaxed mb-5">
            If your primary goal is social media reach and maximum guest participation — choose the 360 booth. If you're hosting a premium event where quality and prestige matter more than volume — the Glambot is unmatched.
          </p>

          {/* Tags + share */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-[#e8f0f8]">
            {['360 Video Booth', 'Glambot', 'Photo Booth Guide', 'Event Planning', 'Corporate Events'].map(t => (
              <span key={t} className="badge">{t}</span>
            ))}
          </div>
          <ShareButtons title={article.title} slug={params.slug} />
        </div>

        {/* Sidebar */}
        <div className="px-5 py-6 bg-ck-ghost space-y-4">
          {/* Quote CTA */}
          <div className="bg-ck-navy border border-ck-blue rounded-card p-4">
            <span className="text-[8px] font-bold text-ck-electric uppercase tracking-[1.5px] mb-2 block">Get A Quote</span>
            <h3 className="text-sm font-black text-white mb-1.5 leading-snug">Book a Booth for your event</h3>
            <p className="text-[10px] text-[#4a7090] mb-3 leading-relaxed">Available across India · Quote in 2 hours · Fully branded setup</p>
            <SubServiceQuoteButton service="Photo Booth" />
            <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="btn-wa w-full justify-center text-xs mt-2">
              💬 WhatsApp Us
            </a>
          </div>

          {/* Table of contents */}
          <div className="card p-4">
            <div className="text-xs font-bold text-ck-deep mb-3">In This Article</div>
            {['What Is a 360 Video Booth?', 'What Is a Glambot?', 'Side-by-Side Comparison', 'Which Should You Choose?', 'Pricing & Availability'].map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-[#7aaccc] py-2 border-b border-[#f0f4f8] last:border-none hover:text-ck-blue cursor-pointer transition-colors">
                <span className="text-[9px] font-bold text-[#c0d8ee] w-4 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                {t}
              </div>
            ))}
          </div>

          {/* Related */}
          <div className="card p-4">
            <div className="text-xs font-bold text-ck-deep mb-3">Related Articles</div>
            {RELATED.map((r, i) => (
              <Link key={i} href={`/blog/${r.slug}`} className="flex gap-2.5 mb-3 last:mb-0 group">
                <div className={`w-11 h-11 rounded-[6px] bg-gradient-to-br ${r.gradient} flex-shrink-0`} />
                <div>
                  <p className="text-xs font-semibold text-ck-deep leading-snug group-hover:text-ck-blue transition-colors">{r.title}</p>
                  <span className="text-[10px] text-[#aac0d0]">5 min read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="section-ghost">
        <div className="max-w-3xl mx-auto">
          <div className="eyebrow mb-2">Frequently Asked Questions</div>
          <FaqAccordion items={ARTICLE_FAQS} />
        </div>
      </section>

      <CtaBanner title="Ready to book a booth for your event?" sub="Quote in 2 hours · Pan India · Fully branded" />
      <StickyCtaBar service="Photo Booth" />
    </>
  )
}
