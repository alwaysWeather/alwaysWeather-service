import React from 'react';
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';

import { AppProps } from 'next/app';

export const link = createHttpLink({
  uri: 'https://countries.trevorblades.com',
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export default ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
);
