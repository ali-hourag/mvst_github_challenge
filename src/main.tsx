import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ApolloProvider } from '@apollo/client'
import GithubGraphqlApolloClient from './graphql/client/graphql.client.ts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={GithubGraphqlApolloClient}>
    <App />
  </ApolloProvider>,
)
