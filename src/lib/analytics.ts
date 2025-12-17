// Analytics functions for Vercel Analytics only
export const analytics = {
  // Get location data from Vercel geolocation API
  getLocation: async () => {
    if (typeof window === 'undefined') return null;
    
    try {
      const response = await fetch('/api/analytics', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        return data.location;
      }
    } catch (error) {
      console.error('Failed to get location:', error);
    }
    
    return null;
  },
};
