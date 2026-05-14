import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin, PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Informasi Wisata — Batu Hiu Conservation",
  description:
    "Panduan lengkap berkunjung ke Pantai Batu Hiu Pangandaran: jadwal konservasi, lokasi & tata cara, dan video tutorial dari Yayasan Raksa Bintana.",
  keywords: [
    "informasi wisata pantai batu hiu",
    "panduan kunjungan konservasi penyu",
    "wisata konservasi jawa barat",
  ],
  path: "/informasi-wisata",
});

const NAV_CARDS = [
  {
    href: "/informasi-wisata/jadwal",
    title: "Jadwal & Kalender",
    description:
      "Musim bertelur, musim kawin, dan kalender pelepasan tukik. Jam operasional harian.",
    icon: CalendarDays,
    accent: "from-ocean-deep via-ocean-mid to-ocean-light",
  },
  {
    href: "/informasi-wisata/lokasi-tata-cara",
    title: "Lokasi & Tata Cara",
    description:
      "Rute menuju Pantai Batu Hiu dan panduan etika berinteraksi dengan penyu.",
    icon: MapPin,
    accent: "from-earth via-coral to-sand-dark",
  },
  {
    href: "/informasi-wisata/panduan",
    title: "Panduan Video",
    description:
      "Video tutorial dari @penyu_pangandaran tentang cara berkunjung dan memegang penyu.",
    icon: PlayCircle,
    accent: "from-seafoam via-ocean-light to-ocean-deep",
  },
];

export default function InformasiWisataPage() {
  return (
    <>
      <section className="bg-ocean-deep pb-16 pt-36 text-sand md:pt-44">
        <div className="container-editorial max-w-4xl">
          <Badge variant="seafoam">Informasi Wisata</Badge>
          <h1 className="text-display mt-6 text-balance text-5xl leading-[1.05] md:text-7xl">
            Siap berkunjung?{" "}
            <span className="italic text-seafoam">Mulai dari sini.</span>
          </h1>
          <p className="text-editorial mt-6 max-w-2xl text-lg leading-relaxed text-sand/85">
            Tiga pintu untuk memulai perjalanan anda ke Pantai Batu Hiu — dari
            memilih waktu terbaik, menemukan rute, sampai menonton panduan
            langsung dari tim konservasi.
          </p>
        </div>
      </section>

      <section className="bg-shell">
        <div className="container-editorial section-spacing grid gap-6 md:grid-cols-3">
          {NAV_CARDS.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group relative flex h-[24rem] flex-col justify-between overflow-hidden rounded-3xl p-8 text-sand transition-all hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
            >
              <div
                aria-hidden
                className={`absolute inset-0 bg-gradient-to-br ${c.accent}`}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-ocean-deep/10 to-transparent"
              />
              <div className="relative flex items-start justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-sand/90 text-ocean-deep">
                  <c.icon className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-6 w-6 text-sand/80 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <div className="relative flex flex-col gap-3">
                <h2 className="text-heading text-3xl text-sand md:text-4xl">
                  {c.title}
                </h2>
                <p className="text-editorial text-sm leading-relaxed text-sand/85">
                  {c.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
