export default function BlogLoading() {
  return (
    <div className="animate-pulse">
      <div className="bg-ck-navy px-8 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="h-3 w-24 bg-white/10 rounded mb-4" />
            <div className="h-9 w-3/4 bg-white/10 rounded mb-3" />
            <div className="h-9 w-1/2 bg-white/10 rounded mb-5" />
            <div className="h-10 bg-white/5 border border-[#1e3a52] rounded-[8px]" />
          </div>
          <div className="flex flex-wrap gap-2">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="h-7 w-24 bg-ck-blue/10 border border-ck-electric/20 rounded-full" />
            ))}
          </div>
        </div>
      </div>
      <div className="px-8 py-8 max-w-7xl mx-auto">
        <div className="h-[180px] bg-white border border-[#dceaf5] rounded-card mb-7" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white border border-[#dceaf5] rounded-card overflow-hidden">
              <div className="h-24 bg-[#e8f0f8]" />
              <div className="p-4 space-y-2">
                <div className="h-3 w-16 bg-[#e8f0f8] rounded" />
                <div className="h-4 w-5/6 bg-[#e8f0f8] rounded" />
                <div className="h-3 w-full  bg-[#f0f4f8] rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
