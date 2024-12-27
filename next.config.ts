import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/inventary",
        destination: "/inventary/products",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
