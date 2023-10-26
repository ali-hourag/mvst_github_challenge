import { gql } from '@apollo/client';

const USER_REPOS_DATA = gql`
    query GetUserReposData($login_username: String!, $num_of_repos: Int!) {
        user (login: $login_username){
          repositories(last: $num_of_repos){
            nodes {
              name
              createdAt
              updatedAt
              description
              isPrivate
              owner {
                login
              }
              languages (last: 5) {
                nodes {
                  name
                  color
                }
              }
            }
          }
        }
      }
    `


export default USER_REPOS_DATA;