import Link from "next/link";
import { Heart, MapPin, Clock, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { InstagramIcon } from "@/components/ui/BrandIcons";
import { CONTACT, SITE } from "@/lib/constants";

const NAV_COLS = [
  {
    heading: "Jelajah",
    links: [
      { href: "/", label: "Beranda" },
      { href: "/tentang-kami", label: "Tentang Kami" },
      { href: "/galeri", label: "Galeri" },
      { href: "/program", label: "Program" },
    ],
  },
  {
    heading: "Wisata",
    links: [
      { href: "/informasi-wisata/jadwal", label: "Jadwal & Kalender" },
      { href: "/informasi-wisata/lokasi-tata-cara", label: "Lokasi & Tata Cara" },
      { href: "/informasi-wisata/panduan", label: "Panduan Video" },
      { href: "/reservasi", label: "Reservasi Tukik" },
    ],
  },
  {
    heading: "Lainnya",
    links: [
      { href: "/donasi", label: "Donasi" },
      { href: "/kontak", label: "Kontak" },
      { href: "/kontak#feedback", label: "Feedback" },
    ],
  },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ocean-deep text-sand/90">
      {/* Decorative top wave */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ocean-deep/0 via-ocean-deep/40 to-ocean-deep"
      />
      <div className="container-editorial relative grid gap-12 py-20 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-10">
        {/* Brand column */}
        <div className="flex flex-col gap-6">
          <Logo tone="light" />
          <p className="text-editorial max-w-sm text-sm leading-relaxed text-sand/75">
            {SITE.foundation} — menjaga penyu dan ekosistem laut di Pantai Batu Hiu,
            Pangandaran. Setiap tukik yang kami lepas adalah satu harapan untuk
            lautan Indonesia.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram Yayasan Raksa Bintana"
              className="grid h-11 w-11 place-items-center rounded-full border border-sand/20 text-sand transition-all hover:-translate-y-0.5 hover:bg-coral hover:border-coral"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Nav columns */}
        {NAV_COLS.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <h3 className="text-ui text-xs font-semibold uppercase tracking-[0.28em] text-coral">
              {col.heading}
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-editorial group inline-flex items-center gap-2 text-sm text-sand/80 transition-colors hover:text-sand"
                  >
                    <span className="h-px w-3 bg-sand/30 transition-all group-hover:w-5 group-hover:bg-coral" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Contact strip */}
      <div className="border-t border-sand/10">
        <div className="container-editorial flex flex-col gap-4 py-6 text-sm text-sand/75 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-seafoam" />
              Pantai Batu Hiu, Pangandaran, Jawa Barat
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-seafoam" />
              {CONTACT.operationalHours}
            </span>
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-sand"
            >
              <Mail className="h-4 w-4 text-seafoam" />@{CONTACT.instagram}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-sand/10">
        <div className="container-editorial flex flex-col items-center justify-between gap-3 py-6 text-xs text-sand/60 md:flex-row">
          <p>
            © {year} {SITE.foundation}. Semua hak dilindungi.
          </p>
          <p className="inline-flex items-center gap-1.5">
            Dibuat dengan <Heart className="h-3.5 w-3.5 fill-coral text-coral" /> untuk kelestarian penyu Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
}
