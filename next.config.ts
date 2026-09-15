import type { NextConfig } from "next";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "lenis"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
};

export default nextConfig;
