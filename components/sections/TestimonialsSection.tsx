import { SITE_CONFIG } from '@/lib/constants'

const GOOGLE_REVIEWS = [
  { initials: 'KL', color: '#1A7FD4', name: 'Kaustubh Lahoti',  date: '2 months ago', text: 'Excellent service! Harsh bhai and team are very professional and cooperative. Service and rate are very good. Recommend it 100%' },
  { initials: 'AC', color: '#2AACEE', name: 'Aakash Choudhary', date: 'a year ago',    text: 'The photo booth setup was sleek, modern, and a huge hit with our guests. From high-quality prints to fun props and custom backdrops, everything was perfect!' },
  { initials: 'AJ', color: '#1A3A5C', name: 'Amruta Jalit',     date: 'a year ago',    text: 'Loved the magazine booth at Pula party. It was an amazing experience — it gives a celebrity look! Highly Recommended Service.' },
  { initials: 'PD', color: '#0a5a8a', name: 'Padmaja Dave',     date: 'a year ago',    text: 'Well executed booths...all enjoyed!' },
]

function Stars({ count = 5, size = 12 }: { count?: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ fontSize: size, color: '#FBBC04' }}>★</span>
      ))}
    </div>
  )
}

function Avatar({ initials, color, size = 28 }: { initials: string; color: string; size?: number }) {
  return (
    <div
      className="rounded-full flex items-center justify-center font-black text-white flex-shrink-0"
      style={{ width: size, height: size, background: color, fontSize: size * 0.35 }}
    >
      {initials}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <div className="bg-white border-b border-[#e8f0f8] px-4 sm:px-8 py-6">
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="eyebrow">What Clients Say</div>
            <h2 className="text-[22px] font-black text-ck-deep tracking-tight">Reviews &amp; Testimonials</h2>
          </div>
          <a
            href="https://share.google/166J6DSIHWyGIt4Tq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-ck-blue hover:text-ck-electric transition-colors whitespace-nowrap ml-4"
          >
            See all reviews →
          </a>
        </div>

        {/* Score + cards — stacked on mobile, side by side on desktop */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-5">

          {/* Score block */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 rounded-[8px] bg-white border border-[#dceaf5] flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <div>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-3xl font-black text-ck-deep leading-none">{SITE_CONFIG.googleRating}</span>
                <span className="text-[10px] font-bold text-ck-blue bg-ck-sky px-2 py-0.5 rounded-full">Google Reviews</span>
              </div>
              <Stars size={14} />
              <div className="text-[10px] text-[#7aaccc] mt-0.5">Based on {SITE_CONFIG.googleReviewCount} reviews</div>
            </div>
          </div>

          {/* Divider — only on desktop */}
          <div className="hidden sm:block w-px self-stretch bg-[#e8f0f8] flex-shrink-0" />

          {/* Review cards — horizontal scroll */}
          <div className="flex gap-3 overflow-x-auto pb-1 flex-1 -mx-1 px-1">
            {GOOGLE_REVIEWS.map((r, i) => (
              <div key={i} className="bg-ck-ghost border border-[#dceaf5] rounded-card p-3.5 min-w-[200px] max-w-[220px] flex-shrink-0">
                <div className="flex items-center gap-2 mb-2">
                  <Avatar initials={r.initials} color={r.color} size={28} />
                  <div>
                    <div className="text-xs font-bold text-ck-deep">{r.name}</div>
                    <div className="text-[10px] text-[#aac0d0]">{r.date}</div>
                  </div>
                </div>
                <Stars size={11} />
                <p className="text-[11px] text-[#5a7a92] leading-relaxed mt-1.5">{r.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
