import { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navigation, ScrollToTop } from "../components/Navigation";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000'),
  title: {
    default: "Ayush",
    template: "%s | Ayush",
  },
  description: "AI, Agents, RL, Vision. Research & Engineering.",
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
    title: "Ayush - AI Engineer and Researcher",
    description: "AI, Agents, RL, Vision. Research & Engineering.",
    url: process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : 'http://localhost:3000',
    siteName: "Ayush",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush - AI Engineer and Researcher",
    description: "AI, Agents, RL, Vision. Research & Engineering.",
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
  applicationName: "Ayush",
  referrer: "origin-when-cross-origin",
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cormorant.variable}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="manifest" href="/manifest.json" />
        <meta httpEquiv="Cache-Control" content="max-age=86400" />
        <meta name="applicable-device" content="pc,mobile" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
      </head>
      <body>
        <Navigation />
        <main>
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        <ScrollToTop />
      </body>
    </html>
  );
}
