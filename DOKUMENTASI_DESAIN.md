# DOKUMENTASI DESAIN SISTEM
## Website Batu Hiu Conservation — Yayasan Raksa Bintana

### Informasi Proyek
- **Nama Proyek:** Batu Hiu Conservation Website
- **Organisasi:** Yayasan Raksa Bintana
- **URL:** https://batuhiu-conservation.vercel.app
- **Bahasa:** Indonesia (id-ID)
- **Tahun Berdiri:** 2024
- **Tagline:** "Jaga Penyu, Jaga Lautan Kita"

---

## BAGIAN 1: PALET WARNA

### 1.1 Warna Primer — Deep Ocean
Terinspirasi dari kedalaman laut Indonesia, palet primer menggunakan gradasi biru tua yang dalam dan kuat.

| Nama Token | Hex Code | CSS Variable | Penggunaan |
|---|---|---|---|
| Ocean Deep | #0A2A3B | --color-ocean-deep | Background utama, navbar, footer, tombol primer |
| Ocean Mid | #0E4D6B | --color-ocean-mid | Hover state, gradient tengah, aksen section |
| Ocean Light | #1A7A9E | --color-ocean-light | Highlight, scrollbar hover, elemen interaktif |

### 1.2 Warna Sekunder — Sand & Earth
Terinspirasi dari pasir pantai dan tanah pesisir, memberikan kesan hangat dan alami.

| Nama Token | Hex Code | CSS Variable | Penggunaan |
|---|---|---|---|
| Sand | #F5EDD6 | --color-sand | Teks pada background gelap, background card |
| Sand Dark | #D4B896 | --color-sand-dark | Border, divider, scrollbar thumb |
| Earth | #8B6914 | --color-earth | Teks badge sand, aksen earthy |

### 1.3 Warna Aksen — Life
Warna-warna yang merepresentasikan kehidupan laut dan ekosistem pesisir.

| Nama Token | Hex Code | CSS Variable | Penggunaan |
|---|---|---|---|
| Coral | #E85D3A | --color-coral | CTA button, active indicator navbar, aksen penting |
| Seafoam | #3ABFA0 | --color-seafoam | Badge, highlight teks, ikon informasi, carousel indicator |
| Shell | #F9F4EE | --color-shell | Background halaman utama, card background |

### 1.4 Warna Teks

| Nama Token | Hex Code | CSS Variable | Penggunaan |
|---|---|---|---|
| Text Primary | #1A1A1A | --color-text-primary | Teks utama pada background terang |
| Text Secondary | #4A4A4A | --color-text-secondary | Teks deskripsi, subtitle |
| Text Inverse | #F5EDD6 | --color-text-inverse | Teks pada background gelap |
| Text Muted | #8A8A8A | --color-text-muted | Placeholder, teks tidak aktif |

### 1.5 Gradien yang Digunakan

**Ocean Gradient:**
```css
background: linear-gradient(180deg, #0A2A3B 0%, #0E4D6B 100%);
```
Digunakan pada: Footer, Hero overlay, section gelap

**Sand Gradient:**
```css
background: linear-gradient(180deg, #F9F4EE 0%, #F5EDD6 100%);
```
Digunakan pada: Section terang, card background

**Hero Overlay:**
```css
background: linear-gradient(to bottom right, rgba(10,42,59,0.70), rgba(10,42,59,0.50), rgba(14,77,107,0.60))
background: linear-gradient(to top, #0A2A3B, rgba(10,42,59,0.40), transparent)
```

### 1.6 Filosofi Warna
Palet warna dirancang dengan konsep **"Organic Coastal Editorial"** — menggabungkan estetika editorial majalah alam dengan nuansa pesisir Indonesia. Warna biru tua (ocean) merepresentasikan kedalaman dan kepercayaan, sementara coral dan seafoam merepresentasikan kehidupan dan harapan.

---

## BAGIAN 2: TIPOGRAFI

### 2.1 Sistem Font — 4 Typeface

Website menggunakan sistem tipografi berlapis 4 font dari Google Fonts, masing-masing dengan peran yang berbeda.

---

#### FONT 1: Playfair Display
**Peran:** Display / Hero Typography

| Properti | Nilai |
|---|---|
| Nama Font | Playfair Display |
| Sumber | Google Fonts |
| Klasifikasi | Serif — Transitional |
| CSS Variable | --font-playfair |
| CSS Class | .text-display |
| Subset | Latin |
| Display | swap |

**Karakteristik:**
- Serif klasik dengan kontras tinggi antara stroke tebal dan tipis
- Cocok untuk headline besar dan display text
- Memberikan kesan editorial, elegan, dan premium
- Letter-spacing: -0.02em (sedikit rapat untuk kesan modern)
- Line-height: 1.05 (sangat rapat untuk display besar)

**Penggunaan di Website:**
- Hero section: "Jaga Penyu, Jaga Lautan Kita" (ukuran clamp(2.75rem, 7vw, 6.25rem))
- Heading utama setiap halaman
- Section title besar

**Contoh Ukuran:**
```css
font-family: Playfair Display, Georgia, serif;
font-weight: 500;
letter-spacing: -0.02em;
line-height: 1.05;
font-size: clamp(2.75rem, 7vw, 6.25rem); /* Hero */
```

---

#### FONT 2: Cormorant Garamond
**Peran:** Heading / Section Title Typography

| Properti | Nilai |
|---|---|
| Nama Font | Cormorant Garamond |
| Sumber | Google Fonts |
| Klasifikasi | Serif — Old Style |
| CSS Variable | --font-cormorant |
| CSS Class | .text-heading |
| Weight yang Digunakan | 300, 400, 500, 600 |
| Subset | Latin |
| Display | swap |

**Karakteristik:**
- Serif klasik bergaya Garamond dengan proporsi elegan
- Kontras stroke yang indah, cocok untuk heading medium
- Memberikan kesan akademis, terpercaya, dan berkarakter
- Letter-spacing: -0.01em
- Line-height: 1.15

**Penggunaan di Website:**
- Section headings (h2, h3): ukuran 4xl–6xl (2.25rem–3.75rem)
- Card titles
- Sub-heading halaman

**Contoh Ukuran:**
```css
font-family: Cormorant Garamond, Georgia, serif;
font-weight: 500;
letter-spacing: -0.01em;
line-height: 1.15;
font-size: clamp(2.25rem, 5vw, 3.75rem); /* Section heading */
```

---

#### FONT 3: Lora
**Peran:** Body / Editorial Typography (Font Utama)

| Properti | Nilai |
|---|---|
| Nama Font | Lora |
| Sumber | Google Fonts |
| Klasifikasi | Serif — Contemporary |
| CSS Variable | --font-lora |
| CSS Class | .text-editorial |
| Subset | Latin |
| Display | swap |

**Karakteristik:**
- Serif kontemporer yang sangat readable untuk body text
- Dirancang khusus untuk layar digital
- Memberikan kesan hangat, natural, dan mudah dibaca
- Font default untuk seluruh body text website
- Font-size: 1.0625rem (17px)
- Line-height: 1.7 (longgar untuk keterbacaan)

**Penggunaan di Website:**
- Seluruh body text / paragraf
- Deskripsi program dan konten
- Footer text
- Card description

**Contoh Ukuran:**
```css
font-family: Lora, Georgia, serif;
font-size: 1.0625rem; /* 17px - body default */
line-height: 1.7;
/* Atau untuk artikel */
font-size: 1.125rem; /* 18px */
line-height: 1.8;
```

---

#### FONT 4: DM Sans
**Peran:** UI / Interface Typography

| Properti | Nilai |
|---|---|
| Nama Font | DM Sans |
| Sumber | Google Fonts |
| Klasifikasi | Sans-serif — Geometric |
| CSS Variable | --font-dm-sans |
| CSS Class | .text-ui |
| Subset | Latin |
| Display | swap |

**Karakteristik:**
- Sans-serif geometris yang bersih dan modern
- Sangat readable pada ukuran kecil (label, badge, navigasi)
- Memberikan kesan modern, bersih, dan profesional
- Letter-spacing: 0.02em (sedikit lebar untuk keterbacaan UI)
- Digunakan untuk semua elemen interface

**Penggunaan di Website:**
- Navbar links
- Button text
- Badge labels
- Form labels
- Eyebrow text (uppercase tracking lebar)
- Footer navigation
- Metadata (tanggal, kategori)

**Contoh Ukuran:**
```css
font-family: DM Sans, system-ui, sans-serif;
letter-spacing: 0.02em;
/* Navbar */
font-size: 0.875rem; /* 14px */
font-weight: 500;
/* Button */
font-size: 1rem; /* 16px */
font-weight: 500;
/* Badge/Eyebrow */
font-size: 0.75rem; /* 12px */
font-weight: 600;
letter-spacing: 0.28em;
text-transform: uppercase;
```

---

### 2.2 Hierarki Tipografi Lengkap

| Level | Font | Size | Weight | Line Height | Letter Spacing | Penggunaan |
|---|---|---|---|---|---|---|
| Display XL | Playfair Display | clamp(2.75rem, 7vw, 6.25rem) | 500 | 1.05 | -0.02em | Hero headline |
| Heading 1 | Cormorant Garamond | clamp(2.25rem, 5vw, 3.75rem) | 500 | 1.1 | -0.01em | Page title |
| Heading 2 | Cormorant Garamond | 2.25rem–3rem | 500 | 1.15 | -0.01em | Section title |
| Heading 3 | Cormorant Garamond | 1.5rem–2rem | 500 | 1.2 | 0 | Card title |
| Body Large | Lora | 1.25rem (20px) | 400 | 1.7 | 0 | Lead paragraph |
| Body Default | Lora | 1.0625rem (17px) | 400 | 1.7 | 0 | Body text |
| Body Small | Lora | 0.875rem (14px) | 400 | 1.6 | 0 | Caption, footnote |
| UI Default | DM Sans | 1rem (16px) | 500 | 1.5 | 0.02em | Button, nav |
| UI Small | DM Sans | 0.875rem (14px) | 500 | 1.4 | 0.02em | Label, badge |
| UI XSmall | DM Sans | 0.75rem (12px) | 600 | 1.3 | 0.28em | Eyebrow uppercase |

### 2.3 Filosofi Tipografi
Sistem tipografi menggunakan pendekatan **"Editorial Contrast"** — memadukan serif klasik (Playfair, Cormorant, Lora) untuk konten dan sans-serif modern (DM Sans) untuk interface. Kontras ini menciptakan hierarki visual yang jelas sekaligus memberikan karakter editorial yang kuat, mirip dengan majalah alam atau jurnal konservasi premium.

---

## BAGIAN 3: KOMPONEN UI

### 3.1 Button Component
5 varian button dengan sistem rounded-full (pill shape):

| Varian | Background | Teks | Shadow | Penggunaan |
|---|---|---|---|---|
| primary | #0A2A3B (ocean-deep) | #F5EDD6 (sand) | shadow-ocean-deep/20 | Aksi utama |
| coral | #E85D3A (coral) | #F5EDD6 (sand) | shadow-coral/30 | CTA penting (Reservasi, Donasi) |
| secondary | #F5EDD6 (sand) | #0A2A3B (ocean-deep) | shadow-sm | Aksi sekunder |
| ghost | Transparan | #F5EDD6 (sand) | Tidak ada | Pada background gelap |
| outline | Transparan | #0A2A3B (ocean-deep) | Tidak ada | Pada background terang |

**Ukuran Button:**

| Size | Height | Padding X | Font Size |
|---|---|---|---|
| sm | 40px (h-10) | 20px (px-5) | 14px (text-sm) |
| md | 48px (h-12) | 28px (px-7) | 16px (text-base) |
| lg | 56px (h-14) | 36px (px-9) | 18px (text-lg) |

**Efek Interaksi:**
- Hover: translateY(-2px) + shadow lebih besar
- Transition: 300ms ease-out
- Focus: outline coral 2px offset 4px

### 3.2 Badge Component
5 varian badge dengan rounded-full:

| Varian | Background | Border | Teks | Penggunaan |
|---|---|---|---|---|
| default | shell/70 + backdrop-blur | sand-dark/40 | ocean-deep | Badge umum |
| seafoam | seafoam/15 | seafoam/40 | seafoam | Status aktif, highlight |
| coral | coral/15 | coral/40 | coral | Peringatan, penting |
| sand | sand/70 | sand-dark/50 | earth | Kategori natural |
| ocean | ocean-deep/80 | ocean-light/40 | sand | Badge pada background terang |

**Spesifikasi Badge:**
- Font: DM Sans
- Size: 12px (text-xs)
- Weight: 600 (font-medium)
- Letter-spacing: 0.14em
- Text-transform: uppercase
- Padding: 6px 16px (py-1.5 px-4)
- Border-radius: 9999px (rounded-full)

### 3.3 Navbar
- **Posisi:** Fixed top, full width
- **Height:** 80px (h-20)
- **Behavior:** Transparan saat di atas, berubah menjadi ocean-deep/95 + backdrop-blur saat scroll > 80px
- **Logo:** Turtle SVG + wordmark "BATU HIU / CONSERVATION"
- **Active Indicator:** Garis coral 2px di bawah link aktif (animated dengan Framer Motion layoutId)
- **Dropdown:** Mega menu dengan backdrop-blur, rounded-2xl, shadow-2xl
- **Mobile:** Slide-in drawer dari kiri, 85% lebar layar, max 384px
- **CTA Button:** "Reservasi Tukik" — coral pill button dengan ikon CalendarDays

### 3.4 Footer
- **Background:** ocean-deep
- **Layout:** 4 kolom pada desktop (1.3fr + 3×1fr), stack pada mobile
- **Kolom:** Brand + deskripsi, Jelajah, Wisata, Lainnya
- **Contact Strip:** MapPin, Clock, Instagram dengan ikon seafoam
- **Bottom Bar:** Copyright + "Dibuat dengan ❤️" (heart icon coral)

---

## BAGIAN 4: ANIMASI & TRANSISI

### 4.1 Animasi CSS Custom

| Nama | Durasi | Easing | Deskripsi |
|---|---|---|---|
| float | 6s | ease-in-out infinite | Turtle floating naik-turun 12px |
| pulseSlow | 3s | ease-in-out infinite | Pulse dengan scale 1→1.35 + opacity |
| wave | 8s | linear infinite | Gelombang bergerak horizontal |
| bounceSoft | 2.2s | ease-in-out infinite | Bounce lembut 8px ke bawah |

### 4.2 Framer Motion (motion/react)

**Variants yang Digunakan:**
```
staggerContainer: stagger children 0.12s
fadeUpVariants: y: 24→0, opacity: 0→1, duration: 0.7s
```

**Easing Custom:**
```
EASE_OUT_CUBIC: [0.33, 1, 0.68, 1]
```

**Animasi Komponen:**
- Navbar: scroll-based background transition
- Hero: parallax scroll (bgY, contentY, overlayOpacity)
- Carousel: AnimatePresence mode="wait", scale + opacity
- Dropdown: y: 8→0, opacity: 0→1, duration: 0.22s
- Mobile drawer: x: -100%→0, cubic-bezier(0.22, 1, 0.36, 1)
- Bubble particles: y: 110%→-10%, opacity: 0→0.35→0
- Nav indicator: layoutId spring animation

### 4.3 Page Transition
- Komponen: PageTransition wrapper
- Setiap pergantian halaman menggunakan animasi fade/slide

---

## BAGIAN 5: LAYOUT & GRID

### 5.1 Container
```css
.container-editorial {
  width: 100%;
  max-width: 80rem; /* 1280px */
  margin-inline: auto;
  padding-inline: clamp(1.5rem, 5vw, 5rem); /* 24px–80px */
}
```

### 5.2 Section Spacing
```css
.section-spacing {
  padding-block: clamp(5rem, 10vw, 10rem); /* 80px–160px */
}
```

### 5.3 Breakpoints (Tailwind CSS v4)

| Breakpoint | Width | Penggunaan |
|---|---|---|
| sm | 640px | Mobile landscape |
| md | 768px | Tablet |
| lg | 1024px | Desktop (navbar switch) |
| xl | 1280px | Wide desktop |
| 2xl | 1536px | Ultra wide |

---

## BAGIAN 6: STRUKTUR HALAMAN

### 6.1 Daftar Halaman (10 Halaman)

| No | Path | Judul | Priority SEO |
|---|---|---|---|
| 1 | / | Beranda | 1.0 |
| 2 | /tentang-kami | Tentang Kami | 0.8 |
| 3 | /galeri | Galeri | 0.8 |
| 4 | /program | Program Konservasi | 0.9 |
| 5 | /informasi-wisata | Informasi Wisata | 0.7 |
| 6 | /informasi-wisata/jadwal | Jadwal & Kalender | 0.7 |
| 7 | /informasi-wisata/lokasi-tata-cara | Lokasi & Tata Cara | 0.7 |
| 8 | /informasi-wisata/panduan | Panduan Video | 0.6 |
| 9 | /donasi | Donasi | 0.8 |
| 10 | /kontak | Kontak | 0.5 |

### 6.2 Struktur Halaman Beranda
1. HeroSection — Carousel 4 spesies penyu + parallax + typewriter
2. StatisticsSection — 4 statistik dengan counter animasi
3. WaveDivider — Dekoratif SVG wave
4. ProgramPreview — Preview program konservasi
5. NewsSection — Berita/update terbaru
6. CTASection — Call to action donasi/reservasi

### 6.3 Komponen Global
- Navbar (fixed top)
- Footer
- ScrollProgress (progress bar scroll)
- PageTransition (animasi pergantian halaman)
- FloatingTurtle (dekorasi animasi)

---

## BAGIAN 7: TEKNOLOGI & STACK

### 7.1 Framework & Library Utama

| Teknologi | Versi | Fungsi |
|---|---|---|
| Next.js | 16.2.6 | React framework, SSR/SSG, routing |
| React | 19.2.4 | UI library |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | ^4 | Utility-first CSS framework |
| motion/react | ^12.38.0 | Animasi (Framer Motion) |
| lucide-react | ^1.14.0 | Icon library |
| clsx | ^2.1.1 | Conditional className utility |
| tailwind-merge | ^3.6.0 | Merge Tailwind classes |
| qrcode.react | ^4.2.0 | QR Code generator |

### 7.2 Google Fonts yang Digunakan

| Font | Weights | Subset | Fungsi |
|---|---|---|---|
| Playfair Display | default (400, 700) | latin | Display/Hero |
| Cormorant Garamond | 300, 400, 500, 600 | latin | Heading |
| Lora | default (400, 700) | latin | Body/Editorial |
| DM Sans | default (400, 500) | latin | UI/Interface |

### 7.3 Deployment & Infrastructure

| Layanan | Fungsi |
|---|---|
| Vercel | Hosting & deployment (Hobby Plan) |
| GitHub | Version control & CI/CD |
| Google Search Console | SEO monitoring |
| Vercel Analytics | Traffic & performance monitoring |

### 7.4 SEO & Metadata

| Fitur | Implementasi |
|---|---|
| Meta Tags | Per-halaman via buildMetadata() |
| Open Graph | og:title, og:description, og:image (1200×630) |
| Twitter Cards | summary_large_image |
| Canonical URL | Per-halaman |
| Sitemap | /sitemap.xml (auto-generated, 10 URL) |
| Robots.txt | /robots.txt (allow all, disallow /api/) |
| Schema.org | JSON-LD: NGO + WebSite + WebPage |
| Favicon | SVG + PNG (app/icon.tsx) |
| Apple Touch Icon | 180×180 (app/apple-icon.tsx) |

### 7.5 Aksesibilitas (WCAG)

| Fitur | Implementasi |
|---|---|
| Focus Visible | outline coral 2px, offset 3px |
| Reduced Motion | @media (prefers-reduced-motion) |
| ARIA Labels | Semua tombol dan navigasi |
| Semantic HTML | header, nav, main, footer, section |
| Alt Text | Semua gambar |
| Color Contrast | Teks terang pada background gelap |
| Keyboard Navigation | Tab order yang logis |

---

## BAGIAN 8: ASET & MEDIA

### 8.1 Gambar Penyu (WebP Format)

| File | Spesies | Penggunaan |
|---|---|---|
| penyu-hijau.webp | Chelonia mydas | Hero carousel, species card |
| penyu-sisik.webp | Eretmochelys imbricata | Hero carousel, species card |
| penyu-tempayan.webp | Caretta caretta | Hero carousel, species card |
| penyu-pipih.webp | Natator depressus | Hero carousel, species card |

**Format:** WebP (dioptimasi Next.js Image)  
**Kualitas:** 90% untuk hero, 75-85% untuk thumbnail  
**Formats:** AVIF + WebP (next-gen formats)

### 8.2 Open Graph Image
- File: /public/og/og-default.jpg
- Ukuran: 1200 × 630 px
- Digunakan untuk: Facebook, WhatsApp, LinkedIn sharing preview

### 8.3 Favicon & Icons

| File | Ukuran | Format | Penggunaan |
|---|---|---|---|
| app/icon.tsx | 32×32 | PNG (generated) | Browser tab favicon |
| app/apple-icon.tsx | 180×180 | PNG (generated) | iOS home screen |
| public/favicon.svg | 128×128 | SVG | Modern browsers |
| public/icon.svg | 512×512 | SVG | PWA icon |

**Desain Icon:** Turtle silhouette (#F5E6D3) pada background ocean-deep (#0A4A5C), rounded square

---

## BAGIAN 9: KONTEN & DATA

### 9.1 Spesies Penyu yang Dipantau

| Spesies | Nama Ilmiah | Status IUCN | Kode |
|---|---|---|---|
| Penyu Sisik | Eretmochelys imbricata | Critically Endangered | CR |
| Penyu Hijau | Chelonia mydas | Endangered | EN |
| Penyu Tempayan | Caretta caretta | Vulnerable | VU |
| Penyu Pipih | Natator depressus | Data Deficient | DD |

### 9.2 Statistik Konservasi

| Metrik | Nilai | Keterangan |
|---|---|---|
| Tukik Dilepas | 4.200+ | Sejak 2024 |
| Spesies Terpantau | 3 Spesies | Sisik, Hijau, Tempayan |
| Relawan & Pengunjung | 500+ | Per Tahun |
| Pandan Ditanam | 200 m² | Habitat Terjaga |

### 9.3 Kalender Konservasi

| Bulan | Aktivitas |
|---|---|
| Januari–April | Normal |
| Mei | Musim Bertelur & Pelepasan Tukik |
| Juni | Normal |
| Juli | Pelepasan Tukik |
| Agustus–September | Normal |
| Oktober | Musim Bertelur |
| November | Normal |
| Desember | Musim Kawin Penyu |

### 9.4 Tier Donasi

| Nominal | Dampak |
|---|---|
| Rp 25.000 | Membantu 1 sarang tukik terpantau selama semalam |
| Rp 100.000 | Mendukung operasional pemantauan selama 1 minggu |
| Rp 500.000 | Mendanai 1 program edukasi untuk 20 pelajar |

---

## BAGIAN 10: INFORMASI KONTAK & SOSIAL MEDIA

| Platform | Handle/Info |
|---|---|
| Instagram | @penyu_pangandaran |
| WhatsApp | +62 823-1603-4923 |
| Alamat | Pantai Batu Hiu, Pangandaran, Jawa Barat |
| Jam Operasional | 08.00 – 17.00 WIB, Setiap Hari |

---

## RINGKASAN DESAIN SISTEM

### Konsep Desain
**"Organic Coastal Editorial"** — Website dirancang dengan pendekatan editorial majalah alam premium yang memadukan estetika pesisir Indonesia. Setiap elemen desain terinspirasi dari ekosistem laut: warna biru tua seperti kedalaman samudra, pasir pantai yang hangat, dan aksen coral serta seafoam yang merepresentasikan kehidupan laut.

### Prinsip Desain
1. **Nature-Inspired** — Semua warna dan tekstur terinspirasi dari alam pesisir
2. **Editorial Quality** — Tipografi serif premium untuk kesan terpercaya dan berkarakter
3. **Accessibility First** — WCAG compliant, reduced motion support, semantic HTML
4. **Performance Optimized** — WebP/AVIF images, font display swap, compression
5. **Mobile-First** — Responsive design dengan breakpoint yang terstruktur

### Keunikan Teknis
- Sistem 4 font dengan peran yang berbeda (Display, Heading, Body, UI)
- Palet warna berbasis CSS custom properties untuk konsistensi
- Animasi berbasis Framer Motion dengan spring physics
- Hero carousel dengan parallax scroll effect
- Navbar adaptif (transparan → solid saat scroll)
- Schema.org JSON-LD untuk SEO terstruktur

---

*Dokumentasi ini dibuat untuk keperluan Laporan Proyek Akhir.*  
*Website: https://batuhiu-conservation.vercel.app*  
*Organisasi: Yayasan Raksa Bintana — Konservasi Penyu Pantai Batu Hiu, Pangandaran*
