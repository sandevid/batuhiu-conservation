import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

// Static sitemap - no dynamic date to avoid serverless timeout
export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  
  return [
    { 
      url: `${base}`, 
      lastModified: "2026-05-14", 
      changeFrequency: "weekly" as const, 
      priority: 1 
    },
    { 
      url: `${base}/tentang-kami`, 
      lastModified: "2026-05-14", 
      changeFrequency: "monthly" as const, 
      priority: 0.8 
    },
    { 
      url: `${base}/galeri`, 
      lastModified: "2026-05-14", 
      changeFrequency: "weekly" as const, 
      priority: 0.8 
    },
    { 
      url: `${base}/program`, 
      lastModified: "2026-05-14", 
      changeFrequency: "monthly" as const, 
      priority: 0.9 
    },
    { 
      url: `${base}/informasi-wisata`, 
      lastModified: "2026-05-14", 
      changeFrequency: "monthly" as const, 
      priority: 0.7 
    },
    { 
      url: `${base}/informasi-wisata/jadwal`, 
      lastModified: "2026-05-14", 
      changeFrequency: "monthly" as const, 
      priority: 0.7 
    },
    { 
      url: `${base}/informasi-wisata/lokasi-tata-cara`, 
      lastModified: "2026-05-14", 
      changeFrequency: "monthly" as const, 
      priority: 0.7 
    },
    { 
      url: `${base}/informasi-wisata/panduan`, 
      lastModified: "2026-05-14", 
      changeFrequency: "monthly" as const, 
      priority: 0.6 
    },
    { 
      url: `${base}/donasi`, 
      lastModified: "2026-05-14", 
      changeFrequency: "monthly" as const, 
      priority: 0.8 
    },
    { 
      url: `${base}/kontak`, 
      lastModified: "2026-05-14", 
      changeFrequency: "monthly" as const, 
      priority: 0.5 
    },
  ];
}
