import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "centralaxis.com",
      },
      {
        protocol: "https",
        hostname: "www.centralaxis.com",
      },
      {
        protocol: "https",
        hostname: "api.centralaxis.com",
      },
      {
        protocol: "https",
        hostname: "assets.centralaxis.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", 
      },
      {
        protocol: "https",
        hostname: "cdn.dribbble.com", 
      },
    ],
  },
};

export default nextConfig;
