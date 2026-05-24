'use client'
import { useState } from 'react'
import { QuoteModal } from './QuoteModal'

export function SubServiceQuoteButton({ service }: { service: string }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)} className="btn-primary text-sm">
        Get A Free Quote →
      </button>
      <QuoteModal isOpen={open} onClose={() => setOpen(false)} service={service} />
    </>
  )
}
