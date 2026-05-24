'use client'
import { useCopyToClipboard } from '@/lib/hooks'
import { SITE_CONFIG } from '@/lib/constants'

interface ShareButtonsProps {
  title: string
  slug:  string
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
  const { copied, copy } = useCopyToClipboard()
  const url = `${SITE_CONFIG.url}/blog/${slug}`

  const shares = [
    {
      label:   copied ? 'Copied!' : 'Copy link',
      onClick: () => copy(url),
      style:   'bg-ck-sky border-[#c0d8ee] text-ck-blue hover:border-ck-blue',
    },
    {
      label:   'WhatsApp',
      href:    `https://wa.me/?text=${encodeURIComponent(`${title} — ${url}`)}`,
      style:   'bg-[#f0fbf4] border-[#b8efd0] text-brand-wa hover:border-brand-wa',
    },
    {
      label:   'LinkedIn',
      href:    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      style:   'bg-[#e8f3fb] border-[#b8d8f0] text-[#0077b5] hover:border-[#0077b5]',
    },
    {
      label:   'X / Twitter',
      href:    `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      style:   'bg-ck-ghost border-[#dceaf5] text-ck-deep hover:border-ck-blue',
    },
  ]

  return (
    <div className="flex flex-wrap gap-2 pt-5 border-t border-[#e8f0f8]">
      <span className="text-xs font-semibold text-[#7aaccc] self-center mr-1">Share:</span>
      {shares.map(s => (
        s.href ? (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-colors ${s.style}`}
          >
            {s.label}
          </a>
        ) : (
          <button
            key={s.label}
            onClick={s.onClick}
            className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-colors ${s.style}`}
          >
            {s.label}
          </button>
        )
      ))}
    </div>
  )
}
