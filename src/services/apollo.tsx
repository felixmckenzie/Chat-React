import {  HttpLink, split, ApolloLink } from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'
import { onError } from '@apollo/client/link/error'


export const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`))
    }
    if (networkError) console.error(`[Network error]: ${networkError}`)
})

 const wsLink = new GraphQLWsLink(
              createClient({
                  url: import.meta.env.VITE_WS_ENDPOINT || 'ws://localhost:4000/graphql',
              })
          )
       

const httpLink = new HttpLink({
    uri: import.meta.env.VITE_PUBLIC_HTTP_ENDPOINT,
    headers: {
        Accept: 'application/json',
    },
})


export const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query)
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
    },
    wsLink || new ApolloLink((operation, forward) => forward(operation)),
    httpLink
)


