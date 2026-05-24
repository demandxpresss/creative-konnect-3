// ─── Service Types ───────────────────────────────────────────────
export interface ServiceCategory {
  _id: string
  title: string
  slug: { current: string }
  description: string
  shortDesc: string
  icon: string
  coverImage: SanityImage
  subServices: SubService[]
  benefits: Benefit[]
  eventTypes: string[]
  faqs: FAQ[]
  seoTitle: string
  seoDescription: string
}

export interface SubService {
  _id: string
  title: string
  slug: { current: string }
  tagline: string
  description: string
  coverImage: SanityImage
  demoVideoUrl?: string
  badge?: string
  isPopular?: boolean
  isNew?: boolean
  benefits: Benefit[]
  useCases: UseCase[]
  eventTypes: string[]
  faqs: FAQ[]
  gallery: GalleryItem[]
  relatedServices: SubService[]
  seoTitle: string
  seoDescription: string
  serviceCategory: { slug: { current: string }; title: string }
}

// ─── Blog Types ──────────────────────────────────────────────────
export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  body: PortableTextBlock[]
  coverImage: SanityImage
  category: string
  author: Author
  publishedAt: string
  readTime: number
  tags: string[]
  relatedService?: { slug: { current: string }; title: string }
  seoTitle: string
  seoDescription: string
}

export interface Author {
  _id: string
  name: string
  role: string
  avatar: SanityImage
  initials: string
  avatarColor: string
}

// ─── Gallery Types ───────────────────────────────────────────────
export interface GalleryItem {
  _id: string
  title: string
  type: 'photo' | 'reel'
  mediaUrl: string
  thumbnailUrl?: string
  cloudinaryId?: string
  service: string
  eventType: string
  city: string
  year: number
  views?: string
  isFeatured?: boolean
}

// ─── Testimonial Types ───────────────────────────────────────────
export interface Testimonial {
  _id: string
  name: string
  role: string
  company: string
  type: 'text' | 'video' | 'google'
  rating: number
  text: string
  videoUrl?: string
  avatar?: SanityImage
  initials: string
  avatarColor: string
  eventType: string
  eventLabel: string
  isFeatured?: boolean
  relatedService?: string
}

// ─── SEO / Programmatic ─────────────────────────────────────────
export interface SeoPage {
  city: string
  service: string
  serviceSlug: string
  citySlug: string
}

// ─── Shared Types ────────────────────────────────────────────────
export interface SanityImage {
  asset: { _ref: string; _type: string }
  alt?: string
  hotspot?: { x: number; y: number }
}

export interface Benefit {
  title: string
  description: string
  icon: string
}

export interface UseCase {
  title: string
  description: string
  emoji: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface PortableTextBlock {
  _type: string
  _key: string
  children?: { text: string; marks?: string[] }[]
  markDefs?: unknown[]
  style?: string
}

// ─── Form Types ──────────────────────────────────────────────────
export interface QuoteFormData {
  name: string
  phone: string
  city: string
  eventType: string
  eventDate?: string
  service?: string
  email?: string
}

export interface ContactFormData extends QuoteFormData {
  company?: string
  email: string
  guestCount?: string
  services: string[]
  message?: string
}
