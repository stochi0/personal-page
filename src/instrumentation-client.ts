import posthog from 'posthog-js'

// Initialize PostHog for Next.js 15.3+
posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    defaults: '2025-05-24',
    person_profiles: 'identified_only',
    loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') {
            posthog.debug();
        }
    },
});

export default posthog;
