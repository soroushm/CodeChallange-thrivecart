import { type ReactNode } from 'react'
import { QueryClient as Query, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new Query()

export function QueryClient({ children }: { children: ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
