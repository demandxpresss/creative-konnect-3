type MediaSet = {
  hero: string
  gallery: string[]
  /** Optional: when present, the sub-service hero shows a sliding carousel of these
   *  images instead of a single static photo. Each needs its own descriptive alt text
   *  (image SEO — distinct, keyworded alt per slide beats one generic alt repeated). */
  heroSlides?: { src: string; alt: string }[]
  /** Optional: real YouTube video IDs for the "Reels & Gallery" section, in the order
   *  they should appear. When this is unset or empty, the whole section is hidden —
   *  no fallback photos, no fake play buttons on something that isn't a video. When it
   *  has more than one id, they render as a side-by-side slider (same pattern as the
   *  hero image slider); a single id renders as one tile. */
  reelIds?: string[]
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
    // video's real title) — Reels & Gallery section is hidden for this page until one is filmed.
  },
  'mirror-booth': {
    hero: `${ROOT}/mirror-booth.jpg`,
    gallery: [`${ROOT}/mirror-booth.jpg`],
    reelIds: ['TZ7DMvKk2-c', 'XS6ktWGYJS0'], // "Mirror Photobooth" / "Mirror Booth" — real event footage
  },
  'single-photobooth': {
    hero: `${ROOT}/360-video-booth.jpg`,
    gallery: [`${ROOT}/360-video-booth.jpg`],
    reelIds: ['HPAM-EcY3h4'], // "Introducing Multi Exposure Photobooth!" — closest real footage to this product
  },
  'glambot': {
    hero: `${ROOT}/glambot.png`,
    gallery: [`${ROOT}/glambot.png`],
    reelIds: ['rE5tv4550tU', '_43q1Gbbqds', '4xWcGVJXCKo'], // "Glambot" — real event footage, 3 clips
  },
  'strip-photobooth': {
    hero: `${ROOT}/ring-booth.jpg`,
    gallery: [`${ROOT}/ring-booth.jpg`],
    reelIds: ['vicb2UkNnAs', 'xjyPYqCJ8kY'], // "Strip Photobooth" — real event footage
  },
  'ai-booths': {
    hero: `${ROOT}/ai-celebrity.jpg`,
    gallery: [`${ROOT}/ai-celebrity.jpg`],
    reelIds: ['YFgZo7l7U5U'], // "AI Photobooth" — real event footage
  },
  'ar-mind-reader': {
    hero: `${ROOT}/ar-mind-reader-slider/ar-mind-reader-hero-1.jpg`,
    gallery: [
      `${ROOT}/ar-mind-reader-slider/ar-mind-reader-hero-2.jpg`,
      `${ROOT}/ar-mind-reader-slider/ar-mind-reader-hero-3.jpg`,
    ],
    heroSlides: [
      { src: `${ROOT}/ar-mind-reader-slider/ar-mind-reader-hero-1.jpg`, alt: 'AR Mind Reader kiosk reading a guest\'s thoughts at a corporate conference' },
      { src: `${ROOT}/ar-mind-reader-slider/ar-mind-reader-hero-2.jpg`, alt: 'Guests at a brand activation booth using the AR Mind Reader experience' },
      { src: `${ROOT}/ar-mind-reader-slider/ar-mind-reader-hero-3.jpg`, alt: 'College fest attendees trying the AR Mind Reader kiosk' },
    ],
    // "AR Mind Reader" is an exact title match; the two "AI Mind Reader" clips look like the
    // same activity filmed at other events (same AR "reveal" format, inconsistently titled).
    reelIds: ['bHOecjhRU4g', 'tEibwJl8S3Y', 'o9EPy_4Y9ik'],
  },
  'digital-sling-shot': {
    hero: `${ROOT}/digital-sling-shot-slider/digital-sling-shot-hero-1.jpg`,
    gallery: [
      `${ROOT}/digital-sling-shot-slider/digital-sling-shot-hero-2.jpg`,
      `${ROOT}/digital-sling-shot-slider/digital-sling-shot-hero-3.jpg`,
    ],
    heroSlides: [
      { src: `${ROOT}/digital-sling-shot-slider/digital-sling-shot-hero-1.jpg`, alt: 'Guest playing the Digital Sling Shot game at a corporate event booth' },
      { src: `${ROOT}/digital-sling-shot-slider/digital-sling-shot-hero-2.jpg`, alt: 'Students lining up for the Digital Sling Shot game at a college fest' },
      { src: `${ROOT}/digital-sling-shot-slider/digital-sling-shot-hero-3.jpg`, alt: 'Digital Sling Shot branded game booth at a large exhibition event' },
    ],
    // No dedicated Digital Sling Shot reel in the channel yet.
  },
  'ai-photobooth': {
    hero: `${ROOT}/ai-celebrity.jpg`,
    gallery: [`${ROOT}/ai-celebrity.jpg`],
    reelIds: ['cMXRsJV_dis', 'mMfWxJOlrFw'], // "AI Bollywood Photobooth" + "Ghibli AI Photobooth"
  },
  'laser-engraving': {
    hero: `${ROOT}/bobble-head.jpg`,
    gallery: [`${ROOT}/bobble-head.jpg`],
    // No dedicated Laser Engraving reel in the channel yet.
  },
  'mosaic-wall': {
    hero: `${ROOT}/mosaic-wall-slider/mosaic-wall-hero-1.jpg`,
    gallery: [
      `${ROOT}/mosaic-wall-slider/mosaic-wall-hero-2.jpg`,
      `${ROOT}/mosaic-wall-slider/mosaic-wall-hero-3.jpg`,
    ],
    heroSlides: [
      { src: `${ROOT}/mosaic-wall-slider/mosaic-wall-hero-1.jpg`, alt: 'Guests capturing photos that build into a live Mosaic Wall at a corporate event' },
      { src: `${ROOT}/mosaic-wall-slider/mosaic-wall-hero-2.jpg`, alt: 'Mosaic Wall built from hundreds of guest photos at a college fest' },
      { src: `${ROOT}/mosaic-wall-slider/mosaic-wall-hero-3.jpg`, alt: 'Branded Mosaic Wall revealing a logo made of guest photos at a brand activation' },
    ],
    reelIds: ['bOZX-vdwUL4', '6SUfbuCp1qw', 'CZuwZBDPBq4'], // "Mosaic Wall" + "Digital Mosaic"
  },
  'vr-games': {
    hero: `${ROOT}/vr-games.jpg`,
    gallery: [`${ROOT}/vr-games.jpg`],
    reelIds: ['HBXgc5ttWxQ', 'EMtf1tWwlH4'], // "VR Games" — real event footage, 2 clips
  },
  'car-simulator': {
    hero: `${ROOT}/vr-games.jpg`,
    gallery: [`${ROOT}/touch-screen-games.jpg`],
    reelIds: ['twC_Ibx11T8', 'NiM3p7E3SOs', '4MHXXkzsXuQ'], // "Car Simulator Game" — real event footage
  },
  'touch-screen-games': {
    hero: `${ROOT}/touch-screen-games.jpg`,
    gallery: [`${ROOT}/touch-screen-games.jpg`],
    reelIds: ['-sCF9nZMYpQ', '9LUcL64xrCM'], // "Touch Screen Gaming Kiosk" / "Touch Screen Games"
  },
  'catch-the-baton': {
    hero: `${ROOT}/catch-the-baton.png`,
    gallery: [`${ROOT}/catch-the-baton.png`],
    reelIds: ['XlcLGnF9CBE'], // "Sharpen your reflexes with our 'Catch the Baton' challenge!!" — exact match
  },
  'buzzer-pro': {
    hero: `${ROOT}/buzzer-pro.jpg`,
    gallery: [`${ROOT}/buzzer-pro.jpg`],
    reelIds: ['MCu8yX8oVWs', 'SqMTk9xMY78'], // "Buzzer Pro Game" — real event footage
  },
  'fridge-magnets': {
    hero: `${ROOT}/live-photo-magnet.jpg`,
    gallery: [`${ROOT}/live-photo-magnet.jpg`],
    reelIds: ['KfFxeQUR2eg', 'qcbio3ssrFI'], // "Fridge Magnet" + "Live Photo Magnets"
  },
  'bag-tags': {
    hero: `${ROOT}/bad-tags.jpg`,
    gallery: [`${ROOT}/bad-tags.jpg`],
    reelIds: ['_3leh0uRZS8', 'RyhjuhBYKsQ'], // "Bag Tags" — real event footage
  },
  'bobble-heads': {
    hero: `${ROOT}/bobble-head.jpg`,
    gallery: [`${ROOT}/bobble-head.jpg`],
    reelIds: ['oDI77z8zqqk', 'ZXdF4nlDa78'], // "Bobble Head" — real event footage
  },
  'video-guest-book': {
    hero: `${ROOT}/video-guest-book.jpg`,
    gallery: [`${ROOT}/video-guest-book.jpg`],
    reelIds: ['jH-QbMVPwF0', 'bLuZH1Ng2qo'], // "Video Guestbook" — real event footage
  },
  'audio-guest-book': {
    hero: `${ROOT}/video-guest-book.jpg`,
    gallery: [`${ROOT}/video-guest-book.jpg`],
    reelIds: ['NZaDTHgk0mE', 'XdxTxI-DtDo'], // "Audio Guest Book" — real event footage
  },
  'virtual-photobooth': {
    hero: `${ROOT}/mirror-booth.jpg`,
    gallery: [`${ROOT}/mirror-booth.jpg`],
    // Still in development per Krishna — intentionally no reel or new hero images yet.
  },
  'green-screen-vfx': {
    hero: `${ROOT}/vfx-booth.png`,
    gallery: [`${ROOT}/vfx-booth.png`],
    // "Chroma Booth" / "VFX Booth" / "VFX Bhoot" — 6 real clips, all the same activation.
    reelIds: ['xkPuXdHPhMs', 'bRUXi0Ux5Ak', 'f4om07PkM-s', 'IYhtXnzK_ZA', 'sT5V26qOK00', '4MpECKgx2DA'],
  },
  'gif-boomerang': {
    hero: `${ROOT}/boomerang-gif.jpg`,
    gallery: [`${ROOT}/boomerang-gif.jpg`],
    reelIds: ['jtv2PpIN1D0', 'r4C9DbwwpWw'], // "Boomerang & Gif Booth" — real event footage
  },
  'customized-games-applications': {
    hero: `${ROOT}/visitor-registration.jpg`,
    gallery: [`${ROOT}/visitor-registration.jpg`],
    // No dedicated reel for this one — it's a software/app product, not a physical activation.
  },
}

export function getProductMedia(serviceSlug: string, subSlug?: string): MediaSet {
  if (subSlug && subserviceMedia[subSlug]) return subserviceMedia[subSlug]
  return serviceDefaults[serviceSlug] || serviceDefaults['photo-video-booths']
}
