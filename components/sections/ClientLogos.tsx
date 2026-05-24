'use client'

const CLIENTS = [
  { name: 'TCS',      src: '/logos-tcs.svg' },
  { name: 'ACG',      src: '/logos-acg.svg' },
  { name: 'Emcure',   src: '/logos-emcure.svg' },
  { name: 'Deloitte', src: '/logos-deloitte.svg' },
  { name: 'SKF',      src: '/logos-skf.svg' },
]

// Repeat 6× so the ticker always looks full regardless of screen size
const TICKER = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS]

export function ClientLogos() {
  return (
    <div className="bg-ck-ghost border-b border-[#e8f0f8] py-5 overflow-hidden">
      <p className="text-[10px] font-bold text-[#c0d8ee] uppercase tracking-[1.5px] text-center mb-4">
        Trusted by leading brands across India
      </p>

      <div className="flex">
        <div className="flex animate-marquee-ltr" style={{ willChange: 'transform' }}>
          {TICKER.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex items-center justify-center mx-6 bg-white border border-[#dceaf5] rounded-xl px-6 py-3 h-16 flex-shrink-0 shadow-sm"
              style={{ minWidth: '140px' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={client.src}
                alt={client.name}
                style={{ maxHeight: '36px', maxWidth: '120px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
