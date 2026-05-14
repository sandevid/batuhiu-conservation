"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, CalendarDays, HandCoins } from "lucide-react";
import { FloatingTurtle } from "@/components/ui/FloatingTurtle";
import { CONTACT } from "@/lib/constants";
import {
  defaultViewport,
  fadeUpVariants,
  staggerContainer,
} from "@/lib/animations";

export function CTASection() {
  return (
    <section
      aria-label="Ajakan aksi"
      className="bg-sand-texture relative overflow-hidden"
    >
      <div className="container-editorial section-spacing">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid gap-6 lg:grid-cols-2"
        >
          {/* Donasi */}
          <motion.div variants={fadeUpVariants}>
            <Link
              href="/donasi"
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-coral p-10 text-sand shadow-2xl shadow-coral/20 transition-all hover:-translate-y-1 hover:shadow-coral/40 md:p-14"
            >
              <div className="absolute -right-10 -top-10 text-sand/10">
                <HandCoins className="h-48 w-48" />
              </div>
              <div className="relative flex items-center gap-3">
                <span className="text-ui rounded-full bg-sand/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em]">
                  Donasi QRIS
                </span>
              </div>
              <div className="relative mt-12 flex flex-col gap-6">
                <h3 className="text-heading text-4xl md:text-5xl">
                  Setiap rupiah menjaga satu tukik tetap hidup.
                </h3>
                <p className="text-editorial max-w-md text-base text-sand/85">
                  Dukung operasional pemantauan sarang, edukasi pelajar, dan
                  pelepasan tukik melalui donasi QRIS.
                </p>
                <span className="text-ui inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em]">
                  Donasi Sekarang
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Reservasi */}
          <motion.div variants={fadeUpVariants}>
            <a
              href={CONTACT.whatsappReservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-ocean-mid p-10 text-sand shadow-2xl shadow-ocean-deep/30 transition-all hover:-translate-y-1 hover:bg-ocean-deep hover:shadow-ocean-deep/50 md:p-14"
            >
              <div className="absolute -right-8 -bottom-6 text-seafoam/20">
                <FloatingTurtle size={220} />
              </div>
              <div className="relative flex items-center gap-3">
                <span className="text-ui inline-flex items-center gap-2 rounded-full bg-seafoam/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-seafoam">
                  <CalendarDays className="h-3.5 w-3.5" /> Musim Mei · Juli · Oktober
                </span>
              </div>
              <div className="relative mt-12 flex flex-col gap-6">
                <h3 className="text-heading text-4xl md:text-5xl">
                  Jadilah bagian dari momen pelepasan tukik.
                </h3>
                <p className="text-editorial max-w-md text-base text-sand/80">
                  Reservasi festival pelepasan tukik di Pantai Batu Hiu dengan
                  satu pesan WhatsApp ke pemandu yayasan.
                </p>
                <span className="text-ui inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-seafoam">
                  Reservasi Sekarang
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
