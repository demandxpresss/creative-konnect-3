import { sanityClient, HOMEPAGE_QUERY, GALLERY_QUERY, BLOG_LIST_QUERY, BLOG_POST_QUERY } from './sanity'
import type { BlogPost, GalleryItem, Testimonial } from '@/types'

// ── Generic fetch with error handling ────────────────────────────
async function safeFetch<T>(query: string, fallback: T): Promise<T> {
  // If no Sanity project ID configured, return fallback silently
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'your-project-id') {
    return fallback
  }
  try {
    const result = await sanityClient.fetch<T>(query)
    return result ?? fallback
  } catch (err) {
    console.warn('[Sanity fetch error]', err)
    return fallback
  }
}

// ── Homepage data ─────────────────────────────────────────────────
export async function getHomepageData() {
  return safeFetch(HOMEPAGE_QUERY, {
    featuredReels:  [] as GalleryItem[],
    featuredPhotos: [] as GalleryItem[],
    latestPosts:    [] as BlogPost[],
    testimonials:   [] as Testimonial[],
    googleRating:   null,
  })
}

// ── Blog posts ────────────────────────────────────────────────────
export async function getBlogPosts(category?: string): Promise<BlogPost[]> {
  return safeFetch(BLOG_LIST_QUERY(category), [] as BlogPost[])
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  return safeFetch(BLOG_POST_QUERY(slug), null)
}

// ── Gallery ───────────────────────────────────────────────────────
export async function getGalleryItems(): Promise<GalleryItem[]> {
  return safeFetch(GALLERY_QUERY, [] as GalleryItem[])
}

// ── Testimonials ──────────────────────────────────────────────────
export async function getTestimonials(serviceSlug?: string): Promise<Testimonial[]> {
  const query = serviceSlug
    ? `*[_type == "testimonial" && relatedService == "${serviceSlug}"] | order(_createdAt desc)`
    : `*[_type == "testimonial"] | order(_createdAt desc)[0...12]`
  return safeFetch(query, [] as Testimonial[])
}

// ── Service category ──────────────────────────────────────────────
export async function getServiceCategory(slug: string) {
  const query = `*[_type == "serviceCategory" && slug.current == "${slug}"][0] {
    _id, title, slug, description, shortDesc, coverImage,
    benefits, eventTypes, faqs, seoTitle, seoDescription,
    "subServices": *[_type == "subService" && serviceCategory->slug.current == "${slug}"] | order(order asc) {
      _id, title, slug, tagline, description, coverImage, badge, isPopular, isNew
    }
  }`
  return safeFetch(query, null)
}

// ── Sub service ───────────────────────────────────────────────────
export async function getSubService(slug: string) {
  const query = `*[_type == "subService" && slug.current == "${slug}"][0] {
    _id, title, slug, tagline, description, coverImage, demoVideoUrl,
    badge, isPopular, isNew, benefits, useCases, eventTypes, faqs,
    seoTitle, seoDescription,
    serviceCategory->{ title, slug },
    "gallery": *[_type == "galleryItem" && subService == "${slug}"] | order(_createdAt desc)[0...8] {
      _id, title, type, mediaUrl, thumbnailUrl, eventType, city, year, views
    },
    "testimonials": *[_type == "testimonial" && relatedSubService == "${slug}"] | order(_createdAt desc)[0...6] {
      _id, name, role, company, type, rating, text, videoUrl,
      initials, avatarColor, eventType, eventLabel, isFeatured
    },
    "relatedPosts": *[_type == "blogPost" && references(^._id)] | order(publishedAt desc)[0...3] {
      _id, title, slug, excerpt, coverImage, category, readTime,
      author->{ name, initials, avatarColor }
    }
  }`
  return safeFetch(query, null)
}
