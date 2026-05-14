"use client";

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { InstagramIcon } from "@/components/ui/BrandIcons";
import { INSTAGRAM_REELS, reelEmbedUrl } from "@/lib/constants";
import {
  defaultViewport,
  fadeUpVariants,
  staggerContainer,
} from "@/lib/animations";

type VideoCard = {
  title: string;
  description: string;
  reelUrl: string;
};

const VIDEOS: VideoCard[] = [
  {
    title: "Edukasi Konservasi Penyu",
    description:
      "Mengenal jenis penyu yang dijaga dan aktivitas konservasi di Pantai Batu Hiu.",
    reelUrl: INSTAGRAM_REELS.edukasi,
  },
  {
    title: "Cara Menuju Pantai Batu Hiu",
    description:
      "Panduan rute lengkap dan tips perjalanan ke Pantai Batu Hiu Pangandaran.",
    reelUrl: INSTAGRAM_REELS.rute,
  },
  {
    title: "Cara Memegang Penyu dengan Benar",
    description:
      "Tutorial resmi cara berinteraksi dengan penyu secara aman dan bertanggung jawab.",
    reelUrl: INSTAGRAM_REELS.pegangPenyu,
  },
];

export function VideoQRCards() {
  return (
    <motion.ul
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
    >
      {VIDEOS.map((v) => (
        <motion.li key={v.title} variants={fadeUpVariants}>
          <VideoCard {...v} />
        </motion.li>
      ))}
    </motion.ul>
  );
}

function VideoCard({ title, description, reelUrl }: VideoCard) {
  const embedUrl = reelEmbedUrl(reelUrl);

  return (
    <article className="group flex h-full flex-col gap-5 rounded-3xl border border-sand-dark/40 bg-sand/60 p-6 transition-all hover:-translate-y-1 hover:border-coral/40">
      <div className="flex items-center justify-between gap-3">
        <span className="text-ui inline-flex items-center gap-2 rounded-full bg-ocean-deep px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-sand">
          <InstagramIcon className="h-3.5 w-3.5" />
          Instagram Reel
        </span>
        <a
          href={reelUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="text-text-muted transition-colors hover:text-coral"
          aria-label={`Buka ${title} di Instagram`}
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      {/* Embedded Reel — autoplay on load */}
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-ocean-deep">
        <iframe
          src={embedUrl}
          title={`Instagram Reel: ${title}`}
          loading="lazy"
          allow="autoplay; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          scrolling="no"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-heading text-xl text-ocean-deep md:text-2xl">
          {title}
        </h3>
        <p className="text-editorial text-sm leading-relaxed text-text-secondary">
          {description}
        </p>
      </div>
    </article>
  );
}
