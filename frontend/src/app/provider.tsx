// app/providers.tsx
'use client'

import { EnvironmentProvider } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return <EnvironmentProvider>{children}</EnvironmentProvider>
}