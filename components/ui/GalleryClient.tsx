'use client'
import { useState } from 'react'

const FILTERS = ['All', '360 Video', 'Glambot', 'Mirror Booth', 'AI Booth', 'VR Games', 'Weddings', 'Corporate', 'Brand Events']
const PHOTO_GRADIENTS = [
  'from-ck-blue to-ck-navy', 'from-ck-electric to-ck-blue',
  'from-ck-deep to-ck-electric', 'from-ck-navy to-ck-blue',
  'from-ck-blue to-ck-deep', 'from-ck-electric to-ck-navy',
  'from-ck-deep to-ck-blue', 'from-ck-navy to-ck-electric',
]

interface ReelData {
  tag: string; label: string; sub: string; views: string
  gradient: string; featured: boolean
}

function PlayIcon() {
  return (
    <div className="play-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65%]">
      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[11px] border-l-white ml-0.5" />
    </div>
  )
}

export function GalleryClient({ reels }: { reels: ReelData[] }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const [activeTab, setActiveTab]       = useState<'reels' | 'photos' | 'all'>('reels')

  return (
    <div className="bg-ck-navy px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Filter bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`ftab text-xs whitespace-nowrap ${activeFilter === f ? 'active' : ''}`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto text-[11px] text-[#4a7090] whitespace-nowrap flex-shrink-0">
            Showing 48 of 2,400+
          </span>
        </div>

        {/* Tab selector */}
        <div className="flex gap-2 mb-5">
          {(['reels', 'photos', 'all'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs font-bold px-4 py-2 rounded-full border transition-colors capitalize ${activeTab === tab ? 'bg-ck-blue text-white border-ck-blue' : 'border-[#1e3a52] text-[#4a7090] hover:text-white'}`}
            >
              {tab === 'all' ? 'All Media' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Reels */}
        {(activeTab === 'reels' || activeTab === 'all') && (
          <div className="mb-6">
            <div className="eyebrow-light mb-3">Featured Reels</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
              {reels.slice(0, 3).map((r, i) => (
                <div
                  key={i}
                  className={`relative rounded-card overflow-hidden cursor-pointer group ${i === 0 ? 'md:col-span-1' : ''}`}
                  style={{ minHeight: i === 0 ? 180 : 150 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${r.gradient}`} />
                  <PlayIcon />
                  {r.views && (
                    <div className="absolute top-2.5 right-2.5 bg-black/60 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                      {r.views} views
                    </div>
                  )}
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <span className="reel-tag">{r.tag}</span>
                    <p className="text-xs font-bold text-white">{r.label}</p>
                    {r.sub && <p className="text-[10px] text-white/40 mt-0.5">{r.sub}</p>}
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {reels.slice(3).map((r, i) => (
                <div key={i} className="relative rounded-card overflow-hidden cursor-pointer" style={{ minHeight: 110 }}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${r.gradient}`} />
                  <PlayIcon />
                  <div className="absolute inset-0 flex flex-col justify-end p-3">
                    <span className="reel-tag" style={{ fontSize: 7 }}>{r.tag}</span>
                    <p className="text-[10px] font-bold text-white">{r.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Photos */}
        {(activeTab === 'photos' || activeTab === 'all') && (
          <div>
            <div className="eyebrow-light mb-3">Photo Gallery</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {PHOTO_GRADIENTS.map((g, i) => (
                <div
                  key={i}
                  className={`rounded-[8px] bg-gradient-to-br ${g} cursor-pointer hover:opacity-80 transition-opacity relative group`}
                  style={{ height: i % 3 === 2 ? 140 : 110 }}
                >
                  <div className="absolute inset-0 bg-ck-navy/0 group-hover:bg-ck-navy/50 transition-colors rounded-[8px] flex items-end p-2">
                    <span className="text-[8px] font-bold text-transparent group-hover:text-white uppercase tracking-wider transition-colors">
                      Event Photo
                    </span>
                  </div>
                </div>
              ))}
              <div className="rounded-[8px] bg-[#1e3a52] border border-[#2a4a60] flex items-center justify-center cursor-pointer hover:bg-[#2a4a60] transition-colors" style={{ height: 110 }}>
                <span className="text-xs font-bold text-ck-electric">+ 48 more →</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
