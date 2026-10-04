export const SITE_CONFIG = {
  name: 'Creative Konnect',
  tagline: 'Event Engagement Solutions',
  url: 'https://www.creative-konnect.com',
  description: 'India\'s leading event engagement company — 360 video booths, AI experiences, VR games, custom merch and more for every event.',
  phone: ['+91 84322 58944'],
  whatsapp: '918432258944',
  email: 'creativekonnect18@gmail.com',
  address: 'Japonica B, Warje, Aditya Garden City, Warje, Pune, Maharashtra 411058',
  googleRating: '5.0',
  googleReviewCount: '22',
  eventsCount: '1000+',
  citiesCount: '25+',
  activitiesCount: '30+',
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

export const ACTIVITIES = [
  'Ring Booth',
  'Mirror Booth',
  'Glambot',
  'AI Photobooth',
  'VR Games',
  'Touch Screen Games',
  'Mosaic Wall',
  'AR Mind Reader',
  'Digital Sling Shot',
  'Fridge Magnets',
  'Bobble Heads',
  'Audio / Video Guest Book',
]

export const DURATION_OPTIONS = [
  'Up to 2 hrs',
  '3–4 hrs',
  '5–6 hrs (Full Day)',
  'Multi-day Event',
]

export const SERVICES = [
  { name: 'Photo & Video Booths', slug: 'photo-video-booths' },
  { name: 'AI & Tech Experiences', slug: 'ai-tech-experiences' },
  { name: 'Games', slug: 'games' },
  { name: 'Merch & Giveaways', slug: 'merch-giveaways' },
  { name: 'Guest Engagement', slug: 'guest-engagement' },
  { name: 'Registration', slug: 'registration' },
]

// Pune neighbourhoods — Creative Konnect's home city, so these get their own
// hyper-local landing pages (area × top-level service) rather than riding on
// the generic city page. Each blurb is genuinely area-specific so the pages
// don't read as the same content with a name swapped in.
export const PUNE_AREAS = [
  {
    name: 'Koregaon Park',
    slug: 'koregaon-park',
    blurb: "Pune's upscale hospitality and party belt, dense with restaurants, lounges and banquet lawns — a natural fit for weddings, sangeets and brand parties.",
  },
  {
    name: 'Viman Nagar',
    slug: 'viman-nagar',
    blurb: 'Close to Pune airport and Phoenix Marketcity, with a mix of corporate offices and residential societies that regularly host launches and family celebrations.',
  },
  {
    name: 'Hinjewadi',
    slug: 'hinjewadi',
    blurb: "Home to the Rajiv Gandhi IT Park and some of Pune's largest IT campuses — our most-booked area for corporate town halls, product launches and office parties.",
  },
  {
    name: 'PCMC',
    slug: 'pcmc',
    blurb: 'The Pimpri-Chinchwad industrial belt, with a strong base of manufacturing and auto-sector companies that run large-scale corporate and employee-engagement events.',
  },
  {
    name: 'Baner',
    slug: 'baner',
    blurb: "A fast-growing corporate and residential corridor on Pune's west side, popular for office celebrations, housing-society events and brand activations.",
  },
  {
    name: 'Wakad',
    slug: 'wakad',
    blurb: 'A dense residential hub next to the Hinjewadi IT corridor, where we regularly set up for housing-society events, birthdays and mid-size corporate gatherings.',
  },
  {
    name: 'Kothrud',
    slug: 'kothrud',
    blurb: "One of Pune's oldest, most established residential and educational neighbourhoods — a regular stop for college fests and community celebrations.",
  },
  {
    name: 'Mundhwa',
    slug: 'mundhwa',
    blurb: "Close to Pune's Kharadi–EON IT corridor and several riverside banquet venues, mixing corporate bookings with wedding and reception events.",
  },
  {
    name: 'NIBM Road',
    slug: 'nibm',
    blurb: 'An upscale residential and banquet-hall stretch in south Pune, popular for weddings, sangeets and private celebrations.',
  },
  {
    name: 'Salunkhe Vihar',
    slug: 'salunkhe-vihar',
    blurb: 'A well-settled residential pocket near NIBM Road, where we most often set up for housing-society functions and family events.',
  },
]

export const SUB_SERVICES: Record<string, { name: string; slug: string }[]> = {
  'photo-video-booths': [
    { name: 'Ring Booth',         slug: 'ring-booth' },
    { name: 'Mirror Booth',       slug: 'mirror-booth' },
    { name: 'Single Photobooth',  slug: 'single-photobooth' },
    { name: 'Glambot',            slug: 'glambot' },
    { name: 'AI Booths',          slug: 'ai-booths' },
    { name: 'Green Screen / VFX', slug: 'green-screen-vfx' },
    { name: 'GIF & Boomerang',    slug: 'gif-boomerang' },
    { name: 'Virtual Photobooth', slug: 'virtual-photobooth' },
    { name: 'Strip Photobooth',   slug: 'strip-photobooth' },
  ],
  'ai-tech-experiences': [
    { name: 'AI Photobooth',       slug: 'ai-photobooth' },
    { name: 'Mosaic Wall',         slug: 'mosaic-wall' },
    { name: 'Digital Sling Shot',  slug: 'digital-sling-shot' },
    { name: 'AR Mind Reader',      slug: 'ar-mind-reader' },
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
    { name: 'Laser Engraving',    slug: 'laser-engraving' },
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
