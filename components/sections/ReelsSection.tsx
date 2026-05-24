'use client'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const REELS = [
  { id: 'CZuwZBDPBq4', label: 'Digital Mosaic' },
  { id: 'syoRDA0fqYo', label: '360 Video Booth' },
  { id: 'mLJMWAZ-15c', label: 'Magazine Cover Photobooth' },
  { id: 'rE5tv4550tU', label: 'Glambot' },
  { id: 'vicb2UkNnAs', label: 'Strip Photobooth' },
  { id: 'TZ7DMvKk2-c', label: 'Mirror Photobooth' },
  { id: 'YFgZo7l7U5U', label: 'AI Photobooth' },
  { id: '_43q1Gbbqds', label: 'Glambot' },
]

export function ReelsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === 'right' ? 300 : -300, behavior: 'smooth' })
  }

  return (
    <section className="bg-ck-navy py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="eyebrow-light">See It Live</div>
            <h2 className="text-[22px] font-black text-white tracking-tight">
              Our Work in Action
            </h2>
            <p className="text-xs text-[#4a7090] mt-1">
              Swipe through real setups from our events across India.
            </p>
          </div>

          {/* Arrow buttons — hidden on mobile, visible on desktop */}
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-8 h-8 rounded-full border border-[#1e3a52] bg-[#0d1f2e] hover:bg-[#1e3a52] flex items-center justify-center transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 text-[#7aaccc]" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-8 h-8 rounded-full border border-[#1e3a52] bg-[#0d1f2e] hover:bg-[#1e3a52] flex items-center justify-center transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 text-[#7aaccc]" />
            </button>
          </div>
        </div>

        {/* Scrollable reel strip */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-3 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {REELS.map((reel) => (
            <div key={reel.id} className="flex-shrink-0 flex flex-col gap-2">
              {/* Vertical video card — 9:16 ratio */}
              <div
                className="rounded-xl overflow-hidden border border-[#1e3a52] bg-[#0a1520]"
                style={{ width: '200px', height: '356px' }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${reel.id}?rel=0&modestbranding=1&playsinline=1`}
                  title={reel.label}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                />
              </div>
              {/* Label */}
              <p className="text-[11px] font-semibold text-[#7aaccc] text-center truncate w-[200px]">
                {reel.label}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll hint on mobile */}
        <p className="text-[10px] text-[#2a5070] text-center mt-2 sm:hidden">
          ← Swipe to see more →
        </p>

      </div>
    </section>
  )
}
