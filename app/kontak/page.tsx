import type { Metadata } from "next";
import { Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { InstagramIcon } from "@/components/ui/BrandIcons";
import { CONTACT, SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Kontak — Batu Hiu Conservation",
  description:
    "Hubungi Yayasan Raksa Bintana untuk pertanyaan, kolaborasi, atau kunjungan seputar konservasi penyu di Pantai Batu Hiu, Pangandaran.",
  keywords: [
    "kontak yayasan raksa bintana",
    "hubungi konservasi penyu pangandaran",
    "kolaborasi konservasi penyu batu hiu",
  ],
  path: "/kontak",
});

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE.url}/kontak`,
  name: "Kontak Yayasan Raksa Bintana",
  mainEntity: {
    "@type": "NGO",
    name: SITE.foundation,
    url: SITE.url,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        areaServed: "ID",
        availableLanguage: ["Indonesian", "English"],
      },
    ],
    sameAs: [CONTACT.instagramUrl],
  },
};

const INFO_CARDS = [
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: `@${CONTACT.instagram}`,
    href: CONTACT.instagramUrl,
    external: true,
  },
  {
    icon: MapPin,
    label: "Lokasi",
    value: `${CONTACT.address.street}, ${CONTACT.address.locality}, ${CONTACT.address.region}`,
    href: "/informasi-wisata/lokasi-tata-cara",
    external: false,
  },
  {
    icon: Clock,
    label: "Jam Operasional",
    value: `${CONTACT.operationalHours} • ${CONTACT.operationalDays}`,
    href: "/informasi-wisata/jadwal",
    external: false,
  },
];

export default function KontakPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <section className="bg-ocean-deep pb-12 pt-36 text-sand md:pt-44">
        <div className="container-editorial max-w-3xl">
          <div>
            <Badge variant="seafoam">Kontak</Badge>
          </div>
          <h1 className="text-display mt-6 text-balance text-5xl leading-[1.05] md:text-7xl">
            Mari <span className="italic text-seafoam">terhubung</span>.
          </h1>
          <p className="text-editorial mt-6 max-w-2xl text-lg leading-relaxed text-sand/85">
            Punya pertanyaan, ingin berkunjung, atau tertarik berkolaborasi?
            Hubungi kami melalui Instagram atau kunjungi langsung Pantai Batu Hiu.
          </p>
        </div>
      </section>

      {/* INFO */}
      <section className="bg-shell">
        <div className="container-editorial section-spacing">
          <ul className="grid gap-6 md:grid-cols-3">
            {INFO_CARDS.map((c) => {
              const Icon = c.icon;
              const content = (
                <>
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ocean-deep text-sand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-ui text-xs font-semibold uppercase tracking-[0.24em] text-coral">
                      {c.label}
                    </p>
                    <p className="text-heading mt-1 text-xl text-ocean-deep">
                      {c.value}
                    </p>
                  </div>
                </>
              );
              return (
                <li key={c.label}>
                  {c.external ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-5 rounded-2xl border border-sand-dark/40 bg-sand/60 p-6 transition-all hover:-translate-y-0.5 hover:border-coral/40 hover:bg-sand"
                    >
                      {content}
                    </a>
                  ) : (
                    <a
                      href={c.href}
                      className="flex items-center gap-5 rounded-2xl border border-sand-dark/40 bg-sand/60 p-6 transition-all hover:-translate-y-0.5 hover:border-coral/40 hover:bg-sand"
                    >
                      {content}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
