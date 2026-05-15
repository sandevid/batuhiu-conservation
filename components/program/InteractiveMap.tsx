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
    x: "28%",
    y: "68%",
    title: "Area Bertelur Penyu",
    description:
      "Penyu mendarat di pasir atas pantai saat malam untuk bertelur. Di Pantai Batu Hiu, musim peneluran terjadi terutama pada Mei dan Oktober.",
    icon: Egg,
  },
  {
    id: "turtle-species",
    x: "55%",
    y: "32%",
    title: "Spesies Penyu di Batu Hiu",
    description:
      "Tiga spesies terpantau: Penyu Lekang, Penyu Sisik, dan Penyu Hijau. Ketiganya berperan penting menjaga ekosistem laut.",
    icon: Fish,
  },
  {
    id: "pandan-zone",
    x: "75%",
    y: "72%",
    title: "Zona Pandan Laut",
    description:
      "Pandan ditanam sebagai naungan alami sarang telur, sekaligus pencegah abrasi dan indikator ekosistem pesisir yang sehat.",
    icon: Sprout,
  },
  {
    id: "ocean-current",
    x: "45%",
    y: "18%",
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
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-sand-dark/50 bg-gradient-to-b from-sky-200 via-ocean-light to-ocean-deep shadow-xl">
        {/* Enhanced illustrated map */}
        <svg
          aria-hidden
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Ocean gradient - deeper blue */}
            <linearGradient id="oceanDeep" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#87CEEB" />
              <stop offset="30%" stopColor="#4A9FBF" />
              <stop offset="60%" stopColor="#1A7A9E" />
              <stop offset="100%" stopColor="#0A4A5C" />
            </linearGradient>
            
            {/* Beach sand gradient */}
            <linearGradient id="beachSand" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#E8D4B8" />
              <stop offset="50%" stopColor="#D4B896" />
              <stop offset="100%" stopColor="#C4A574" />
            </linearGradient>
            
            {/* Shallow water */}
            <linearGradient id="shallowWater" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#7DD3C0" />
              <stop offset="100%" stopColor="#4A9FBF" />
            </linearGradient>

            {/* Wave pattern */}
            <pattern id="wavePattern" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 Q 25 5 50 10 T 100 10" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none"/>
            </pattern>

            {/* Vegetation pattern */}
            <pattern id="vegetation" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="8" cy="8" r="3" fill="#3ABFA0" opacity="0.6"/>
              <circle cx="20" cy="15" r="2.5" fill="#2D8B6F" opacity="0.5"/>
              <circle cx="15" cy="22" r="2" fill="#3ABFA0" opacity="0.4"/>
            </pattern>
          </defs>

          {/* Deep ocean */}
          <rect width="800" height="380" fill="url(#oceanDeep)" />
          
          {/* Wave patterns in ocean */}
          <rect width="800" height="380" fill="url(#wavePattern)" opacity="0.3"/>
          
          {/* Animated wave lines */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <g key={i}>
              <path
                d={`M0 ${180 + i * 35} Q 200 ${165 + i * 35} 400 ${180 + i * 35} T 800 ${180 + i * 35}`}
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="2"
                fill="none"
              >
                <animate
                  attributeName="d"
                  dur={`${8 + i * 2}s`}
                  repeatCount="indefinite"
                  values={`
                    M0 ${180 + i * 35} Q 200 ${165 + i * 35} 400 ${180 + i * 35} T 800 ${180 + i * 35};
                    M0 ${180 + i * 35} Q 200 ${195 + i * 35} 400 ${180 + i * 35} T 800 ${180 + i * 35};
                    M0 ${180 + i * 35} Q 200 ${165 + i * 35} 400 ${180 + i * 35} T 800 ${180 + i * 35}
                  `}
                />
              </path>
            </g>
          ))}

          {/* Shallow water zone */}
          <path
            d="M0 380 Q 150 360 300 380 T 600 380 T 800 380 L 800 440 Q 600 420 400 440 T 0 440 Z"
            fill="url(#shallowWater)"
            opacity="0.7"
          />

          {/* Beach/Shore */}
          <path
            d="M0 440 Q 200 420 400 440 T 800 440 L 800 600 L 0 600 Z"
            fill="url(#beachSand)"
          />

          {/* Beach texture lines */}
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <path
              key={`beach-${i}`}
              d={`M0 ${460 + i * 20} Q 200 ${455 + i * 20} 400 ${460 + i * 20} T 800 ${460 + i * 20}`}
              stroke="rgba(180,150,100,0.15)"
              strokeWidth="1"
              fill="none"
            />
          ))}

          {/* Batu Hiu (Shark Rocks) - iconic rock formations */}
          <g opacity="0.8">
            {/* Main large rock */}
            <ellipse cx="180" cy="500" rx="35" ry="28" fill="#2A2A2A" />
            <ellipse cx="180" cy="495" rx="32" ry="25" fill="#3A3A3A" />
            <ellipse cx="180" cy="490" rx="28" ry="20" fill="#4A4A4A" />
            
            {/* Medium rocks */}
            <ellipse cx="240" cy="515" rx="22" ry="18" fill="#2A2A2A" />
            <ellipse cx="240" cy="512" rx="20" ry="16" fill="#3A3A3A" />
            
            <ellipse cx="130" cy="520" rx="18" ry="15" fill="#2A2A2A" />
            <ellipse cx="130" cy="518" rx="16" ry="13" fill="#3A3A3A" />
            
            {/* Small rocks scattered */}
            <circle cx="280" cy="530" r="10" fill="#3A3A3A" />
            <circle cx="320" cy="525" r="8" fill="#3A3A3A" />
            <circle cx="90" cy="535" r="12" fill="#3A3A3A" />
          </g>

          {/* Pandan vegetation zone */}
          <g>
            {/* Vegetation clusters */}
            <rect x="550" y="480" width="180" height="100" fill="url(#vegetation)" opacity="0.8" rx="10"/>
            
            {/* Individual pandan plants */}
            {[
              { x: 580, y: 510 }, { x: 620, y: 500 }, { x: 660, y: 520 },
              { x: 700, y: 505 }, { x: 640, y: 540 }, { x: 600, y: 555 },
              { x: 680, y: 550 }, { x: 720, y: 530 }
            ].map((pos, i) => (
              <g key={`plant-${i}`}>
                {/* Pandan leaves */}
                <path
                  d={`M${pos.x} ${pos.y} Q${pos.x - 8} ${pos.y - 12} ${pos.x - 4} ${pos.y - 18}`}
                  stroke="#2D8B6F"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d={`M${pos.x} ${pos.y} Q${pos.x} ${pos.y - 14} ${pos.x + 2} ${pos.y - 20}`}
                  stroke="#3ABFA0"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d={`M${pos.x} ${pos.y} Q${pos.x + 8} ${pos.y - 12} ${pos.x + 6} ${pos.y - 18}`}
                  stroke="#2D8B6F"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </g>
            ))}
          </g>

          {/* Turtle nesting area indicator */}
          <g opacity="0.6">
            <ellipse cx="220" cy="550" rx="60" ry="35" fill="none" stroke="#E8935A" strokeWidth="2" strokeDasharray="5,5">
              <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
            </ellipse>
            <text x="220" y="555" textAnchor="middle" fill="#E8935A" fontSize="11" fontWeight="600">
              NESTING ZONE
            </text>
          </g>

          {/* Ocean current arrows */}
          <g opacity="0.5">
            {[0, 1, 2].map((i) => (
              <g key={`current-${i}`}>
                <path
                  d={`M${100 + i * 200} 120 L${140 + i * 200} 140`}
                  stroke="#F5E6D3"
                  strokeWidth="3"
                  strokeLinecap="round"
                  markerEnd="url(#arrowhead)"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;0.8;0.3"
                    dur="2s"
                    begin={`${i * 0.5}s`}
                    repeatCount="indefinite"
                  />
                </path>
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
                    <polygon points="0 0, 6 3, 0 6" fill="#F5E6D3" />
                  </marker>
                </defs>
              </g>
            ))}
          </g>

          {/* Small fish silhouettes in water */}
          {[
            { x: 150, y: 250, delay: 0 },
            { x: 400, y: 200, delay: 1 },
            { x: 650, y: 280, delay: 2 },
            { x: 300, y: 320, delay: 1.5 }
          ].map((fish, i) => (
            <g key={`fish-${i}`} opacity="0.3">
              <ellipse cx={fish.x} cy={fish.y} rx="8" ry="3" fill="#F5E6D3">
                <animate
                  attributeName="cx"
                  values={`${fish.x};${fish.x + 50};${fish.x}`}
                  dur="8s"
                  begin={`${fish.delay}s`}
                  repeatCount="indefinite"
                />
              </ellipse>
              <path d={`M${fish.x - 8} ${fish.y} L${fish.x - 12} ${fish.y - 2} L${fish.x - 12} ${fish.y + 2} Z`} fill="#F5E6D3">
                <animate
                  attributeName="d"
                  values={`M${fish.x - 8} ${fish.y} L${fish.x - 12} ${fish.y - 2} L${fish.x - 12} ${fish.y + 2} Z;M${fish.x + 42} ${fish.y} L${fish.x + 38} ${fish.y - 2} L${fish.x + 38} ${fish.y + 2} Z;M${fish.x - 8} ${fish.y} L${fish.x - 12} ${fish.y - 2} L${fish.x - 12} ${fish.y + 2} Z`}
                  dur="8s"
                  begin={`${fish.delay}s`}
                  repeatCount="indefinite"
                />
              </path>
            </g>
          ))}

          {/* Compass rose */}
          <g transform="translate(730, 50)" opacity="0.6">
            <circle cx="0" cy="0" r="25" fill="none" stroke="#F5E6D3" strokeWidth="1.5"/>
            <text x="0" y="-30" textAnchor="middle" fill="#F5E6D3" fontSize="12" fontWeight="700">U</text>
            <text x="0" y="38" textAnchor="middle" fill="#F5E6D3" fontSize="10">S</text>
            <text x="-32" y="5" textAnchor="middle" fill="#F5E6D3" fontSize="10">B</text>
            <text x="32" y="5" textAnchor="middle" fill="#F5E6D3" fontSize="10">T</text>
            <path d="M0 -20 L-3 0 L0 -5 L3 0 Z" fill="#E8935A"/>
            <path d="M0 20 L-3 0 L0 5 L3 0 Z" fill="#F5E6D3"/>
          </g>

          {/* Legend */}
          <g transform="translate(20, 20)">
            <rect width="140" height="85" rx="8" fill="rgba(10,74,92,0.85)" stroke="#F5E6D3" strokeWidth="1"/>
            <text x="10" y="18" fill="#F5E6D3" fontSize="11" fontWeight="700">LEGENDA</text>
            <circle cx="18" cy="35" r="4" fill="#3ABFA0"/>
            <text x="28" y="38" fill="#F5E6D3" fontSize="9">Zona Pandan</text>
            <circle cx="18" cy="52" r="4" fill="#3A3A3A"/>
            <text x="28" y="55" fill="#F5E6D3" fontSize="9">Batu Hiu</text>
            <circle cx="18" cy="69" r="4" fill="#E8935A"/>
            <text x="28" y="72" fill="#F5E6D3" fontSize="9">Area Bertelur</text>
          </g>
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
