'use client';

import { QueryClientProvider } from '@/components/providers/query-client-provider';
import { Toaster } from '@codefast/ui';
import { Provider as JotaiProvider } from 'jotai';
import { type JSX, type ReactNode } from 'react';

/**
 * Wraps the provided React components with the necessary context providers.
 *
 * @param children - The React nodes that will be wrapped.
 *
 * @returns The JSX element containing the wrapped components.
 */
export function Providers({ children }: Readonly<{ children?: ReactNode }>): JSX.Element {
  return (
    <QueryClientProvider>
      <JotaiProvider>
        <div vaul-drawer-wrapper="">{children}</div>
        <Toaster />
      </JotaiProvider>
    </QueryClientProvider>
  );
}
