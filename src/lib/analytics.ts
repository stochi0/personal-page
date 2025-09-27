// Simple location tracking for Vercel Analytics
export const analytics = {
  // Track location data
  trackLocation: async () => {
    if (typeof window === 'undefined') return;
    
    // Send to our location API
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });
    } catch (error) {
      console.error('Failed to track location:', error);
    }
  },
};
