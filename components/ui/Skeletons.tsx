export function CardSkeleton({ count = 3, hasImage = true }: { count?: number; hasImage?: boolean }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-pulse">
      {[...Array(count)].map((_, i) => (
        <div key={i} className="bg-white border border-[#dceaf5] rounded-card overflow-hidden">
          {hasImage && <div className="h-24 bg-[#e8f0f8]" />}
          <div className="p-4">
            <div className="h-3 w-16 bg-[#e8f0f8] rounded mb-2" />
            <div className="h-4 w-5/6 bg-[#e8f0f8] rounded mb-1.5" />
            <div className="h-4 w-2/3 bg-[#e8f0f8] rounded mb-3" />
            <div className="h-3 w-full  bg-[#f0f4f8] rounded mb-1" />
            <div className="h-3 w-4/5  bg-[#f0f4f8] rounded" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="bg-ck-navy px-8 py-12 animate-pulse">
      <div className="max-w-7xl mx-auto">
        <div className="h-3 w-40 bg-white/10 rounded mb-4" />
        <div className="h-9 w-3/4 bg-white/10 rounded mb-3" />
        <div className="h-9 w-1/2 bg-white/10 rounded mb-5" />
        <div className="h-4 w-full max-w-lg bg-white/10 rounded mb-7" />
        <div className="flex gap-3">
          <div className="h-11 w-40 bg-ck-blue/40 rounded-[7px]" />
          <div className="h-11 w-36 bg-white/10 rounded-[7px]" />
        </div>
      </div>
    </div>
  )
}

export function TestimonialSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-pulse">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="bg-ck-ghost border border-[#dceaf5] rounded-card-lg p-5">
          <div className="flex gap-2 mb-3">
            {[...Array(5)].map((_, j) => (
              <div key={j} className="w-3 h-3 rounded-full bg-[#dceaf5]" />
            ))}
          </div>
          <div className="space-y-2 mb-4">
            <div className="h-3 w-full  bg-[#e8f0f8] rounded" />
            <div className="h-3 w-5/6  bg-[#e8f0f8] rounded" />
            <div className="h-3 w-4/5  bg-[#e8f0f8] rounded" />
          </div>
          <div className="flex items-center gap-2 pt-3 border-t border-[#e8f0f8]">
            <div className="w-8 h-8 rounded-full bg-[#e8f0f8]" />
            <div>
              <div className="h-3 w-24 bg-[#e8f0f8] rounded mb-1" />
              <div className="h-2 w-16 bg-[#f0f4f8] rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
