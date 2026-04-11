import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

export const locales = ['en', 'id']
export const defaultLocale = 'en'

function getLocale(request: NextRequest) {
  const headers = { 'accept-language': request.headers.get('accept-language') || '' }
  const languages = new Negotiator({ headers }).languages()
  return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Skip public files and api routes
  if (
    pathname.startsWith('/_next') || 
    pathname.includes('.') || 
    pathname.startsWith('/api')
  ) {
    return
  }

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Mengalihkan secara default ke bahasa Inggris (en) tanpa mengecek bahasa browser
  request.nextUrl.pathname = `/en${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico|.*\\..*).*)',
  ],
}
