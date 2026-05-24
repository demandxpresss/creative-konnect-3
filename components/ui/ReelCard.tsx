'use client'
import { useState } from 'react'

interface ReelCardProps {
  tag:      string
  label:    string
  sub?:     string
  views?:   string
  gradient?: string
  featured?: boolean
  videoUrl?: string
  minHeight?: number
}

export function ReelCard({
  tag, label, sub, views,
  gradient = 'from-ck-blue to-ck-navy',
  featured  = false,
  videoUrl,
  minHeight = 140,
}: ReelCardProps) {
  const [playing, setPlaying] = useState(false)

  return (
    <div
      className={`relative rounded-card overflow-hidden cursor-pointer group ${featured ? 'min-h-[180px]' : ''}`}
      style={{ minHeight }}
      onClick={() => videoUrl && setPlaying(true)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />

      {/* Play button */}
      {!playing && (
        <div className="play-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65%] group-hover:scale-110 transition-transform">
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[11px] border-l-white ml-0.5" />
        </div>
      )}

      {/* Views badge */}
      {views && (
        <div className="absolute top-2.5 right-2.5 bg-black/60 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
          {views} views
        </div>
      )}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-3.5">
        <span className="reel-tag">{tag}</span>
        <p className="text-xs font-bold text-white leading-snug">{label}</p>
        {sub && <p className="text-[10px] text-white/40 mt-0.5">{sub}</p>}
      </div>

      {/* Embedded video (if URL provided and playing) */}
      {playing && videoUrl && (
        <iframe
          src={videoUrl}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      )}
    </div>
  )
}
