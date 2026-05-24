'use client'
import { useRef } from 'react'
import { useIntersection } from '@/lib/hooks'

interface AnimatedSectionProps {
  children:   React.ReactNode
  className?: string
  delay?:     number   // ms
  direction?: 'up' | 'left' | 'right' | 'none'
}

export function AnimatedSection({
  children,
  className = '',
  delay     = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const ref           = useRef<HTMLDivElement>(null)
  const isIntersecting = useIntersection(ref, { threshold: 0.1 })

  const transforms = {
    up:    'translateY(24px)',
    left:  'translateX(-24px)',
    right: 'translateX(24px)',
    none:  'none',
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    isIntersecting ? 1 : 0,
        transform:  isIntersecting ? 'none' : transforms[direction],
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// ── Staggered children animation ──────────────────────────────────
interface StaggeredProps {
  children:   React.ReactNode[]
  className?: string
  stagger?:   number  // ms between each child
}

export function StaggeredList({ children, className = '', stagger = 80 }: StaggeredProps) {
  const ref            = useRef<HTMLDivElement>(null)
  const isIntersecting = useIntersection(ref)

  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <div
          key={i}
          style={{
            opacity:    isIntersecting ? 1 : 0,
            transform:  isIntersecting ? 'none' : 'translateY(16px)',
            transition: `opacity 0.4s ease ${i * stagger}ms, transform 0.4s ease ${i * stagger}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
