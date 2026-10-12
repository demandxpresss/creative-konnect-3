'use client'

import { useState } from 'react'

/** A gallery tile that plays a real YouTube video on click, using the video's own
 *  thumbnail as the poster — the same click-to-play pattern used on the homepage
 *  gallery strip and the /gallery page, instead of a decorative play icon over a
 *  static photo that does nothing when clicked. */
export function ReelOrPhotoTile({ youtubeId, label, className }: { youtubeId: string; label: string; className?: string }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className={`relative rounded-card overflow-hidden ${className ?? ''}`} style={{ minHeight: 140 }}>
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&playsinline=1&autoplay=1&controls=1`}
          title={label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        />
      ) : (
        <button
          type="button"
          aria-label={`Play ${label}`}
          onClick={() => setPlaying(true)}
          className="relative w-full h-full group"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
            alt={label}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="w-10 h-10 rounded-full bg-black/55 border border-white/40 text-white flex items-center justify-center text-base group-hover:bg-black/70 transition-colors">
              ▶
            </span>
          </div>
          <div className="absolute bottom-3 left-3 text-xs font-bold text-white drop-shadow">{label}</div>
        </button>
      )}
    </div>
  )
}
