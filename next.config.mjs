/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@codefast/ui'],
    turbo: {
      rules: {
        '*.svg': {
          as: '*.tsx',
          loaders: [
            {
              loader: '@svgr/webpack',
              options: {
                icon: true,
              },
            },
          ],
        },
      },
    },
  },
  output: 'standalone',
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    // Add a rule to process all SVG files as React components
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
          },
        },
      ],
    });

    // Exclude SVG from the original file loader rule
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
