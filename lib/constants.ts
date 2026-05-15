/**
 * Shared constants for Batu Hiu Conservation.
 * Centralized site metadata, contact info, and static content.
 */

export const SITE = {
  name: "Batu Hiu Conservation",
  foundation: "Yayasan Raksa Bintana",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://batuhiu-conservation.vercel.app",
  locale: "id_ID",
  foundingYear: 2010,
  description:
    "Yayasan Raksa Bintana mengabdikan diri untuk konservasi penyu di Pantai Batu Hiu, Pangandaran sejak 1983. Fokus pada konservasi tiga spesies penyu: Lekang, Sisik, dan Hijau. Bergabunglah dalam program edukasi, pelepasan tukik, dan wisata konservasi.",
  tagline: "Jaga Penyu, Jaga Lautan Kita",
} as const;

export const CONTACT = {
  instagram: "penyu_pangandaran",
  instagramUrl: "https://www.instagram.com/penyu_pangandaran/",
  whatsappNumber: "6282316034923",
  whatsappReservationUrl: "https://wa.me/6282316034923?text=Halo%2C%20saya%20ingin%20reservasi%20pelepasan%20tukik%20di%20Pantai%20Batu%20Hiu",
  address: {
    street: "Pantai Batu Hiu",
    locality: "Pangandaran",
    region: "Jawa Barat",
    country: "ID",
  },
  operationalHours: "07.00 – 18.00 WIB",
  operationalDays: "Setiap Hari",
} as const;

export const INSTAGRAM_REELS = {
  edukasi: "https://www.instagram.com/reel/DX1EVzgKEYR/",
  rute: "https://www.instagram.com/reel/DX0n0BHqeRt/",
  pegangPenyu: "https://www.instagram.com/reel/DXyA6uRq4Vw/",
} as const;

/** Convert an Instagram reel URL to its embed URL. */
export function reelEmbedUrl(reelUrl: string): string {
  const match = reelUrl.match(/\/reel\/([^/?#]+)/);
  if (!match) return reelUrl;
  return `https://www.instagram.com/reel/${match[1]}/embed`;
}

export const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/galeri", label: "Galeri" },
  { href: "/program", label: "Program" },
  {
    href: "/informasi-wisata",
    label: "Informasi Wisata",
    children: [
      {
        href: "/informasi-wisata/jadwal",
        label: "Jadwal & Kalender",
        description: "Musim penyu bertelur, kawin, dan pelepasan tukik.",
      },
      {
        href: "/informasi-wisata/lokasi-tata-cara",
        label: "Lokasi & Tata Cara",
        description: "Rute ke Pantai Batu Hiu dan etika konservasi.",
      },
      {
        href: "/informasi-wisata/panduan",
        label: "Panduan Video",
        description: "Tutorial cara berkunjung dan memegang penyu.",
      },
    ],
  },
  { href: "/donasi", label: "Donasi" },
  { href: "/kontak", label: "Kontak" },
] as const;

export const TURTLE_SPECIES = [
  {
    id: "lekang",
    name: "Penyu Lekang",
    scientific: "Lepidochelys olivacea",
    status: "Rentan (VU)",
    statusCode: "VU",
    statusLabel: "Vulnerable",
    action: "Pemantauan sarang dan perlindungan habitat peneluran.",
    importance:
      "Spesies yang sering ditemukan di perairan Indonesia, indikator kesehatan ekosistem pesisir.",
    image: "/assets/images/penyu-lekang.webp",
  },
  {
    id: "sisik",
    name: "Penyu Sisik",
    scientific: "Eretmochelys imbricata",
    status: "Kritis (CR)",
    statusCode: "CR",
    statusLabel: "Critically Endangered",
    action: "Pemantauan sarang intensif, perlindungan habitat terumbu karang.",
    importance:
      "Menjaga kesehatan terumbu karang melalui pola makannya yang unik.",
    image: "/assets/images/penyu-sisik.webp",
  },
  {
    id: "hijau",
    name: "Penyu Hijau",
    scientific: "Chelonia mydas",
    status: "Terancam Punah (EN)",
    statusCode: "EN",
    statusLabel: "Endangered",
    action: "Pemantauan sarang, perlindungan induk saat bertelur.",
    importance: "Menjaga keseimbangan ekosistem padang lamun.",
    image: "/assets/images/penyu-hijau.webp",
  },
] as const;

export const CONSERVATION_CALENDAR = [
  { month: "Januari", label: "Normal", tag: null },
  { month: "Februari", label: "Normal", tag: null },
  { month: "Maret", label: "Normal", tag: null },
  { month: "April", label: "Normal", tag: null },
  {
    month: "Mei",
    label: "Musim Bertelur & Pelepasan Tukik",
    tag: "bertelur-pelepasan",
  },
  { month: "Juni", label: "Normal", tag: null },
  { month: "Juli", label: "Pelepasan Tukik", tag: "pelepasan" },
  { month: "Agustus", label: "Normal", tag: null },
  { month: "September", label: "Normal", tag: null },
  { month: "Oktober", label: "Musim Bertelur", tag: "bertelur" },
  { month: "November", label: "Normal", tag: null },
  { month: "Desember", label: "Musim Kawin Penyu", tag: "kawin" },
] as const;

export const STATISTICS = [
  {
    value: 4200,
    suffix: "+",
    label: "Tukik Dilepas",
    sub: "Sejak 2010",
    icon: "Egg",
  },
  {
    value: 3,
    suffix: " Spesies",
    label: "Penyu Terpantau",
    sub: "Lekang, Sisik, Hijau",
    icon: "Waves",
  },
  {
    value: 500,
    suffix: "+",
    label: "Relawan & Pengunjung",
    sub: "Per Tahun",
    icon: "Users",
  },
  {
    value: 200,
    suffix: " m²",
    label: "Pandan Ditanam",
    sub: "Habitat Terjaga",
    icon: "TreePine",
  },
] as const;

export const DONATION_TIERS = [
  {
    amount: "Rp 25.000",
    impact: "Membantu 1 sarang tukik terpantau selama semalam.",
  },
  {
    amount: "Rp 100.000",
    impact: "Mendukung operasional pemantauan selama 1 minggu.",
  },
  {
    amount: "Rp 500.000",
    impact: "Mendanai 1 program edukasi untuk 20 pelajar.",
  },
] as const;

export const FEEDBACK_TYPES = [
  "Komentar",
  "Saran",
  "Pertanyaan",
  "Kolaborasi",
] as const;

export type FeedbackType = (typeof FEEDBACK_TYPES)[number];
