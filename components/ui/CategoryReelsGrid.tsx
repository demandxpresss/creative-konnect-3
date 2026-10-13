'use client'

import { useState } from 'react'

export interface CategoryReel {
  youtubeId: string
  label: string
}

function ReelCard({ youtubeId, label, wide }: { youtubeId: string; label: string; wide?: boolean }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div
      className={`relative rounded-card overflow-hidden cursor-pointer ${wide ? 'md:col-span-2' : ''}`}
      style={{ minHeight: 140 }}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&playsinline=1&autoplay=1&controls=1`}
          title={label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: '100%', height: '100%', border: 'none', display: 'block', position: 'absolute', inset: 0 }}
        />
      ) : (
        <button
          type="button"
          aria-label={`Play ${label}`}
          onClick={() => setPlaying(true)}
          className="absolute inset-0 w-full h-full group"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
            alt={label}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="w-11 h-11 rounded-full bg-black/55 border border-white/40 text-white flex items-center justify-center text-base group-hover:bg-black/70 transition-colors">
              ▶
            </span>
          </div>
          <div className="absolute bottom-3 left-3 text-xs font-bold text-white drop-shadow text-left">{label}</div>
        </button>
      )}
    </div>
  )
}

/** Real YouTube reels for the category gallery section — no fabricated "Event Highlight"
 *  placeholders. Hidden entirely by the caller when a category has no real reels yet. */
export function CategoryReelsGrid({ reels }: { reels: CategoryReel[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
      {reels.map((r, i) => (
        <ReelCard key={r.youtubeId} youtubeId={r.youtubeId} label={r.label} wide={i === 0} />
      ))}
    </div>
  )
}
