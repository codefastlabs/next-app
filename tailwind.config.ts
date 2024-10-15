import sharedConfig from '@codefast/config-tailwind';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@codefast/ui/**/*.map',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  presets: [sharedConfig],
  theme: {
    extend: {},
  },
};

export default config;
