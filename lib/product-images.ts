type MediaSet = {
  hero: string
  gallery: string[]
  /** Optional: when present, the sub-service hero shows a sliding carousel of these
   *  images instead of a single static photo. Each needs its own descriptive alt text
   *  (image SEO — distinct, keyworded alt per slide beats one generic alt repeated). */
  heroSlides?: { src: string; alt: string }[]
  /** Optional: a real YouTube video ID for the "Reels & Gallery" section. When unset,
   *  that section shows plain photos — no fake play-button overlay on something that
   *  isn't actually a video. */
  reelId?: string
}

const ROOT = '/images/products'

const serviceDefaults: Record<string, MediaSet> = {
  'photo-video-booths': {
    hero: `${ROOT}/ring-booth.jpg`,
    gallery: [
      `${ROOT}/mirror-booth.jpg`,
      `${ROOT}/360-video-booth.jpg`,
      `${ROOT}/glambot.png`,
    ],
  },
  'ai-tech-experiences': {
    hero: `${ROOT}/ai-starter-pack.jpg`,
    gallery: [
      `${ROOT}/ai-celebrity.jpg`,
      `${ROOT}/ai-360.png`,
      `${ROOT}/ar-mind-reader.jpg`,
    ],
  },
  'games': {
    hero: `${ROOT}/vr-games.jpg`,
    gallery: [
      `${ROOT}/touch-screen-games.jpg`,
      `${ROOT}/buzzer-pro.jpg`,
      `${ROOT}/catch-the-baton.png`,
    ],
  },
  'merch-giveaways': {
    hero: `${ROOT}/live-photo-magnet.jpg`,
    gallery: [
      `${ROOT}/bad-tags.jpg`,
      `${ROOT}/bobble-head.jpg`,
      `${ROOT}/bobble-head.jpg`,
    ],
  },
  'guest-engagement': {
    hero: `${ROOT}/video-guest-book.jpg`,
    gallery: [
      `${ROOT}/video-guest-book.jpg`,
      `${ROOT}/video-guest-book.jpg`,
      `${ROOT}/video-guest-book.jpg`,
    ],
  },
  'registration': {
    hero: `${ROOT}/visitor-registration.jpg`,
    gallery: [
      `${ROOT}/visitor-registration.jpg`,
      `${ROOT}/visitor-registration.jpg`,
      `${ROOT}/visitor-registration.jpg`,
    ],
  },
}

const subserviceMedia: Record<string, MediaSet> = {
  'ring-booth': {
    hero: `${ROOT}/ring-booth-slider/ring-booth-hero-1.jpg`,
    gallery: [
      `${ROOT}/ring-booth-slider/ring-booth-hero-2.jpg`,
      `${ROOT}/ring-booth-slider/ring-booth-hero-3.jpg`,
      `${ROOT}/ring-booth-slider/ring-booth-hero-4.jpg`,
      `${ROOT}/ring-booth-slider/ring-booth-hero-5.jpg`,
    ],
    heroSlides: [
      { src: `${ROOT}/ring-booth-slider/ring-booth-hero-1.jpg`, alt: 'Ring Booth photo booth with illuminated ring light and branded backdrop' },
      { src: `${ROOT}/ring-booth-slider/ring-booth-hero-2.jpg`, alt: 'Wedding guests using the Ring Booth photo booth at an evening reception' },
      { src: `${ROOT}/ring-booth-slider/ring-booth-hero-3.jpg`, alt: 'Ring Booth photo booth set up for a corporate conference activation' },
      { src: `${ROOT}/ring-booth-slider/ring-booth-hero-4.jpg`, alt: 'College fest attendees posing at the Ring Booth photo booth' },
      { src: `${ROOT}/ring-booth-slider/ring-booth-hero-5.jpg`, alt: 'Guest taking a selfie at a branded Ring Booth activation' },
    ],
    // No dedicated "Ring Booth" reel exists in the channel's 60-video library yet (checked every
    // video's real title) — gallery stays photo-only until a Ring Booth-specific video is filmed.
  },
  'mirror-booth': {
    hero: `${ROOT}/mirror-booth.jpg`,
    gallery: [
      `${ROOT}/mirror-booth.jpg`,
      `${ROOT}/mirror-booth.jpg`,
    ],
    reelId: 'TZ7DMvKk2-c', // "Mirror Photobooth" — real event footage from our YouTube channel
  },
  '360-video-booth': {
    hero: `${ROOT}/360-video-booth.jpg`,
    gallery: [
      `${ROOT}/360-video-booth.jpg`,
      `${ROOT}/360-video-booth.jpg`,
    ],
  },
  'single-photobooth': {
    hero: `${ROOT}/360-video-booth.jpg`,
    gallery: [
      `${ROOT}/360-video-booth.jpg`,
      `${ROOT}/360-video-booth.jpg`,
    ],
    reelId: 'HPAM-EcY3h4', // "Introducing Multi Exposure Photobooth!" — closest real footage to this product
  },
  'glambot': {
    hero: `${ROOT}/glambot.png`,
    gallery: [
      `${ROOT}/glambot.png`,
      `${ROOT}/glambot.png`,
    ],
    reelId: 'rE5tv4550tU', // "Glambot" — real event footage
  },
  'strip-photobooth': {
    hero: `${ROOT}/ring-booth.jpg`,
    gallery: [
      `${ROOT}/ring-booth.jpg`,
      `${ROOT}/ring-booth.jpg`,
    ],
    reelId: 'vicb2UkNnAs', // "Strip Photobooth" — real event footage
  },
  'ai-booths': {
    hero: `${ROOT}/ai-celebrity.jpg`,
    gallery: [
      `${ROOT}/ai-celebrity.jpg`,
      `${ROOT}/ai-celebrity.jpg`,
    ],
    reelId: 'YFgZo7l7U5U', // "AI Photobooth" — real event footage
  },
  'ai-starter-pack': {
    hero: `${ROOT}/ai-starter-pack.jpg`,
    gallery: [
      `${ROOT}/ai-starter-pack.jpg`,
      `${ROOT}/ai-starter-pack.jpg`,
    ],
  },
  'ai-celebrity-booth': {
    hero: `${ROOT}/ai-celebrity.jpg`,
    gallery: [
      `${ROOT}/ai-celebrity.jpg`,
      `${ROOT}/ai-celebrity.jpg`,
    ],
  },
  'ai-360-booth': {
    hero: `${ROOT}/ai-360.png`,
    gallery: [
      `${ROOT}/ai-360.png`,
      `${ROOT}/ai-360.png`,
    ],
  },
  'ar-mind-reader': {
    hero: `${ROOT}/ar-mind-reader.jpg`,
    gallery: [
      `${ROOT}/ar-mind-reader.jpg`,
    ],
    reelId: 'bHOecjhRU4g', // "Unlock your guests' thoughts with our AR Mind Reader activity!" — real footage, exact match
  },
  'sling-shot': {
    hero: `${ROOT}/ar-mind-reader.jpg`,
    gallery: [
      `${ROOT}/ar-mind-reader.jpg`,
      `${ROOT}/ar-mind-reader.jpg`,
    ],
  },
  'digital-sling-shot': {
    hero: `${ROOT}/ar-mind-reader.jpg`,
    gallery: [
      `${ROOT}/ar-mind-reader.jpg`,
      `${ROOT}/ar-mind-reader.jpg`,
    ],
  },
  'ai-photobooth': {
    hero: `${ROOT}/ai-celebrity.jpg`,
    gallery: [
      `${ROOT}/ai-celebrity.jpg`,
      `${ROOT}/ai-starter-pack.jpg`,
    ],
    reelId: 'cMXRsJV_dis', // "Transform into a Bollywood icon with our AI photobooth" — real footage
  },
  'laser-engraving': {
    hero: `${ROOT}/bobble-head.jpg`,
    gallery: [
      `${ROOT}/bobble-head.jpg`,
      `${ROOT}/bad-tags.jpg`,
    ],
    // No dedicated Laser Engraving reel in the channel yet — photo gallery only until we film one.
  },
  'mosaic-wall': {
    hero: `${ROOT}/ai-360.png`,
    gallery: [
      `${ROOT}/ai-360.png`,
      `${ROOT}/ai-360.png`,
    ],
    reelId: 'bOZX-vdwUL4', // "Mosaic Wall" — real event footage
  },
  'vr-games': {
    hero: `${ROOT}/vr-games.jpg`,
    gallery: [
      `${ROOT}/vr-games.jpg`,
      `${ROOT}/vr-games.jpg`,
    ],
    reelId: 'HBXgc5ttWxQ', // "VR Games" — real event footage
  },
  'car-simulator': {
    hero: `${ROOT}/vr-games.jpg`,
    gallery: [
      `${ROOT}/vr-games.jpg`,
      `${ROOT}/touch-screen-games.jpg`,
    ],
    reelId: 'twC_Ibx11T8', // "Car Simulator Game" — real event footage
  },
  'touch-screen-games': {
    hero: `${ROOT}/touch-screen-games.jpg`,
    gallery: [
      `${ROOT}/touch-screen-games.jpg`,
      `${ROOT}/touch-screen-games.jpg`,
    ],
    reelId: '-sCF9nZMYpQ', // "Our Touch Screen Gaming Kiosk is certainly the kids favourite" — real footage
  },
  'catch-the-baton': {
    hero: `${ROOT}/catch-the-baton.png`,
    gallery: [
      `${ROOT}/catch-the-baton.png`,
      `${ROOT}/catch-the-baton.png`,
    ],
    reelId: 'XlcLGnF9CBE', // "Sharpen your reflexes with our 'Catch the Baton' challenge!!" — exact match
  },
  'buzzer-pro': {
    hero: `${ROOT}/buzzer-pro.jpg`,
    gallery: [
      `${ROOT}/buzzer-pro.jpg`,
      `${ROOT}/buzzer-pro.jpg`,
    ],
    reelId: 'MCu8yX8oVWs', // "Buzzer Pro Game" — real event footage
  },
  'fridge-magnets': {
    hero: `${ROOT}/live-photo-magnet.jpg`,
    gallery: [
      `${ROOT}/live-photo-magnet.jpg`,
      `${ROOT}/live-photo-magnet.jpg`,
    ],
    reelId: 'KfFxeQUR2eg', // "Introducing fridge magnet — the trending giveaway activity" — exact match
  },
  'bag-tags': {
    hero: `${ROOT}/bad-tags.jpg`,
    gallery: [
      `${ROOT}/bad-tags.jpg`,
    ],
    reelId: '_3leh0uRZS8', // "Bag Tags" — real event footage
  },
  'bobble-heads': {
    hero: `${ROOT}/bobble-head.jpg`,
    gallery: [
      `${ROOT}/bobble-head.jpg`,
      `${ROOT}/bobble-head.jpg`,
    ],
    reelId: 'oDI77z8zqqk', // "Bobble Head" — real event footage
  },
  'video-guest-book': {
    hero: `${ROOT}/video-guest-book.jpg`,
    gallery: [
      `${ROOT}/video-guest-book.jpg`,
      `${ROOT}/video-guest-book.jpg`,
    ],
    reelId: 'jH-QbMVPwF0', // "Video Guestbook" — real event footage
  },
  'audio-guest-book': {
    hero: `${ROOT}/video-guest-book.jpg`,
    gallery: [
      `${ROOT}/video-guest-book.jpg`,
      `${ROOT}/video-guest-book.jpg`,
    ],
    reelId: 'NZaDTHgk0mE', // "Audio Guest Book" — real event footage
  },
  'virtual-photobooth': {
    hero: `${ROOT}/mirror-booth.jpg`,
    gallery: [
      `${ROOT}/mirror-booth.jpg`,
      `${ROOT}/mirror-booth.jpg`,
    ],
    // Still in development per Krishna — intentionally no reel or new hero images yet.
  },
  'green-screen-vfx': {
    hero: `${ROOT}/vfx-booth.png`,
    gallery: [
      `${ROOT}/vfx-booth.png`,
      `${ROOT}/vfx-booth.png`,
    ],
    reelId: 'xkPuXdHPhMs', // "Chroma Booth" — real event footage
  },
  'gif-boomerang': {
    hero: `${ROOT}/boomerang-gif.jpg`,
    gallery: [
      `${ROOT}/boomerang-gif.jpg`,
    ],
    reelId: 'jtv2PpIN1D0', // "Boomerang & Gif Booth" — exact match
  },
}

export function getProductMedia(serviceSlug: string, subSlug?: string): MediaSet {
  if (subSlug && subserviceMedia[subSlug]) return subserviceMedia[subSlug]
  return serviceDefaults[serviceSlug] || serviceDefaults['photo-video-booths']
}
