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
    hero: `${ROOT}/bag-tags-slider/bag-tags-hero-1.jpg`,
    gallery: [
      `${ROOT}/bobble-heads-slider/bobble-heads-hero-1.jpg`,
      `${ROOT}/laser-engraving-slider/laser-engraving-hero-1.jpg`,
      `${ROOT}/fridge-magnets-slider/fridge-magnets-hero-1.jpg`,
    ],
  },
  'guest-engagement': {
    hero: `${ROOT}/guest-engagement-category/guest-engagement-hero-1.jpg`,
    gallery: [
      `${ROOT}/guest-engagement-category/guest-engagement-hero-2.jpg`,
      `${ROOT}/guest-engagement-category/guest-engagement-hero-3.jpg`,
      `${ROOT}/video-guest-book-slider/video-guest-book-hero-1.jpg`,
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
    hero: `${ROOT}/laser-engraving-slider/laser-engraving-hero-1.jpg`,
    gallery: [
      `${ROOT}/laser-engraving-slider/laser-engraving-hero-2.jpg`,
      `${ROOT}/laser-engraving-slider/laser-engraving-hero-3.jpg`,
      `${ROOT}/laser-engraving-slider/laser-engraving-hero-4.jpg`,
    ],
    heroSlides: [
      { src: `${ROOT}/laser-engraving-slider/laser-engraving-hero-1.jpg`, alt: 'Live Laser Engraving station personalizing pens, bottles and wallets at a corporate conference' },
      { src: `${ROOT}/laser-engraving-slider/laser-engraving-hero-2.jpg`, alt: 'Wedding guests receiving laser-engraved keepsakes with names and initials' },
      { src: `${ROOT}/laser-engraving-slider/laser-engraving-hero-3.jpg`, alt: 'Laser Engraving booth personalizing bottles and notebooks at an exhibition' },
      { src: `${ROOT}/laser-engraving-slider/laser-engraving-hero-4.jpg`, alt: 'College fest students getting their keychains laser engraved on the spot' },
    ],
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
    hero: `${ROOT}/vr-games-slider/vr-games-hero-1.jpg`,
    gallery: [
      `${ROOT}/vr-games-slider/vr-games-hero-2.jpg`,
      `${ROOT}/vr-games-slider/vr-games-hero-3.jpg`,
      `${ROOT}/vr-games-slider/vr-games-hero-4.jpg`,
    ],
    heroSlides: [
      { src: `${ROOT}/vr-games-slider/vr-games-hero-1.jpg`, alt: 'Guest playing an immersive VR shooter game at a corporate exhibition' },
      { src: `${ROOT}/vr-games-slider/vr-games-hero-2.jpg`, alt: 'Kid playing VR Games at a birthday party, friends cheering' },
      { src: `${ROOT}/vr-games-slider/vr-games-hero-3.jpg`, alt: 'Guest navigating a VR adventure game at a college fest' },
      { src: `${ROOT}/vr-games-slider/vr-games-hero-4.jpg`, alt: 'Attendee playing VR Games at a corporate conference booth' },
    ],
    reelIds: ['HBXgc5ttWxQ', 'EMtf1tWwlH4'], // "VR Games" — real event footage, 2 clips
  },
  'car-simulator': {
    hero: `${ROOT}/car-simulator-slider/car-simulator-hero-1.jpg`,
    gallery: [
      `${ROOT}/car-simulator-slider/car-simulator-hero-2.jpg`,
      `${ROOT}/car-simulator-slider/car-simulator-hero-3.jpg`,
      `${ROOT}/car-simulator-slider/car-simulator-hero-4.jpg`,
    ],
    heroSlides: [
      { src: `${ROOT}/car-simulator-slider/car-simulator-hero-1.jpg`, alt: 'Guests racing on the Car Simulator rig at a brand activation event' },
      { src: `${ROOT}/car-simulator-slider/car-simulator-hero-2.jpg`, alt: 'Guest driving the Car Simulator at a corporate conference' },
      { src: `${ROOT}/car-simulator-slider/car-simulator-hero-3.jpg`, alt: 'Bachelor party group cheering at the Car Simulator racing rig' },
      { src: `${ROOT}/car-simulator-slider/car-simulator-hero-4.jpg`, alt: 'College fest students racing on the Car Simulator' },
    ],
    reelIds: ['twC_Ibx11T8', 'NiM3p7E3SOs', '4MHXXkzsXuQ'], // "Car Simulator Game" — real event footage
  },
  'touch-screen-games': {
    hero: `${ROOT}/touch-screen-games-slider/touch-screen-games-hero-1.jpg`,
    gallery: [
      `${ROOT}/touch-screen-games-slider/touch-screen-games-hero-2.jpg`,
      `${ROOT}/touch-screen-games-slider/touch-screen-games-hero-3.jpg`,
      `${ROOT}/touch-screen-games-slider/touch-screen-games-hero-4.jpg`,
    ],
    heroSlides: [
      { src: `${ROOT}/touch-screen-games-slider/touch-screen-games-hero-1.jpg`, alt: 'Corporate guests playing a Ludo game on the large Touch Screen Games table' },
      { src: `${ROOT}/touch-screen-games-slider/touch-screen-games-hero-2.jpg`, alt: 'Attendees playing a puzzle game on the Touch Screen Games kiosk at an exhibition' },
      { src: `${ROOT}/touch-screen-games-slider/touch-screen-games-hero-3.jpg`, alt: 'Family playing Monopoly on the Touch Screen Games table at an evening event' },
      { src: `${ROOT}/touch-screen-games-slider/touch-screen-games-hero-4.jpg`, alt: 'Kids playing a bubble-pop game on the Touch Screen Games table' },
    ],
    reelIds: ['-sCF9nZMYpQ', '9LUcL64xrCM'], // "Touch Screen Gaming Kiosk" / "Touch Screen Games"
  },
  'catch-the-baton': {
    hero: `${ROOT}/catch-the-baton-slider/catch-the-baton-hero-1.jpg`,
    gallery: [
      `${ROOT}/catch-the-baton-slider/catch-the-baton-hero-2.jpg`,
      `${ROOT}/catch-the-baton-slider/catch-the-baton-hero-3.jpg`,
      `${ROOT}/catch-the-baton-slider/catch-the-baton-hero-4.jpg`,
    ],
    heroSlides: [
      { src: `${ROOT}/catch-the-baton-slider/catch-the-baton-hero-1.jpg`, alt: 'Guest reaching to catch the baton at a corporate exhibition booth' },
      { src: `${ROOT}/catch-the-baton-slider/catch-the-baton-hero-2.jpg`, alt: 'Guest playing Catch The Baton at an outdoor evening event, friends cheering' },
      { src: `${ROOT}/catch-the-baton-slider/catch-the-baton-hero-3.jpg`, alt: 'Guest playing Catch The Baton at a corporate conference' },
      { src: `${ROOT}/catch-the-baton-slider/catch-the-baton-hero-4.jpg`, alt: 'Kid playing Catch The Baton at a birthday party' },
    ],
    reelIds: ['XlcLGnF9CBE'], // "Sharpen your reflexes with our 'Catch the Baton' challenge!!" — exact match
  },
  'buzzer-pro': {
    hero: `${ROOT}/buzzer-pro-slider/buzzer-pro-hero-1.jpg`,
    gallery: [
      `${ROOT}/buzzer-pro-slider/buzzer-pro-hero-2.jpg`,
      `${ROOT}/buzzer-pro-slider/buzzer-pro-hero-3.jpg`,
      `${ROOT}/buzzer-pro-slider/buzzer-pro-hero-4.jpg`,
    ],
    heroSlides: [
      { src: `${ROOT}/buzzer-pro-slider/buzzer-pro-hero-1.jpg`, alt: 'Wedding guests playing Buzzer Pro, bride and groom buzzing in' },
      { src: `${ROOT}/buzzer-pro-slider/buzzer-pro-hero-2.jpg`, alt: 'Girls vs boys Buzzer Pro quiz game at an outdoor event' },
      { src: `${ROOT}/buzzer-pro-slider/buzzer-pro-hero-3.jpg`, alt: 'Guests playing Buzzer Pro at a corporate networking event' },
      { src: `${ROOT}/buzzer-pro-slider/buzzer-pro-hero-4.jpg`, alt: 'School students playing Buzzer Pro in a quiz competition' },
    ],
    reelIds: ['MCu8yX8oVWs', 'SqMTk9xMY78'], // "Buzzer Pro Game" — real event footage
  },
  'fridge-magnets': {
    hero: `${ROOT}/fridge-magnets-slider/fridge-magnets-hero-1.jpg`,
    gallery: [
      `${ROOT}/fridge-magnets-slider/fridge-magnets-hero-2.jpg`,
      `${ROOT}/fridge-magnets-slider/fridge-magnets-hero-3.jpg`,
    ],
    heroSlides: [
      { src: `${ROOT}/fridge-magnets-slider/fridge-magnets-hero-1.jpg`, alt: 'Guests getting custom fridge magnets printed live at a corporate event' },
      { src: `${ROOT}/fridge-magnets-slider/fridge-magnets-hero-2.jpg`, alt: 'College fest students collecting their custom fridge magnet photos' },
      { src: `${ROOT}/fridge-magnets-slider/fridge-magnets-hero-3.jpg`, alt: 'Corporate team members with their custom fridge magnet keepsakes' },
    ],
    reelIds: ['KfFxeQUR2eg', 'qcbio3ssrFI'], // "Fridge Magnet" + "Live Photo Magnets"
  },
  'bag-tags': {
    hero: `${ROOT}/bag-tags-slider/bag-tags-hero-1.jpg`,
    gallery: [
      `${ROOT}/bag-tags-slider/bag-tags-hero-2.jpg`,
      `${ROOT}/bag-tags-slider/bag-tags-hero-3.jpg`,
      `${ROOT}/bag-tags-slider/bag-tags-hero-4.jpg`,
      `${ROOT}/bag-tags-slider/bag-tags-hero-5.jpg`,
      `${ROOT}/bag-tags-slider/bag-tags-hero-6.jpg`,
    ],
    heroSlides: [
      { src: `${ROOT}/bag-tags-slider/bag-tags-hero-1.jpg`, alt: 'College fest students holding their custom printed bag tags' },
      { src: `${ROOT}/bag-tags-slider/bag-tags-hero-2.jpg`, alt: 'Guest receiving a custom bag tag at an exhibition booth' },
      { src: `${ROOT}/bag-tags-slider/bag-tags-hero-3.jpg`, alt: 'Wedding couple with personalized bag tags as a keepsake favor' },
      { src: `${ROOT}/bag-tags-slider/bag-tags-hero-4.jpg`, alt: 'Guest getting a custom bag tag printed at a corporate conference' },
      { src: `${ROOT}/bag-tags-slider/bag-tags-hero-5.jpg`, alt: 'School students holding custom bag tags on Annual Day' },
      { src: `${ROOT}/bag-tags-slider/bag-tags-hero-6.jpg`, alt: 'Family with custom bag tags at a birthday party' },
    ],
    reelIds: ['_3leh0uRZS8', 'RyhjuhBYKsQ'], // "Bag Tags" — real event footage
  },
  'bobble-heads': {
    hero: `${ROOT}/bobble-heads-slider/bobble-heads-hero-1.jpg`,
    gallery: [
      `${ROOT}/bobble-heads-slider/bobble-heads-hero-2.jpg`,
      `${ROOT}/bobble-heads-slider/bobble-heads-hero-3.jpg`,
      `${ROOT}/bobble-heads-slider/bobble-heads-hero-4.jpg`,
    ],
    heroSlides: [
      { src: `${ROOT}/bobble-heads-slider/bobble-heads-hero-1.jpg`, alt: 'Custom Bobble Heads 2D and 3D figurines displayed at a corporate conference' },
      { src: `${ROOT}/bobble-heads-slider/bobble-heads-hero-2.jpg`, alt: 'Wedding couple holding their custom bobble head figurines' },
      { src: `${ROOT}/bobble-heads-slider/bobble-heads-hero-3.jpg`, alt: 'Kids with their custom bobble head figurines at a birthday party' },
      { src: `${ROOT}/bobble-heads-slider/bobble-heads-hero-4.jpg`, alt: 'Corporate guests receiving custom bobble heads at a leadership summit' },
    ],
    reelIds: ['oDI77z8zqqk', 'ZXdF4nlDa78'], // "Bobble Head" — real event footage
  },
  'video-guest-book': {
    hero: `${ROOT}/video-guest-book-slider/video-guest-book-hero-1.jpg`,
    gallery: [
      `${ROOT}/video-guest-book-slider/video-guest-book-hero-2.jpg`,
      `${ROOT}/video-guest-book-slider/video-guest-book-hero-3.jpg`,
    ],
    heroSlides: [
      { src: `${ROOT}/video-guest-book-slider/video-guest-book-hero-1.jpg`, alt: 'Bride recording a message on the vintage Video Guest Book phone at a wedding' },
      { src: `${ROOT}/video-guest-book-slider/video-guest-book-hero-2.jpg`, alt: 'Guest leaving a video message on the Video Guest Book at a corporate conference' },
      { src: `${ROOT}/video-guest-book-slider/video-guest-book-hero-3.jpg`, alt: 'College fest student recording a video message on the Video Guest Book' },
    ],
    reelIds: ['jH-QbMVPwF0', 'bLuZH1Ng2qo'], // "Video Guestbook" — real event footage
  },
  'audio-guest-book': {
    hero: `${ROOT}/audio-guest-book-slider/audio-guest-book-hero-1.jpg`,
    gallery: [
      `${ROOT}/audio-guest-book-slider/audio-guest-book-hero-2.jpg`,
      `${ROOT}/audio-guest-book-slider/audio-guest-book-hero-3.jpg`,
      `${ROOT}/audio-guest-book-slider/audio-guest-book-hero-4.jpg`,
      `${ROOT}/audio-guest-book-slider/audio-guest-book-hero-5.jpg`,
    ],
    heroSlides: [
      { src: `${ROOT}/audio-guest-book-slider/audio-guest-book-hero-1.jpg`, alt: 'Guest leaving a voice message on the vintage red Audio Guest Book phone at a corporate event' },
      { src: `${ROOT}/audio-guest-book-slider/audio-guest-book-hero-2.jpg`, alt: 'College fest students recording a message on the Audio Guest Book' },
      { src: `${ROOT}/audio-guest-book-slider/audio-guest-book-hero-3.jpg`, alt: 'Wedding guests leaving a voice message on the Audio Guest Book' },
      { src: `${ROOT}/audio-guest-book-slider/audio-guest-book-hero-4.jpg`, alt: 'Audio Guest Book setup with vintage red rotary phone at an event' },
      { src: `${ROOT}/audio-guest-book-slider/audio-guest-book-hero-5.jpg`, alt: 'Guest recording a voice message on the Audio Guest Book at an awards night' },
    ],
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
