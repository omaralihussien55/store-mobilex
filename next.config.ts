import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['www.91-img.com',"fdn2.gsmarena.com","fdn.gsmarena.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
