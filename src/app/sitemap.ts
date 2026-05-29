import type { MetadataRoute } from "next";
import { navItems } from "@/content";
import { getWritingSlugs } from "@/lib/writings";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";

  const currentDate = new Date();
  const staticRoutes = navItems.map((item) => item.href);
  const writingRoutes = getWritingSlugs().map((slug) => `/writings/${slug}`);

  return [...staticRoutes, ...writingRoutes].map((route) => ({
    url: `${baseUrl}${route === "/" ? "" : route}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
