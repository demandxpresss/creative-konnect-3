import Link from 'next/link'

interface RelatedPost {
  slug:     string
  title:    string
  category: string
  read:     number
  gradient: string
  author: { name: string; initials: string; color: string }
}

interface RelatedPostsProps {
  posts:         RelatedPost[]
  currentSlug:   string
}

export function RelatedPosts({ posts, currentSlug }: RelatedPostsProps) {
  const filtered = posts.filter(p => p.slug !== currentSlug).slice(0, 3)
  if (!filtered.length) return null

  return (
    <section className="section-ghost">
      <div className="max-w-7xl mx-auto">
        <div className="text-[10px] font-bold text-ck-blue tracking-[2px] uppercase mb-1">
          Keep Reading
        </div>
        <h2 className="text-[20px] font-black text-ck-deep tracking-tight mb-5">
          Related Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filtered.map(p => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="card group hover:border-ck-blue hover:-translate-y-0.5 transition-all duration-150"
            >
              <div className={`h-20 bg-gradient-to-br ${p.gradient}`} />
              <div className="p-4">
                <div className="text-[9px] font-bold text-ck-blue uppercase tracking-[1.5px] mb-1.5">
                  {p.category}
                </div>
                <h3 className="text-sm font-bold text-ck-deep leading-snug mb-3 group-hover:text-ck-blue transition-colors">
                  {p.title}
                </h3>
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
      </div>
    </section>
  )
}
