import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title:       'Privacy Policy | Creative Konnect',
  description: 'Privacy policy for Creative Konnect — how we collect, use and protect your personal information.',
  robots:      { index: true, follow: true },
}

const SECTIONS = [
  {
    title: '1. Information We Collect',
    body: `We collect information you provide directly to us when you fill out our quote request or contact form. This includes your name, phone number, email address, company name, and event details. We also collect analytics data through Google Analytics 4 to understand how visitors use our website.`,
  },
  {
    title: '2. How We Use Your Information',
    body: `We use your information solely to respond to your quote or enquiry, send you relevant event planning resources (only if you consent), and improve our website experience. We do not sell, rent, or share your personal data with third parties for marketing purposes.`,
  },
  {
    title: '3. Cookies',
    body: `We use cookies to analyse website traffic and improve your browsing experience. You can accept or decline non-essential cookies using the cookie banner shown on your first visit. Essential cookies required for the website to function are always active.`,
  },
  {
    title: '4. Data Retention',
    body: `We retain your contact information for up to 2 years to help us serve you better for future events. You may request deletion of your data at any time by emailing us at ${SITE_CONFIG.email}.`,
  },
  {
    title: '5. Third-Party Services',
    body: `Our website uses Google Analytics for traffic analysis, Resend for email delivery, and Notion for lead management. Each of these services has their own privacy policies which govern their use of your data.`,
  },
  {
    title: '6. Your Rights',
    body: `You have the right to access, correct, or delete your personal information at any time. To exercise these rights, contact us at ${SITE_CONFIG.email}. We will respond within 30 days.`,
  },
  {
    title: '7. Contact',
    body: `If you have any questions about this Privacy Policy, please contact us at ${SITE_CONFIG.email} or call us at ${SITE_CONFIG.phone[0]}.`,
  },
]

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      {/* Breadcrumb */}
      <div className="text-xs text-[#7aaccc] mb-6">
        <Link href="/" className="hover:text-ck-blue transition-colors">Home</Link>
        {' › '}<span className="text-ck-deep font-semibold">Privacy Policy</span>
      </div>

      <h1 className="text-[28px] font-black text-ck-deep tracking-tight mb-2">Privacy Policy</h1>
      <p className="text-xs text-[#7aaccc] mb-8">Last updated: January 2025</p>

      <p className="text-sm text-[#5a7a92] leading-relaxed mb-8">
        At Creative Konnect, we are committed to protecting your privacy. This policy explains
        how we collect, use, and safeguard your personal information when you visit our website
        or contact us about our event services.
      </p>

      <div className="space-y-7">
        {SECTIONS.map((s, i) => (
          <div key={i}>
            <h2 className="text-sm font-black text-ck-deep mb-2">{s.title}</h2>
            <p className="text-sm text-[#5a7a92] leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-8 border-t border-[#e8f0f8]">
        <p className="text-xs text-[#7aaccc]">
          Creative Konnect · {SITE_CONFIG.address} ·{' '}
          <a href={`mailto:${SITE_CONFIG.email}`} className="text-ck-blue hover:underline">
            {SITE_CONFIG.email}
          </a>
        </p>
      </div>
    </div>
  )
}
