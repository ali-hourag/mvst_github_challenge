import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ApolloProvider } from '@apollo/client'
import GraphqlApolloClient from './graphql/client/graphql.client.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // Wrap the App with ApolloProvider
  <ApolloProvider client={GraphqlApolloClient}>
    <App />
  </ApolloProvider>,
)
