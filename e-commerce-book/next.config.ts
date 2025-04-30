import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // ✅ Disables optimization for all images
  },
};

export default nextConfig;
