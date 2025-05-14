import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const IMAGE_EXTENSIONS = [
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.webp',
  '.svg',
  '.ico',
];

export async function middleware(request: NextRequest) {
  const cookieStore = await cookies();
  const user = cookieStore.get('user')?.value;
  const url = request.nextUrl.pathname;
  if (IMAGE_EXTENSIONS.some(ext => url.endsWith(ext))) {
    return NextResponse.next();
  }
  if (!user && url !== '/') {
    return NextResponse.redirect(new URL('/', request.url));
  }
  if (user && url === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
