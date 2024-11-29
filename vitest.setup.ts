import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

afterEach(() => {
  // Cleanup DOM
  cleanup();

  // Reset tất cả mock
  vi.restoreAllMocks();

  // Reset mocked modules
  vi.resetModules();

  // Reset timers (nếu dùng fake timers)
  vi.useRealTimers();
});
