import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ApolloProvider } from '@apollo/client'
import GraphqlApolloClient from './graphql/client/graphql.client.ts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={GraphqlApolloClient}>
    <App />
  </ApolloProvider>,
)
