import type { MetadataRoute } from "next";
import { profile, siteDescription } from "@/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: profile.title,
    short_name: profile.name,
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["technology", "education", "business"],
    lang: "en",
    dir: "ltr",
  };
}
