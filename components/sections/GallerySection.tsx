'use client'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const REELS = [
  { id: 'CZuwZBDPBq4', label: 'Digital Mosaic' },
  { id: 'syoRDA0fqYo', label: '360 Video Booth' },
  { id: 'mLJMWAZ-15c', label: 'Magazine Cover' },
  { id: 'rE5tv4550tU', label: 'Glambot' },
  { id: 'vicb2UkNnAs', label: 'Strip Photobooth' },
  { id: 'TZ7DMvKk2-c', label: 'Mirror Photobooth' },
  { id: 'YFgZo7l7U5U', label: 'AI Photobooth' },
  { id: '_43q1Gbbqds', label: 'Glambot' },
]

export function GallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeReels, setActiveReels] = useState<Record<string, boolean>>({})

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === 'right' ? 280 : -280, behavior: 'smooth' })
  }

  return (
    <section className="section-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-5">
          <div>
            <div className="eyebrow-light">See It In Action</div>
            <h2 className="text-[22px] font-black text-white tracking-tight">Gallery &amp; Reels</h2>
            <p className="text-xs text-[#4a7090] mt-1">Real events, real guests, real moments.</p>
          </div>
          <div className="flex items-center gap-3">
            {/* Arrow buttons — desktop only */}
            <div className="hidden sm:flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-7 h-7 rounded-full border border-[#1e3a52] bg-[#0d1f2e] hover:bg-[#1e3a52] flex items-center justify-center transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-3.5 h-3.5 text-[#7aaccc]" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-7 h-7 rounded-full border border-[#1e3a52] bg-[#0d1f2e] hover:bg-[#1e3a52] flex items-center justify-center transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-3.5 h-3.5 text-[#7aaccc]" />
              </button>
            </div>
            <a href="/gallery" className="text-xs font-bold text-ck-electric hover:text-white transition-colors">
              View full gallery →
            </a>
          </div>
        </div>

        {/* Scrollable reels row */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-3 mb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {REELS.map((reel) => (
            <div key={reel.id} className="flex-shrink-0 flex flex-col gap-2">
              <div
                className="rounded-card overflow-hidden border border-[#1e3a52] bg-[#0a1520]"
                style={{ width: '180px', height: '320px' }}
              >
                {activeReels[reel.id] ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${reel.id}?rel=0&modestbranding=1&playsinline=1&autoplay=1&mute=1&loop=1&playlist=${reel.id}&controls=1`}
                    title={reel.label}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                  />
                ) : (
                  <button
                    type="button"
                    aria-label={`Play ${reel.label}`}
                    onClick={() => setActiveReels((prev) => ({ ...prev, [reel.id]: true }))}
                    className="relative w-full h-full group"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.ytimg.com/vi/${reel.id}/hqdefault.jpg`}
                      alt={reel.label}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="w-12 h-12 rounded-full bg-black/55 border border-white/40 text-white flex items-center justify-center text-lg">
                        ▶
                      </span>
                    </div>
                  </button>
                )}
              </div>
              <p className="text-[10px] font-semibold text-[#4a7090] text-center truncate w-[180px]">
                {reel.label}
              </p>
            </div>
          ))}
        </div>

        {/* Swipe hint — mobile only */}
        <p className="text-[10px] text-[#2a5070] text-center sm:hidden">← Swipe to see more →</p>

      </div>
    </section>
  )
}
