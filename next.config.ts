import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "www.realtynmore.com",
      },
      {
        protocol: "http",
        hostname: "api.microlink.io",
      },
    ],
  },
};

export default nextConfig;
