"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Egg, Fish, Sprout, Waves } from "lucide-react";
import { cn } from "@/lib/utils";

type Hotspot = {
  id: string;
  x: string;
  y: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

const HOTSPOTS: Hotspot[] = [
  {
    id: "turtle-nesting",
    x: "30%",
    y: "62%",
    title: "Area Bertelur Penyu",
    description:
      "Penyu mendarat di pasir atas pantai saat malam untuk bertelur. Di Pantai Batu Hiu, musim peneluran terjadi terutama pada Mei dan Oktober.",
    icon: Egg,
  },
  {
    id: "turtle-species",
    x: "62%",
    y: "38%",
    title: "Spesies Penyu di Batu Hiu",
    description:
      "Empat spesies terpantau: Penyu Sisik, Penyu Hijau, Penyu Tempayan, dan Penyu Pipih. Ketiganya berperan penting menjaga ekosistem laut.",
    icon: Fish,
  },
  {
    id: "pandan-zone",
    x: "78%",
    y: "70%",
    title: "Zona Pandan Laut",
    description:
      "Pandan ditanam sebagai naungan alami sarang telur, sekaligus pencegah abrasi dan indikator ekosistem pesisir yang sehat.",
    icon: Sprout,
  },
  {
    id: "ocean-current",
    x: "48%",
    y: "20%",
    title: "Arus Laut Selatan",
    description:
      "Arus kuat Samudera Hindia menjadi jalur tukik setelah dilepas. Pemandu memilih waktu pelepasan untuk memaksimalkan peluang bertahan hidup.",
    icon: Waves,
  },
];

export function InteractiveMap() {
  const [activeId, setActiveId] = useState<string>(HOTSPOTS[0].id);
  const active = HOTSPOTS.find((h) => h.id === activeId) ?? HOTSPOTS[0];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
      {/* Map */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-sand-dark/50 bg-gradient-to-b from-ocean-light via-ocean-mid to-ocean-deep">
        {/* Stylized beach silhouette */}
        <svg
          aria-hidden
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="beach" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#1A7A9E" />
              <stop offset="55%" stopColor="#0E4D6B" />
              <stop offset="100%" stopColor="#F5EDD6" />
            </linearGradient>
            <linearGradient id="sand" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#D4B896" />
              <stop offset="100%" stopColor="#F5EDD6" />
            </linearGradient>
          </defs>
          <rect width="800" height="420" fill="url(#beach)" />
          <path
            d="M0 420 Q 200 380 400 420 T 800 420 L 800 600 L 0 600 Z"
            fill="url(#sand)"
          />
          {/* Wave lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d={`M0 ${260 + i * 28} Q 200 ${240 + i * 28} 400 ${260 + i * 28} T 800 ${260 + i * 28}`}
              stroke="rgba(245,237,214,0.2)"
              strokeWidth="1.5"
              fill="none"
            />
          ))}
          {/* Beach rocks (Batu Hiu) */}
          <circle cx="150" cy="480" r="22" fill="#1A1A1A" opacity="0.4" />
          <circle cx="200" cy="500" r="16" fill="#1A1A1A" opacity="0.3" />
          <circle cx="640" cy="470" r="28" fill="#1A1A1A" opacity="0.45" />
          {/* Vegetation dots */}
          <circle cx="580" cy="520" r="6" fill="#3ABFA0" opacity="0.7" />
          <circle cx="600" cy="540" r="5" fill="#3ABFA0" opacity="0.7" />
          <circle cx="560" cy="545" r="7" fill="#3ABFA0" opacity="0.7" />
        </svg>

        {/* Hotspots */}
        {HOTSPOTS.map((h) => {
          const isActive = h.id === active.id;
          return (
            <button
              type="button"
              key={h.id}
              onClick={() => setActiveId(h.id)}
              onMouseEnter={() => setActiveId(h.id)}
              onFocus={() => setActiveId(h.id)}
              className="absolute -translate-x-1/2 -translate-y-1/2 focus-visible:outline-none"
              style={{ left: h.x, top: h.y }}
              aria-label={`Pindah ke hotspot: ${h.title}`}
              aria-pressed={isActive}
            >
              <span className="relative grid place-items-center">
                {/* Pulsing rings */}
                <span
                  aria-hidden
                  className={cn(
                    "absolute h-12 w-12 animate-[pulseSlow_2.4s_ease-in-out_infinite] rounded-full",
                    isActive ? "bg-coral/30" : "bg-sand/25",
                  )}
                />
                <span
                  aria-hidden
                  className={cn(
                    "absolute h-8 w-8 animate-[pulseSlow_2.4s_ease-in-out_infinite] rounded-full",
                    isActive ? "bg-coral/50" : "bg-sand/40",
                  )}
                  style={{ animationDelay: "0.3s" }}
                />
                <span
                  className={cn(
                    "relative grid h-10 w-10 place-items-center rounded-full transition-all duration-300",
                    isActive
                      ? "scale-110 bg-coral text-sand shadow-lg"
                      : "bg-sand text-ocean-deep",
                  )}
                >
                  <h.icon className="h-4 w-4" />
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Narrative panel */}
      <div className="relative flex flex-col justify-center rounded-3xl border border-sand-dark/40 bg-sand/60 p-8 md:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col gap-5"
          >
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-ocean-deep text-sand">
              <active.icon className="h-6 w-6" />
            </div>
            <h3 className="text-heading text-3xl text-ocean-deep md:text-4xl">
              {active.title}
            </h3>
            <p className="text-editorial text-base leading-relaxed text-text-secondary md:text-lg">
              {active.description}
            </p>
            <ul className="text-ui mt-3 flex flex-wrap gap-2 text-xs">
              {HOTSPOTS.map((h) => (
                <li key={h.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(h.id)}
                    className={cn(
                      "rounded-full border px-3 py-1.5 uppercase tracking-[0.2em] transition-colors",
                      h.id === active.id
                        ? "border-coral bg-coral text-sand"
                        : "border-sand-dark/50 text-ocean-deep hover:bg-sand",
                    )}
                  >
                    {h.title}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
