/**
 * Determine the build output based on the environment variable
 */
const BUILD_OUTPUT = process.env.NEXT_CONFIG_BUILD_OUTPUT === 'standalone' ? 'standalone' : undefined;

/**
 * SVG Loader Configuration
 */
const svgLoader = {
  loader: '@svgr/webpack',
  options: {
    icon: true,
  },
};

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@codefast/ui'],
    turbo: {
      rules: {
        '*.svg': {
          as: '*.tsx',
          loaders: [svgLoader],
        },
      },
    },
  },
  output: BUILD_OUTPUT,
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    // Add a rule to process all SVG files as React components
    config.module.rules.push({
      test: /\.svg$/i,
      use: [svgLoader],
    });

    // Exclude SVG from the original file loader rule
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
