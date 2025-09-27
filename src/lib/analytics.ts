import posthog from 'posthog-js';

// Helper function to check if PostHog is properly initialized
const isPostHogReady = (): boolean => {
  return typeof window !== 'undefined' && posthog && posthog.__loaded;
};

// Analytics functions
export const analytics = {
  // Capture a custom event
  capture: (eventName: string, properties?: Record<string, unknown>) => {
    if (isPostHogReady()) {
      try {
        posthog.capture(eventName, properties);
      } catch (error) {
        console.warn('Failed to capture PostHog event:', error);
      }
    }
  },

  // Identify a user
  identify: (userId: string, properties?: Record<string, unknown>) => {
    if (isPostHogReady()) {
      try {
        posthog.identify(userId, properties);
      } catch (error) {
        console.warn('Failed to identify user in PostHog:', error);
      }
    }
  },

  // Set user properties
  setPersonProperties: (properties: Record<string, unknown>) => {
    if (isPostHogReady()) {
      try {
        posthog.setPersonProperties(properties);
      } catch (error) {
        console.warn('Failed to set person properties in PostHog:', error);
      }
    }
  },

  // Track page views (automatically handled by PostHog, but can be called manually)
  pageview: (path?: string) => {
    if (isPostHogReady()) {
      try {
        posthog.capture('$pageview', { $current_url: path || window.location.href });
      } catch (error) {
        console.warn('Failed to track pageview in PostHog:', error);
      }
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
        
        // Send location data to PostHog only if it's properly initialized
        if (isPostHogReady() && data.location) {
          try {
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
          } catch (posthogError) {
            console.warn('Failed to send location data to PostHog:', posthogError);
          }
        }
      }
    } catch (error) {
      console.error('Failed to track location:', error);
    }
  },
};
