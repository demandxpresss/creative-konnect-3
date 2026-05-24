export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="bg-ck-navy px-8 py-12 border-b-[3px] border-ck-blue">
        <div className="max-w-7xl mx-auto">
          <div className="h-3 w-32 bg-white/10 rounded mb-6" />
          <div className="h-10 w-2/3 bg-white/10 rounded mb-3" />
          <div className="h-10 w-1/2 bg-white/10 rounded mb-5" />
          <div className="h-4 w-full max-w-md bg-white/10 rounded mb-2" />
          <div className="h-4 w-4/5 max-w-md bg-white/10 rounded mb-6" />
          <div className="flex gap-3">
            <div className="h-11 w-36 bg-ck-blue/40 rounded-[7px]" />
            <div className="h-11 w-32 bg-white/10 rounded-[7px]" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="px-8 py-10 max-w-7xl mx-auto">
        <div className="h-3 w-24 bg-[#dceaf5] rounded mb-3" />
        <div className="h-7 w-56 bg-[#dceaf5] rounded mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white border border-[#dceaf5] rounded-card p-5">
              <div className="h-20 bg-[#e8f0f8] rounded-[6px] mb-4" />
              <div className="h-4 w-3/4 bg-[#e8f0f8] rounded mb-2" />
              <div className="h-3 w-full  bg-[#f0f4f8] rounded mb-1" />
              <div className="h-3 w-5/6  bg-[#f0f4f8] rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
