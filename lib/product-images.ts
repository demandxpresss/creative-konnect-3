type MediaSet = {
  hero: string
  gallery: string[]
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
    hero: `${ROOT}/ring-booth.jpg`,
    gallery: [
      `${ROOT}/ring-booth.jpg`,
      `${ROOT}/ring-booth.jpg`,
    ],
  },
  'mirror-booth': {
    hero: `${ROOT}/mirror-booth.jpg`,
    gallery: [
      `${ROOT}/mirror-booth.jpg`,
      `${ROOT}/mirror-booth.jpg`,
    ],
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
  },
  'glambot': {
    hero: `${ROOT}/glambot.png`,
    gallery: [
      `${ROOT}/glambot.png`,
      `${ROOT}/glambot.png`,
    ],
  },
  'strip-photobooth': {
    hero: `${ROOT}/ring-booth.jpg`,
    gallery: [
      `${ROOT}/ring-booth.jpg`,
      `${ROOT}/ring-booth.jpg`,
    ],
  },
  'ai-booths': {
    hero: `${ROOT}/ai-celebrity.jpg`,
    gallery: [
      `${ROOT}/ai-celebrity.jpg`,
      `${ROOT}/ai-celebrity.jpg`,
    ],
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
  },
  'laser-engraving': {
    hero: `${ROOT}/bobble-head.jpg`,
    gallery: [
      `${ROOT}/bobble-head.jpg`,
      `${ROOT}/bad-tags.jpg`,
    ],
  },
  'mosaic-wall': {
    hero: `${ROOT}/ai-360.png`,
    gallery: [
      `${ROOT}/ai-360.png`,
      `${ROOT}/ai-360.png`,
    ],
  },
  'vr-games': {
    hero: `${ROOT}/vr-games.jpg`,
    gallery: [
      `${ROOT}/vr-games.jpg`,
      `${ROOT}/vr-games.jpg`,
    ],
  },
  'touch-screen-games': {
    hero: `${ROOT}/touch-screen-games.jpg`,
    gallery: [
      `${ROOT}/touch-screen-games.jpg`,
      `${ROOT}/touch-screen-games.jpg`,
    ],
  },
  'catch-the-baton': {
    hero: `${ROOT}/catch-the-baton.png`,
    gallery: [
      `${ROOT}/catch-the-baton.png`,
      `${ROOT}/catch-the-baton.png`,
    ],
  },
  'buzzer-pro': {
    hero: `${ROOT}/buzzer-pro.jpg`,
    gallery: [
      `${ROOT}/buzzer-pro.jpg`,
      `${ROOT}/buzzer-pro.jpg`,
    ],
  },
  'fridge-magnets': {
    hero: `${ROOT}/live-photo-magnet.jpg`,
    gallery: [
      `${ROOT}/live-photo-magnet.jpg`,
      `${ROOT}/live-photo-magnet.jpg`,
    ],
  },
  'bag-tags': {
    hero: `${ROOT}/bad-tags.jpg`,
    gallery: [
      `${ROOT}/bad-tags.jpg`,
    ],
  },
  'bobble-heads': {
    hero: `${ROOT}/bobble-head.jpg`,
    gallery: [
      `${ROOT}/bobble-head.jpg`,
      `${ROOT}/bobble-head.jpg`,
    ],
  },
  'video-guest-book': {
    hero: `${ROOT}/video-guest-book.jpg`,
    gallery: [
      `${ROOT}/video-guest-book.jpg`,
      `${ROOT}/video-guest-book.jpg`,
    ],
  },
  'virtual-photobooth': {
    hero: `${ROOT}/mirror-booth.jpg`,
    gallery: [
      `${ROOT}/mirror-booth.jpg`,
      `${ROOT}/mirror-booth.jpg`,
    ],
  },
  'green-screen-vfx': {
    hero: `${ROOT}/vfx-booth.png`,
    gallery: [
      `${ROOT}/vfx-booth.png`,
      `${ROOT}/vfx-booth.png`,
    ],
  },
  'gif-boomerang': {
    hero: `${ROOT}/boomerang-gif.jpg`,
    gallery: [
      `${ROOT}/boomerang-gif.jpg`,
    ],
  },
}

export function getProductMedia(serviceSlug: string, subSlug?: string): MediaSet {
  if (subSlug && subserviceMedia[subSlug]) return subserviceMedia[subSlug]
  return serviceDefaults[serviceSlug] || serviceDefaults['photo-video-booths']
}
