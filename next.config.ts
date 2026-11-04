import type { NextConfig } from "next";

const isStaticExport =
  process.env.STATIC_EXPORT === "1" || process.env.CF_PAGES === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  cacheComponents: !isStaticExport,
  partialPrefetching: !isStaticExport,
  ...(isStaticExport
    ? {
        output: "export" as const,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
  basePath,
  assetPrefix: basePath || undefined,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
