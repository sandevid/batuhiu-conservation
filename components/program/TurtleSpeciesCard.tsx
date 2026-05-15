"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { TURTLE_SPECIES } from "@/lib/constants";

const STATUS_COLORS: Record<string, string> = {
  CR: "bg-coral text-sand",
  EN: "bg-earth text-sand",
  VU: "bg-sand-dark text-ocean-deep",
  DD: "bg-ocean-mid text-sand",
};

export function TurtleSpeciesCards() {
  return (
    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {TURTLE_SPECIES.map((species) => (
        <TurtleCard key={species.id} species={species} />
      ))}
    </ul>
  );
}

type Species = (typeof TURTLE_SPECIES)[number];

function TurtleCard({ species }: { species: Species }) {
  const [flipped, setFlipped] = useState(false);
  const badgeClass = STATUS_COLORS[species.statusCode] ?? "bg-ocean-mid text-sand";

  return (
    <li>
      <motion.button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        className="group relative block h-[26rem] w-full [perspective:1500px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
        aria-pressed={flipped}
        aria-label={`Info spesies ${species.name}`}
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full [transform-style:preserve-3d]"
        >
          {/* Front */}
          <div className="absolute inset-0 flex flex-col gap-6 overflow-hidden rounded-3xl border border-sand-dark/40 bg-gradient-to-br from-ocean-deep via-ocean-mid to-ocean-light text-sand [backface-visibility:hidden]">
            {/* Background Image */}
            <Image
              src={species.image}
              alt={species.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
            {/* Gradient overlay for text readability */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ocean-deep/95 via-ocean-deep/40 to-ocean-deep/30"
            />
            
            <div className="relative z-10 flex h-full flex-col gap-6 p-7">
              <span
                className={cn(
                  "text-ui inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em]",
                  badgeClass,
                )}
              >
                <ShieldAlert className="h-3.5 w-3.5" />
                {species.status}
              </span>
              <div className="mt-auto flex flex-col gap-2">
                <h3 className="text-heading text-3xl text-sand">{species.name}</h3>
                <p className="text-editorial text-sm italic text-sand/70">
                  {species.scientific}
                </p>
                <p className="text-ui mt-4 text-[11px] uppercase tracking-[0.28em] text-coral">
                  Ketuk untuk detail →
                </p>
              </div>
            </div>
          </div>

          {/* Back */}
          <div className="absolute inset-0 flex flex-col gap-5 overflow-hidden rounded-3xl border border-sand-dark/40 bg-sand p-7 text-ocean-deep [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <h4 className="text-heading text-2xl text-ocean-deep">
              {species.name}
            </h4>
            <div className="flex flex-col gap-2">
              <h5 className="text-ui text-[11px] font-semibold uppercase tracking-[0.24em] text-coral">
                Apa yang kami lakukan
              </h5>
              <p className="text-editorial text-sm leading-relaxed text-text-secondary">
                {species.action}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-ui text-[11px] font-semibold uppercase tracking-[0.24em] text-seafoam">
                Mengapa penting
              </h5>
              <p className="text-editorial text-sm leading-relaxed text-text-secondary">
                {species.importance}
              </p>
            </div>
            <p className="text-ui mt-auto text-[11px] uppercase tracking-[0.28em] text-text-muted">
              ← Ketuk untuk balik
            </p>
          </div>
        </motion.div>
      </motion.button>
    </li>
  );
}

function TurtleSilhouette() {
  return (
    <svg width="64" height="64" viewBox="0 0 120 120" fill="currentColor" aria-hidden>
      <ellipse cx="60" cy="60" rx="32" ry="26" opacity="0.9" />
      <circle cx="94" cy="56" r="7" />
      <path d="M32 44 Q 22 34 18 42 Q 22 50 34 50" opacity="0.7" />
      <path d="M32 78 Q 22 88 18 80 Q 22 72 34 72" opacity="0.7" />
      <path d="M84 42 Q 92 32 88 26 Q 80 28 80 38" opacity="0.7" />
      <path d="M84 78 Q 92 86 88 92 Q 80 90 80 80" opacity="0.7" />
    </svg>
  );
}
