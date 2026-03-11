import { Metadata } from "next";

/**
 * Creates page metadata with consistent structure
 */
export function createMetadata(
  title: string,
  description: string,
  pageName?: string
): Metadata {
  const fullTitle = pageName ? `${title} - ${pageName}` : title;
  
  return {
    title,
    description,
    openGraph: {
      title: fullTitle,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  };
}


