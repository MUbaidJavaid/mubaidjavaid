import type { NextConfig } from "next";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

// Explicit project root (absolute path) so Next.js does not infer wrong root from parent lockfiles
const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
