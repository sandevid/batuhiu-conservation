import type { Metadata } from "next";
import Image from "next/image";
import { GraduationCap, Shell, Users, Globe, Shield } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Tentang Kami — Yayasan Raksa Bintana",
  description:
    "Yayasan Raksa Bintana didirikan 2024 dengan komitmen penuh terhadap kelestarian ekosistem laut Indonesia. Kenali misi, visi, dan perjalanan kami dalam konservasi penyu.",
  keywords: [
    "yayasan raksa bintana",
    "profil konservasi penyu",
    "tentang batu hiu conservation",
    "sejarah konservasi penyu pangandaran",
  ],
  path: "/tentang-kami",
  ogImage: "/og/og-about.jpg",
});

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Tentang Yayasan Raksa Bintana",
  url: `${SITE.url}/tentang-kami`,
  mainEntity: {
    "@type": "NGO",
    name: SITE.foundation,
    alternateName: SITE.name,
    foundingDate: `${SITE.foundingYear}`,
    description:
      "Yayasan konservasi penyu Pantai Batu Hiu, Pangandaran yang mengintegrasikan perlindungan fauna dengan pemberdayaan masyarakat lokal.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pangandaran",
      addressRegion: "Jawa Barat",
      addressCountry: "ID",
    },
  },
};

const NAME_MEANING = [
  {
    word: "RAKSA",
    icon: Shield,
    meaning: "Memelihara dan menjaga warisan alam pesisir.",
  },
  {
    word: "BINTANA",
    icon: Globe,
    meaning: "Visi luas seperti samudera — menjaga keseimbangan ekologis.",
  },
];

const PILLARS = [
  {
    title: "Perlindungan Fauna Laut",
    icon: Shell,
    body:
      "Pemantauan sarang penyu, perlindungan induk betina, dan pelepasan tukik secara bertanggung jawab.",
  },
  {
    title: "Pemberdayaan Komunitas",
    icon: Users,
    body:
      "Menggandeng warga pesisir sebagai pemandu, peneliti lokal, dan pelaku ekowisata.",
  },
  {
    title: "Edukasi Berkelanjutan",
    icon: GraduationCap,
    body:
      "Program belajar untuk pelajar, mahasiswa, dan wisatawan agar ekosistem laut tetap lestari.",
  },
];

const TIMELINE = [
  {
    year: "2024",
    title: "Pendirian Yayasan Raksa Bintana",
    body: "Lahir dari keprihatinan atas berkurangnya populasi penyu di pesisir Pangandaran.",
  },
  {
    year: "2024",
    title: "Program Edukasi Pertama",
    body: "Kerjasama dengan sekolah-sekolah lokal untuk edukasi konservasi penyu.",
  },
  {
    year: "2024",
    title: "Pelepasan Tukik Perdana",
    body: "Lebih dari 500 ekor tukik penyu hijau berhasil dilepas ke laut.",
  },
  {
    year: "2025",
    title: "Program Penanaman Pandan",
    body: "Merestorasi habitat pesisir dengan penanaman pandan laut di zona sarang.",
  },
  {
    year: "2025",
    title: "4.200+ Tukik Dilepas",
    body: "Pencapaian kumulatif pelepasan tukik bersama relawan dan wisatawan.",
  },
];

export default function TentangKamiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* HERO */}
      <section className="bg-ocean-deep pb-0 pt-36 text-sand md:pt-44">
        <div className="container-editorial grid items-center gap-12 pb-20 md:pb-28 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-6">
            <div>
              <Badge variant="seafoam">Profil Yayasan</Badge>
            </div>
            <h1 className="text-display text-balance text-5xl leading-[1.05] md:text-7xl">
              Menjaga Warisan,{" "}
              <span className="italic text-seafoam">Merawat Samudera.</span>
            </h1>
            <p className="text-editorial max-w-xl text-lg leading-relaxed text-sand/85">
              Yayasan Raksa Bintana adalah wadah bagi para penjaga pantai, relawan
              muda, dan komunitas pesisir Pangandaran yang percaya bahwa laut
              yang sehat dimulai dari sebutir telur penyu yang terlindungi.
            </p>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-sand/15">
              {/* Background Image */}
              <Image
                src="/assets/images/tentang-kami.webp"
                alt="Yayasan Raksa Bintana - Konservasi Penyu Pantai Batu Hiu"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Gradient overlay for text readability */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-ocean-deep/10 to-transparent"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-ocean-deep/85 p-5 backdrop-blur">
                <p className="text-editorial text-sm italic text-sand/90">
                  &ldquo;Kami percaya bahwa melindungi penyu adalah menjaga
                  indikator kesehatan laut kita yang paling berharga.&rdquo;
                </p>
                <p className="text-ui mt-3 text-xs uppercase tracking-[0.24em] text-seafoam">
                  — Yayasan Raksa Bintana
                </p>
              </div>
            </div>
          </div>
        </div>
        <WaveDivider color="var(--color-shell)" />
      </section>

      {/* MAKNA NAMA */}
      <section className="bg-shell">
        <div className="container-editorial section-spacing grid gap-12">
          <SectionTitle
            eyebrow="Makna Nama"
            title={
              <>
                Dari <span className="italic">Raksa</span> hingga{" "}
                <span className="italic">Bintana</span>.
              </>
            }
            description="Setiap kata dalam nama kami membawa komitmen untuk menjaga laut dan warisan leluhur pesisir."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {NAME_MEANING.map((item) => (
              <div
                key={item.word}
                className="group relative overflow-hidden rounded-3xl border border-sand-dark/40 bg-sand/60 p-10 transition-all hover:-translate-y-1 hover:border-ocean-light/50 hover:bg-sand"
              >
                <div className="flex items-start gap-5">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-ocean-deep text-sand">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-display text-4xl text-ocean-deep md:text-5xl">
                      {item.word}
                    </h3>
                    <p className="text-editorial mt-4 text-base leading-relaxed text-text-secondary">
                      {item.meaning}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NARASI + PULL QUOTE */}
      <section className="bg-sand-texture">
        <div className="container-editorial section-spacing grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <figure className="flex flex-col gap-5">
            <span className="text-display text-[8rem] leading-none text-coral/30">
              &ldquo;
            </span>
            <blockquote className="text-display -mt-8 text-3xl italic leading-snug text-ocean-deep md:text-4xl">
              Kami percaya bahwa melindungi penyu adalah menjaga indikator
              kesehatan laut kita yang paling berharga.
            </blockquote>
            <figcaption className="text-ui text-sm uppercase tracking-[0.28em] text-coral">
              — Yayasan Raksa Bintana
            </figcaption>
          </figure>

          <div className="text-editorial flex flex-col gap-5 text-base leading-relaxed text-text-secondary md:text-lg">
            <p>
              Yayasan Raksa Bintana didirikan pada tahun 2024 dengan komitmen
              penuh terhadap kelestarian ekosistem laut Indonesia. Berawal dari
              keprihatinan mendalam atas berkurangnya populasi penyu di daerah
              pesisir, kami bertransformasi menjadi lembaga konservasi yang
              mengintegrasikan perlindungan fauna dengan pemberdayaan
              masyarakat lokal.
            </p>
            <p>
              Kami bekerja di garis pertemuan antara pasir dan ombak: memantau
              sarang, melindungi induk betina yang mendarat, dan memastikan
              tukik yang menetas kembali ke laut dalam kondisi terbaik.
              Sekaligus, kami menjaga pandan laut dan vegetasi pantai sebagai
              benteng alami terhadap erosi.
            </p>
            <p>
              Bagi kami, konservasi bukan pekerjaan segelintir ahli. Ia adalah
              kerja kolektif — warga, pelajar, wisatawan, dan relawan yang
              bersedia meluangkan pagi-pagi mereka di tepi Pantai Batu Hiu.
            </p>
          </div>
        </div>
      </section>

      {/* MISI & VISI */}
      <section className="bg-shell">
        <div className="container-editorial section-spacing grid gap-12">
          <SectionTitle
            eyebrow="Misi & Visi"
            align="center"
            title={
              <>
                Tiga pilar yang <span className="italic">menuntun arah kami</span>.
              </>
            }
            className="mx-auto"
          />
          <ul className="grid gap-6 md:grid-cols-3">
            {PILLARS.map((p) => (
              <li
                key={p.title}
                className="group flex flex-col gap-5 rounded-3xl border border-sand-dark/40 bg-sand/70 p-8 transition-all hover:-translate-y-1 hover:border-seafoam/50"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-seafoam text-ocean-deep">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="text-heading text-2xl text-ocean-deep">
                  {p.title}
                </h3>
                <p className="text-editorial text-base leading-relaxed text-text-secondary">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-ocean-deep text-sand">
        <div className="container-editorial section-spacing grid gap-12">
          <SectionTitle
            eyebrow="Perjalanan"
            tone="dark"
            title={
              <>
                Jejak langkah yang <span className="italic">menjadi pasir</span>.
              </>
            }
            description="Setiap tonggak mengingatkan kami bahwa konservasi adalah kerja panjang — satu musim ke musim berikutnya."
          />
          <ol className="relative mx-auto flex w-full max-w-4xl flex-col gap-10 border-l border-sand/20 pl-8 md:mx-0 md:border-l-0 md:pl-0">
            {TIMELINE.map((entry, i) => (
              <li
                key={`${entry.year}-${entry.title}`}
                className="relative md:grid md:grid-cols-[120px_32px_1fr] md:items-start md:gap-6"
              >
                {/* Year */}
                <span className="text-display hidden text-4xl text-seafoam md:block">
                  {entry.year}
                </span>
                {/* Dot + line */}
                <div className="hidden md:flex md:flex-col md:items-center md:gap-2 md:self-stretch">
                  <span className="mt-3 h-3 w-3 rounded-full bg-coral shadow-[0_0_0_6px_rgba(232,93,58,0.15)]" />
                  {i < TIMELINE.length - 1 ? (
                    <span className="w-px flex-1 bg-sand/20" />
                  ) : null}
                </div>
                {/* Mobile dot */}
                <span className="absolute -left-[33px] top-2 h-3 w-3 rounded-full bg-coral md:hidden" />
                <div className="flex flex-col gap-2">
                  <span className="text-display text-2xl text-seafoam md:hidden">
                    {entry.year}
                  </span>
                  <h3 className="text-heading text-2xl text-sand md:text-3xl">
                    {entry.title}
                  </h3>
                  <p className="text-editorial max-w-xl text-base text-sand/80">
                    {entry.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
