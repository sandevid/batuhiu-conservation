"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowDown, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Typewriter } from "@/components/ui/Typewriter";
import { CONTACT } from "@/lib/constants";
import { staggerContainer, fadeUpVariants, EASE_OUT_CUBIC } from "@/lib/animations";

const TURTLE_IMAGES = [
  {
    src: "/assets/images/penyu-hijau.webp",
    alt: "Penyu Hijau di Pantai Batu Hiu",
    label: "Penyu Hijau",
  },
  {
    src: "/assets/images/penyu-sisik.webp",
    alt: "Penyu Sisik di Pantai Batu Hiu",
    label: "Penyu Sisik",
  },
  {
    src: "/assets/images/penyu-tempayan.webp",
    alt: "Penyu Tempayan di Pantai Batu Hiu",
    label: "Penyu Tempayan",
  },
  {
    src: "/assets/images/penyu-pipih.webp",
    alt: "Penyu Pipih di Pantai Batu Hiu",
    label: "Penyu Pipih",
  },
];

export function HeroSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TURTLE_IMAGES.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % TURTLE_IMAGES.length);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + TURTLE_IMAGES.length) % TURTLE_IMAGES.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[100svh] w-full items-end overflow-hidden bg-ocean-deep text-sand"
    >
      {/* Parallax background carousel */}
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="absolute inset-0 -z-10 scale-110"
      >
        {/* Carousel images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: EASE_OUT_CUBIC }}
            className="absolute inset-0"
          >
            <Image
              src={TURTLE_IMAGES[currentIndex].src}
              alt={TURTLE_IMAGES[currentIndex].alt}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority={currentIndex === 0}
              quality={90}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Gradient overlays for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-deep/70 via-ocean-deep/50 to-ocean-mid/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-ocean-deep/40 to-transparent" />
        
        {/* Soft wave pattern overlay */}
        <svg
          className="absolute inset-0 h-full w-full opacity-20 mix-blend-overlay"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="w" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#1A7A9E" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0A2A3B" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0, 1, 2, 3].map((i) => (
            <path
              key={i}
              d={`M0 ${500 + i * 60} Q 300 ${440 + i * 60} 600 ${500 + i * 60} T 1200 ${500 + i * 60} V 800 H 0 Z`}
              fill="url(#w)"
            />
          ))}
        </svg>
      </motion.div>

      {/* Bubble particles */}
      <div aria-hidden className="absolute inset-0 -z-0">
        {Array.from({ length: 14 }).map((_, i) => {
          const left = (i * 73) % 100;
          const size = 6 + ((i * 11) % 18);
          const duration = 10 + ((i * 7) % 14);
          const delay = (i * 1.3) % 8;
          return (
            <motion.span
              key={i}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "-10%", opacity: [0, 0.35, 0] }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute rounded-full bg-seafoam/30 blur-[1px]"
              style={{
                left: `${left}%`,
                width: size,
                height: size,
              }}
            />
          );
        })}
      </div>

      {/* Additional overlay for text readability */}
      <motion.div
        aria-hidden
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-ocean-deep/60 to-transparent"
      />

      {/* Carousel Controls */}
      <div className="absolute inset-0 z-20 hidden md:block">
        {/* Previous Button */}
        <motion.button
          whileHover={{ scale: 1.1, x: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={goToPrev}
          className="group absolute left-6 top-1/2 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full border border-sand/20 bg-ocean-deep/40 text-sand backdrop-blur-md transition-all hover:border-sand/40 hover:bg-ocean-deep/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-seafoam"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-0.5" />
        </motion.button>

        {/* Next Button */}
        <motion.button
          whileHover={{ scale: 1.1, x: 4 }}
          whileTap={{ scale: 0.95 }}
          onClick={goToNext}
          className="group absolute right-6 top-1/2 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full border border-sand/20 bg-ocean-deep/40 text-sand backdrop-blur-md transition-all hover:border-sand/40 hover:bg-ocean-deep/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-seafoam"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5" />
        </motion.button>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-28 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 md:flex">
        {TURTLE_IMAGES.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-seafoam"
            aria-label={`Go to ${image.label}`}
          >
            <motion.span
              className={`block h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-12 bg-seafoam"
                  : "w-2 bg-sand/40 group-hover:bg-sand/60"
              }`}
              layout
            />
            {/* Tooltip */}
            <span className="text-ui pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-ocean-deep/90 px-3 py-1.5 text-xs uppercase tracking-wider text-sand opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
              {image.label}
            </span>
          </button>
        ))}
      </div>

      {/* Current Image Label */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="absolute right-8 top-24 z-20 hidden rounded-2xl border border-sand/15 bg-ocean-deep/40 px-5 py-3 backdrop-blur-md md:block"
      >
        <p className="text-ui text-xs uppercase tracking-[0.24em] text-sand/70">
          Spesies
        </p>
        <p className="text-heading mt-1 text-lg text-sand">
          {TURTLE_IMAGES[currentIndex].label}
        </p>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container-editorial relative z-10 grid gap-10 pb-24 pt-40 md:pb-32 md:pt-48"
      >
        <motion.div variants={fadeUpVariants} className="inline-flex">
          <Badge variant="seafoam" icon={<Sparkles className="h-3.5 w-3.5" />}>
            Yayasan Raksa Bintana — Est. 2024
          </Badge>
        </motion.div>

        <div className="max-w-4xl">
          <motion.h1
            variants={fadeUpVariants}
            className="text-display text-balance text-[clamp(2.75rem,7vw,6.25rem)] text-sand"
          >
            Jaga Penyu,
            <br />
            <span className="italic text-seafoam">Jaga Lautan Kita</span>
          </motion.h1>
        </div>

        <motion.p
          variants={fadeUpVariants}
          className="text-editorial max-w-xl text-lg leading-relaxed text-sand/85 md:text-xl"
        >
          Bersama melestarikan{" "}
          <span className="font-medium text-seafoam">
            konservasi penyu Pantai Batu Hiu
          </span>
          , Pangandaran — tempat di mana setiap tukik adalah harapan untuk
          ekosistem laut Indonesia.
        </motion.p>

        <motion.div
          variants={fadeUpVariants}
          className="text-ui flex h-6 items-center gap-3 text-sm uppercase tracking-[0.28em] text-sand/70"
          aria-live="polite"
        >
          <span className="h-px w-6 bg-seafoam/70" aria-hidden />
          <Typewriter
            phrases={[
              "Edukasi Konservasi",
              "Pelepasan Tukik",
              "Penanaman Pandan",
              "Wisata Bertanggung Jawab",
            ]}
          />
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href={CONTACT.whatsappReservationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ui inline-flex h-14 items-center justify-center gap-2 rounded-full bg-coral px-9 text-lg font-medium text-sand shadow-lg shadow-coral/30 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-coral/90 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
          >
            Ikut Pelepasan Tukik
            <ArrowRight className="h-4 w-4" />
          </a>
          <Button as="link" href="/program" variant="ghost" size="lg">
            Pelajari Program
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUpVariants}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0"
        >
          <Link
            href="#statistik"
            className="text-ui group flex flex-col items-center gap-3 text-xs uppercase tracking-[0.3em] text-sand/70 hover:text-sand"
          >
            Scroll
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: EASE_OUT_CUBIC,
              }}
              className="grid h-10 w-10 place-items-center rounded-full border border-sand/30 group-hover:border-sand"
              aria-hidden
            >
              <ArrowDown className="h-4 w-4" />
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
