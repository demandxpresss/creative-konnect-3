'use client'
import { useState } from 'react'
import Link from 'next/link'

interface AnnouncementBarProps {
  text: string
  href?: string
}

export function AnnouncementBar({ text, href }: AnnouncementBarProps) {
  const [dismissed, setDismissed] = useState(false)
  if (!text || dismissed) return null

  const content = (
    <span className="text-xs font-semibold text-white">
      {text}
    </span>
  )

  return (
    <div className="bg-ck-blue px-4 py-2 flex items-center justify-center gap-3 relative">
      {href ? (
        <Link href={href} className="hover:underline">
          {content}
        </Link>
      ) : content}
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-sm leading-none"
        aria-label="Dismiss"
      >
        ✕
      </button>
    </div>
  )
}
