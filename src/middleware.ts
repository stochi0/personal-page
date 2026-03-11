import { NextRequest, NextResponse } from 'next/server';
import { geolocation } from '@vercel/functions';

export function middleware(request: NextRequest) {
  // Get geolocation data from Vercel
  const geo = geolocation(request);
  
  // Create response
  const response = NextResponse.next();
  
  // Add geolocation headers for analytics tracking
  if (geo.city) {
    response.headers.set('x-user-city', geo.city);
  }
  if (geo.country) {
    response.headers.set('x-user-country', geo.country);
  }
  if (geo.region) {
    response.headers.set('x-user-region', geo.region);
  }
  if (geo.latitude && geo.longitude) {
    response.headers.set('x-user-coords', `${geo.latitude},${geo.longitude}`);
  }
  
  // Add additional tracking headers
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const ip = forwardedFor?.split(',')[0] || realIp || 'unknown';
  response.headers.set('x-user-ip', ip);
  response.headers.set('x-user-agent', request.headers.get('user-agent') || 'unknown');
  response.headers.set('x-timestamp', new Date().toISOString());
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (robots file)
     * - manifest.json (PWA manifest)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|manifest.json).*)',
  ],
};
