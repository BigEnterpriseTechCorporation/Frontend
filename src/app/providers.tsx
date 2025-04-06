<<<<<<< HEAD
'use client'

import React, { ReactNode } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client'

// Create a client for development that doesn't require authentication
const createApolloClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'https://rpi.tail707b9c.ts.net/api/graphql',
      // Add any headers needed here
      headers: {
        // If you have a test token, you can add it here
        // "Authorization": "Bearer test-token"
      }
    }),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
      },
      query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
      },
    },
  })
}

export function Providers({ children }: { children: ReactNode }) {
  const client = createApolloClient()

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
} 
=======
 
>>>>>>> 56cb3d0db08ea368295e8dba6ea0a0b81a46f1e5
