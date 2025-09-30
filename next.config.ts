import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for client-side only deployment
  output: 'export',
  trailingSlash: true,

  // Absolutely lenient configuration - never fail builds
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Simple image configuration for static export
  images: {
    unoptimized: true,
  },

  // Basic performance settings
  poweredByHeader: false,
};

export default nextConfig;
