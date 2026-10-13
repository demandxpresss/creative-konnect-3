'use client'

import { useState } from 'react'

interface ReelsSliderProps {
  youtubeIds: string[]
  label: string
}

function ReelTile({ youtubeId, title }: { youtubeId: string; title: string }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div
      className="relative rounded-card overflow-hidden flex-shrink-0 snap-start border border-[#1e3a52]"
      style={{ width: 'min(78vw, 320px)', aspectRatio: '16/10' }}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&playsinline=1&autoplay=1&controls=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        />
      ) : (
        <button
          type="button"
          aria-label={`Play ${title}`}
          onClick={() => setPlaying(true)}
          className="relative w-full h-full group"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
            alt={title}
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
          <div className="absolute bottom-3 left-3 text-xs font-bold text-white drop-shadow">{title}</div>
        </button>
      )}
    </div>
  )
}

/** Side-by-side slider of real YouTube reels — same horizontal scroll-strip pattern as the
 *  testimonials row. Used instead of a single tile whenever a sub-service has more than one
 *  real video; one id still renders fine as a one-item strip. */
export function ReelsSlider({ youtubeIds, label }: ReelsSliderProps) {
  return (
    <div
      className="flex gap-3 overflow-x-auto pb-1 snap-x snap-mandatory"
      style={{ scrollbarWidth: 'thin' }}
    >
      {youtubeIds.map((id, i) => (
        <ReelTile key={id} youtubeId={id} title={youtubeIds.length > 1 ? `${label} ${i + 1}` : label} />
      ))}
    </div>
  )
}
