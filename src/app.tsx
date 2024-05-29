import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense, ErrorBoundary } from 'solid-js';
import Nav from '~/components/Nav';
import { SolidQueryDevtools } from '@tanstack/solid-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';
import './app.css';

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: 5000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <SolidQueryDevtools />
      <Router
        root={(props) => (
          <div class="flex h-screen">
            <ErrorBoundary fallback={<div>Top Level Error Boundary Hit</div>}>
              <Suspense>{props.children}</Suspense>
            </ErrorBoundary>
          </div>
        )}
      >
        <FileRoutes />
      </Router>
    </QueryClientProvider>
  );
}
