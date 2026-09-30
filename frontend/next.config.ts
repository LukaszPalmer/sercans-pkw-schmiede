import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    reactCompiler: true,
    optimizePackageImports: ['lucide-react'],
    inlineCss: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 480, 640, 768, 1024],
    imageSizes: [96, 160, 240, 320, 420],
    qualities: [70, 80],
    minimumCacheTTL: 2_678_400,
  },
};

export default nextConfig;
