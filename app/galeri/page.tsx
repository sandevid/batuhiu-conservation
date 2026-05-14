import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { GalleryGrid } from "@/components/galeri/GalleryGrid";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Galeri Kegiatan — Batu Hiu Conservation",
  description:
    "Dokumentasi kegiatan konservasi di Pantai Batu Hiu: edukasi penyu, penanaman pandan, dan pelepasan tukik bersama Yayasan Raksa Bintana Pangandaran.",
  keywords: [
    "galeri konservasi penyu",
    "dokumentasi pelepasan tukik pangandaran",
    "penanaman pandan batu hiu",
    "edukasi penyu jawa barat",
  ],
  path: "/galeri",
  ogImage: "/og/og-gallery.jpg",
});

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Galeri Kegiatan Batu Hiu Conservation",
  url: `${SITE.url}/galeri`,
  description:
    "Dokumentasi aktivitas konservasi penyu Pantai Batu Hiu — edukasi, penanaman pandan, dan pelepasan tukik.",
};

export default function GaleriPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />

      <section className="bg-ocean-deep pb-28 pt-36 text-sand md:pt-44">
        <div className="container-editorial flex max-w-3xl flex-col gap-6">
          <div>
            <Badge variant="seafoam">Galeri</Badge>
          </div>
          <h1 className="text-display text-balance text-5xl leading-[1.05] md:text-7xl">
            Jejak <span className="italic text-seafoam">yang kami</span> abadikan.
          </h1>
          <p className="text-editorial max-w-2xl text-lg leading-relaxed text-sand/85">
            Setiap gambar adalah potongan kecil dari kerja panjang konservasi —
            dari kelas edukasi, barisan pandan yang ditanam, hingga tukik-tukik
            yang berjalan ke laut bebas.
          </p>
        </div>
      </section>

      <section className="bg-shell">
        <div className="container-editorial section-spacing">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
