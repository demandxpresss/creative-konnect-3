// Per-product content for the sub-service detail pages.
// Keyed by sub-service slug (unique across all categories).
// Grounded in how each activation actually works in the events industry,
// so every product page reads as its own thing instead of one reused template.

export interface SubServiceContent {
  /** Short line used on service-category cards (grid + listing pages). */
  tagline: string
  /** Hero paragraph on the product detail page. */
  intro: string
  /** 3 stat badges shown next to the hero demo image. */
  stats: { n: string; l: string }[]
}

export const SUB_SERVICE_CONTENT: Record<string, SubServiceContent> = {
  // ---------- Photo & Video Booths ----------
  'ring-booth': {
    tagline: 'LED ring-light portrait booth with studio-quality glow',
    intro: 'A portrait photo booth built around a circular LED ring light, the same lighting trick beauty and fashion shoots use to get soft, shadow-free skin tones. Guests step inside the ring for flattering, camera-ready portraits with zero harsh shadows, then get instant prints or digital shares.',
    stats: [{ n: '12MP', l: 'Studio Camera' }, { n: 'Zero', l: 'Harsh Shadows' }, { n: '15s', l: 'Print Time' }],
  },
  'mirror-booth': {
    tagline: 'Interactive full-length mirror booth with touch animations',
    intro: 'A full-length mirror booth that guests pose in front of, with a touchscreen overlay that plays animations, countdowns, and branded flourishes before and after capture. The mirror format naturally draws a crowd and gives full-body shots that standard booths can\'t.',
    stats: [{ n: '6ft', l: 'Full-Length Mirror' }, { n: 'Touch', l: 'Screen Interface' }, { n: 'Group', l: 'Shots Friendly' }],
  },
  'single-photobooth': {
    tagline: 'Our original enclosed photo booth — props, instant prints, pure nostalgia',
    intro: 'The classic enclosed photo booth that started Creative Konnect in 2018 — a curtained booth with a DSLR camera, flash lighting, and a prop box, printing strips or 4×6 photos on the spot. It\'s the simplest activation we offer and still one of the most loved, especially at weddings and family events.',
    stats: [{ n: 'DSLR', l: 'Camera Quality' }, { n: '10s', l: 'Instant Print' }, { n: 'Unlimited', l: 'Reprints' }],
  },
  'glambot': {
    tagline: '1000fps robotic-arm camera for cinematic red-carpet slow-mo',
    intro: 'A robotic camera arm that sweeps around each guest while filming at up to 1000 frames per second, turning one second of real footage into roughly 30-40 seconds of ultra slow-motion playback. It\'s the same red-carpet tech used at major award shows, scaled down for weddings, launches, and galas — guests get a genuinely cinematic hero moment.',
    stats: [{ n: '1000fps', l: 'High-Speed Capture' }, { n: '30-40s', l: 'Slow-Mo Output' }, { n: 'Robotic', l: 'Arm Sweep' }],
  },
  'ai-booths': {
    tagline: 'AI-styled portrait booth — instant themed makeovers, no costumes needed',
    intro: 'A booth that uses AI image generation to drop guests into fully themed portraits — superhero, vintage Bollywood, fantasy, retro poster, whatever fits your brand — without a single prop or costume change. One quick photo in, a stylised AI portrait out in under a minute.',
    stats: [{ n: '60s', l: 'AI Render Time' }, { n: '10+', l: 'Theme Styles' }, { n: 'No', l: 'Props Needed' }],
  },
  'green-screen-vfx': {
    tagline: 'Chroma-key compositing to drop guests into any backdrop',
    intro: 'A green-screen booth that composites guests into any background you choose — your product packshot, a destination, a branded set, even a live feed — using the same chroma-key technique film and TV production rely on. Great for brand activations that need a specific visual world without building a physical set.',
    stats: [{ n: 'Unlimited', l: 'Virtual Backdrops' }, { n: '4K', l: 'Composite Output' }, { n: 'Live', l: 'Preview on Screen' }],
  },
  'gif-boomerang': {
    tagline: 'Burst-capture GIFs & boomerangs built for Instagram and WhatsApp',
    intro: 'A rapid burst-capture booth that strings frames into looping GIFs or back-and-forth boomerangs — the exact short-form format that performs best on Instagram Stories and WhatsApp statuses. Built for speed and shareability rather than printed keepsakes.',
    stats: [{ n: '8-12', l: 'Burst Frames' }, { n: '<10s', l: 'Share-Ready' }, { n: 'Loop', l: 'Auto-Playback' }],
  },
  'virtual-photobooth': {
    tagline: 'Browser-based booth for remote & hybrid guests, no hardware needed',
    intro: 'A web-based version of the photo booth that remote attendees join through a link from their own phone or laptop camera — no app download, no physical hardware on their end. It lets hybrid events give virtual guests the same branded-photo moment as the people in the room.',
    stats: [{ n: '0', l: 'App Downloads' }, { n: 'Any', l: 'Device, Any Location' }, { n: 'Live', l: 'Gallery Sync' }],
  },
  'strip-photobooth': {
    tagline: 'Classic vertical photo-strip booth — four poses, one iconic print',
    intro: 'The vintage photo-booth format everyone recognises: four quick poses printed vertically on a single strip. We\'ve modernised the hardware and printing speed while keeping the nostalgic strip layout that makes it such a natural party favour.',
    stats: [{ n: '4', l: 'Poses Per Strip' }, { n: '2x', l: 'Strips Per Print' }, { n: '12s', l: 'Dry-to-Touch Print' }],
  },

  // ---------- AI & Tech Experiences ----------
  'ai-photobooth': {
    tagline: 'AI style-transfer selfies — cartoon, anime, fantasy & more in seconds',
    intro: 'An AI photobooth that applies real-time style transfer to a guest\'s selfie — turning them into a cartoon avatar, anime character, oil painting, or fantasy persona in seconds. Unlike the themed AI Booths, this one is built for rapid-fire, one-tap transformations guests can cycle through again and again.',
    stats: [{ n: '15s', l: 'AI Processing' }, { n: '6+', l: 'Art Styles' }, { n: 'Unlimited', l: 'Retakes' }],
  },
  'mosaic-wall': {
    tagline: 'Hundreds of guest photos assembled into one giant branded image',
    intro: 'Guests upload a selfie — by QR code or at a staffed capture point — and it\'s placed live into a wall-sized mosaic that gradually reveals your logo or brand image, tile by tile. We run it as a Live Mosaic that builds in real time, a Static Mosaic delivered as a finished asset, or a Video Mosaic that replays the whole build. Works best positioned where there\'s natural foot traffic, like near registration or the coffee station.',
    stats: [{ n: '500+', l: 'Photos Per Mosaic' }, { n: 'Live', l: 'Real-Time Build' }, { n: '1', l: 'Giant Brand Reveal' }],
  },
  'digital-sling-shot': {
    tagline: 'Branded pull-back launch game with on-screen distance & accuracy scoring',
    intro: 'An arcade-style pull-back slingshot game — guests load up, aim, and launch a virtual projectile at a branded target on screen, with distance and accuracy scored instantly. It\'s a quick, competitive activation that naturally forms a leaderboard and draws crowds who want to beat the top score.',
    stats: [{ n: '30s', l: 'Per Attempt' }, { n: 'Live', l: 'Leaderboard' }, { n: 'Custom', l: 'Branded Targets' }],
  },
  'ar-mind-reader': {
    tagline: 'AI-powered "mind reading" kiosk with a personalised, on-brand reveal',
    intro: 'An interactive kiosk that uses a quick AI-driven quiz or scan to "read" a guest\'s mind, then reveals a personalised, on-brand result — a product match, a prediction, a fun persona — as a theatrical AR moment. It plays like a magic trick but is really a clever, data-light way to deliver personalised brand messaging guest by guest.',
    stats: [{ n: '45s', l: 'Full Experience' }, { n: 'AI', l: 'Driven Reveal' }, { n: 'Personalized', l: 'Brand Result' }],
  },

  // ---------- Games ----------
  'vr-games': {
    tagline: 'Headset-based VR games — rollercoasters, shooters, branded worlds',
    intro: 'Full VR-headset experiences — roller coasters, zombie shooters, flight sims, or a custom-built branded world — that drop one guest at a time into total immersion while a crowd watches their reactions on a mirrored screen. One of the highest-engagement activations we run, especially for college fests and tech launches.',
    stats: [{ n: '360°', l: 'Immersive View' }, { n: '3-5min', l: 'Per Session' }, { n: 'Spectator', l: 'Screen Mirroring' }],
  },
  'car-simulator': {
    tagline: 'Motion-seat racing rig with real steering wheel & pedals',
    intro: 'A racing simulator rig with a real steering wheel, pedals, and a motion-feedback seat that tilts and vibrates with every turn and gear shift — far closer to driving than a regular console setup. We can brand the in-game livery and track with your logo, making it a favourite for auto brands and youth-skewed events.',
    stats: [{ n: 'Motion', l: 'Feedback Seat' }, { n: 'Real', l: 'Wheel & Pedals' }, { n: 'Custom', l: 'Branded Track Livery' }],
  },
  'touch-screen-games': {
    tagline: 'Large-format touchscreen arcade — quizzes, trivia & branded mini-games',
    intro: 'A large interactive touchscreen running a library of quick, crowd-friendly games — trivia, quizzes, puzzle challenges, or a custom mini-game built around your brand — with scores that feed straight into a leaderboard. Low setup footprint, high turnover, and easy to brand top to bottom.',
    stats: [{ n: '55"+', l: 'Touch Display' }, { n: '10+', l: 'Game Formats' }, { n: 'Live', l: 'Score Leaderboard' }],
  },
  'catch-the-baton': {
    tagline: 'Fast-reflex sensor game — catch the baton before time runs out',
    intro: 'A reflex-testing game where guests race to catch a sensor-rigged baton as it drops or swings, with a timer and score display that turns a 10-second interaction into a genuine crowd moment. Simple to understand, instantly competitive, and great for pulling foot traffic to a stall.',
    stats: [{ n: '<1s', l: 'Reaction Window' }, { n: 'Instant', l: 'Score Display' }, { n: 'High', l: 'Crowd-Pull Factor' }],
  },
  'buzzer-pro': {
    tagline: 'Professional quiz-buzzer system for live game shows & team quizzes',
    intro: 'A multi-station buzzer system built for genuine game-show-style quizzes — first-to-buzz lockout, team scoring, and a host display — the same category of hardware used in televised quiz formats. Ideal for corporate town halls, college fests, and any event that wants a structured, hosted competition rather than a walk-up game.',
    stats: [{ n: 'Lockout', l: 'First-Buzz Logic' }, { n: 'Multi', l: 'Team Stations' }, { n: 'Host', l: 'Scoring Display' }],
  },

  // ---------- Merch & Giveaways ----------
  'fridge-magnets': {
    tagline: 'On-site printed photo magnets guests take home instantly',
    intro: 'Guests get photographed on the spot and walk away minutes later with a printed, fridge-ready photo magnet — part keepsake, part takeaway merch that keeps your brand visible in their home long after the event. One of our fastest, highest-volume giveaway formats.',
    stats: [{ n: '90s', l: 'Shoot to Magnet' }, { n: 'Full', l: 'Color Print' }, { n: 'Durable', l: 'Magnetic Backing' }],
  },
  'bag-tags': {
    tagline: 'Personalised luggage & bag tags printed with guest photos on-site',
    intro: 'Custom luggage and bag tags personalised with a guest\'s own event photo and name, printed and assembled on-site in minutes — a practical takeaway that doubles as a lasting reminder of the event every time it\'s used on a trip.',
    stats: [{ n: '2min', l: 'Print & Assemble' }, { n: 'Personalized', l: 'Name + Photo' }, { n: 'Reusable', l: 'Everyday Item' }],
  },
  'bobble-heads': {
    tagline: '3D-printed caricature bobbleheads modelled from a guest photo',
    intro: 'A guest\'s photo is scanned and turned into a miniature 3D-printed caricature bobblehead within the event window — a genuinely novel, conversation-starting giveaway that most guests have never received at an event before.',
    stats: [{ n: '3D', l: 'Printed Figure' }, { n: 'Same-Day', l: 'Turnaround' }, { n: '1-of-1', l: 'Per Guest' }],
  },
  'laser-engraving': {
    tagline: 'Live laser-engraved merch — pens, bottles, coasters, keychains',
    intro: 'A live laser-engraving station that personalises merch on the spot — names, initials, or short messages etched into pens, steel bottles, wooden coasters, or keychains while guests watch. It turns an otherwise generic giveaway into something that feels made specifically for them.',
    stats: [{ n: 'Live', l: 'On-Site Engraving' }, { n: '60s', l: 'Per Item' }, { n: '4+', l: 'Merch Options' }],
  },

  // ---------- Guest Engagement ----------
  'audio-guest-book': {
    tagline: 'Retro telephone booth that records heartfelt voice messages',
    intro: 'A vintage-style telephone booth where guests pick up the receiver and leave a voice message for the couple or host — a format borrowed from wedding guest books that\'s become a sentimental favourite because it captures tone and emotion that handwritten notes can\'t.',
    stats: [{ n: 'Vintage', l: 'Telephone Set' }, { n: '2min', l: 'Max Per Message' }, { n: 'Digital', l: 'Archive Delivered' }],
  },
  'video-guest-book': {
    tagline: 'On-camera video booth for recorded well-wishes & messages',
    intro: 'A dedicated recording booth where guests sit in front of a camera and leave a short video message — well-wishes, memories, advice — compiled afterward into a single keepsake video. A step up from an audio guest book when you want faces and reactions, not just voices.',
    stats: [{ n: 'HD', l: 'Video Recording' }, { n: '2min', l: 'Max Per Message' }, { n: 'Compiled', l: 'Highlight Reel' }],
  },

  // ---------- Registration ----------
  'customized-games-applications': {
    tagline: 'Bespoke check-in apps & gamified registration built for your event',
    intro: 'A custom-built web or mobile application for your specific event — fast QR check-in, badge printing, gamified registration flows, lead capture, or a branded app experience designed around exactly what your event needs rather than a one-size-fits-all registration tool.',
    stats: [{ n: 'Custom', l: 'Built Per Event' }, { n: 'QR', l: 'Fast Check-In' }, { n: 'Live', l: 'Attendee Data' }],
  },
}

export function getSubServiceContent(slug: string): SubServiceContent {
  return (
    SUB_SERVICE_CONTENT[slug] || {
      tagline: 'Fully branded, on-site operator included',
      intro: 'A fully branded, guest-ready activation delivered end-to-end by our on-site team — from setup to breakdown — so you can focus on the event, not the equipment.',
      stats: [{ n: '100%', l: 'Branded Setup' }, { n: 'On-Site', l: 'Operator' }, { n: '2-Hr', l: 'Quote Response' }],
    }
  )
}
