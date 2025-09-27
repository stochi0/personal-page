import posthog from 'posthog-js';

// Analytics functions
export const analytics = {
  // Capture a custom event
  capture: (eventName: string, properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && posthog) {
      posthog.capture(eventName, properties);
    }
  },

  // Identify a user
  identify: (userId: string, properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && posthog) {
      posthog.identify(userId, properties);
    }
  },

  // Set user properties
  setPersonProperties: (properties: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && posthog) {
      posthog.setPersonProperties(properties);
    }
  },

  // Track page views (automatically handled by PostHog, but can be called manually)
  pageview: (path?: string) => {
    if (typeof window !== 'undefined' && posthog) {
      posthog.capture('$pageview', { $current_url: path || window.location.href });
    }
  },

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
        if (posthog && data.location) {
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
