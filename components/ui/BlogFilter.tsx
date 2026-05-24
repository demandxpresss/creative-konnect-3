'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'

const CATEGORIES = [
  'All Articles', 'Photo Booths', 'AI & Tech',
  'Games', 'Weddings', 'Corporate',
  'Guest Engagement', 'Pricing Guides',
]

interface Post {
  slug:      string
  category:  string
  title:     string
  excerpt:   string | null
  read:      number
  gradient:  string
  author: { initials: string; color: string; name: string }
}

export function BlogFilter({ posts }: { posts: Post[] }) {
  const [activeCategory, setActiveCategory] = useState('All Articles')
  const [query, setQuery]                   = useState('')

  const filtered = useMemo(() => {
    return posts.filter(p => {
      const matchCat = activeCategory === 'All Articles' || p.category === activeCategory
      const matchQ   = !query || p.title.toLowerCase().includes(query.toLowerCase())
      return matchCat && matchQ
    })
  }, [posts, activeCategory, query])

  return (
    <div>
      {/* Search + category bar */}
      <div className="bg-ck-ghost border-b border-[#e8f0f8] px-8 py-4 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          {/* Search */}
          <div className="flex items-center gap-2 bg-white border border-[#dceaf5] rounded-[8px] px-3 py-2 w-full sm:w-72 flex-shrink-0">
            <span className="text-sm text-[#7aaccc]">🔍</span>
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="bg-transparent border-none outline-none text-xs text-ck-deep placeholder-[#7aaccc] flex-1 font-medium"
            />
            {query && (
              <button onClick={() => setQuery('')} className="text-[#7aaccc] hover:text-ck-deep text-xs">✕</button>
            )}
          </div>

          {/* Category tabs */}
          <div className="flex gap-1.5 overflow-x-auto pb-0.5 flex-1">
            {CATEGORIES.map(c => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`text-[10px] font-bold px-3 py-1.5 rounded-full border whitespace-nowrap transition-colors ${
                  activeCategory === c
                    ? 'bg-ck-blue text-white border-ck-blue'
                    : 'bg-white border-[#dceaf5] text-[#7aaccc] hover:border-ck-blue hover:text-ck-blue'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Count */}
          <span className="text-[10px] text-[#aac0d0] whitespace-nowrap flex-shrink-0">
            {filtered.length} article{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* Posts grid */}
      <section className="section-ghost">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-4xl mb-3">📭</div>
              <p className="text-sm font-semibold text-ck-deep mb-1">No articles found</p>
              <p className="text-xs text-[#7aaccc]">Try a different search term or category</p>
              <button
                onClick={() => { setQuery(''); setActiveCategory('All Articles') }}
                className="btn-primary text-xs mt-4"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map(p => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="card group hover:border-ck-blue hover:-translate-y-0.5 transition-all duration-150"
                >
                  <div className={`h-24 bg-gradient-to-br ${p.gradient} relative`}>
                    <span className="absolute bottom-2 left-2 text-[8px] font-bold text-white/50 uppercase tracking-wider">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-ck-deep leading-snug mb-2 group-hover:text-ck-blue transition-colors">
                      {p.title}
                    </h3>
                    {p.excerpt && (
                      <p className="text-[11px] text-[#7aaccc] leading-relaxed mb-3 line-clamp-2">
                        {p.excerpt}
                      </p>
                    )}
                    <div className="flex items-center gap-2">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-black text-white flex-shrink-0"
                        style={{ background: p.author.color }}
                      >
                        {p.author.initials}
                      </div>
                      <span className="text-[10px] font-semibold text-ck-deep">{p.author.name}</span>
                      <div className="w-1 h-1 rounded-full bg-[#c0d8ee]" />
                      <span className="text-[10px] text-[#aac0d0]">{p.read} min</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
