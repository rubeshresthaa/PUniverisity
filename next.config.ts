import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "plus.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "unsplash.com",
        protocol: "https",
      },
      {
        hostname: "nyc8ipr7hw.ufs.sh",
        protocol: "https",
      },
      {
        hostname: "s5ronyp76h.ufs.sh",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
