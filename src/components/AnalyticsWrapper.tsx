'use client';

import { useEffect } from 'react';
import { analytics, initPostHog } from '../lib/analytics';

interface AnalyticsWrapperProps {
  children: React.ReactNode;
}

export default function AnalyticsWrapper({ children }: AnalyticsWrapperProps) {
  useEffect(() => {
    // Initialize PostHog
    initPostHog();
    
    // Track location data (now sends to PostHog)
    analytics.trackLocation();
  }, []);

  return <>{children}</>;
}
