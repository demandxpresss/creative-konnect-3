import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImage } from '@/types'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET   || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImage) {
  return builder.image(source)
}

// ─── Queries ─────────────────────────────────────────────────────

export const HOMEPAGE_QUERY = `{
  "featuredReels": *[_type == "galleryItem" && type == "reel" && isFeatured == true] | order(_createdAt desc)[0...6] {
    _id, title, mediaUrl, thumbnailUrl, service, eventType, city, year, views
  },
  "featuredPhotos": *[_type == "galleryItem" && type == "photo" && isFeatured == true] | order(_createdAt desc)[0...5] {
    _id, title, mediaUrl, thumbnailUrl, service, eventType
  },
  "latestPosts": *[_type == "blogPost"] | order(publishedAt desc)[0...3] {
    _id, title, slug, excerpt, coverImage, category, publishedAt, readTime,
    author->{ name, initials, avatarColor }
  },
  "testimonials": *[_type == "testimonial"] | order(_createdAt desc)[0...8] {
    _id, name, role, company, type, rating, text, videoUrl,
    initials, avatarColor, eventType, eventLabel, isFeatured
  },
  "googleRating": *[_type == "siteSettings"][0] { googleRating, googleReviewCount }
}`

export const SERVICE_CATEGORY_QUERY = (slug: string) => `
  *[_type == "serviceCategory" && slug.current == "${slug}"][0] {
    _id, title, slug, description, shortDesc, coverImage,
    benefits, eventTypes, faqs, seoTitle, seoDescription,
    "subServices": *[_type == "subService" && serviceCategory->slug.current == "${slug}"] | order(order asc) {
      _id, title, slug, tagline, description, coverImage,
      badge, isPopular, isNew, eventTypes
    },
    "gallery": *[_type == "galleryItem" && service == "${slug}"] | order(_createdAt desc)[0...12] {
      _id, title, type, mediaUrl, thumbnailUrl, eventType, city, year, views, isFeatured
    },
    "testimonials": *[_type == "testimonial" && relatedService == "${slug}"] | order(_createdAt desc)[0...6] {
      _id, name, role, company, type, rating, text, videoUrl,
      initials, avatarColor, eventType, eventLabel, isFeatured
    }
  }
`

export const SUB_SERVICE_QUERY = (slug: string) => `
  *[_type == "subService" && slug.current == "${slug}"][0] {
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
  }
`

export const BLOG_LIST_QUERY = (category?: string) => `
  *[_type == "blogPost" ${category ? `&& category == "${category}"` : ''}] | order(publishedAt desc) {
    _id, title, slug, excerpt, coverImage, category, publishedAt, readTime, tags,
    author->{ name, initials, avatarColor }
  }
`

export const BLOG_POST_QUERY = (slug: string) => `
  *[_type == "blogPost" && slug.current == "${slug}"][0] {
    _id, title, slug, excerpt, body, coverImage, category,
    publishedAt, readTime, tags, seoTitle, seoDescription,
    author->{ name, role, initials, avatarColor },
    relatedService->{ title, slug },
    "relatedPosts": *[_type == "blogPost" && category == ^.category && slug.current != "${slug}"][0...3] {
      _id, title, slug, coverImage, category, readTime,
      author->{ name, initials, avatarColor }
    }
  }
`

export const GALLERY_QUERY = `
  *[_type == "galleryItem"] | order(_createdAt desc) {
    _id, title, type, mediaUrl, thumbnailUrl, cloudinaryId,
    service, eventType, city, year, views, isFeatured
  }
`

export const ALL_SERVICE_SLUGS_QUERY = `
  *[_type == "serviceCategory"] { "slug": slug.current }
`

export const ALL_SUB_SERVICE_SLUGS_QUERY = `
  *[_type == "subService"] { "slug": slug.current }
`

export const ALL_BLOG_SLUGS_QUERY = `
  *[_type == "blogPost"] { "slug": slug.current }
`
