import posthog from 'posthog-js'

// Initialize PostHog for Next.js 15.3+ only if environment variables are available
if (process.env.NEXT_PUBLIC_POSTHOG_KEY && process.env.NEXT_PUBLIC_POSTHOG_HOST) {
    try {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
            api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
            defaults: '2025-05-24',
            person_profiles: 'identified_only',
            loaded: (posthog) => {
                if (process.env.NODE_ENV === 'development') {
                    posthog.debug();
                }
            },
        });
    } catch (error) {
        console.warn('Failed to initialize PostHog:', error);
    }
} else {
    console.warn('PostHog environment variables not found. Analytics will be disabled.');
}

export default posthog;
