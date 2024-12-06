import sharedConfig from '@codefast/tailwind-config';

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@codefast/ui/**/*.js',
  ],
  presets: [sharedConfig],
  theme: {
    extend: {},
  },
};

export default config;
