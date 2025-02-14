import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/320x180",
        search: "",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
