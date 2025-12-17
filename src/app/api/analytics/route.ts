import { NextRequest, NextResponse } from 'next/server';
import { geolocation } from '@vercel/functions';

export async function GET(request: NextRequest) {
  // Simple endpoint to get visitor's location using Vercel geolocation
  const geo = geolocation(request);
  
  return NextResponse.json({
    location: {
      city: geo.city || 'unknown',
      region: geo.region || 'unknown', 
      country: geo.country || 'unknown',
    },
    timestamp: new Date().toISOString(),
  });
}
