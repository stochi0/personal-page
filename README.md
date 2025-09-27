# Personal Page

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# PostHog Configuration
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_project_api_key_here
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

## Analytics Setup

This project uses both Vercel Analytics and PostHog:

- **Vercel Analytics**: Handles general page views and performance metrics
- **PostHog**: Handles location tracking and user behavior analytics

Location data is collected using Vercel's geolocation API and sent to PostHog for analysis.
