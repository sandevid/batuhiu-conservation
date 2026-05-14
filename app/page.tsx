import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { StatisticsSection } from "@/components/home/StatisticsSection";
import { ProgramPreview } from "@/components/home/ProgramPreview";
import { NewsSection } from "@/components/home/NewsSection";
import { CTASection } from "@/components/home/CTASection";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: `${SITE.name} — Konservasi Penyu Pantai Batu Hiu Pangandaran`,
  description:
    "Yayasan Raksa Bintana menjaga konservasi penyu Pantai Batu Hiu, Pangandaran. Ikuti pelepasan tukik, program edukasi, dan donasi untuk ekosistem laut.",
  keywords: [
    "konservasi penyu pantai batu hiu",
    "yayasan raksa bintana",
    "pelepasan tukik pangandaran",
    "wisata konservasi jawa barat",
  ],
  path: "/",
});

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Beranda",
  url: SITE.url,
  description:
    "Website resmi konservasi penyu Pantai Batu Hiu Pangandaran yang dikelola Yayasan Raksa Bintana.",
  inLanguage: "id-ID",
  isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <HeroSection />
      <StatisticsSection />
      <WaveDivider color="var(--color-shell)" />
      <ProgramPreview />
      <NewsSection />
      <CTASection />
    </>
  );
}
