# Personal Page

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# PostHog Configuration
# Get your PostHog project API key from: https://app.posthog.com/project/settings
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_project_api_key_here

# PostHog Host (use the appropriate region for your PostHog instance)
# US: https://us.i.posthog.com
# EU: https://eu.i.posthog.com
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

**Note**: If you don't set up PostHog environment variables, the application will still work but analytics will be disabled. You'll see a warning in the console: "PostHog environment variables not found. Analytics will be disabled."

## Analytics Setup

This project uses both Vercel Analytics and PostHog:

- **Vercel Analytics**: Handles general page views and performance metrics
- **PostHog**: Handles location tracking and user behavior analytics

Location data is collected using Vercel's geolocation API and sent to PostHog for analysis.
