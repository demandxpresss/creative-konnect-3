import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { blogPost }       from './schemas/blogPost'
import { siteSettings }   from './schemas/siteSettings'
import { author, serviceCategory, subService, galleryItem, testimonial } from './schemas/index'

export default defineConfig({
  name:      'creative-konnect',
  title:     'Creative Konnect CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET    || 'production',
  basePath:  '/studio',
  plugins: [
    structureTool({
      structure: S =>
        S.list()
          .title('Creative Konnect')
          .items([
            S.listItem().title('Blog Posts').schemaType('blogPost').child(
              S.documentList().title('Blog Posts').filter('_type == "blogPost"')
            ),
            S.listItem().title('Gallery').schemaType('galleryItem').child(
              S.documentList().title('Gallery Items').filter('_type == "galleryItem"')
            ),
            S.listItem().title('Testimonials').schemaType('testimonial').child(
              S.documentList().title('Testimonials').filter('_type == "testimonial"')
            ),
            S.divider(),
            S.listItem().title('Service Categories').schemaType('serviceCategory').child(
              S.documentList().title('Services').filter('_type == "serviceCategory"')
            ),
            S.listItem().title('Sub Services').schemaType('subService').child(
              S.documentList().title('Sub Services').filter('_type == "subService"')
            ),
            S.divider(),
            S.listItem().title('Authors').schemaType('author').child(
              S.documentList().title('Authors').filter('_type == "author"')
            ),
            S.divider(),
            S.listItem().title('⚙️ Site Settings').schemaType('siteSettings').child(
              S.editor().schemaType('siteSettings').documentId('siteSettings')
            ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: [blogPost, author, serviceCategory, subService, galleryItem, testimonial, siteSettings],
  },
})
