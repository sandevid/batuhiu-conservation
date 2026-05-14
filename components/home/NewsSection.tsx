"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Sprout, Sparkles, Waves } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  defaultViewport,
  fadeUpVariants,
  staggerContainer,
} from "@/lib/animations";

type NewsItem = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: "seafoam" | "coral" | "earth";
};

const NEWS: NewsItem[] = [
  {
    id: "1",
    category: "Pelepasan Tukik",
    title: "Festival Pelepasan 500 Tukik Penyu Hijau di Pantai Batu Hiu",
    excerpt:
      "Pagi hari di awal Mei, ratusan wisatawan dan relawan bersama-sama melepaskan 500 ekor tukik penyu hijau ke laut. Sebuah pengingat bahwa harapan selalu dimulai dari langkah-langkah kecil di atas pasir.",
    date: "2025-05-12",
    icon: Waves,
    accent: "seafoam",
  },
  {
    id: "2",
    category: "Edukasi",
    title: "Program Edukasi untuk 120 Pelajar Pangandaran",
    excerpt:
      "Kunjungan sekolah memperkenalkan siklus hidup penyu dan etika berinteraksi dengan fauna laut.",
    date: "2025-04-22",
    icon: Sparkles,
    accent: "coral",
  },
  {
    id: "3",
    category: "Penanaman Pandan",
    title: "200m² Pandan Baru Ditanam di Zona Sarang",
    excerpt:
      "Kolaborasi bersama komunitas lokal memperluas naungan alami untuk sarang penyu.",
    date: "2025-03-18",
    icon: Sprout,
    accent: "earth",
  },
];

const ACCENT_CLASS = {
  seafoam: "text-seafoam border-seafoam/40 bg-seafoam/10",
  coral: "text-coral border-coral/40 bg-coral/10",
  earth: "text-earth border-earth/40 bg-earth/10",
} as const;

function formatID(date: string) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function NewsSection() {
  const [feature, ...rest] = NEWS;

  return (
    <section
      aria-label="Kegiatan terbaru"
      className="relative overflow-hidden bg-shell"
    >
      <div className="container-editorial section-spacing grid gap-14">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionTitle
            eyebrow="Jurnal Konservasi"
            title={
              <>
                Kabar terbaru dari <span className="italic">tepian laut</span>.
              </>
            }
            description="Cerita, dokumentasi, dan catatan lapangan dari aktivitas konservasi penyu di Pantai Batu Hiu."
          />
          <Link
            href="/galeri"
            className="text-ui group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-ocean-deep hover:text-coral"
          >
            Lihat Galeri
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid gap-6 lg:grid-cols-[1.4fr_1fr]"
        >
          {/* Featured */}
          <motion.article
            variants={fadeUpVariants}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-sand-dark/40 bg-gradient-to-br from-ocean-deep via-ocean-mid to-ocean-light text-sand"
          >
            <div className="relative flex-1 p-10 md:p-12">
              <span
                className={`text-ui inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ${ACCENT_CLASS[feature.accent]}`}
              >
                <feature.icon className="h-3.5 w-3.5" /> {feature.category}
              </span>
              <h3 className="text-heading mt-6 max-w-xl text-3xl leading-tight text-sand md:text-5xl">
                {feature.title}
              </h3>
              <p className="text-editorial mt-5 max-w-xl text-base leading-relaxed text-sand/80 md:text-lg">
                {feature.excerpt}
              </p>
              <div className="text-ui mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-sand/70">
                <Calendar className="h-3.5 w-3.5" />
                {formatID(feature.date)}
              </div>
            </div>
            {/* Decorative wave */}
            <svg
              aria-hidden
              className="pointer-events-none absolute -right-10 bottom-0 h-56 text-seafoam/10"
              viewBox="0 0 400 200"
              fill="currentColor"
            >
              <path d="M0 100 Q 100 40 200 100 T 400 100 L 400 200 L 0 200 Z" />
            </svg>
          </motion.article>

          {/* Rest */}
          <div className="flex flex-col gap-6">
            {rest.map((item) => (
              <motion.article
                key={item.id}
                variants={fadeUpVariants}
                className="group relative flex gap-5 rounded-2xl border border-sand-dark/40 bg-sand/60 p-6 transition-all hover:-translate-y-0.5 hover:border-coral/30 hover:bg-sand/90"
              >
                <div
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl border ${ACCENT_CLASS[item.accent]}`}
                >
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-ui text-[11px] font-semibold uppercase tracking-[0.22em] text-text-secondary">
                    {item.category} · {formatID(item.date)}
                  </span>
                  <h4 className="text-heading mt-2 text-xl text-ocean-deep">
                    {item.title}
                  </h4>
                  <p className="text-editorial mt-2 text-sm leading-relaxed text-text-secondary">
                    {item.excerpt}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
