import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './lib/image-loader.ts',
    deviceSizes: [720, 1440, 2880],
    imageSizes: [360],
  },
  trailingSlash: true,
};

export default nextConfig;
