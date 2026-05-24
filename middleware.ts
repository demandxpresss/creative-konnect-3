import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname, search, origin } = request.nextUrl

  // ── 1. Remove trailing slash (except root) ────────────────────
  if (pathname !== '/' && pathname.endsWith('/')) {
    const cleanPath = pathname.slice(0, -1)
    return NextResponse.redirect(
      new URL(cleanPath + search, origin),
      { status: 301 }
    )
  }

  // ── 2. Lowercase URLs ─────────────────────────────────────────
  if (pathname !== pathname.toLowerCase()) {
    return NextResponse.redirect(
      new URL(pathname.toLowerCase() + search, origin),
      { status: 301 }
    )
  }

  // ── 3. Security headers on all responses ─────────────────────
  const response = NextResponse.next()
  response.headers.set('X-Robots-Tag', 'index, follow')
  return response
}

export const config = {
  matcher: [
    // Skip static files, API routes, and Next internals
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|api/).*)',
  ],
}
