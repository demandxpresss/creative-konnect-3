export default function ServicesLoading() {
  return (
    <div className="animate-pulse">
      <div className="bg-ck-navy px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="h-3 w-32 bg-white/10 rounded mb-4" />
          <div className="h-9 w-2/3 bg-white/10 rounded mb-3" />
          <div className="h-4 w-full max-w-lg bg-white/10 rounded" />
        </div>
      </div>
      <div className="px-8 py-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white border border-[#dceaf5] rounded-card overflow-hidden">
            <div className="h-32 bg-gradient-to-br from-[#e8f0f8] to-[#d4e4f0]" />
            <div className="p-5 space-y-2">
              <div className="h-4 w-3/4 bg-[#e8f0f8] rounded" />
              <div className="h-3 w-full  bg-[#f0f4f8] rounded" />
              <div className="h-3 w-5/6  bg-[#f0f4f8] rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
