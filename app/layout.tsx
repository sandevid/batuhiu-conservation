import type { Metadata } from "next";
import {
  Playfair_Display,
  Cormorant_Garamond,
  Lora,
  DM_Sans,
} from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { PageTransition } from "@/components/layout/PageTransition";
import { SITE, CONTACT } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    template: `%s — ${SITE.foundation}`,
    default: `${SITE.foundation} — Konservasi Penyu Pantai Batu Hiu Pangandaran`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "konservasi penyu",
    "pantai batu hiu",
    "pangandaran",
    "tukik",
    "yayasan raksa bintana",
    "wisata konservasi",
    "penyu hijau",
    "penyu sisik",
    "penyu lekang",
    "konservasi laut indonesia",
    "pelepasan tukik pangandaran",
  ],
  authors: [{ name: SITE.foundation }],
  creator: SITE.foundation,
  publisher: SITE.foundation,
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.foundation,
    title: `${SITE.foundation} — Konservasi Penyu Pantai Batu Hiu Pangandaran`,
    description: SITE.description,
    images: [
      {
        url: "/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE.foundation} — Konservasi penyu Pantai Batu Hiu`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: `@${CONTACT.instagram}`,
    creator: `@${CONTACT.instagram}`,
    title: `${SITE.foundation} — Konservasi Penyu Pantai Batu Hiu`,
    description: SITE.description,
    images: ["/og/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: SITE.foundation,
  alternateName: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/images/logo.png`,
  description:
    "Yayasan konservasi penyu di Pantai Batu Hiu, Pangandaran, Indonesia",
  foundingDate: `${SITE.foundingYear}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: CONTACT.address.locality,
    addressRegion: CONTACT.address.region,
    addressCountry: CONTACT.address.country,
  },
  sameAs: [CONTACT.instagramUrl],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  inLanguage: "id-ID",
  publisher: { "@type": "NGO", name: SITE.foundation },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${cormorant.variable} ${lora.variable} ${dmSans.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-shell text-text-primary antialiased">
        <script
          type="application/ld+json"
          // Schema.org JSON-LD for site-wide Organization + WebSite
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
        <ScrollProgress />
        <Navbar />
        <PageTransition>
          <main id="main" className="flex-1">
            {children}
          </main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
