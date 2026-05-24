import Link from 'next/link'
import Image from 'next/image'
import { HeroCtaButtons } from '@/components/sections/HeroCtaButtons'

const TILE_COLORS: Record<string, string> = {
  'photo-video-booths':  '#1A7FD4',
  'ai-tech-experiences': '#2AACEE',
  'games':               '#5abde0',
  'merch-giveaways':     '#4a8fb5',
  'guest-engagement':    '#3a7a9a',
  'registration':        '#2a6a8a',
}

const HERO_TILES = [
  {
    slug: 'photo-video-booths',
    label: 'Photo Booth',
    href: '/services/photo-video-booths',
    sub: 'Ring · Mirror · AI · 360',
    image: '/images/hero-photo-booth.jpeg',
    position: 'center 35%',
  },
  {
    slug: 'photo-video-booths',
    label: 'Video Booth',
    href: '/services/photo-video-booths',
    sub: '360 · Glambot · Reels',
    image: '/images/hero-video-booth.jpeg',
    position: 'center 30%',
  },
  {
    slug: 'ai-tech-experiences',
    label: 'AI & Tech Experiences',
    href: '/services/ai-tech-experiences',
    sub: 'Celebrity AI · AR Mind Reader',
    image: '/images/hero-ai-booth.jpg',
    position: 'center center',
  },
  {
    slug: 'games',
    label: 'VR & Games',
    href: '/services/games',
    sub: 'VR · Car Sim · Touch Screen',
    image: '/images/hero-gaming.jpg',
    position: 'center center',
  },
  {
    slug: 'registration',
    label: 'Event Registration Platform',
    href: '/services/registration',
    sub: 'Fast check-ins · badge & flow',
    image: '/images/hero-event-registration.jpg',
    position: 'center center',
  },
  {
    slug: 'merch-giveaways',
    label: 'Giveaways',
    href: '/services/merch-giveaways',
    sub: 'Magnets · Bobbleheads · Tags',
    image: '/images/hero-merch.jpg',
    position: 'center center',
  },
]

export function HeroSection() {
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

          <HeroCtaButtons />
        </div>

        {/* Right: service tiles grid with photos */}
        <div className="grid grid-cols-2 border-l border-[#1e3a52]">
          {HERO_TILES.map((tile, i) => (
            <Link
              key={`${tile.slug}-${tile.label}`}
              href={tile.href}
              className="border-[0.5px] border-[#1e3a52] flex flex-col justify-end min-h-[200px] lg:min-h-[240px] group relative overflow-hidden"
            >
              {/* Background image */}
              <Image
                src={tile.image}
                alt={tile.label}
                fill
                priority={i === 0}
                fetchPriority={i === 0 ? 'high' : 'auto'}
                loading={i === 0 ? 'eager' : 'lazy'}
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: tile.position }}
              />

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
                  style={{ background: TILE_COLORS[tile.slug] }}
                />
                <div className="text-sm font-bold text-white">
                  {tile.label}
                </div>
                <div className="text-[10px] text-white/60 mt-1">
                  {tile.sub}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </>
  )
}
