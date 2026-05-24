export const SITE_CONFIG = {
  name: 'Creative Konnect',
  tagline: 'Event Engagement Solutions',
  url: 'https://www.creativekonnect.com',
  description: 'India\'s leading event engagement company — 360 video booths, AI experiences, VR games, custom merch and more for every event.',
  phone: ['+91 84322 58944'],
  whatsapp: '918432258944',
  email: 'creativekonnect18@gmail.com',
  address: 'Japonica B, Warje, Aditya Garden City, Warje, Pune, Maharashtra 411058',
  googleRating: '5.0',
  googleReviewCount: '22',
  eventsCount: '500+',
  citiesCount: '15+',
  socialLinks: {
    instagram: 'https://www.instagram.com/creative_konnect/',
    facebook:  'https://www.facebook.com/creativekonnect/',
    youtube:   'https://www.youtube.com/channel/UCReXTJvA6Dy_J6bHI1wmxpw',
  },
}

export const CITIES = [
  'Hyderabad', 'Mumbai', 'Delhi NCR', 'Bangalore',
  'Chennai', 'Pune', 'Jaipur', 'Ahmedabad',
  'Goa', 'Kolkata', 'Kochi', 'Chandigarh',
  'Surat', 'Lucknow', 'Indore',
]

export const EVENT_TYPES = [
  'Corporate Event',
  'Wedding / Sangeet',
  'Brand Activation / BTL',
  'Award Night / Gala',
  'College Fest',
  'Product Launch',
  'Birthday Party',
  'Conference / Expo',
  'Sports Event',
  'Virtual Event',
]

export const SERVICES = [
  { name: 'Photo & Video Booths', slug: 'photo-video-booths' },
  { name: 'AI & Tech Experiences', slug: 'ai-tech-experiences' },
  { name: 'Games', slug: 'games' },
  { name: 'Merch & Giveaways', slug: 'merch-giveaways' },
  { name: 'Guest Engagement', slug: 'guest-engagement' },
  { name: 'Registration', slug: 'registration' },
]

export const SUB_SERVICES: Record<string, { name: string; slug: string }[]> = {
  'photo-video-booths': [
    { name: 'Ring Booth',         slug: 'ring-booth' },
    { name: 'Mirror Booth',       slug: 'mirror-booth' },
    { name: '360 Video Booth',    slug: '360-video-booth' },
    { name: 'Glambot',            slug: 'glambot' },
    { name: 'AI Booths',          slug: 'ai-booths' },
    { name: 'Green Screen / VFX', slug: 'green-screen-vfx' },
    { name: 'GIF & Boomerang',    slug: 'gif-boomerang' },
    { name: 'Virtual Photobooth', slug: 'virtual-photobooth' },
    { name: 'Strip Photobooth',   slug: 'strip-photobooth' },
  ],
  'ai-tech-experiences': [
    { name: 'AI Celebrity Booth', slug: 'ai-celebrity-booth' },
    { name: 'AI Starter Pack',    slug: 'ai-starter-pack' },
    { name: 'AI 360 Booth',       slug: 'ai-360-booth' },
    { name: 'AR Mind Reader',     slug: 'ar-mind-reader' },
    { name: 'Sling Shot',         slug: 'sling-shot' },
    { name: 'Mosaic Wall',        slug: 'mosaic-wall' },
  ],
  'games': [
    { name: 'VR Games',           slug: 'vr-games' },
    { name: 'Car Simulator',      slug: 'car-simulator' },
    { name: 'Touch Screen Games', slug: 'touch-screen-games' },
    { name: 'Catch The Baton',    slug: 'catch-the-baton' },
    { name: 'Buzzer Pro',         slug: 'buzzer-pro' },
  ],
  'merch-giveaways': [
    { name: 'Fridge Magnets',     slug: 'fridge-magnets' },
    { name: 'Bag Tags',           slug: 'bag-tags' },
    { name: 'Bobble Heads',       slug: 'bobble-heads' },
  ],
  'guest-engagement': [
    { name: 'Audio Guest Book',   slug: 'audio-guest-book' },
    { name: 'Video Guest Book',   slug: 'video-guest-book' },
  ],
  'registration': [
    { name: 'Customized Games & Applications', slug: 'customized-games-applications' },
  ],
}

// Avatar colors for generated avatars
export const AVATAR_COLORS = [
  '#1A7FD4', '#2AACEE', '#1A3A5C', '#0a5a8a',
  '#0a6a9a', '#1568b0', '#0a4a7a',
]
