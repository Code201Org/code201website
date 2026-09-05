import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/ui"],
  devIndicators: false,
  allowedDevOrigins: [
    "localhost:3000",
    "192.168.1.203",
    "banana-bannister-cork.ngrok-free.dev",
    "*.ngrok-free.dev",
    "*.ngrok.io",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
