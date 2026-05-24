'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { QuoteModal } from '@/components/ui/QuoteModal'
import { SERVICES } from '@/lib/constants'

const TILE_COLORS: Record<string, string> = {
  'photo-video-booths':  '#1A7FD4',
  'ai-tech-experiences': '#2AACEE',
  'games':               '#5abde0',
  'merch-giveaways':     '#4a8fb5',
  'guest-engagement':    '#3a7a9a',
  'registration':        '#2a6a8a',
}

const TILE_SUBS: Record<string, string> = {
  'photo-video-booths':  'Ring · Mirror · 360 · Glambot',
  'ai-tech-experiences': 'Celebrity AI · AR Mind Reader',
  'games':               'VR · Car Sim · Touch Screen',
  'merch-giveaways':     'Magnets · Bobbleheads · Tags',
  'guest-engagement':    'Audio & Video Guestbook',
  'registration':        'Custom Apps & Games',
}

// Hero tile images — place files in /public/images/
const TILE_IMAGES: Record<string, string> = {
  'photo-video-booths':  '/images/hero-ring-booth.jpg',
  'ai-tech-experiences': '/images/hero-ai-booth.jpg',
  'games':               '/images/hero-gaming.jpg',
  'merch-giveaways':     '/images/hero-merch.jpg',
}

export function HeroSection() {
  const [quoteOpen, setQuoteOpen] = useState(false)
  const topServices = SERVICES.slice(0, 4)

  return (
    <>
      <section className="bg-ck-navy grid grid-cols-1 lg:grid-cols-2 border-b-[3px] border-ck-blue">
        {/* Left: headline */}
        <div className="px-8 py-14 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-0.5 bg-ck-electric" />
            <span className="eyebrow-light">Event Engagement Solutions</span>
          </div>

          <h1 className="text-[48px] sm:text-[56px] font-black text-white leading-[0.95] tracking-[-2px] mb-5">
            Experiences<br />
            guests <span className="text-ck-electric">share,</span><br />
            remember<br />
            &amp; love.
          </h1>

          <p className="text-sm text-[#6a98b5] leading-[1.75] max-w-[380px] mb-7">
            From 360 video booths and AI celebrity experiences to VR games and custom merch —
            we build the moments that define your event.
          </p>

          <div className="flex flex-wrap gap-3">
            <button onClick={() => setQuoteOpen(true)} className="btn-primary">
              Explore Services
            </button>
            <Link href="/gallery" className="btn-ghost">
              View Gallery
            </Link>
          </div>
        </div>

        {/* Right: service tiles grid with photos */}
        <div className="grid grid-cols-2 border-l border-[#1e3a52]">
          {topServices.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="border-[0.5px] border-[#1e3a52] flex flex-col justify-end min-h-[200px] lg:min-h-[240px] group relative overflow-hidden"
            >
              {/* Background image */}
              {TILE_IMAGES[s.slug] && (
                <Image
                  src={TILE_IMAGES[s.slug]}
                  alt={s.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}

              {/* Dark gradient overlay so text stays readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Badges */}
              {i === 0 && (
                <span className="absolute top-3 right-3 badge-new z-10">Popular</span>
              )}
              {i === 1 && (
                <span className="absolute top-3 right-3 badge-new z-10">AI</span>
              )}

              {/* Text content */}
              <div className="relative z-10 p-5">
                <div
                  className="w-6 h-[3px] rounded-sm mb-2.5"
                  style={{ background: TILE_COLORS[s.slug] }}
                />
                <div className="text-sm font-bold text-white">
                  {s.name}
                </div>
                <div className="text-[10px] text-white/60 mt-1">
                  {TILE_SUBS[s.slug]}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  )
}
