import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { VideoQRCards } from "@/components/informasi/VideoQRCards";
import { InstagramIcon } from "@/components/ui/BrandIcons";
import { buildMetadata } from "@/lib/metadata";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Panduan Kunjungan — Video Tutorial Pantai Batu Hiu",
  description:
    "Video panduan cara menuju Pantai Batu Hiu, tata cara memegang penyu, dan fasilitas yang tersedia. Ikuti @penyu_pangandaran di Instagram untuk update terbaru.",
  keywords: [
    "video panduan pantai batu hiu",
    "tutorial konservasi penyu",
    "instagram penyu pangandaran",
  ],
  path: "/informasi-wisata/panduan",
});

export default function PanduanPage() {
  return (
    <>
      <section className="bg-ocean-deep pb-12 pt-36 text-sand md:pt-44">
        <div className="container-editorial max-w-3xl">
          <Badge variant="seafoam">Panduan Video</Badge>
          <h1 className="text-display mt-6 text-balance text-5xl leading-[1.05] md:text-7xl">
            Tonton, pahami,{" "}
            <span className="italic text-seafoam">lalu kunjungi</span>.
          </h1>
          <p className="text-editorial mt-6 max-w-2xl text-lg leading-relaxed text-sand/85">
            Tiga video singkat dari tim konservasi kami — menjelaskan cara
            menuju lokasi, cara berinteraksi dengan penyu, dan pengetahuan dasar
            konservasi.
          </p>
        </div>
      </section>

      <section className="bg-shell">
        <div className="container-editorial section-spacing grid gap-14">
          <SectionTitle
            eyebrow="Video & QR"
            title={
              <>
                Scan dan tonton di{" "}
                <span className="italic">Instagram Reels</span>.
              </>
            }
            description="Setiap kartu membawa QR yang mengarah langsung ke Reel di Instagram @penyu_pangandaran."
          />
          <VideoQRCards />

          <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-5 rounded-3xl border border-sand-dark/50 bg-sand/60 p-8 text-center">
            <h3 className="text-heading text-2xl text-ocean-deep md:text-3xl">
              Ikuti kami untuk update terbaru.
            </h3>
            <p className="text-editorial text-base text-text-secondary">
              Jadwal pelepasan tukik, cerita lapangan, dan cuplikan konservasi
              selalu lebih dulu di Instagram.
            </p>
            <Button
              as="link"
              href={CONTACT.instagramUrl}
              variant="coral"
              size="md"
              target="_blank"
              rel="noreferrer noopener"
            >
              <InstagramIcon className="h-4 w-4" />@{CONTACT.instagram}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
