import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    reactCompiler: true,
    optimizePackageImports: ['lucide-react'],
    inlineCss: true,
    // Terminanfrage mit Fotos (im Browser verkleinert, max. 3,5 MB) – unter dem Vercel-Limit von 4,5 MB
    serverActions: { bodySizeLimit: '4mb' },
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    // Bis 1600 px: randlose Banner bei 1440 px Breite bleiben scharf
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1600],
    imageSizes: [96, 160, 240, 320, 420],
    qualities: [70, 80],
    minimumCacheTTL: 2_678_400,
  },
};

export default nextConfig;
