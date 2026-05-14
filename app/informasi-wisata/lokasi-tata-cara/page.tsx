import type { Metadata } from "next";
import { Check, ChevronDown, MapPin, X } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Lokasi & Tata Cara Kunjungan — Pantai Batu Hiu Pangandaran",
  description:
    "Panduan lengkap rute menuju Pantai Batu Hiu Pangandaran dan tata cara berinteraksi dengan penyu secara etis dan bertanggung jawab bersama Yayasan Raksa Bintana.",
  keywords: [
    "lokasi pantai batu hiu",
    "rute ke pantai batu hiu pangandaran",
    "tata cara berinteraksi penyu",
    "etika wisata konservasi",
  ],
  path: "/informasi-wisata/lokasi-tata-cara",
});

const touristSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Pantai Batu Hiu — Konservasi Penyu",
  url: `${SITE.url}/informasi-wisata/lokasi-tata-cara`,
  description:
    "Lokasi konservasi penyu Pantai Batu Hiu, Pangandaran yang dikelola oleh Yayasan Raksa Bintana.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pangandaran",
    addressRegion: "Jawa Barat",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -7.7436,
    longitude: 108.5222,
  },
};

const DOS = [
  "Mengikuti briefing wajib dari pemandu",
  "Melepas tukik dengan lembut dan hati-hati",
  "Menjaga jarak aman dari induk penyu",
  "Menggunakan mode silent pada kamera",
];

const DONTS = [
  "Menggunakan flash kamera atau lampu terang",
  "Membuat keributan di dekat sarang",
  "Menyentuh tukik tanpa izin pemandu",
  "Meninggalkan sampah di pantai",
  "Mengambil pasir, telur, atau cangkang",
];

const ROUTES = [
  {
    from: "Bandung",
    time: "± 6 jam",
    body:
      "Bandung → Tol Cileunyi → Rancaekek → Nagreg → Garut → Tasikmalaya → Ciamis → Banjar → Pangandaran → Pantai Batu Hiu.",
  },
  {
    from: "Yogyakarta",
    time: "± 5 jam",
    body:
      "Yogyakarta → Wates → Kulon Progo → Kebumen → Cilacap → Kalipucang → Pangandaran → Pantai Batu Hiu.",
  },
  {
    from: "Jakarta",
    time: "± 7–8 jam",
    body:
      "Jakarta → Tol Cipularang → Bandung → Garut → Tasikmalaya → Ciamis → Banjar → Pangandaran → Pantai Batu Hiu.",
  },
];

export default function LokasiTataCaraPage() {
  const mapsHref =
    "https://www.google.com/maps/search/?api=1&query=Pantai+Batu+Hiu+Pangandaran";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristSchema) }}
      />

      <section className="bg-ocean-deep pb-12 pt-36 text-sand md:pt-44">
        <div className="container-editorial max-w-3xl">
          <Badge variant="seafoam">Lokasi & Tata Cara</Badge>
          <h1 className="text-display mt-6 text-balance text-5xl leading-[1.05] md:text-7xl">
            Menuju pantai, <span className="italic text-seafoam">menjaga penyu</span>.
          </h1>
          <p className="text-editorial mt-6 max-w-2xl text-lg leading-relaxed text-sand/85">
            Panduan lengkap rute ke Pantai Batu Hiu Pangandaran dan etika
            berinteraksi dengan penyu untuk memastikan kunjungan anda memberi
            dampak positif.
          </p>
        </div>
      </section>

      {/* MAPS */}
      <section className="bg-shell">
        <div className="container-editorial section-spacing grid gap-10">
          <SectionTitle
            eyebrow="Lokasi"
            title={<>Pantai Batu Hiu, <span className="italic">Pangandaran</span>.</>}
            description="Titik konservasi kami berada di pesisir Pantai Batu Hiu — dengan panorama batu karang berbentuk sirip hiu yang khas."
          />

          <div className="overflow-hidden rounded-3xl border border-sand-dark/50 bg-sand/40">
            <iframe
              title="Lokasi Pantai Batu Hiu Pangandaran"
              src="https://www.google.com/maps?q=Pantai%20Batu%20Hiu%20Pangandaran&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <Button as="link" href={mapsHref} variant="primary" size="md">
              <MapPin className="h-4 w-4" />
              Buka di Google Maps
            </Button>
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section className="bg-sand-texture">
        <div className="container-editorial section-spacing grid gap-10">
          <SectionTitle
            eyebrow="Rute Menuju Pantai Batu Hiu"
            title={
              <>
                Dari berbagai kota, <span className="italic">satu tujuan</span>.
              </>
            }
          />
          <div className="flex flex-col gap-3">
            {ROUTES.map((r) => (
              <details
                key={r.from}
                className="group rounded-2xl border border-sand-dark/50 bg-shell p-5 transition-colors open:border-coral/50"
              >
                <summary className="text-ui flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ocean-deep">
                  <span className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-coral" />
                    Dari {r.from}
                    <span className="text-ui rounded-full bg-sand px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-text-secondary">
                      {r.time}
                    </span>
                  </span>
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <p className="text-editorial mt-4 text-sm leading-relaxed text-text-secondary">
                  {r.body}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* DO / DONT */}
      <section className="bg-shell">
        <div className="container-editorial section-spacing grid gap-10">
          <SectionTitle
            eyebrow="Tata Cara Berinteraksi"
            title={
              <>
                Kunjungan yang <span className="italic">bertanggung jawab</span>.
              </>
            }
            description="Penyu bereaksi sangat sensitif terhadap cahaya dan suara. Beberapa aturan sederhana berikut membantu menjaga mereka tetap aman."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {/* DO's */}
            <div className="rounded-3xl border border-seafoam/30 bg-seafoam/10 p-8">
              <p className="text-ui text-xs font-semibold uppercase tracking-[0.28em] text-seafoam">
                DO&apos;S — Lakukan
              </p>
              <ul className="mt-6 flex flex-col gap-4">
                {DOS.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-seafoam text-ocean-deep">
                      <Check className="h-4 w-4" />
                    </span>
                    <p className="text-editorial text-base leading-relaxed text-ocean-deep">
                      {d}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            {/* DON'Ts */}
            <div className="rounded-3xl border border-coral/30 bg-coral/10 p-8">
              <p className="text-ui text-xs font-semibold uppercase tracking-[0.28em] text-coral">
                DON&apos;TS — Hindari
              </p>
              <ul className="mt-6 flex flex-col gap-4">
                {DONTS.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-coral text-sand">
                      <X className="h-4 w-4" />
                    </span>
                    <p className="text-editorial text-base leading-relaxed text-ocean-deep">
                      {d}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Etika narrative */}
          <div className="text-editorial mt-6 flex flex-col gap-4 rounded-3xl border border-sand-dark/50 bg-sand/60 p-8 text-base leading-relaxed text-text-secondary md:text-lg">
            <p>
              Penyu adalah makhluk yang mengandalkan indra halus untuk menavigasi
              lautan. Cahaya buatan dapat mendisorientasi tukik yang baru
              menetas, membuat mereka berjalan menjauh dari laut. Oleh karena
              itu, kami sangat ketat tentang tidak menggunakan flash kamera dan
              menjaga suara tetap rendah di area konservasi.
            </p>
            <p>
              Anda selalu disambut untuk mendokumentasikan kunjungan — pakai
              mode silent, aktifkan mode malam, dan biarkan tim pemandu memandu
              posisi yang aman untuk mengambil foto. Dengan cara ini, anda
              pulang dengan kenangan indah, dan penyu tetap pulang ke laut.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
