import type { Metadata } from "next";
import Image from "next/image";
import { Download, Egg, GraduationCap, HandCoins, Shell, Sprout, Users } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { DONATION_TIERS, SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Donasi — Dukung Konservasi Penyu Batu Hiu",
  description:
    "Donasikan dukungan anda untuk konservasi penyu di Pantai Batu Hiu melalui QRIS Yayasan Raksa Bintana. Setiap rupiah berarti untuk satu tukik.",
  keywords: [
    "donasi konservasi penyu",
    "qris yayasan raksa bintana",
    "donasi penyu pangandaran",
    "dukung konservasi laut indonesia",
  ],
  path: "/donasi",
});

const donateSchema = {
  "@context": "https://schema.org",
  "@type": "DonateAction",
  name: "Donasi Konservasi Penyu Pantai Batu Hiu",
  recipient: { "@type": "NGO", name: SITE.foundation, url: SITE.url },
  url: `${SITE.url}/donasi`,
};

const FUND_USES = [
  { text: "Perawatan dan pemantauan sarang penyu", icon: Egg },
  { text: "Penyediaan material penanaman pandan", icon: Sprout },
  { text: "Operasional program edukasi", icon: GraduationCap },
  { text: "Pelatihan dan honor pemandu lokal", icon: Users },
];

export default function DonasiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(donateSchema) }}
      />

      <section className="bg-ocean-deep pb-12 pt-36 text-sand md:pt-44">
        <div className="container-editorial max-w-3xl">
          <div>
            <Badge variant="coral">Donasi QRIS</Badge>
          </div>
          <h1 className="text-display mt-6 text-balance text-5xl leading-[1.05] md:text-7xl">
            Setiap donasi adalah{" "}
            <span className="italic text-coral">satu harapan tukik</span>.
          </h1>
          <p className="text-editorial mt-6 max-w-2xl text-lg leading-relaxed text-sand/85">
            Dukungan anda membuat pemantauan sarang, penanaman pandan, dan
            pelepasan tukik di Pantai Batu Hiu terus berjalan sepanjang tahun.
          </p>
        </div>
      </section>

      {/* QRIS BOX */}
      <section className="bg-shell">
        <div className="container-editorial section-spacing flex justify-center">
          <div className="w-full max-w-xl overflow-hidden rounded-3xl bg-gradient-to-br from-shell to-sand p-10 shadow-2xl shadow-ocean-deep/15 ring-1 ring-sand-dark/30 md:p-14">
            <div className="flex items-center justify-between gap-6">
              <div className="flex flex-col">
                <span className="text-ui text-[11px] font-semibold uppercase tracking-[0.28em] text-coral">
                  Scan QRIS
                </span>
                <p className="text-heading mt-1 text-2xl text-ocean-deep">
                  Yayasan Raksa Bintana
                </p>
              </div>
              <div className="text-ui rounded-xl bg-ocean-deep px-3 py-1.5 text-[11px] font-semibold tracking-[0.22em] text-sand">
                QRIS
              </div>
            </div>

            {/* QRIS Image */}
            <div className="mx-auto mt-8 max-w-[18rem]">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl border-2 border-sand-dark/30 bg-white shadow-lg">
                <Image
                  src="/assets/images/qris.webp"
                  alt="QRIS Yayasan Raksa Bintana"
                  fill
                  className="object-contain p-4"
                  sizes="288px"
                />
              </div>
            </div>

            <p className="text-editorial mt-6 text-center text-sm text-text-secondary">
              Scan QR ini dengan aplikasi apapun yang mendukung QRIS — GoPay,
              OVO, Dana, ShopeePay, BCA Mobile, atau M-Banking lainnya.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button
                as="link"
                href="/assets/images/qris.webp"
                variant="primary"
                size="sm"
                download
              >
                <Download className="h-4 w-4" />
                Download QR QRIS
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* DAMPAK */}
      <section className="bg-sand-texture">
        <div className="container-editorial section-spacing grid gap-12">
          <SectionTitle
            eyebrow="Dampak Donasi"
            title={
              <>
                Rupiah yang <span className="italic">berubah menjadi aksi</span>.
              </>
            }
            description="Setiap tingkat donasi punya cerita. Berikut yang bisa dijangkau dari kontribusi anda."
          />
          <ul className="grid gap-6 md:grid-cols-3">
            {DONATION_TIERS.map((tier) => (
              <li
                key={tier.amount}
                className="group flex flex-col gap-4 rounded-3xl border border-sand-dark/50 bg-shell p-8 transition-all hover:-translate-y-1 hover:border-coral/40"
              >
                <p className="text-display text-4xl text-coral md:text-5xl">
                  {tier.amount}
                </p>
                <p className="text-editorial text-base leading-relaxed text-text-secondary">
                  {tier.impact}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TRANSPARANSI */}
      <section className="bg-shell">
        <div className="container-editorial section-spacing grid gap-10">
          <SectionTitle
            eyebrow="Transparansi"
            title={
              <>
                Ke mana dana <span className="italic">mengalir</span>?
              </>
            }
            description="Kami percaya donasi yang akuntabel adalah donasi yang berkelanjutan. Dana yang anda berikan digunakan untuk:"
          />
          <ul className="grid gap-4 md:grid-cols-2">
            {FUND_USES.map((u) => (
              <li
                key={u.text}
                className="flex items-center gap-5 rounded-2xl border border-sand-dark/40 bg-sand/60 p-6"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ocean-deep text-sand">
                  <u.icon className="h-5 w-5" />
                </span>
                <p className="text-editorial text-base text-ocean-deep">
                  {u.text}
                </p>
              </li>
            ))}
          </ul>
          <p className="text-editorial mx-auto max-w-2xl text-center text-sm italic text-text-muted">
            <Shell className="mr-1.5 inline h-4 w-4 align-[-2px]" />
            Terima kasih untuk setiap rupiah, setiap tukik, dan setiap harapan
            yang anda kirim ke laut.
          </p>
        </div>
      </section>
    </>
  );
}
