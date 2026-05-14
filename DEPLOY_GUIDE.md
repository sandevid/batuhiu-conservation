# 🚀 Panduan Deploy ke Vercel dengan SEO Optimal

## 📌 Nama Repo GitHub yang Direkomendasikan

**Pilihan Terbaik:** `batuhiu-conservation`

**Alasan:**
- ✅ Simple dan mudah diingat
- ✅ SEO-friendly dengan keyword "conservation"
- ✅ URL Vercel akan cantik: `batuhiu-conservation.vercel.app`
- ✅ Konsisten dengan branding

**Alternatif lain:**
- `batuhiu-turtle-conservation` (lebih deskriptif)
- `penyu-batuhiu` (target lokal Indonesia)

---

## 🎯 TAHAPAN DEPLOY KE VERCEL

### **FASE 1: Setup Repository GitHub**

#### 1.1 Inisialisasi Git (jika belum)
```bash
git init
git add .
git commit -m "Initial commit: Batu Hiu Conservation website"
```

#### 1.2 Buat Repository di GitHub
1. Buka https://github.com/new
2. **Repository name:** `batuhiu-conservation`
3. **Description:** "Website konservasi penyu Pantai Batu Hiu - Yayasan Raksa Bintana"
4. **Visibility:** Public (untuk SEO lebih baik)
5. **JANGAN** centang "Add README" (sudah ada)
6. Klik **Create repository**

#### 1.3 Push ke GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/batuhiu-conservation.git
git branch -M main
git push -u origin main
```

---

### **FASE 2: Deploy ke Vercel**

#### 2.1 Import Project ke Vercel

**Opsi A: Via Website (Recommended)**
1. Buka https://vercel.com/new
2. Login dengan GitHub
3. Klik **Import Git Repository**
4. Pilih repository `batuhiu-conservation`
5. Klik **Import**

**Opsi B: Via Vercel CLI**
```bash
npm i -g vercel
vercel login
vercel
```

#### 2.2 Konfigurasi Project di Vercel

**Framework Preset:** Next.js (auto-detected)

**Build & Development Settings:**
- Build Command: `npm run build` (default)
- Output Directory: `.next` (default)
- Install Command: `npm install` (default)
- Development Command: `npm run dev` (default)

**Root Directory:** `./` (default)

#### 2.3 Environment Variables

Tambahkan di Vercel Dashboard → Settings → Environment Variables:

```env
NEXT_PUBLIC_SITE_URL=https://batuhiu-conservation.vercel.app
```

**Untuk Production:**
- Name: `NEXT_PUBLIC_SITE_URL`
- Value: `https://batuhiu-conservation.vercel.app`
- Environment: Production, Preview, Development

#### 2.4 Deploy!
Klik **Deploy** dan tunggu ~2-3 menit

---

### **FASE 3: Optimasi SEO Post-Deploy** 🎯

Setelah website berhasil di-deploy, lakukan langkah-langkah berikut untuk memastikan SEO optimal.

---

#### 3.1 Verifikasi SEO Checklist ✅

**Langkah 1: Cek Sitemap**
1. Buka browser, kunjungi: `https://batuhiu-conservation.vercel.app/sitemap.xml`
2. **Yang harus terlihat:**
   - Daftar semua URL website (beranda, tentang-kami, galeri, dll)
   - Format XML yang terstruktur
   - Tanggal `lastModified` untuk setiap URL
   - Priority dan changeFrequency
3. **Jika tidak muncul:** Tunggu 5-10 menit, clear cache browser, atau coba Incognito mode

**Langkah 2: Cek Robots.txt**
1. Buka: `https://batuhiu-conservation.vercel.app/robots.txt`
2. **Yang harus terlihat:**
   ```
   User-agent: *
   Allow: /
   Disallow: /api/
   Sitemap: https://batuhiu-conservation.vercel.app/sitemap.xml
   ```
3. **Artinya:** Semua search engine boleh crawl website kecuali folder `/api/`

**Langkah 3: Cek Meta Tags**
1. Buka homepage: `https://batuhiu-conservation.vercel.app/`
2. Klik kanan → **View Page Source** (atau tekan `Ctrl+U`)
3. **Cari tag-tag ini di dalam `<head>`:**
   ```html
   <title>Batu Hiu Conservation | Konservasi Penyu Pangandaran</title>
   <meta name="description" content="Yayasan Raksa Bintana..." />
   <meta property="og:title" content="..." />
   <meta property="og:image" content="..." />
   <meta name="twitter:card" content="summary_large_image" />
   <link rel="canonical" href="https://batuhiu-conservation.vercel.app/" />
   ```
4. **Jika ada:** ✅ SEO meta tags sudah benar

**Langkah 4: Test Open Graph (Preview Sharing)**
1. Buka: https://www.opengraph.xyz/
2. Masukkan URL: `https://batuhiu-conservation.vercel.app`
3. Klik **Preview**
4. **Yang harus terlihat:**
   - Judul website
   - Deskripsi
   - Gambar preview (OG image)
   - Ini adalah tampilan saat link di-share di Facebook/WhatsApp/LinkedIn
5. **Jika gambar tidak muncul:** Pastikan file `/public/og/og-default.jpg` ada

**Langkah 5: Test Mobile-Friendly**
1. Buka: https://search.google.com/test/mobile-friendly
2. Masukkan URL: `https://batuhiu-conservation.vercel.app`
3. Klik **Test URL**
4. Tunggu ~30 detik
5. **Hasil yang diharapkan:** ✅ "Page is mobile-friendly"
6. **Jika ada error:** Screenshot dan perbaiki masalah responsive

**Langkah 6: Test Page Speed**
1. Buka: https://pagespeed.web.dev/
2. Masukkan URL: `https://batuhiu-conservation.vercel.app`
3. Klik **Analyze**
4. Tunggu ~1 menit
5. **Target Score:**
   - 🟢 Performance: 90+ (bagus)
   - 🟢 Accessibility: 90+ (bagus)
   - 🟢 Best Practices: 90+ (bagus)
   - 🟢 SEO: 90+ (bagus)
6. **Jika score rendah:** Lihat rekomendasi di bawah hasil

---

#### 3.2 Submit ke Search Engines 🔍

**A. Google Search Console (WAJIB untuk SEO)**

**Langkah 1: Tambahkan Property**
1. Buka: https://search.google.com/search-console
2. Login dengan akun Google
3. Klik **Add Property** (atau **Tambahkan Properti**)
4. Pilih **URL prefix** (bukan Domain)
5. Masukkan: `https://batuhiu-conservation.vercel.app`
6. Klik **Continue**

**Langkah 2: Verifikasi Ownership**

Ada 2 cara, pilih salah satu:

**Cara A: HTML Tag (Paling Mudah)**
1. Google akan memberikan meta tag seperti:
   ```html
   <meta name="google-site-verification" content="ABC123XYZ..." />
   ```
2. Copy tag tersebut
3. Buka file `app/layout.tsx` di project Anda
4. Tambahkan tag di dalam `<head>`:
   ```tsx
   <head>
     <meta name="google-site-verification" content="ABC123XYZ..." />
     {/* tag lainnya */}
   </head>
   ```
5. Commit & push ke GitHub:
   ```bash
   git add app/layout.tsx
   git commit -m "Add Google Search Console verification"
   git push origin main
   ```
6. Tunggu Vercel auto-deploy (~2 menit)
7. Kembali ke Google Search Console, klik **Verify**
8. ✅ Jika berhasil: "Ownership verified"

**Cara B: DNS Record (Jika Pakai Custom Domain)**
1. Google akan memberikan TXT record seperti: `google-site-verification=ABC123XYZ`
2. Login ke DNS provider (Niagahoster/Cloudflare/dll)
3. Tambahkan TXT record:
   - Type: `TXT`
   - Name: `@` atau kosong
   - Value: `google-site-verification=ABC123XYZ`
4. Save, tunggu propagasi (5-60 menit)
5. Kembali ke Google Search Console, klik **Verify**

**Langkah 3: Submit Sitemap**
1. Setelah verified, di Google Search Console sidebar klik **Sitemaps**
2. Di kolom "Add a new sitemap", masukkan: `sitemap.xml`
3. Klik **Submit**
4. Status akan berubah menjadi **Success** dalam beberapa menit
5. **Artinya:** Google sekarang tahu semua halaman website Anda

**Langkah 4: Request Indexing (Opsional - Percepat Indexing)**
1. Di sidebar, klik **URL Inspection**
2. Masukkan URL homepage: `https://batuhiu-conservation.vercel.app/`
3. Klik **Test Live URL**
4. Jika OK, klik **Request Indexing**
5. Ulangi untuk halaman penting lainnya (tentang-kami, program, donasi)

**Hasil yang Diharapkan:**
- Dalam 1-3 hari: Website mulai muncul di Google Search
- Dalam 1-2 minggu: Semua halaman ter-index
- Cek dengan search: `site:batuhiu-conservation.vercel.app`

---

**B. Bing Webmaster Tools (Opsional tapi Recommended)**

**Langkah 1: Tambahkan Site**
1. Buka: https://www.bing.com/webmasters
2. Login dengan Microsoft account
3. Klik **Add a site**
4. Masukkan: `https://batuhiu-conservation.vercel.app`
5. Klik **Add**

**Langkah 2: Verifikasi**
- Pilih metode **HTML Meta Tag** (sama seperti Google)
- Atau jika sudah verified di Google, pilih **Import from Google Search Console** (paling mudah!)

**Langkah 3: Submit Sitemap**
1. Di dashboard, klik **Sitemaps**
2. Masukkan: `https://batuhiu-conservation.vercel.app/sitemap.xml`
3. Klik **Submit**

---

#### 3.3 Enable Vercel Analytics 📊

**Kenapa Perlu?**
- Lihat berapa banyak visitor real-time
- Monitor Core Web Vitals (loading speed)
- Gratis untuk hobby projects!

**Langkah-langkah:**

1. **Login ke Vercel Dashboard**
   - Buka: https://vercel.com/dashboard
   - Pilih project `batuhiu-conservation`

2. **Enable Analytics**
   - Klik tab **Analytics** di menu atas
   - Klik tombol **Enable Analytics**
   - Konfirmasi dengan klik **Enable**
   - ✅ Selesai! Data akan mulai muncul dalam 24 jam

3. **Enable Speed Insights**
   - Klik tab **Speed Insights** di menu atas
   - Klik tombol **Enable Speed Insights**
   - Konfirmasi dengan klik **Enable**
   - ✅ Selesai! Akan monitor Core Web Vitals

**Data yang Akan Anda Dapatkan:**
- 📈 **Visitors:** Jumlah pengunjung per hari/minggu/bulan
- 🌍 **Top Locations:** Dari negara/kota mana pengunjung berasal
- 📱 **Devices:** Desktop vs Mobile
- ⚡ **Performance:**
  - LCP (Largest Contentful Paint) - Loading speed
  - FID (First Input Delay) - Interactivity
  - CLS (Cumulative Layout Shift) - Visual stability
- 🔗 **Top Pages:** Halaman mana yang paling banyak dikunjungi

**Cara Lihat Data:**
- Dashboard → Project → Tab **Analytics**
- Refresh setiap hari untuk lihat progress

---

#### 3.4 Setup Google Analytics (Opsional - untuk Data Lebih Detail) 📈

**Kenapa Perlu Google Analytics?**
- Data lebih lengkap dari Vercel Analytics
- Bisa lihat user behavior (halaman mana yang paling lama dibaca)
- Bisa track conversions (berapa orang klik tombol Donasi/WhatsApp)
- Gratis selamanya!

**Langkah-langkah Setup:**

**Step 1: Buat Google Analytics Property**

1. Buka: https://analytics.google.com/
2. Login dengan akun Google
3. Klik **Admin** (icon gear di kiri bawah)
4. Di kolom **Account**, klik **Create Account**
5. **Account name:** `Batu Hiu Conservation`
6. Klik **Next**
7. **Property name:** `Batuhiu Conservation Website`
8. **Reporting time zone:** `(GMT+07:00) Jakarta`
9. **Currency:** `Indonesian Rupiah (IDR)`
10. Klik **Next**
11. **Business information:**
    - Industry: `Non-profit`
    - Business size: `Small (1-10 employees)`
12. Klik **Next**, lalu **Create**
13. Accept Terms of Service

**Step 2: Setup Data Stream**

1. Pilih platform: **Web**
2. **Website URL:** `https://batuhiu-conservation.vercel.app`
3. **Stream name:** `Batuhiu Website`
4. Klik **Create stream**
5. **PENTING:** Copy **Measurement ID** (format: `G-XXXXXXXXXX`)
   - Contoh: `G-ABC123XYZ`
   - Simpan di notepad, akan dipakai nanti

**Step 3: Tambahkan ke Vercel Environment Variables**

1. Buka Vercel Dashboard: https://vercel.com/dashboard
2. Pilih project `batuhiu-conservation`
3. Klik tab **Settings**
4. Klik **Environment Variables** di sidebar
5. Klik **Add New**
6. Isi form:
   - **Key:** `NEXT_PUBLIC_GA_ID`
   - **Value:** `G-XXXXXXXXXX` (paste Measurement ID dari Step 2)
   - **Environment:** Centang **Production**, **Preview**, dan **Development**
7. Klik **Save**

**Step 4: Tambahkan Google Analytics Script ke Website**

1. Buka file `app/layout.tsx` di code editor
2. Tambahkan script Google Analytics di dalam `<head>`:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // ... metadata yang sudah ada
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              id="google-analytics"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
```

3. Save file
4. Commit & push ke GitHub:
   ```bash
   git add app/layout.tsx
   git commit -m "Add Google Analytics tracking"
   git push origin main
   ```
5. Tunggu Vercel auto-deploy (~2 menit)

**Step 5: Verifikasi Google Analytics Berfungsi**

1. Buka website: `https://batuhiu-conservation.vercel.app`
2. Buka Google Analytics: https://analytics.google.com/
3. Pilih property `Batuhiu Conservation Website`
4. Klik **Reports** → **Realtime**
5. **Jika berhasil:** Anda akan melihat **1 active user** (diri Anda sendiri!)
6. Coba buka beberapa halaman, lihat data berubah real-time

**Step 6: Setup Event Tracking (Opsional - Track Button Clicks)**

Untuk track berapa orang klik tombol penting (Donasi, WhatsApp, dll):

1. Buat file baru: `lib/analytics.ts`

```typescript
// lib/analytics.ts
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
};

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}
```

2. Gunakan di komponen button, contoh di `components/home/CTASection.tsx`:

```tsx
import { trackEvent } from "@/lib/analytics";

// Di dalam button onClick:
<button
  onClick={() => {
    trackEvent("donation_click", {
      button_location: "hero_section",
    });
    // ... kode lainnya
  }}
>
  Donasi Sekarang
</button>
```

3. Commit & push:
   ```bash
   git add lib/analytics.ts components/home/CTASection.tsx
   git commit -m "Add event tracking for buttons"
   git push origin main
   ```

**Data yang Akan Anda Dapatkan di Google Analytics:**

- 📊 **Realtime:** Pengunjung saat ini
- 👥 **Users:** Total pengunjung unik
- 📄 **Page Views:** Halaman mana yang paling banyak dibuka
- ⏱️ **Average Session Duration:** Berapa lama orang stay di website
- 📱 **Device Category:** Desktop, Mobile, Tablet
- 🌍 **Location:** Kota/negara pengunjung
- 🔗 **Traffic Source:** Dari mana pengunjung datang (Google, Instagram, Direct, dll)
- 🎯 **Events:** Button clicks yang Anda track

**Cara Lihat Data:**
- Dashboard: https://analytics.google.com/
- Reports → Realtime (data live)
- Reports → Acquisition (dari mana traffic datang)
- Reports → Engagement (halaman mana yang paling populer)

---

**🎉 Selamat! SEO Setup Selesai**

Checklist yang sudah Anda lakukan:
- ✅ Sitemap & Robots.txt verified
- ✅ Meta tags & Open Graph OK
- ✅ Mobile-friendly & Fast loading
- ✅ Submitted ke Google & Bing
- ✅ Vercel Analytics enabled
- ✅ Google Analytics tracking (opsional)

**Next Steps:**
- Tunggu 1-3 hari untuk indexing pertama
- Monitor Google Search Console setiap minggu
- Update content secara rutin untuk SEO boost
- Share link di social media untuk traffic awal

---

### **FASE 4: Custom Domain (Optional - Highly Recommended)**

#### 4.1 Beli Domain
Rekomendasi domain:
- `batuhiuconservation.org` (paling cocok untuk NGO)
- `batuhiu.org`
- `penyubatuhiu.org`
- `batuhiuconservation.id`

Provider domain murah:
- Niagahoster (Indonesia)
- Domainesia (Indonesia)
- Namecheap (International)
- Cloudflare Registrar (termurah)

#### 4.2 Setup Custom Domain di Vercel

1. Vercel Dashboard → Project → Settings → Domains
2. Tambahkan domain: `batuhiuconservation.org`
3. Ikuti instruksi DNS:
   - **A Record:** `76.76.21.21`
   - **CNAME www:** `cname.vercel-dns.com`
4. Tunggu propagasi DNS (5-60 menit)
5. Vercel akan auto-generate SSL certificate

#### 4.3 Update Environment Variable

Setelah custom domain aktif:
```env
NEXT_PUBLIC_SITE_URL=https://batuhiuconservation.org
```

Redeploy untuk apply changes.

---

### **FASE 5: Monitoring & Maintenance**

#### 5.1 Setup Monitoring

**Vercel Deployment Notifications:**
- Settings → Git → Enable deployment notifications
- Pilih Slack/Discord/Email

**Uptime Monitoring (Free):**
- https://uptimerobot.com/
- https://www.freshping.io/

#### 5.2 Regular SEO Checks

**Bulanan:**
- Cek Google Search Console untuk errors
- Review Core Web Vitals
- Update sitemap jika ada halaman baru

**Per 3 Bulan:**
- Audit SEO dengan https://web.dev/measure/
- Cek broken links dengan https://www.brokenlinkcheck.com/
- Review meta descriptions & titles

#### 5.3 Content Updates

Setiap update konten:
```bash
git add .
git commit -m "Update: [deskripsi perubahan]"
git push origin main
```

Vercel akan auto-deploy dalam ~2 menit.

---

## 🎨 Tips URL Cantik di Vercel

### Struktur URL yang Sudah Optimal:
```
https://batuhiu-conservation.vercel.app/
https://batuhiu-conservation.vercel.app/tentang-kami
https://batuhiu-conservation.vercel.app/galeri
https://batuhiu-conservation.vercel.app/program
https://batuhiu-conservation.vercel.app/informasi-wisata
https://batuhiu-conservation.vercel.app/donasi
https://batuhiu-conservation.vercel.app/kontak
```

### Setelah Custom Domain:
```
https://batuhiuconservation.org/
https://batuhiuconservation.org/tentang-kami
https://batuhiuconservation.org/galeri
```

---

## 📊 SEO Checklist (Sudah Implemented ✅)

- ✅ **Semantic HTML:** Proper heading hierarchy
- ✅ **Meta Tags:** Title, description, keywords per page
- ✅ **Open Graph:** Facebook/LinkedIn sharing
- ✅ **Twitter Cards:** Twitter sharing
- ✅ **Canonical URLs:** Prevent duplicate content
- ✅ **Sitemap.xml:** Auto-generated
- ✅ **Robots.txt:** Configured
- ✅ **Image Optimization:** Next.js Image component
- ✅ **Mobile Responsive:** Tailwind CSS
- ✅ **Fast Loading:** Compression, lazy loading
- ✅ **Security Headers:** XSS, CSRF protection
- ✅ **Structured Data:** JSON-LD (bisa ditambahkan)
- ✅ **Accessibility:** ARIA labels, semantic markup

---

## 🚨 Troubleshooting

### Build Error di Vercel
```bash
# Test build locally dulu
npm run build

# Jika error, cek:
# 1. TypeScript errors
npm run lint

# 2. Missing dependencies
npm install

# 3. Environment variables
# Pastikan NEXT_PUBLIC_SITE_URL sudah di-set
```

### Sitemap Tidak Muncul
- Tunggu 5-10 menit setelah deploy
- Clear cache browser
- Cek di Incognito mode
- Vercel cache bisa delay, tunggu propagasi

### Images Tidak Load
- Pastikan domain di `next.config.ts` → `remotePatterns` sudah benar
- Cek CORS policy
- Vercel auto-optimize images, tunggu first load

---

## 📞 Support

**Vercel Support:**
- Docs: https://vercel.com/docs
- Community: https://github.com/vercel/next.js/discussions

**Next.js Support:**
- Docs: https://nextjs.org/docs
- Discord: https://nextjs.org/discord

---

## 🎉 Selamat!

Website Anda sekarang live di:
**https://batuhiu-conservation.vercel.app**

Share link ini ke:
- Instagram: @penyu_pangandaran
- WhatsApp: 082316034923
- Google My Business
- Social media lainnya

**Next Steps:**
1. ✅ Deploy ke Vercel
2. ✅ Submit sitemap ke Google
3. ✅ Setup Analytics
4. ✅ Beli custom domain
5. ✅ Monitor performance
6. ✅ Update content regularly

---

**Dibuat dengan ❤️ untuk Konservasi Penyu Batu Hiu**
