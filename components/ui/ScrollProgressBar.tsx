'use client'
import { useScrollProgress } from '@/lib/hooks'

export function ScrollProgressBar() {
  const progress = useScrollProgress()

  return (
    <div
      className="fixed top-0 left-0 z-[60] h-[3px] bg-ck-blue transition-none"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  )
}
