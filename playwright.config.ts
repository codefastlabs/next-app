import { defineConfig, devices } from '@playwright/test';

import '@/env.config';

// Use process.env.PORT by default and fallback to port 3000
const PORT = process.env.PORT || 3000;

// Set webServer.url and use.baseURL with the location of the WebServer respecting the correct set port
const baseURL = `http://localhost:${PORT}`;

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  /* Path relative to project root */
  testDir: './tests',

  /* The glob patterns for the test files. */
  testMatch: ['**/*.e2e.?(c|m)[jt]s?(x)'],

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: Boolean(process.env.CI),

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* {
     name: 'Microsoft Edge',
     use: { ...devices['Desktop Edge'], channel: 'msedge' },
     }, */

    /* {
     name: 'Google Chrome',
     use: { ...devices['Desktop Chrome'], channel: 'chrome' },
     }, */

    /* {
     name: 'Mobile Chrome',
     use: { ...devices['Pixel 7'] },
     }, */

    /* {
     name: 'Mobile Safari',
     use: { ...devices['iPhone 15'] },
     }, */
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'pnpm run start',
    url: baseURL,
    reuseExistingServer: !process.env.CI,
  },
});
