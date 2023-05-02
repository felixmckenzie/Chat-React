import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import { ApolloProviderWrapper } from './providers/apolloProvider'
const clerk_pub_key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={clerk_pub_key}>
      <ApolloProviderWrapper>
        <App/>
      </ApolloProviderWrapper>
    </ClerkProvider>
  </BrowserRouter>
)
