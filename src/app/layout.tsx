import { Metadata } from "next";
import { Geist as GeistSans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "../components/nav";
import AnalyticsWrapper from "../components/AnalyticsWrapper";
import "./globals.css";

const geistSans = GeistSans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000'),
  title: {
    default: "Ayush (aka stochi0) | Portfolio",
    template: "%s | Ayush (aka stochi0)",
  },
  description: "Ayush (aka stochi0) - AI Engineer and Researcher specializing in multi-agent systems, machine learning, and reinforcement learning.",
  keywords: ["AI", "Machine Learning", "Ayush", "stochi0", "Portfolio", "Software Engineer", "Research"],
  authors: [{ name: "Ayush" }],
  creator: "Ayush",
  publisher: "Ayush",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Ayush (aka stochi0) - AI Engineer and Researcher",
    description: "Ayush (aka stochi0) - AI Engineer and Researcher specializing in multi-agent systems, machine learning, and reinforcement learning.",
    url: process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : 'http://localhost:3000',
    siteName: "Ayush (aka stochi0) Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush (aka stochi0) - AI Engineer and Researcher",
    description: "Ayush (aka stochi0) - AI Engineer and Researcher specializing in multi-agent systems, machine learning, and reinforcement learning.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  applicationName: "Ayush (aka stochi0) Portfolio",
  referrer: "origin-when-cross-origin",
  category: "technology",
  other: {
    "mobile-agent": "format=html5; url=" + (process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : 'http://localhost:3000'),
    "google-site-verification": "YOUR_GOOGLE_VERIFICATION_CODE",
    "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
    "yandex-verification": "YOUR_YANDEX_VERIFICATION_CODE",
    "baidu-site-verification": "YOUR_BAIDU_VERIFICATION_CODE",
    "sogou_site_verification": "YOUR_SOGOU_VERIFICATION_CODE",
    "360-site-verification": "YOUR_360_VERIFICATION_CODE",
    "shenma-site-verification": "YOUR_SHENMA_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`text-black bg-white dark:text-white dark:bg-black ${geistSans.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="manifest" href="/manifest.json" />
        <meta httpEquiv="Cache-Control" content="max-age=86400" />
        <meta name="applicable-device" content="pc,mobile" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="geo.region" content="US, EU, CN" />
        <meta name="geo.placename" content="Global" />
      </head>
      <body className="antialiased min-h-screen">
        <AnalyticsWrapper>
          <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900">
            <Navbar />
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
        </AnalyticsWrapper>
      </body>
    </html>
  );
}
