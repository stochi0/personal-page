'use client';

import { useEffect } from 'react';
import { analytics } from '../lib/analytics';

interface AnalyticsWrapperProps {
  children: React.ReactNode;
}

export default function AnalyticsWrapper({ children }: AnalyticsWrapperProps) {
  useEffect(() => {
    // Track location data (now sends to PostHog)
    analytics.trackLocation();
  }, []);

  return <>{children}</>;
}
