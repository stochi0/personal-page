import { posthog } from 'posthog-js';

// Initialize PostHog
export const initPostHog = () => {
  if (typeof window !== 'undefined' && !posthog.__loaded) {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
      person_profiles: 'identified_only',
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug();
      },
    });
  }
};

// Analytics functions
export const analytics = {
  // Track location data using PostHog
  trackLocation: async () => {
    if (typeof window === 'undefined') return;
    
    // Send to our location API to get Vercel geolocation data
    try {
      const response = await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });
      
      if (response.ok) {
        const data = await response.json();
        
        // Send location data to PostHog
        if (posthog.__loaded && data.location) {
          posthog.capture('location_tracked', {
            city: data.location.city,
            region: data.location.region,
            country: data.location.country,
            timestamp: data.timestamp,
          });
          
          // Set user properties for location
          posthog.setPersonProperties({
            current_city: data.location.city,
            current_region: data.location.region,
            current_country: data.location.country,
          });
        }
      }
    } catch (error) {
      console.error('Failed to track location:', error);
    }
  },
};
