// next.config.ts

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? "/" : "",
  basePath: isProd ? "/dl-website-s25" : "", // Only use basePath in production
  images: {
    unoptimized: true,
  },
  trailingSlash: true,

  output: "export",
};

export default nextConfig;
