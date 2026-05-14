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

### **FASE 3: Optimasi SEO Post-Deploy**

#### 3.1 Verifikasi SEO Checklist

Setelah deploy berhasil, cek:

✅ **Sitemap:** https://batuhiu-conservation.vercel.app/sitemap.xml
✅ **Robots.txt:** https://batuhiu-conservation.vercel.app/robots.txt
✅ **Meta Tags:** Inspect dengan View Source
✅ **Open Graph:** Test di https://www.opengraph.xyz/
✅ **Mobile-Friendly:** Test di https://search.google.com/test/mobile-friendly
✅ **Page Speed:** Test di https://pagespeed.web.dev/

#### 3.2 Submit ke Search Engines

**Google Search Console:**
1. Buka https://search.google.com/search-console
2. Tambahkan property: `https://batuhiu-conservation.vercel.app`
3. Verifikasi ownership (via DNS atau HTML tag)
4. Submit sitemap: `https://batuhiu-conservation.vercel.app/sitemap.xml`

**Bing Webmaster Tools:**
1. Buka https://www.bing.com/webmasters
2. Tambahkan site
3. Submit sitemap

#### 3.3 Enable Vercel Analytics (Optional tapi Recommended)

Di Vercel Dashboard:
1. Pilih project `batuhiu-conservation`
2. Tab **Analytics** → Enable
3. Tab **Speed Insights** → Enable

Ini akan memberikan data:
- Real User Monitoring (RUM)
- Core Web Vitals
- Performance metrics

#### 3.4 Setup Google Analytics (Optional)

1. Buat property di https://analytics.google.com/
2. Dapatkan Measurement ID (format: `G-XXXXXXXXXX`)
3. Tambahkan ke Vercel Environment Variables:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. Tambahkan script di `app/layout.tsx`:

```tsx
// Tambahkan di <head>
{process.env.NEXT_PUBLIC_GA_ID && (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `,
      }}
    />
  </>
)}
```

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
