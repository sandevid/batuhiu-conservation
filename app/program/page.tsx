import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  Sprout,
  Sunrise,
  Sunset,
  Waves,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { InteractiveMap } from "@/components/program/InteractiveMap";
import { TurtleSpeciesCards } from "@/components/program/TurtleSpeciesCard";
import { SeasonCalendar } from "@/components/program/SeasonCalendar";
import { buildMetadata } from "@/lib/metadata";
import { CONTACT, SITE } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Program Konservasi — Batu Hiu Conservation",
  description:
    "Program konservasi penyu di Pantai Batu Hiu: edukasi spesies penyu, penanaman pandan, dan pelepasan tukik bersama Yayasan Raksa Bintana Pangandaran.",
  keywords: [
    "program konservasi penyu",
    "penyu hijau penyu sisik pantai batu hiu",
    "program edukasi penyu",
    "pelepasan tukik pangandaran",
  ],
  path: "/program",
  ogImage: "/og/og-program.jpg",
});

const programSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE.foundation,
  url: `${SITE.url}/program`,
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Program Edukasi Konservasi Penyu",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Penanaman Pandan Pesisir",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Festival Pelepasan Tukik",
      },
    },
  ],
};

const PANDAN_BENEFITS = [
  { title: "Mencegah erosi pantai", icon: Waves },
  { title: "Naungan sarang telur", icon: Sprout },
  { title: "Indikator ekosistem sehat", icon: CheckCircle2 },
];

const TUKIK_PROCESS = [
  { step: "01", title: "Sambut tukik", body: "Briefing singkat dari pemandu konservasi." },
  { step: "02", title: "Pegang dengan etika", body: "Ikuti cara memegang yang benar dan aman." },
  { step: "03", title: "Lepas ke laut", body: "Tukik berjalan sendiri — jangan didorong." },
  { step: "04", title: "Dokumentasi", body: "Tanpa flash kamera dan tanpa bising." },
];

export default function ProgramPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(programSchema) }}
      />

      {/* HERO */}
      <section className="bg-ocean-deep pb-12 pt-36 text-sand md:pt-44">
        <div className="container-editorial max-w-4xl">
          <Badge variant="seafoam">Program Konservasi</Badge>
          <h1 className="text-display mt-6 text-balance text-5xl leading-[1.05] md:text-7xl">
            Tiga siklus, satu{" "}
            <span className="italic text-seafoam">samudera</span>.
          </h1>
          <p className="text-editorial mt-6 max-w-2xl text-lg leading-relaxed text-sand/85">
            Program edukasi, penanaman pandan, dan pelepasan tukik kami
            dirancang sebagai satu kesatuan. Setiap tahap menjaga yang
            berikutnya tetap hidup.
          </p>
        </div>
      </section>

      {/* EDUKASI — Interactive Map */}
      <section id="edukasi" className="bg-shell">
        <div className="container-editorial section-spacing grid gap-16">
          <SectionTitle
            eyebrow="Edukasi — Interaktif"
            title={
              <>
                Kenali Pantai Batu Hiu{" "}
                <span className="italic">dari setiap titiknya</span>.
              </>
            }
            description="Arahkan ke titik berdenyut untuk mempelajari area konservasi kami: sarang penyu, jalur arus laut, zona pandan, dan spesies yang kami jaga."
          />
          <InteractiveMap />
        </div>
      </section>

      {/* SPESIES PENYU */}
      <section className="bg-sand-texture">
        <div className="container-editorial section-spacing grid gap-14">
          <SectionTitle
            eyebrow="Spesies"
            title={
              <>
                Empat penyu yang{" "}
                <span className="italic">singgah di sini</span>.
              </>
            }
            description="Balik setiap kartu untuk mengetahui status perlindungan, upaya konservasi yang kami lakukan, dan peran mereka dalam ekosistem laut."
          />
          <TurtleSpeciesCards />
        </div>
      </section>

      {/* KALENDER MUSIM */}
      <section className="bg-shell">
        <div className="container-editorial section-spacing grid gap-14">
          <SectionTitle
            eyebrow="Kalender Musim"
            title={
              <>
                Ritme laut, <span className="italic">ritme konservasi</span>.
              </>
            }
            description="Musim bertelur, kawin, dan pelepasan tukik menentukan kapan anda paling tepat berkunjung."
          />
          <SeasonCalendar />
        </div>
      </section>

      <WaveDivider color="var(--color-sand)" />

      {/* PENANAMAN PANDAN */}
      <section id="pandan" className="bg-sand-texture">
        <div className="container-editorial section-spacing grid items-center gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-sand-dark/60">
            {/* Background Image */}
            <Image
              src="/assets/images/menanam-pandan.webp"
              alt="Penanaman Pandan di Pantai Batu Hiu"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            {/* Gradient overlay */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-earth/60 via-transparent to-transparent"
            />
          </div>

          <div className="flex flex-col gap-8">
            <SectionTitle
              eyebrow="Penanaman Pandan"
              title={
                <>
                  Menanam pandan,{" "}
                  <span className="italic">memulihkan pantai</span>.
                </>
              }
            />
            <div className="text-editorial flex flex-col gap-4 text-base leading-relaxed text-text-secondary md:text-lg">
              <p>
                Pandan laut adalah penjaga diam garis pantai. Akarnya menahan
                pasir, daun rimbunnya meneduhi sarang penyu dari panas
                matahari, dan keberadaannya menjadi indikator kesehatan
                ekosistem pesisir.
              </p>
              <p>
                Bersama warga, relawan, dan pengunjung — kami menanam dan
                merawat pandan di zona sarang aktif agar siklus hidup penyu
                terjaga sepanjang tahun.
              </p>
            </div>
            <ul className="grid gap-3 md:grid-cols-3">
              {PANDAN_BENEFITS.map((b) => (
                <li
                  key={b.title}
                  className="flex items-center gap-3 rounded-2xl border border-sand-dark/40 bg-shell p-4"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-seafoam/20 text-seafoam">
                    <b.icon className="h-4 w-4" />
                  </span>
                  <p className="text-ui text-sm font-medium text-ocean-deep">
                    {b.title}
                  </p>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6 rounded-2xl border border-sand-dark/50 bg-sand/70 p-6">
              <div>
                <p className="text-display text-4xl text-coral">200 m²</p>
                <p className="text-ui mt-1 text-xs uppercase tracking-[0.22em] text-text-secondary">
                  Area berhasil dihijaukan
                </p>
              </div>
              <div className="ml-auto">
                <a
                  href={CONTACT.whatsappReservationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ui inline-flex h-10 items-center justify-center gap-2 rounded-full bg-ocean-deep px-5 text-sm font-medium text-sand shadow-lg shadow-ocean-deep/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-ocean-mid hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
                >
                  Ikut Kegiatan Tanam
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PELEPASAN TUKIK */}
      <section
        id="tukik"
        className="relative overflow-hidden bg-ocean-deep text-sand"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(58,191,160,0.12),_transparent_60%)]"
        />
        <div className="container-editorial section-spacing relative grid gap-14">
          <SectionTitle
            eyebrow="Pelepasan Tukik"
            tone="dark"
            title={
              <>
                Momen yang <span className="italic">tak terulang</span>.
              </>
            }
            description="Pelepasan tukik adalah puncak dari kerja panjang konservasi — dan anda dapat ikut menyaksikan serta menjadi bagiannya."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-3xl border border-sand/15 bg-ocean-mid/40 p-8">
              <div className="flex items-center gap-3">
                <Sunrise className="h-6 w-6 text-seafoam" />
                <p className="text-ui text-sm uppercase tracking-[0.24em] text-seafoam">
                  Sesi Pagi — 06.00
                </p>
              </div>
              <h3 className="text-heading mt-4 text-3xl text-sand">
                Matahari terbit, tukik berlari.
              </h3>
              <p className="text-editorial mt-3 text-sand/80">
                Suhu pasir yang masih sejuk dan arus tenang membuat sesi pagi
                paling aman untuk tukik. Momen yang paling kami rekomendasikan.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-3xl border border-sand/15 bg-ocean-mid/40 p-8">
              <div className="flex items-center gap-3">
                <Sunset className="h-6 w-6 text-coral" />
                <p className="text-ui text-sm uppercase tracking-[0.24em] text-coral">
                  Sesi Sore — 17.00
                </p>
              </div>
              <h3 className="text-heading mt-4 text-3xl text-sand">
                Langit jingga di tepi laut.
              </h3>
              <p className="text-editorial mt-3 text-sand/80">
                Sesi alternatif untuk pengunjung yang datang siang. Tetap
                dipandu langsung oleh tim konservasi.
              </p>
            </div>
          </div>

          <div>
            <p className="text-ui text-xs font-semibold uppercase tracking-[0.28em] text-coral">
              Proses pelepasan
            </p>
            <ol className="mt-6 grid gap-4 md:grid-cols-4">
              {TUKIK_PROCESS.map((p) => (
                <li
                  key={p.step}
                  className="rounded-2xl border border-sand/10 bg-ocean-mid/30 p-6 backdrop-blur"
                >
                  <p className="text-display text-4xl text-seafoam">{p.step}</p>
                  <h4 className="text-heading mt-3 text-xl text-sand">
                    {p.title}
                  </h4>
                  <p className="text-editorial mt-2 text-sm text-sand/75">
                    {p.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col items-start gap-6 rounded-3xl border border-sand/15 bg-ocean-mid/40 p-8 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-ui text-xs uppercase tracking-[0.28em] text-coral">
                Musim Tukik
              </p>
              <p className="text-heading text-3xl text-sand">
                Mei · Juli · Oktober
              </p>
              <p className="text-editorial text-sm text-sand/75">
                Aturan etika: jangan sentuh tukik tanpa panduan, tidak boleh
                flash kamera, dan jaga suara tetap rendah.
              </p>
            </div>
            <a
              href={CONTACT.whatsappReservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ui inline-flex h-14 items-center justify-center gap-2 rounded-full bg-coral px-9 text-lg font-medium text-sand shadow-lg shadow-coral/30 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-coral/90 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
            >
              <Heart className="h-4 w-4" />
              Reservasi Sekarang
            </a>
          </div>

          <Link
            href="/informasi-wisata/lokasi-tata-cara"
            className="text-ui mx-auto inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-seafoam hover:text-sand"
          >
            Baca tata cara lengkap
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
