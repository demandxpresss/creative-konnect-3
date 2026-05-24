'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const QuoteModal = dynamic(() => import('@/components/ui/QuoteModal').then((m) => m.QuoteModal), {
  ssr: false,
})

export function HeroCtaButtons() {
  const [quoteOpen, setQuoteOpen] = useState(false)

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <button onClick={() => setQuoteOpen(true)} className="btn-primary">
          Explore Services
        </button>
        <Link href="/gallery" className="btn-ghost">
          View Gallery
        </Link>
      </div>

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  )
}
