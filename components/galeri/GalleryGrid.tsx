"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { BookOpen, Heart, Images, Sprout, X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "semua", label: "Semua", icon: Images },
  { id: "edukasi", label: "Edukasi", icon: BookOpen },
  { id: "pandan", label: "Penanaman Pandan", icon: Sprout },
  { id: "tukik", label: "Pelepasan Tukik", icon: Heart },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

type GalleryItem = {
  id: string;
  category: Exclude<CategoryId, "semua">;
  caption: string;
  alt: string;
  accent: string;
  image: string;
};

// Gallery items with real images
const ITEMS: GalleryItem[] = [
  // === EDUKASI ===
  {
    id: "g1",
    category: "edukasi",
    caption: "Edukasi konservasi penyu untuk pelajar",
    alt: "Edukasi konservasi penyu untuk pelajar di Pantai Batu Hiu",
    accent: "from-coral via-earth to-sand-dark",
    image: "/assets/images/galeri/edukasi-penyu.webp",
  },
  {
    id: "g2",
    category: "edukasi",
    caption: "Sesi pembelajaran tentang spesies penyu",
    alt: "Sesi pembelajaran tentang spesies penyu di Pantai Batu Hiu",
    accent: "from-ocean-deep via-ocean-mid to-seafoam",
    image: "/assets/images/galeri/edukasi-penyu2.webp",
  },
  {
    id: "g3",
    category: "edukasi",
    caption: "Siswa belajar siklus hidup penyu",
    alt: "Siswa mengamati siklus hidup penyu di pusat edukasi Batu Hiu",
    accent: "from-seafoam via-sand to-coral",
    image: "/assets/images/galeri/edukasi-penyu3.webp",
  },
  {
    id: "g12",
    category: "edukasi",
    caption: "Workshop konservasi penyu untuk generasi muda",
    alt: "Workshop konservasi penyu untuk generasi muda di Pantai Batu Hiu",
    accent: "from-ocean-light via-coral to-earth",
    image: "/assets/images/galeri/edukasi-penyu4.webp",
  },
  {
    id: "g13",
    category: "edukasi",
    caption: "Pengenalan habitat penyu kepada pengunjung",
    alt: "Pengenalan habitat penyu kepada pengunjung di Batu Hiu",
    accent: "from-seafoam via-ocean-mid to-sand-dark",
    image: "/assets/images/galeri/edukasi-penyu5.webp",
  },
  {
    id: "g14",
    category: "edukasi",
    caption: "Kelas lapangan tentang ekosistem pesisir",
    alt: "Kelas lapangan tentang ekosistem pesisir di Pantai Batu Hiu",
    accent: "from-coral via-seafoam to-ocean-deep",
    image: "/assets/images/galeri/edukasi-penyu6.webp",
  },
  {
    id: "g15",
    category: "edukasi",
    caption: "Interaksi edukatif dengan penyu",
    alt: "Interaksi edukatif dengan penyu di pusat konservasi Batu Hiu",
    accent: "from-earth via-ocean-light to-seafoam",
    image: "/assets/images/galeri/edukasi-penyu7.webp",
  },
  {
    id: "g10",
    category: "edukasi",
    caption: "Studi lapangan konservasi penyu",
    alt: "Studi lapangan konservasi penyu di Pantai Batu Hiu",
    accent: "from-ocean-mid via-seafoam to-coral",
    image: "/assets/images/galeri/studi.webp",
  },

  // === PELEPASAN TUKIK ===
  {
    id: "g4",
    category: "tukik",
    caption: "Pelepasan tukik penyu hijau di pagi hari",
    alt: "Pelepasan tukik penyu hijau di Pantai Batu Hiu Pangandaran, pagi hari",
    accent: "from-ocean-mid via-seafoam to-coral/70",
    image: "/assets/images/galeri/pelepasan-penyu2.webp",
  },
  {
    id: "g5",
    category: "tukik",
    caption: "Tukik kembali ke laut bebas",
    alt: "Tukik penyu berjalan ke laut di Pantai Batu Hiu",
    accent: "from-seafoam via-ocean-light to-ocean-deep",
    image: "/assets/images/galeri/pelepasan-penyu3.webp",
  },
  {
    id: "g16",
    category: "tukik",
    caption: "Momen pelepasan tukik bersama keluarga",
    alt: "Momen pelepasan tukik bersama keluarga di Pantai Batu Hiu",
    accent: "from-coral via-ocean-mid to-seafoam",
    image: "/assets/images/galeri/pelepasan-penyu4.webp",
  },
  {
    id: "g6",
    category: "tukik",
    caption: "Momen pelepasan tukik bersama relawan",
    alt: "Momen pelepasan tukik bersama relawan di Pantai Batu Hiu",
    accent: "from-coral via-seafoam to-ocean-deep",
    image: "/assets/images/galeri/pelepasan-tukik2.webp",
  },
  {
    id: "g11",
    category: "tukik",
    caption: "Program adopsi penyu",
    alt: "Program adopsi penyu di Pantai Batu Hiu",
    accent: "from-coral via-ocean-light to-seafoam",
    image: "/assets/images/galeri/adop-penyu.webp",
  },
  {
    id: "g17",
    category: "tukik",
    caption: "Sertifikat adopsi penyu untuk donatur",
    alt: "Sertifikat adopsi penyu untuk donatur di Batu Hiu Conservation",
    accent: "from-ocean-deep via-coral to-sand",
    image: "/assets/images/galeri/adop-penyu2.webp",
  },
  {
    id: "g20",
    category: "tukik",
    caption: "Tukik penyu siap dilepas ke laut",
    alt: "Tukik penyu yang siap dilepas ke laut di Pantai Batu Hiu",
    accent: "from-seafoam via-sand to-ocean-light",
    image: "/assets/images/galeri/tukik.webp",
  },
  {
    id: "g18",
    category: "tukik",
    caption: "Cara memegang penyu dengan benar",
    alt: "Panduan cara memegang penyu dengan benar dan aman",
    accent: "from-ocean-light via-seafoam to-coral",
    image: "/assets/images/galeri/pegang-penyu.webp",
  },
  {
    id: "g19",
    category: "tukik",
    caption: "Interaksi aman dengan penyu",
    alt: "Interaksi aman dengan penyu di pusat konservasi Batu Hiu",
    accent: "from-coral via-sand to-ocean-mid",
    image: "/assets/images/galeri/pegang-penyu2.webp",
  },
  {
    id: "g21",
    category: "tukik",
    caption: "Penemuan penyu di pesisir pantai",
    alt: "Penemuan penyu di pesisir Pantai Batu Hiu untuk konservasi",
    accent: "from-ocean-deep via-seafoam to-earth",
    image: "/assets/images/galeri/penemuan-penyu.webp",
  },
  {
    id: "g22",
    category: "tukik",
    caption: "Penyu dewasa di habitat alami",
    alt: "Penyu dewasa di habitat alami Pantai Batu Hiu",
    accent: "from-ocean-mid via-ocean-light to-seafoam",
    image: "/assets/images/galeri/penyu.webp",
  },

  // === PENANAMAN PANDAN ===
  {
    id: "g7",
    category: "pandan",
    caption: "Penanaman pandan di zona sarang",
    alt: "Penanaman pandan laut sebagai naungan sarang penyu",
    accent: "from-earth via-seafoam to-ocean-light",
    image: "/assets/images/galeri/penanaman-pandan.webp",
  },
  {
    id: "g8",
    category: "pandan",
    caption: "Gotong royong tanam pandan",
    alt: "Gotong royong warga menanam pandan laut di Pantai Batu Hiu",
    accent: "from-sand-dark via-earth to-coral",
    image: "/assets/images/galeri/penanaman-pandan2.webp",
  },
  {
    id: "g9",
    category: "pandan",
    caption: "Area pandan yang telah tumbuh",
    alt: "Area vegetasi pandan yang telah tumbuh di pesisir Batu Hiu",
    accent: "from-ocean-light via-seafoam to-sand",
    image: "/assets/images/galeri/penanaman-pandan3.webp",
  },
  {
    id: "g23",
    category: "pandan",
    caption: "Relawan menanam bibit pandan laut",
    alt: "Relawan menanam bibit pandan laut di Pantai Batu Hiu",
    accent: "from-seafoam via-earth to-sand-dark",
    image: "/assets/images/galeri/penanaman-pandan4.webp",
  },
  {
    id: "g24",
    category: "pandan",
    caption: "Restorasi habitat pesisir dengan pandan",
    alt: "Restorasi habitat pesisir dengan penanaman pandan di Batu Hiu",
    accent: "from-ocean-light via-sand to-earth",
    image: "/assets/images/galeri/penanaman-pandan5.webp",
  },
];

export function GalleryGrid() {
  const [active, setActive] = useState<CategoryId>("semua");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const filtered = useMemo(
    () =>
      active === "semua"
        ? ITEMS
        : ITEMS.filter((item) => item.category === active),
    [active],
  );

  const navigateLightbox = (dir: -1 | 1) => {
    if (!selected) return;
    const index = filtered.findIndex((i) => i.id === selected.id);
    const nextIndex = (index + dir + filtered.length) % filtered.length;
    setSelected(filtered[nextIndex]);
  };

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const isActive = active === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              className={cn(
                "text-ui relative inline-flex items-center gap-2 overflow-hidden rounded-full border px-5 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "border-ocean-deep bg-ocean-deep text-sand"
                  : "border-sand-dark/50 bg-transparent text-ocean-deep hover:bg-sand/60",
              )}
              aria-pressed={isActive}
            >
              {isActive ? (
                <motion.span
                  layoutId="gallery-active-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-ocean-deep"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 32,
                  }}
                />
              ) : null}
              <Icon className="h-4 w-4" />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.button
              type="button"
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelected(item)}
              className="group relative mb-4 block w-full overflow-hidden rounded-2xl break-inside-avoid text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
              aria-label={`Perbesar gambar: ${item.caption}`}
            >
              {/* Image with natural aspect ratio */}
              <div className="relative w-full">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={800}
                  height={600}
                  className="h-auto w-full"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              {/* Gradient overlay */}
              <div
                aria-hidden
                className={cn("absolute inset-0 bg-gradient-to-br opacity-40 mix-blend-multiply", item.accent)}
              />
              <div
                aria-hidden
                className="absolute inset-0 opacity-15 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 25% 25%, rgba(255,255,255,.35) 0, transparent 40%), radial-gradient(circle at 75% 75%, rgba(0,0,0,.3) 0, transparent 45%)",
                }}
              />
              <div className="absolute inset-0 bg-ocean-deep/0 transition-colors duration-500 group-hover:bg-ocean-deep/60" />
              <div className="absolute inset-0 flex translate-y-4 flex-col justify-end gap-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sand/90 text-ocean-deep">
                  <ZoomIn className="h-4 w-4" />
                </span>
                <p className="text-editorial text-sm text-sand">
                  {item.caption}
                </p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <LightboxModal
        item={selected}
        onClose={() => setSelected(null)}
        onNav={navigateLightbox}
      />
    </>
  );
}

type LightboxProps = {
  item: GalleryItem | null;
  onClose: () => void;
  onNav: (dir: -1 | 1) => void;
};

function LightboxModal({ item, onClose, onNav }: LightboxProps) {
  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ocean-deep/85 p-4 backdrop-blur-xl"
          role="dialog"
          aria-modal
          aria-label={item.caption}
          onClick={onClose}
          onKeyDown={(e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") onNav(1);
            if (e.key === "ArrowLeft") onNav(-1);
          }}
          tabIndex={-1}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-shell shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-ocean-deep text-sand hover:bg-coral"
              aria-label="Tutup"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="relative w-full">
              <Image
                src={item.image}
                alt={item.alt}
                width={1200}
                height={800}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              {/* Gradient overlay */}
              <div
                aria-hidden
                className={cn("absolute inset-0 bg-gradient-to-br opacity-30 mix-blend-multiply", item.accent)}
              />
              <div
                aria-hidden
                className="absolute inset-0 opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,.4) 0, transparent 50%)",
                }}
              />
            </div>
            <div className="flex items-center justify-between gap-6 p-6">
              <p className="text-editorial text-base text-ocean-deep">
                {item.caption}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => onNav(-1)}
                  className="text-ui rounded-full border border-ocean-deep/30 px-4 py-2 text-sm hover:bg-ocean-deep/5"
                >
                  Sebelumnya
                </button>
                <button
                  type="button"
                  onClick={() => onNav(1)}
                  className="text-ui rounded-full bg-ocean-deep px-4 py-2 text-sm text-sand hover:bg-ocean-mid"
                >
                  Selanjutnya
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
