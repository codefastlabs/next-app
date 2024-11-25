import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/': new URL('./', import.meta.url).pathname,
    },
  },
  test: {
    coverage: {
      provider: 'v8',
      reportsDirectory: './coverage',
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
  },
});
