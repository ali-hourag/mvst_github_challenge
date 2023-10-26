import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";

// Get our GitHub token from .env file
const { VITE_GITHUB_TOKEN: token } = import.meta.env;

// Create new HttpLink with the uri of the GitHub GraphQL API
const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql"
});

// Set a context in authLink so that a token is added and
// access to the GitHub GraphQL API is granted
const authLink = setContext((_, { headers }) => {

    return {
        headers: {
            ...headers,
            authorization: token ? `bearer ${token}` : "",
        }
    }
})

// Create a new ApolloClient to manage API data with GraphQL
const GraphqlApolloClient = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
})

export default GraphqlApolloClient;