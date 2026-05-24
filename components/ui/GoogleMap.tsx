'use client'
import { useState } from 'react'

interface GoogleMapProps {
  address?: string
  lat?: number
  lng?: number
  height?: number
  className?: string
}

export function GoogleMap({
  address = 'Hyderabad, Telangana, India',
  height = 280,
  className = '',
}: GoogleMapProps) {
  const [loaded, setLoaded] = useState(false)
  const [show, setShow] = useState(false)

  // Encode address for embed URL
  const encoded = encodeURIComponent(address)
  const embedUrl = `https://maps.google.com/maps?q=${encoded}&output=embed&z=13`

  return (
    <div
      className={`relative bg-ck-sky border border-[#c0d8ee] rounded-card-lg overflow-hidden ${className}`}
      style={{ height }}
    >
      {!show ? (
        /* Static placeholder — loads the real map only on click (saves bandwidth) */
        <div
          className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group"
          onClick={() => setShow(true)}
        >
          {/* Grid background */}
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mapgrid3" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1A7FD4" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mapgrid3)" />
            {/* Road lines */}
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#1A7FD4" strokeWidth="1.5" opacity="0.3" />
            <line x1="40%" y1="0" x2="40%" y2="100%" stroke="#1A7FD4" strokeWidth="1" opacity="0.2" />
            {/* Building blocks */}
            <rect x="10%" y="20%" width="20%" height="15%" rx="3" fill="#1A7FD4" opacity="0.1" />
            <rect x="50%" y="15%" width="25%" height="20%" rx="3" fill="#1A7FD4" opacity="0.12" />
            <rect x="10%" y="55%" width="18%" height="18%" rx="3" fill="#1A7FD4" opacity="0.1" />
            <rect x="55%" y="60%" width="28%" height="15%" rx="3" fill="#1A7FD4" opacity="0.1" />
          </svg>

          {/* Pin */}
          <div className="w-10 h-10 bg-ck-blue rounded-full rounded-bl-none rotate-[-45deg] flex items-center justify-center shadow-card group-hover:scale-110 transition-transform mb-2">
            <div className="w-4 h-4 bg-white rounded-full rotate-[45deg]" />
          </div>

          <div className="bg-white border border-[#dceaf5] rounded-[7px] px-3 py-1.5 shadow-card mt-1">
            <p className="text-xs font-bold text-ck-deep">📍 {address}</p>
          </div>

          <p className="text-[10px] text-[#7aaccc] mt-2 flex items-center gap-1">
            <span>Click to load map</span>
          </p>
        </div>
      ) : (
        <>
          {!loaded && (
            <div className="absolute inset-0 bg-ck-sky flex items-center justify-center animate-pulse">
              <div className="text-xs text-[#7aaccc]">Loading map...</div>
            </div>
          )}
          <iframe
            src={embedUrl}
            width="100%"
            height={height}
            style={{ border: 0, display: loaded ? 'block' : 'none' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setLoaded(true)}
            title={`Map showing ${address}`}
          />
        </>
      )}
    </div>
  )
}
