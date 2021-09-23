import React from 'react';
import ReactDOM from 'react-dom';
import { withApollo } from 'react-apollo'
import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'

import App from './App';

import './index.css';

const url = 'http://localhost:3000/graphql'

const httpLink = new HttpLink({ uri: url });

const authLink = new ApolloLink((operation, forward) => {
    // Call the next link in the middleware chain.
    return forward(operation);
});

const client = new ApolloClient({
    link: authLink.concat(httpLink), // Chain it with the HttpLink
    cache: new InMemoryCache()
});

const AppWithApollo = withApollo(App)

ReactDOM.render(
    <ApolloProvider client={client}>
        <AppWithApollo />
    </ApolloProvider>,
    document.getElementById('root'));
