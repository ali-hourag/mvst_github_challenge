import { gql } from '@apollo/client';

/**
 * Query that returns user information
 */
const USER_DATA = gql`
    query GetUserData($login_username: String!) {
        user (login: $login_username){
            name
            login
            avatarUrl
            followers {
              totalCount
            }
            following {
              totalCount
            }
            repositories{
              totalCount
            }
        }
    }
    `


export default USER_DATA;