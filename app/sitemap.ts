import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  return [
    { url: `${base}`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/tentang-kami`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/galeri`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/program`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/informasi-wisata`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/informasi-wisata/jadwal`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/informasi-wisata/lokasi-tata-cara`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/informasi-wisata/panduan`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/donasi`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/reservasi`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/kontak`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];
}
