import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the dev server to accept HMR requests from the local network
  // (e.g. testing on a phone on the same Wi-Fi). Add more hosts as needed.
  allowedDevOrigins: ["10.60.170.234", "localhost"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "drive.google.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
    formats: ["image/avif", "image/webp"],
    qualities: [50, 75, 85, 100],
  },
  compress: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
