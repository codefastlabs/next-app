import { isServer, QueryClient } from '@tanstack/react-query';

/**
 * Creates a new instance of QueryClient.
 * @returns A new instance of QueryClient.
 */
function makeQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid fetching immediately on the client
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined;

/**
 * Retrieves the query client.
 *
 * If the code is running on the server, a new query client is always created.
 *
 * If the code is running on the browser, a new query client is created if
 * there isn't one already. This is important to avoid creating a new client if
 * React suspends during the initial render.
 *
 * @returns The query client.
 */
export function getQueryClient(): QueryClient {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient();
  }

  // Browser: make a new query client if we don't already have one
  // This is very important, so we don't re-make a new client if React
  // suspends during the initial render. This may not be needed if we
  // have a suspense boundary BELOW the creation of the query client
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }

  return browserQueryClient;
}
