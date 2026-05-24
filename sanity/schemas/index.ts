import { defineField, defineType } from 'sanity'

// ── Author ────────────────────────────────────────────────────────
export const author = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({ name: 'name',        title: 'Name',         type: 'string' }),
    defineField({ name: 'role',        title: 'Role',         type: 'string' }),
    defineField({ name: 'initials',    title: 'Initials',     type: 'string' }),
    defineField({ name: 'avatarColor', title: 'Avatar Color', type: 'string' }),
    defineField({ name: 'avatar',      title: 'Avatar',       type: 'image' }),
  ],
  preview: { select: { title: 'name', subtitle: 'role' } },
})

// ── Service Category ─────────────────────────────────────────────
export const serviceCategory = defineType({
  name: 'serviceCategory',
  title: 'Service Category',
  type: 'document',
  fields: [
    defineField({ name: 'title',       title: 'Title',       type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug',        title: 'Slug',        type: 'slug',   options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'shortDesc',   title: 'Short Description', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'coverImage',  title: 'Cover Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'icon',        title: 'Icon (emoji)', type: 'string' }),
    defineField({ name: 'order',       title: 'Sort Order',  type: 'number' }),
    defineField({
      name: 'benefits', title: 'Benefits', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title',       type: 'string', title: 'Title' },
          { name: 'description', type: 'string', title: 'Description' },
          { name: 'icon',        type: 'string', title: 'Icon (emoji)' },
        ],
      }],
    }),
    defineField({
      name: 'eventTypes', title: 'Event Types', type: 'array', of: [{ type: 'string' }],
    }),
    defineField({
      name: 'faqs', title: 'FAQs', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'question', type: 'string', title: 'Question' },
          { name: 'answer',   type: 'text',   title: 'Answer' },
        ],
      }],
    }),
    defineField({ name: 'seoTitle',       title: 'SEO Title',       type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 2 }),
  ],
  preview: { select: { title: 'title', media: 'coverImage' } },
})

// ── Sub Service ──────────────────────────────────────────────────
export const subService = defineType({
  name: 'subService',
  title: 'Sub Service',
  type: 'document',
  fields: [
    defineField({ name: 'title',        title: 'Title',         type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug',         title: 'Slug',          type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'tagline',      title: 'Tagline',       type: 'string' }),
    defineField({ name: 'description',  title: 'Description',   type: 'text', rows: 4 }),
    defineField({ name: 'coverImage',   title: 'Cover Image',   type: 'image', options: { hotspot: true } }),
    defineField({ name: 'demoVideoUrl', title: 'Demo Video URL', type: 'url' }),
    defineField({ name: 'badge',        title: 'Badge Text',    type: 'string' }),
    defineField({ name: 'isPopular',    title: 'Is Popular?',   type: 'boolean' }),
    defineField({ name: 'isNew',        title: 'Is New?',       type: 'boolean' }),
    defineField({ name: 'order',        title: 'Sort Order',    type: 'number' }),
    defineField({
      name: 'serviceCategory', title: 'Service Category', type: 'reference',
      to: [{ type: 'serviceCategory' }], validation: r => r.required(),
    }),
    defineField({
      name: 'benefits', title: 'Benefits', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title',       type: 'string', title: 'Title' },
          { name: 'description', type: 'string', title: 'Description' },
        ],
      }],
    }),
    defineField({
      name: 'useCases', title: 'Use Cases', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'emoji',       type: 'string', title: 'Emoji' },
          { name: 'title',       type: 'string', title: 'Title' },
          { name: 'description', type: 'text',   title: 'Description' },
        ],
      }],
    }),
    defineField({ name: 'eventTypes', title: 'Event Types', type: 'array', of: [{ type: 'string' }] }),
    defineField({
      name: 'faqs', title: 'FAQs', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'question', type: 'string', title: 'Question' },
          { name: 'answer',   type: 'text',   title: 'Answer' },
        ],
      }],
    }),
    defineField({ name: 'seoTitle',       title: 'SEO Title',       type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 2 }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'serviceCategory.title', media: 'coverImage' },
  },
})

// ── Gallery Item ─────────────────────────────────────────────────
export const galleryItem = defineType({
  name: 'galleryItem',
  title: 'Gallery Item',
  type: 'document',
  fields: [
    defineField({ name: 'title',        title: 'Title / Caption', type: 'string', validation: r => r.required() }),
    defineField({
      name: 'type', title: 'Media Type', type: 'string',
      options: { list: [{ title: 'Photo', value: 'photo' }, { title: 'Reel / Video', value: 'reel' }] },
      validation: r => r.required(),
    }),
    defineField({ name: 'mediaUrl',     title: 'Media URL (Cloudinary)', type: 'url' }),
    defineField({ name: 'thumbnailUrl', title: 'Thumbnail URL',          type: 'url' }),
    defineField({ name: 'cloudinaryId', title: 'Cloudinary Public ID',   type: 'string' }),
    defineField({
      name: 'service', title: 'Service Tag', type: 'string',
      options: { list: ['360-video-booth', 'glambot', 'mirror-booth', 'ai-booth', 'vr-games', 'ring-booth', 'green-screen', 'gif-boomerang', 'other'] },
    }),
    defineField({
      name: 'eventType', title: 'Event Type', type: 'string',
      options: { list: ['Corporate', 'Wedding', 'Brand Activation', 'Award Night', 'College Fest', 'Birthday', 'Conference', 'Other'] },
    }),
    defineField({
      name: 'city', title: 'City', type: 'string',
      options: { list: ['Hyderabad', 'Mumbai', 'Delhi NCR', 'Bangalore', 'Chennai', 'Pune', 'Jaipur', 'Other'] },
    }),
    defineField({ name: 'year',       title: 'Year',            type: 'number' }),
    defineField({ name: 'views',      title: 'Views (e.g. 1.2M)', type: 'string' }),
    defineField({ name: 'isFeatured', title: 'Featured?',        type: 'boolean' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'service' },
  },
  orderings: [{ title: 'Newest First', name: 'createdDesc', by: [{ field: '_createdAt', direction: 'desc' }] }],
})

// ── Testimonial ──────────────────────────────────────────────────
export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'name',        title: 'Client Name',  type: 'string', validation: r => r.required() }),
    defineField({ name: 'role',        title: 'Role / Title', type: 'string' }),
    defineField({ name: 'company',     title: 'Company',      type: 'string' }),
    defineField({
      name: 'type', title: 'Testimonial Type', type: 'string',
      options: { list: [{ title: 'Text', value: 'text' }, { title: 'Video', value: 'video' }, { title: 'Google Review', value: 'google' }] },
    }),
    defineField({ name: 'rating',      title: 'Star Rating (1-5)', type: 'number' }),
    defineField({ name: 'text',        title: 'Review Text',       type: 'text', rows: 4 }),
    defineField({ name: 'videoUrl',    title: 'Video URL (for video type)', type: 'url' }),
    defineField({ name: 'initials',    title: 'Initials (e.g. RS)', type: 'string' }),
    defineField({ name: 'avatarColor', title: 'Avatar Color (hex)', type: 'string' }),
    defineField({ name: 'eventType',   title: 'Event Type',         type: 'string' }),
    defineField({ name: 'eventLabel',  title: 'Event Label (e.g. Wedding · Mumbai)', type: 'string' }),
    defineField({ name: 'isFeatured',  title: 'Featured?',           type: 'boolean' }),
    defineField({
      name: 'relatedService', title: 'Related Service (slug)', type: 'string',
      description: 'Used to filter testimonials on service pages',
    }),
    defineField({
      name: 'relatedSubService', title: 'Related Sub-Service (slug)', type: 'string',
      description: 'Used to filter testimonials on sub-service pages',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'eventLabel' },
  },
})
