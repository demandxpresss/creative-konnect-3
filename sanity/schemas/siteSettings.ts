import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name:  'siteSettings',
  title: 'Site Settings',
  type:  'document',
  // Only one doc allowed
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'googleRating',      title: 'Google Rating',       type: 'string' }),
    defineField({ name: 'googleReviewCount', title: 'Review Count',        type: 'string' }),
    defineField({ name: 'eventsCount',       title: 'Events Count Display', type: 'string' }),
    defineField({ name: 'citiesCount',       title: 'Cities Count Display', type: 'string' }),
    defineField({
      name: 'clientLogos', title: 'Client Logos', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name',    type: 'string', title: 'Company Name' },
          { name: 'logo',    type: 'image',  title: 'Logo' },
          { name: 'website', type: 'url',    title: 'Website (optional)' },
        ],
      }],
    }),
    defineField({
      name: 'announcementBar', title: 'Announcement Bar Text', type: 'string',
      description: 'Shown at very top of site (leave empty to hide)',
    }),
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
})
