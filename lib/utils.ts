import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// ── Tailwind class merging ────────────────────────────────────────
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ── Date formatting ───────────────────────────────────────────────
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatDateShort(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-IN', {
    month: 'short',
    year: 'numeric',
  })
}

// ── String helpers ────────────────────────────────────────────────
export function truncate(str: string, length: number): string {
  return str.length > length ? `${str.slice(0, length)}...` : str
}

export function toCitySlug(city: string): string {
  return city.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

export function fromCitySlug(slug: string, cities: string[]): string | undefined {
  return cities.find(c => toCitySlug(c) === slug)
}

export function toTitleCase(str: string): string {
  return str.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

// ── Read time estimator ───────────────────────────────────────────
export function estimateReadTime(text: string): number {
  const wordsPerMinute = 200
  const wordCount      = text.trim().split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

// ── Cloudinary URL builder ────────────────────────────────────────
export function cloudinaryUrl(
  publicId: string,
  options: {
    width?:   number
    height?:  number
    quality?: number | 'auto'
    format?:  'webp' | 'auto' | 'jpg' | 'png'
    crop?:    'fill' | 'fit' | 'thumb' | 'scale'
  } = {}
): string {
  const cloud   = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  if (!cloud)   return ''

  const { width, height, quality = 'auto', format = 'auto', crop = 'fill' } = options

  const transforms = [
    `f_${format}`,
    `q_${quality}`,
    crop   ? `c_${crop}` : '',
    width  ? `w_${width}` : '',
    height ? `h_${height}` : '',
  ].filter(Boolean).join(',')

  return `https://res.cloudinary.com/${cloud}/image/upload/${transforms}/${publicId}`
}

// ── WhatsApp link builder ─────────────────────────────────────────
export function whatsappLink(phone: string, message?: string): string {
  const base = `https://wa.me/${phone.replace(/[^0-9]/g, '')}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

// ── SEO helpers ───────────────────────────────────────────────────
export function buildPageTitle(parts: string[]): string {
  return [...parts, 'Creative Konnect'].join(' | ')
}

export function buildSeoDescription(service: string, city?: string): string {
  if (city) {
    return `Hire ${service} in ${city} for your event. Fully branded, on-site operator, instant social sharing. Get a free quote in 2 hours from Creative Konnect — India's leading event engagement company.`
  }
  return `Book ${service} for your event across India. Fully branded, on-site operator, instant social sharing. Get a free quote in 2 hours.`
}
