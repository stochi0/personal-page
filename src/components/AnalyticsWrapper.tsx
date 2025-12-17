'use client';

interface AnalyticsWrapperProps {
  children: React.ReactNode;
}

export default function AnalyticsWrapper({ children }: AnalyticsWrapperProps) {
  // Only Vercel Analytics is now used - it's automatically included via @vercel/analytics
  // No client-side initialization needed
  return <>{children}</>;
}
