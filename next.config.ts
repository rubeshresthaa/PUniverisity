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
        hostname:"unsplash.com",
        protocol:"https"
      }
    ],
  },
};

export default nextConfig;
