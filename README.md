# Creative Konnect Website

Next.js 14 · Tailwind CSS · Sanity CMS · TypeScript

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy env file and fill in your keys
cp .env.example .env.local

# 3. Run development server
npm run dev
# → http://localhost:3000

# 4. Access Sanity Studio (CMS)
# → http://localhost:3000/studio
```

---

## Project Structure

```
creative-konnect/
├── app/
│   ├── page.tsx                          # Homepage
│   ├── layout.tsx                        # Root layout (Nav + Footer + WhatsApp)
│   ├── globals.css                       # Brand CSS + Tailwind
│   ├── about/page.tsx                    # About Us
│   ├── contact/page.tsx                  # Contact + Quote form
│   ├── gallery/page.tsx                  # Gallery with filters
│   ├── blog/
│   │   ├── page.tsx                      # Blog listing
│   │   └── [slug]/page.tsx              # Blog article
│   ├── services/
│   │   ├── page.tsx                      # All services
│   │   ├── [serviceSlug]/page.tsx        # Service category
│   │   └── [serviceSlug]/[subServiceSlug]/page.tsx  # Sub-service
│   ├── hire/
│   │   └── [citySlug]/[serviceSlug]/page.tsx  # Programmatic SEO (200+ pages)
│   ├── studio/[[...tool]]/page.tsx       # Sanity CMS Studio
│   ├── api/quote/route.ts               # Quote form API (email + Notion)
│   ├── sitemap.ts                        # Auto XML sitemap
│   └── robots.ts                         # robots.txt
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                    # Mega dropdown nav
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── TickerStrip.tsx
│   │   ├── TrustBar.tsx
│   │   ├── ClientLogos.tsx
│   │   ├── StatsBar.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── GallerySection.tsx
│   │   ├── TestimonialsSection.tsx       # Google + Video + Text reviews
│   │   ├── MapSection.tsx
│   │   ├── BlogSection.tsx
│   │   └── CtaBanner.tsx
│   └── ui/
│       ├── QuoteModal.tsx                # Popup quote form
│       ├── ContactForm.tsx               # Full contact form
│       ├── FaqAccordion.tsx              # Interactive FAQ
│       ├── GalleryClient.tsx             # Gallery with filters
│       ├── SubServiceQuoteButton.tsx
│       └── WhatsAppWidget.tsx            # Floating WhatsApp button
│
├── lib/
│   ├── constants.ts                      # All cities, services, config
│   └── sanity.ts                         # Sanity client + all queries
│
├── sanity/
│   ├── schemas/
│   │   ├── blogPost.ts
│   │   └── index.ts  (serviceCategory, subService, galleryItem, testimonial, author)
│   └── (config in sanity.config.ts)
│
└── types/index.ts                        # All TypeScript types
```

---

## Sanity CMS Setup

1. Go to [sanity.io](https://sanity.io) → Create new project → Copy Project ID
2. Add to `.env.local`: `NEXT_PUBLIC_SANITY_PROJECT_ID=your-id`
3. Visit `/studio` to access the CMS dashboard
4. Add content: Blog posts, Gallery items, Testimonials, Services

---

## Email Setup (Resend)

1. Go to [resend.com](https://resend.com) → Sign up (free)
2. Add your domain (creativekonnect.com) → Verify DNS
3. Create API key → Add to `.env.local` as `RESEND_API_KEY`

---

## Lead Tracking (Notion)

1. Go to [notion.so](https://notion.so) → Create a new Database
2. Add columns: Name, Phone, Email, Company, Event Type, City, Services, Status
3. Go to [notion.so/my-integrations](https://notion.so/my-integrations) → Create integration
4. Share your database with the integration
5. Add `NOTION_API_KEY` and `NOTION_DATABASE_ID` to `.env.local`

---

## Programmatic SEO Pages

The `/hire/[citySlug]/[serviceSlug]` route auto-generates pages like:
- `/hire/hyderabad/360-video-booth`
- `/hire/mumbai/glambot`
- `/hire/delhi-ncr/vr-games`

**Total pages generated:** ~400+ (15 cities × 27 sub-services + top-level services)

Each page has:
- Unique H1 with city + service name
- Dynamic FAQs mentioning the city
- Internal links to other cities and related services
- LocalBusiness JSON-LD schema
- Unique meta title + description

---

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```
Add all `.env.example` variables in Vercel dashboard → Settings → Environment Variables.

### Netlify
```bash
npm run build
# Deploy the .next folder
```

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Score | 95+ |
| First Contentful Paint | < 1.2s |
| Largest Contentful Paint | < 2.0s |
| Total Blocking Time | < 150ms |
| Cumulative Layout Shift | < 0.1 |
