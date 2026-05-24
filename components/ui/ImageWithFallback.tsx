'use client'
import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

interface ImageWithFallbackProps extends Omit<ImageProps, 'onError'> {
  fallbackGradient?: string
  fallbackLabel?:    string
}

export function ImageWithFallback({
  src,
  alt,
  fallbackGradient = 'from-ck-blue to-ck-navy',
  fallbackLabel,
  className = '',
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false)

  if (error || !src) {
    return (
      <div
        className={`bg-gradient-to-br ${fallbackGradient} flex items-center justify-center ${className}`}
        style={props.style}
      >
        {fallbackLabel && (
          <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider px-2 text-center">
            {fallbackLabel}
          </span>
        )}
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  )
}
