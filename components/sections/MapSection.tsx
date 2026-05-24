// ── MapSection ───────────────────────────────────────────────────
import Link from 'next/link'
import { SITE_CONFIG, CITIES } from '@/lib/constants'
import { GoogleMap } from '@/components/ui/GoogleMap'

export function MapSection() {
  return (
    <section className="section-light">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Real Google Map */}
        <GoogleMap address="Hyderabad, Telangana, India" height={240} />

        {/* Contact info */}
        <div>
          <div className="eyebrow mb-1">Find Us</div>
          <h2 className="text-[22px] font-black text-ck-deep tracking-tight mb-4">Our Office</h2>

          <div className="bg-ck-ghost border border-[#dceaf5] rounded-card p-4 space-y-4">
            {[
              { label: 'Address',   val: SITE_CONFIG.address,  sub: null },
              { label: 'Phone',     val: SITE_CONFIG.phone[0], sub: null },
              { label: 'Email',     val: SITE_CONFIG.email,    sub: null },
              { label: 'WhatsApp',  val: 'Chat with us instantly', sub: null, green: true },
            ].map(row => (
              <div key={row.label} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-[7px] bg-white border border-[#dceaf5] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-ck-blue text-xs">
                    {row.label === 'Address' ? '📍' : row.label === 'Phone' ? '📞' : row.label === 'Email' ? '✉️' : '💬'}
                  </span>
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-[#7aaccc] uppercase tracking-wider">{row.label}</div>
                  <div className={`text-sm font-semibold mt-0.5 ${row.green ? 'text-brand-wa' : 'text-ck-deep'}`}>{row.val}</div>
                  {row.sub && <div className="text-xs text-[#7aaccc]">{row.sub}</div>}
                </div>
              </div>
            ))}
          </div>

          {/* Cities served */}
          <div className="mt-4">
            <div className="eyebrow mb-2">We Serve</div>
            <p className="text-sm font-semibold text-ck-deep">We serve pan India with ❤️</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── BlogSection ──────────────────────────────────────────────────
const SAMPLE_POSTS = [
  {
    slug: '360-booth-vs-glambot',
    category: 'Photo Booths',
    title: '360 Video Booth vs Glambot: Which is Right for Your Event?',
    excerpt: 'A breakdown of what each brings to the floor, and how to choose based on your event type.',
    read: '8 min read',
    gradient: 'from-ck-blue to-ck-navy',
    featured: true,
  },
  {
    slug: 'ai-celebrity-booths-corporate',
    category: 'AI Experiences',
    title: 'How AI Celebrity Booths Are Changing Corporate Events',
    excerpt: null,
    read: '5 min read',
    gradient: 'from-ck-electric to-ck-deep',
    featured: false,
  },
  {
    slug: 'maximise-guest-engagement',
    category: 'Guest Engagement',
    title: 'Top 7 Ways to Maximise Guest Engagement at Brand Events',
    excerpt: null,
    read: '6 min read',
    gradient: 'from-ck-deep to-ck-navy',
    featured: false,
  },
]

export function BlogSection() {
  return (
    <section className="section-ghost">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-5">
          <div>
            <div className="eyebrow">Insights &amp; Guides</div>
            <h2 className="text-[22px] font-black text-ck-deep tracking-tight">From the Blog</h2>
          </div>
          <Link href="/blog" className="text-xs font-bold text-ck-blue hover:text-ck-electric transition-colors">
            View all articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SAMPLE_POSTS.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card group hover:border-ck-blue hover:-translate-y-0.5 transition-all duration-150">
              <div className={`h-24 bg-gradient-to-br ${p.gradient}`} />
              <div className="p-4">
                <div className="text-[9px] font-bold text-ck-blue uppercase tracking-[1.5px] mb-1.5">{p.category}</div>
                <h3 className="text-sm font-bold text-ck-deep leading-snug mb-2 group-hover:text-ck-blue transition-colors">
                  {p.title}
                </h3>
                {p.excerpt && <p className="text-[11px] text-[#6a8fa8] leading-relaxed mb-2">{p.excerpt}</p>}
                <div className="text-[10px] text-[#aac0d0] font-medium">{p.read}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── CtaBanner ────────────────────────────────────────────────────
export function CtaBanner({ title = "Ready to make your event unforgettable?", sub = "Tell us your date, venue and guest count — quote in 2 hours." }: { title?: string; sub?: string }) {
  return (
    <section className="bg-ck-blue px-8 py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <div>
          <h2 className="text-[20px] font-black text-white tracking-tight">{title}</h2>
          <p className="text-xs text-white/75 mt-1">{sub}</p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <Link href="/contact" className="btn-white text-sm">
            Get A Free Quote →
          </Link>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa text-sm"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}
