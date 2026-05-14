"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, BookOpen, Heart, Sprout } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  defaultViewport,
  fadeUpVariants,
  staggerContainer,
} from "@/lib/animations";

const PROGRAMS = [
  {
    title: "Edukasi Konservasi",
    description:
      "Pengenalan spesies penyu, musim bertelur, dan pentingnya menjaga habitat laut.",
    href: "/program#edukasi",
    icon: BookOpen,
    gradient: "from-ocean-deep via-ocean-mid to-ocean-light",
    image: "/assets/images/edukasi-konservasi.webp",
  },
  {
    title: "Penanaman Pandan",
    description:
      "Merestorasi pesisir dengan pandan laut — perlindungan alami sarang dan pencegah erosi.",
    href: "/program#pandan",
    icon: Sprout,
    gradient: "from-earth via-sand-dark to-coral/60",
    image: "/assets/images/penanaman-pandan.webp",
  },
  {
    title: "Pelepasan Tukik",
    description:
      "Momen emosional melepas tukik ke laut bebas, bersama panduan konservasi yang beretika.",
    href: "/program#tukik",
    icon: Heart,
    gradient: "from-coral via-coral/80 to-seafoam",
    image: "/assets/images/pelepasan-tukik.webp",
  },
];

export function ProgramPreview() {
  return (
    <section
      aria-label="Program utama"
      className="bg-sand-texture relative overflow-hidden"
    >
      <div className="container-editorial section-spacing grid gap-14">
        <SectionTitle
          eyebrow="Program Utama"
          title={
            <>
              Tiga pilar kerja di{" "}
              <span className="italic text-coral">Pantai Batu Hiu</span>.
            </>
          }
          description="Setiap program kami dirancang sebagai siklus — dari edukasi, perlindungan habitat, hingga pelepasan tukik ke laut bebas."
        />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid gap-6 md:grid-cols-3"
        >
          {PROGRAMS.map((program) => {
            const Icon = program.icon;
            return (
              <motion.li key={program.title} variants={fadeUpVariants}>
                <Link
                  href={program.href}
                  className="group relative block h-[28rem] overflow-hidden rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
                >
                  {/* Background Image */}
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div
                    aria-hidden
                    className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-60 mix-blend-multiply`}
                  />
                  {/* Pattern overlay */}
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-15 mix-blend-overlay"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35) 0, transparent 40%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.25) 0, transparent 50%)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-ocean-deep/20 to-transparent transition-opacity group-hover:from-ocean-deep/90" />
                  <div className="relative z-10 flex h-full flex-col justify-between p-8">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-sand/90 text-ocean-deep shadow-lg backdrop-blur transition-transform group-hover:-rotate-6">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-heading text-3xl text-sand md:text-4xl">
                        {program.title}
                      </h3>
                      <motion.p
                        initial={{ opacity: 0.7, y: 4 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="text-editorial max-w-xs text-sm leading-relaxed text-sand/85 transition-all duration-500 md:text-base"
                      >
                        {program.description}
                      </motion.p>
                      <span className="text-ui mt-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-seafoam">
                        Lihat Lebih
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
