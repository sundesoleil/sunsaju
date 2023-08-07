'use client'

import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(new QueryClient())

  return (
    <QueryClientProvider client={client}>
      <div className="container">{children}</div>
    </QueryClientProvider>
  )
}

export default Providers
