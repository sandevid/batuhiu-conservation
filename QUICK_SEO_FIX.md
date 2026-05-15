# ⚡ Quick SEO Fix - Action Items

## 🚨 URGENT: Do These 3 Things NOW

### 1. Generate Static Icons (5 minutes)
```bash
node scripts/generate-icons.js
```
Buka `public/icon-generator.html` di browser, download semua PNG files, simpan ke folder `public/`

### 2. Set Vercel Environment Variable (2 minutes)
1. Buka Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add/Update:
   - **Key:** `NEXT_PUBLIC_SITE_URL`
   - **Value:** `https://batuhiu-conservation.vercel.app` (atau custom domain Anda)
3. **Redeploy** project

### 3. Request Google Re-Index (3 minutes)
1. Buka [Google Search Console](https://search.google.com/search-console)
2. URL Inspection → Masukkan homepage URL
3. Click "Request Indexing"

---

## ✅ What's Been Fixed

### Code Changes:
- ✅ Title template simplified: `%s — Yayasan Raksa Bintana`
- ✅ Brand consistency across all metadata
- ✅ Added manifest.json for PWA
- ✅ Enhanced keywords (added "penyu lekang", etc)
- ✅ Proper icon configuration
- ✅ Full Open Graph & Twitter Card metadata

### Expected Results:
**Google Search akan menampilkan:**
```
Yayasan Raksa Bintana — Konservasi Penyu Pantai Batu Hiu Pangandaran
https://your-domain.com
Yayasan Raksa Bintana mengabdikan diri untuk konservasi penyu di Pantai 
Batu Hiu, Pangandaran sejak 1983. Fokus pada konservasi tiga spesies penyu...
```

**Timeline:**
- Icons: Immediate (after deploy)
- Title: 24-48 hours (after Google re-crawl)

---

## 📖 Full Documentation
See `SEO_OPTIMIZATION_GUIDE.md` for complete details.
