import { defineField, defineType } from 'sanity'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title',       title: 'Title',            type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug',        title: 'Slug',             type: 'slug',   options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'excerpt',     title: 'Excerpt',          type: 'text',   rows: 3 }),
    defineField({ name: 'coverImage',  title: 'Cover Image',      type: 'image',  options: { hotspot: true } }),
    defineField({
      name: 'category', title: 'Category', type: 'string',
      options: { list: ['Photo Booths', 'AI & Tech', 'Games', 'Weddings', 'Corporate', 'Guest Engagement', 'Pricing Guides'] },
    }),
    defineField({
      name: 'author', title: 'Author', type: 'reference',
      to: [{ type: 'author' }],
    }),
    defineField({ name: 'publishedAt', title: 'Published At',     type: 'datetime' }),
    defineField({ name: 'readTime',    title: 'Read Time (mins)', type: 'number' }),
    defineField({ name: 'tags',        title: 'Tags',             type: 'array', of: [{ type: 'string' }] }),
    defineField({
      name: 'body', title: 'Body', type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'relatedService', title: 'Related Service (for filtering)', type: 'reference',
      to: [{ type: 'serviceCategory' }],
    }),
    defineField({ name: 'seoTitle',       title: 'SEO Title',       type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 2 }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'coverImage' },
  },
  orderings: [{ title: 'Published Date, New→Old', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
})
