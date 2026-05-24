import Link from 'next/link'
import { SERVICES } from '@/lib/constants'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] bg-ck-navy flex items-center justify-center px-8">
      <div className="max-w-xl text-center">
        {/* Big 404 */}
        <div className="text-[100px] font-black text-ck-blue/20 leading-none mb-2 select-none">
          404
        </div>

        <h1 className="text-2xl font-black text-white mb-3 tracking-tight">
          Page not found
        </h1>
        <p className="text-sm text-[#6a98b5] leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <Link href="/" className="btn-primary text-sm">
            ← Back to Home
          </Link>
          <Link href="/contact" className="btn-ghost text-sm">
            Get A Quote
          </Link>
        </div>

        {/* Quick service links */}
        <div className="border-t border-[#1e3a52] pt-6">
          <p className="text-[10px] font-bold text-[#4a7090] uppercase tracking-[2px] mb-3">
            Popular Services
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {SERVICES.map(s => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="text-xs font-semibold text-ck-electric bg-ck-electric/10 border border-ck-electric/20 px-3 py-1.5 rounded-full hover:bg-ck-electric/20 transition-colors"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
