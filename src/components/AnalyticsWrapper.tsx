'use client';

import { useEffect } from 'react';
import { analytics } from '../lib/analytics';

interface AnalyticsWrapperProps {
  children: React.ReactNode;
}

export default function AnalyticsWrapper({ children }: AnalyticsWrapperProps) {
  useEffect(() => {
    // Track location data
    analytics.trackLocation();
  }, []);

  return <>{children}</>;
}
