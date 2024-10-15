import { getQueryClient } from '@/lib/get-query-client';
import { QueryClientProvider as Provider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { type JSX, type ReactNode } from 'react';

/**
 * Provides a query client to the child components.
 *
 * @param children - The child components to render.
 *
 * @returns The JSX element containing the child components with the query
 *   client provided.
 */
export function QueryClientProvider({ children }: Readonly<{ children: ReactNode }>): JSX.Element {
  const queryClient = getQueryClient();

  return (
    <Provider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </Provider>
  );
}
