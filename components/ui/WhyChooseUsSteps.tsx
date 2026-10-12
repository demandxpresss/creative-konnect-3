import type { ReactNode } from 'react'

export interface WhyStep {
  title: string
  desc: string
  icon: 'events' | 'clock' | 'brush' | 'headset'
  accent: string
}

const ICONS: Record<WhyStep['icon'], ReactNode> = {
  // Calendar / events-delivered glyph
  events: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 9.5H20.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 3V6.5M16 3V6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7.5 13L10 15.5L16.5 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // Stopwatch / on-time glyph
  clock: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 9V13L15 15.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 2.5H14.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M18.5 5.5L20 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  // Paintbrush / custom-branding glyph
  brush: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path d="M19.5 3.5C20.5 4.5 20.5 6 19.5 7L12 14.5L9.5 12L17 4.5C18 3.5 18.5 2.5 19.5 3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9.5 12L7 13C6 13.3 5.3 14 5 15L4 18.5C6 18.3 8 18 9.5 17C10.5 16.3 11 15 10.7 14L9.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M4 18.5L3 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  // Headset / 24x7 support glyph
  headset: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path d="M4 13V12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20 19V20C20 21.1046 19.1046 22 18 22H14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
}

export function WhyChooseUsSteps({ steps }: { steps: WhyStep[] }) {
  return (
    <div className="relative">
      {/* Connecting line — desktop only, sits behind the step badges */}
      <div
        className="hidden lg:block absolute top-[27px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#2a4a60] to-transparent"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
        {steps.map((step, i) => (
          <div key={step.title} className="relative flex lg:flex-col gap-4 lg:gap-0">
            <div className="relative flex-shrink-0 lg:mb-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center relative z-10 shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${step.accent}2e, ${step.accent}12)`,
                  border: `1px solid ${step.accent}55`,
                  color: step.accent,
                }}
              >
                {ICONS[step.icon]}
              </div>
              <div
                className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-ck-navy z-20"
                style={{ background: step.accent }}
              >
                {i + 1}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-white mb-1.5">{step.title}</h3>
              <p className="text-[11px] text-[#7a9ab5] leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
