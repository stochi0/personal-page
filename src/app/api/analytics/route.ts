import { NextRequest, NextResponse } from 'next/server';
import { geolocation } from '@vercel/functions';

export async function POST(request: NextRequest) {
  try {
    // Get geolocation data
    const geo = geolocation(request);
    
    // Create location data payload
    const locationData = {
      timestamp: new Date().toISOString(),
      location: {
        city: geo.city || 'unknown',
        region: geo.region || 'unknown',
        country: geo.country || 'unknown',
      },
    };
    
    // Log location data for debugging
    console.log('Location Data:', JSON.stringify(locationData, null, 2));
    
    return NextResponse.json({ 
      success: true, 
      location: locationData.location,
      timestamp: locationData.timestamp 
    });
    
  } catch (error) {
    console.error('Location API Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to get location data' 
    }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  // Get current visitor's location
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
