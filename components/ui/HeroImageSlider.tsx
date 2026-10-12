'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export interface HeroSlide {
  src: string
  alt: string
}

export function HeroImageSlider({ slides, label }: { slides: HeroSlide[]; label: string }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return
    const id = setInterval(() => {
      setActive(i => (i + 1) % slides.length)
    }, 4500)
    return () => clearInterval(id)
  }, [slides.length])

  return (
    <div className="relative rounded-card overflow-hidden h-56 sm:h-64 border border-[#1e3a52]">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === active ? 1 : 0, pointerEvents: i === active ? 'auto' : 'none' }}
          aria-hidden={i !== active}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            quality={90}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent pointer-events-none" />

      <div className="absolute bottom-3 left-3 text-xs font-semibold text-white/80">{label}</div>

      {slides.length > 1 && (
        <div className="absolute bottom-3 right-3 flex gap-1.5">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show slide ${i + 1}: ${slide.alt}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all ${i === active ? 'w-5 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
