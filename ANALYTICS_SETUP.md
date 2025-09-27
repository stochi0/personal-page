# Analytics Setup Guide

This guide will help you set up location tracking for your personal website using Vercel Analytics.

## 📊 Analytics Services Included

### 1. Vercel Analytics (Primary - Location Tracking Included)
- **Status**: ✅ Already configured
- **Features**: Page views, unique visitors, top pages, referrers, **location data (city/region/country)**
- **Setup**: Automatically enabled in production on Vercel

### 2. Vercel Speed Insights
- **Status**: ✅ Already configured  
- **Features**: Core Web Vitals, performance metrics
- **Setup**: Automatically enabled

## 🌍 Location Tracking Setup

### Vercel Dashboard Location Data
1. **Deploy to Vercel**: Your site must be deployed to Vercel for location tracking
2. **Enable Analytics**: Go to your project dashboard → Analytics tab → Enable
3. **View Location Data**: After deployment, you'll see visitor locations in:
   - **Country breakdown**: Primary analytics view
   - **City/Region data**: Available through the detailed analytics interface

### Custom Location API
- **Endpoint**: `/api/analytics`
- **Features**: Captures detailed location data including city, region, timezone
- **Data**: Automatically logged and can be viewed in Vercel Function logs

## 🚀 Quick Setup (Recommended)

1. **Deploy to Vercel** (if not already done):
   ```bash
   pnpm build
   # Push to GitHub and connect to Vercel, or use Vercel CLI
   ```

2. **Enable Vercel Analytics**:
   - Go to your Vercel project dashboard
   - Click "Analytics" tab
   - Click "Enable Analytics"

3. **That's it!** No additional configuration needed.

## 📈 What You'll Track

### Automatic Tracking
- ✅ Page views with location data (city/region/country)
- ✅ Unique visitors
- ✅ Referrer sources
- ✅ Performance metrics

### Location Data Available
- **Country**: Full country name and code
- **Region/State**: State or region within country  
- **City**: Visitor's city
- **Timezone**: User's timezone
- **Coordinates**: Latitude/longitude (if available)

## 🔍 Viewing Your Analytics

### Vercel Dashboard
1. Go to your project in Vercel dashboard
2. Click "Analytics" tab
3. View comprehensive data including:
   - Page views over time
   - **Visitor locations by country/region**
   - Top pages
   - Referrer sources
   - Performance metrics

## 🛠️ Location Data Logging

The system automatically logs location data for each page view to help with debugging and additional analytics if needed.

## 🔧 Development vs Production

- **Development**: Only basic tracking active
- **Production**: Vercel Analytics active with full location tracking
- **Location Data**: Only available in production deployment on Vercel

## 📊 Expected Results

After deployment and setup, you'll see in your Vercel Analytics dashboard:
- **Visitor count** by day/week/month
- **Geographic distribution** showing countries and cities
- **Top performing pages**
- **Traffic sources** (direct, social, referrals)
- **Performance metrics** and Core Web Vitals

The location tracking will show you exactly where your visitors are coming from, down to the city level, all within your Vercel dashboard.
