import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'
import { CtaBanner }   from '@/components/sections/CtaBanner'
import { BlogFilter }  from '@/components/ui/BlogFilter'
import { BLOG_META }   from '@/lib/seo'

export const metadata: Metadata = BLOG_META

const CATEGORIES = ['All Articles', 'Photo Booths', 'AI & Tech', 'Games', 'Weddings', 'Corporate', 'Guest Engagement', 'Pricing Guides']

const POSTS = [
  { slug: '360-booth-vs-glambot',            cat: 'Photo Booths',     title: '360 Video Booth vs Glambot: Which is Right for Your Event in 2025?',     excerpt: 'A comprehensive breakdown of both booths — what they cost, which events they suit, and how to make the final call.',   read: 8,  author: { initials: 'SR', color: '#1A7FD4', name: 'Sneha Rao' },    gradient: 'from-ck-blue to-ck-navy',    featured: true },
  { slug: 'ai-celebrity-booths-corporate',   cat: 'AI & Tech',        title: 'How AI Celebrity Booths Are Changing Corporate Events in India',         excerpt: 'AI face-swap experiences are driving 3x more social sharing at brand activations.',                                   read: 5,  author: { initials: 'RV', color: '#2AACEE', name: 'Rahul Verma' },   gradient: 'from-ck-electric to-ck-deep', featured: false },
  { slug: 'top-5-photo-booths-weddings',     cat: 'Weddings',         title: 'Top 5 Photo Booth Ideas for Indian Weddings in 2025',                   excerpt: 'From Glambot to mirror booths — which setup works best for sangeets, receptions and destination weddings.',         read: 6,  author: { initials: 'PM', color: '#1A3A5C', name: 'Pooja Mehta' },  gradient: 'from-ck-deep to-ck-navy',    featured: false },
  { slug: '360-booth-cost-india',            cat: 'Pricing Guides',   title: '360 Video Booth Hire Cost in India — What to Expect in 2025',           excerpt: 'A transparent breakdown of what affects pricing — city, duration, branding, and add-ons.',                          read: 4,  author: { initials: 'AK', color: '#0a5a8a', name: 'Aditya Kumar' }, gradient: 'from-ck-blue to-ck-electric', featured: false },
  { slug: 'guest-engagement-corporate',     cat: 'Corporate',         title: '7 Ways to Maximise Guest Engagement at Your Next Corporate Event',      excerpt: 'From VR game stations to live mosaic walls — proven ways to keep 500+ attendees engaged.',                           read: 7,  author: { initials: 'SR', color: '#1A7FD4', name: 'Sneha Rao' },    gradient: 'from-ck-electric to-ck-navy', featured: false },
  { slug: 'vr-games-events',                cat: 'Games',             title: 'VR Game Stations at Events: Everything You Need to Know',               excerpt: 'How VR gaming experiences drive footfall, engagement time and social buzz at corporate events.',                    read: 5,  author: { initials: 'RV', color: '#2AACEE', name: 'Rahul Verma' },  gradient: 'from-ck-deep to-ck-electric', featured: false },
  { slug: 'custom-merch-events',            cat: 'Guest Engagement',  title: 'Custom Event Merch That Guests Actually Keep: The 2025 Guide',          excerpt: 'Bobbleheads, fridge magnets and bag tags — why personalised giveaways drive long-term brand recall.',               read: 4,  author: { initials: 'PM', color: '#1A3A5C', name: 'Pooja Mehta' },  gradient: 'from-ck-blue to-ck-deep',    featured: false },
]

export default function BlogPage() {
  const featured = POSTS.find(p => p.featured)
  const rest     = POSTS.filter(p => !p.featured)

  return (
    <>
      {/* Hero */}
      <div className="bg-ck-navy border-b-[3px] border-ck-blue px-8 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-xs text-[#4a7090] mb-3">
              <Link href="/" className="hover:text-ck-electric transition-colors">Home</Link>
              {' › '}<span className="text-ck-electric">Blog</span>
            </div>
            <h1 className="text-[36px] font-black text-white tracking-tight leading-tight mb-3">
              Event Guides, Ideas<br />&amp; <span className="text-ck-electric">Inspiration</span>
            </h1>
            <p className="text-sm text-[#6a98b5] leading-relaxed mb-4">
              Planning an event? Our guides cover everything from choosing the right photo booth
              to maximising guest engagement and ROI.
            </p>
            <div className="flex items-center gap-2 bg-white/6 border border-[#1e3a52] rounded-[8px] px-3 py-2.5">
              <span className="text-[#4a7090] text-sm">🔍</span>
              <input
                placeholder="Search articles — e.g. 360 booth, wedding, AI..."
                className="bg-transparent border-none outline-none text-xs text-white placeholder-[#4a7090] flex-1 font-medium"
              />
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold text-ck-electric uppercase tracking-[2px] mb-3">Browse by Topic</div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c, i) => (
                <button key={c} className={`text-[10px] font-bold px-3 py-1.5 rounded-full border transition-colors ${i === 0 ? 'bg-ck-blue text-white border-ck-blue' : 'bg-ck-blue/10 border-ck-electric/20 text-ck-electric hover:bg-ck-blue hover:text-white'}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="section-ghost">
        <div className="max-w-7xl mx-auto">
          {/* Featured */}
          {featured && (
            <div className="mb-7">
              <div className="eyebrow mb-3">Featured Article</div>
              <Link href={`/blog/${featured.slug}`} className="card grid grid-cols-1 md:grid-cols-2 group hover:border-ck-blue transition-all overflow-hidden">
                <div className={`bg-gradient-to-br ${featured.gradient} min-h-[180px] relative flex items-end p-4`}>
                  <span className="absolute top-3 left-3 bg-ck-blue text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                    Editor's Pick
                  </span>
                  <span className="text-xs text-white/50">{featured.cat} · Ultimate Guide</span>
                </div>
                <div className="p-6">
                  <div className="text-[9px] font-bold text-ck-blue uppercase tracking-[1.5px] mb-2">{featured.cat}</div>
                  <h2 className="text-base font-black text-ck-deep leading-snug mb-3 group-hover:text-ck-blue transition-colors tracking-tight">
                    {featured.title}
                  </h2>
                  <p className="text-xs text-[#7aaccc] leading-relaxed mb-4">{featured.excerpt}</p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-black text-white" style={{ background: featured.author.color }}>
                      {featured.author.initials}
                    </div>
                    <span className="text-xs font-semibold text-ck-deep">{featured.author.name}</span>
                    <div className="w-1 h-1 rounded-full bg-[#c0d8ee]" />
                    <span className="text-xs text-[#7aaccc]">{featured.read} min read</span>
                  </div>
                  <span className="inline-block mt-3 text-xs font-bold text-ck-blue group-hover:text-ck-electric transition-colors">
                    Read full article →
                  </span>
                </div>
              </Link>
            </div>
          )}

          {/* Filterable posts grid */}
          <BlogFilter posts={rest.map(p => ({ slug: p.slug, category: p.cat, title: p.title, excerpt: p.excerpt, read: p.read, gradient: p.gradient, author: p.author }))} />
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
