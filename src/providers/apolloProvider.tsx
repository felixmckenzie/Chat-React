import { ApolloProvider, ApolloClient, InMemoryCache, from } from "@apollo/client";
import {errorLink, splitLink} from '../services/apollo'
import { useAuth } from "@clerk/clerk-react";
import { setContext } from "@apollo/client/link/context";
import { useMemo } from "react";

export const ApolloProviderWrapper = ({ children }) => {
  const { getToken } = useAuth();
  
  const apolloClient = useMemo(() => {
    const authMiddleware = setContext(async (req, { headers }) => {
      const token = await getToken();
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      };
    });

    return new ApolloClient({
      link: from([authMiddleware, errorLink, splitLink]),
      cache: new InMemoryCache(),
    });    
  }, [getToken])

  return(
    <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
  )
};