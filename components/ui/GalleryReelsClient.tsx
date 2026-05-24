'use client'
import { useState, useRef } from 'react'

export type ReelTag =
  | 'All'
  | 'Photo Booth'
  | 'Ring Booth'
  | 'Mirror Booth'
  | '360 Booth'
  | 'Glambot'
  | 'Strip Booth'
  | 'Magazine Cover'
  | 'AI Booth'
  | 'AI & Tech'
  | 'Games'

export interface GalleryReel {
  id: string
  label: string
  tag: Exclude<ReelTag, 'All'>
}

const TAGS: ReelTag[] = [
  'All', 'Photo Booth', 'Ring Booth', 'Mirror Booth', '360 Booth',
  'Glambot', 'Strip Booth', 'Magazine Cover', 'AI Booth', 'AI & Tech', 'Games',
]

const TAG_EMOJI: Record<ReelTag, string> = {
  'All':           '🎬',
  'Photo Booth':   '📸',
  'Ring Booth':    '💍',
  'Mirror Booth':  '🪞',
  '360 Booth':     '🎥',
  'Glambot':       '✨',
  'Strip Booth':   '🖼️',
  'Magazine Cover':'📰',
  'AI Booth':      '🤖',
  'AI & Tech':     '🌐',
  'Games':         '🎮',
}

export function GalleryReelsClient({ reels }: { reels: GalleryReel[] }) {
  const [activeTag, setActiveTag] = useState<ReelTag>('All')
  const tagScrollRef = useRef<HTMLDivElement>(null)

  const filtered = activeTag === 'All'
    ? reels
    : reels.filter(r => r.tag === activeTag)

  // Count per tag for badge
  const counts: Record<string, number> = { All: reels.length }
  reels.forEach(r => { counts[r.tag] = (counts[r.tag] || 0) + 1 })

  return (
    <div className="bg-ck-ghost min-h-screen">

      {/* Sticky tag filter bar */}
      <div className="sticky top-[64px] z-30 bg-white border-b border-[#e8f0f8] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3">
          <div
            ref={tagScrollRef}
            className="flex gap-2 overflow-x-auto pb-0.5"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TAGS.filter(t => t === 'All' || (counts[t] ?? 0) > 0).map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap border transition-all duration-150 flex-shrink-0 ${
                  activeTag === tag
                    ? 'bg-ck-blue text-white border-ck-blue shadow-sm'
                    : 'bg-white text-ck-deep border-[#dceaf5] hover:border-ck-blue hover:text-ck-blue'
                }`}
              >
                <span>{TAG_EMOJI[tag]}</span>
                {tag}
                <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
                  activeTag === tag ? 'bg-white/20 text-white' : 'bg-ck-sky text-ck-blue'
                }`}>
                  {counts[tag] ?? 0}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active filter label */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-5 pb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{TAG_EMOJI[activeTag]}</span>
          <h2 className="text-base font-black text-ck-deep">
            {activeTag === 'All' ? 'All Videos' : `${activeTag} Reels`}
          </h2>
          <span className="text-xs font-semibold text-[#5a7a92] bg-ck-sky px-2.5 py-0.5 rounded-full">
            {filtered.length} video{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* Video grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-10">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="text-5xl mb-3">🎬</div>
            <p className="text-sm font-semibold text-ck-deep">No videos in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {filtered.map(reel => (
              <div key={reel.id} className="flex flex-col gap-1.5">
                {/* 9:16 video card */}
                <div
                  className="rounded-xl overflow-hidden border border-[#dceaf5] bg-[#0a1520] w-full"
                  style={{ aspectRatio: '9/16' }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${reel.id}?rel=0&modestbranding=1&playsinline=1&controls=1`}
                    title={reel.label}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                  />
                </div>
                {/* Label + tag */}
                <div>
                  <p className="text-[10px] font-bold text-ck-deep truncate">{reel.label}</p>
                  <span className="text-[9px] font-semibold text-ck-blue bg-ck-sky px-1.5 py-0.5 rounded-full">
                    {reel.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
