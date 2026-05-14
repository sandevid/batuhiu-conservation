import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FloatingTurtle } from "@/components/ui/FloatingTurtle";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-ocean-deep text-sand">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(58,191,160,0.2),_transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute right-[8%] top-[20%] text-seafoam/40"
      >
        <FloatingTurtle size={220} />
      </div>

      <div className="container-editorial relative grid max-w-2xl gap-6 py-24 md:py-32">
        <span className="text-display text-9xl text-coral">404</span>
        <h1 className="text-display text-balance text-5xl leading-[1.05] md:text-6xl">
          Tersesat di <span className="italic text-seafoam">arus laut</span>.
        </h1>
        <p className="text-editorial max-w-xl text-lg leading-relaxed text-sand/85">
          Halaman yang anda cari sudah pindah ke kedalaman lain — atau tidak
          pernah ada. Mari kembali ke garis pantai.
        </p>
        <div>
          <Button as="link" href="/" variant="coral" size="lg">
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Beranda
          </Button>
        </div>
      </div>
    </section>
  );
}
