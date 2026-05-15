import type { Metadata } from "next";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SeasonCalendar } from "@/components/program/SeasonCalendar";
import { CONTACT, SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Jadwal & Kalender Konservasi — Batu Hiu Conservation",
  description:
    "Jadwal musim penyu bertelur, musim kawin, dan kalender pelepasan tukik di Pantai Batu Hiu Pangandaran. Jam operasional 07.00 - 18.00 WIB setiap hari.",
  keywords: [
    "jadwal konservasi penyu pangandaran",
    "musim bertelur penyu",
    "kalender pelepasan tukik batu hiu",
    "jam operasional konservasi penyu",
  ],
  path: "/informasi-wisata/jadwal",
});

const eventSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Musim Bertelur Penyu & Pelepasan Tukik — Mei",
    startDate: `${new Date().getFullYear()}-05-01`,
    endDate: `${new Date().getFullYear()}-05-31`,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Pantai Batu Hiu",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pangandaran",
        addressRegion: "Jawa Barat",
        addressCountry: "ID",
      },
    },
    organizer: { "@type": "NGO", name: SITE.foundation, url: SITE.url },
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Pelepasan Tukik — Juli",
    startDate: `${new Date().getFullYear()}-07-01`,
    endDate: `${new Date().getFullYear()}-07-31`,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Pantai Batu Hiu",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pangandaran",
        addressRegion: "Jawa Barat",
        addressCountry: "ID",
      },
    },
    organizer: { "@type": "NGO", name: SITE.foundation, url: SITE.url },
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Musim Bertelur Penyu — Oktober",
    startDate: `${new Date().getFullYear()}-10-01`,
    endDate: `${new Date().getFullYear()}-10-31`,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Pantai Batu Hiu",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pangandaran",
        addressRegion: "Jawa Barat",
        addressCountry: "ID",
      },
    },
    organizer: { "@type": "NGO", name: SITE.foundation, url: SITE.url },
  },
];

export default function JadwalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />

      <section className="bg-ocean-deep pb-12 pt-36 text-sand md:pt-44">
        <div className="container-editorial max-w-3xl">
          <Badge variant="seafoam">Jadwal & Kalender</Badge>
          <h1 className="text-display mt-6 text-balance text-5xl leading-[1.05] md:text-7xl">
            Kapan laut <span className="italic text-seafoam">memanggil</span>.
          </h1>
          <p className="text-editorial mt-6 max-w-2xl text-lg leading-relaxed text-sand/85">
            Rencanakan kunjungan anda berdasarkan ritme alami penyu di Pantai
            Batu Hiu.
          </p>
        </div>
      </section>

      {/* Jam operasional */}
      <section className="bg-shell">
        <div className="container-editorial section-spacing grid gap-14">
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 rounded-3xl border border-sand-dark/50 bg-sand/60 p-8 text-center md:flex-row md:items-center md:justify-center md:gap-6 md:text-left">
            <div className="grid h-14 w-14 place-items-center self-center rounded-2xl bg-ocean-deep text-sand md:self-auto">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <p className="text-ui text-xs uppercase tracking-[0.28em] text-coral">
                Jam Operasional
              </p>
              <p className="text-heading text-3xl text-ocean-deep md:text-4xl">
                {CONTACT.operationalHours}
              </p>
              <p className="text-editorial text-sm text-text-secondary">
                Buka {CONTACT.operationalDays}
              </p>
            </div>
          </div>

          <div className="grid gap-10">
            <SectionTitle
              eyebrow="Kalender Tahunan"
              title={
                <>
                  Musim penyu di{" "}
                  <span className="italic">Pantai Batu Hiu</span>.
                </>
              }
              description="Kalender visual 12 bulan untuk membantu anda memilih momen terbaik berkunjung."
            />
            <SeasonCalendar />
          </div>
        </div>
      </section>
    </>
  );
}
