import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF where supported, fall back to WebP. Both are dramatically
    // smaller than the JPEG/PNG originals at equivalent quality.
    formats: ["image/avif", "image/webp"],
    // The largest box any <Image> is painted into is ~500 CSS px, so there is
    // no reason to generate or cache 1920/2048/3840 variants.
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },

  experimental: {
    // These are barrel-file packages: a single named import pulls the whole
    // index into the module graph. This rewrites them to deep imports so only
    // what is actually used gets bundled.
    optimizePackageImports: [
      "react-icons",
      "framer-motion",
      "@react-three/drei",
    ],
  },

  // Long-lived immutable caching for the static 3D asset.
  async headers() {
    return [
      {
        source: "/models/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
