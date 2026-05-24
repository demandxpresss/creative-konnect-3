'use client'
import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-[90px] right-6 z-40 w-10 h-10 rounded-full bg-ck-deep border border-[#1e3a52] flex items-center justify-center text-[#7aaccc] hover:bg-ck-blue hover:text-white hover:border-ck-blue transition-all duration-150 shadow-card animate-fade-in"
      aria-label="Scroll to top"
    >
      <ChevronUp size={18} />
    </button>
  )
}
