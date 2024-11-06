/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@codefast/ui'],
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.tsx',
        },
      },
    },
  },
  output: 'standalone',
};

export default nextConfig;
