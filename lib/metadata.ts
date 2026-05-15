import type { Metadata } from "next";
import { SITE } from "./constants";

type BuildMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
};

/**
 * Helper to build per-page Metadata with consistent OG/Twitter/canonical.
 * Titles are wrapped in the site template via layout.tsx.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
  ogImage = "/og/og-default.jpg",
}: BuildMetadataOptions): Metadata {
  const url = new URL(path, SITE.url).toString();
  const fullOgImageUrl = new URL(ogImage, SITE.url).toString();

  return {
    title,
    description,
    keywords,
    alternates: { 
      canonical: url,
    },
    openGraph: {
      title: `${title} — ${SITE.foundation}`,
      description,
      url,
      siteName: SITE.foundation,
      locale: SITE.locale,
      type: "website",
      images: [
        { 
          url: fullOgImageUrl, 
          width: 1200, 
          height: 630, 
          alt: title 
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${SITE.foundation}`,
      description,
      images: [fullOgImageUrl],
    },
  };
}

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
