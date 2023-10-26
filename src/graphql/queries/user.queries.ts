import { gql } from '@apollo/client';

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