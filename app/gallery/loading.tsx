export default function GalleryLoading() {
  return (
    <div className="animate-pulse">
      <div className="bg-ck-navy px-8 py-12 border-b-[3px] border-ck-blue">
        <div className="max-w-7xl mx-auto flex justify-between items-start gap-6">
          <div>
            <div className="h-3 w-24 bg-white/10 rounded mb-4" />
            <div className="h-9 w-80 bg-white/10 rounded mb-3" />
            <div className="h-4 w-96 bg-white/10 rounded" />
          </div>
          <div className="flex gap-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-20 h-14 bg-ck-blue/12 border border-ck-electric/20 rounded-[8px]" />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-ck-navy px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 mb-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-8 w-20 bg-white/5 border border-[#1e3a52] rounded-full" />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            <div className="md:col-span-1 h-44 bg-ck-blue/10 rounded-card" />
            <div className="h-44 bg-ck-electric/10 rounded-card" />
            <div className="h-44 bg-ck-deep/50 rounded-card" />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-28 bg-white/5 rounded-[8px]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
