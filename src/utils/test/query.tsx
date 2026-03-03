import { type ReactNode, Suspense } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const queryClientForTest = new QueryClient({ defaultOptions: { queries: { retry: false } } })

export const queryWrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClientForTest}>{children}</QueryClientProvider>
)

export const queryWrapperWithSuspense = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClientForTest}>
    <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
  </QueryClientProvider>
)
