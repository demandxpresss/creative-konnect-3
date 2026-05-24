'use client'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface FaqItem { question: string; answer: string }

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="faq-item">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-ck-ghost transition-colors"
          >
            <span className="text-sm font-semibold text-ck-deep pr-4">{item.question}</span>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${open === i ? 'bg-ck-blue text-white' : 'bg-ck-sky text-ck-blue'}`}>
              {open === i ? <Minus size={12} /> : <Plus size={12} />}
            </div>
          </button>
          {open === i && (
            <div className="px-4 pb-4 text-xs text-[#7aaccc] leading-[1.75] animate-fade-in">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
