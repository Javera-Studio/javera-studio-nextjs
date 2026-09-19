import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/preise",
        destination: "/#angebot",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
