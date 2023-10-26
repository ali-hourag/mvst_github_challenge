import { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import USER_DATA from '../../graphql/queries/user.queries';
import styles from "./UserReposPage.module.css";

const UserReposPage = () => {
    const [getUserData, result] = useLazyQuery(USER_DATA);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        getUserData({
            variables: {
                login_username: "ali-hourag",
                num_of_repos: 10
            }
        })

    }, [])
    return (
        <div className={styles.container}>
            Container
        </div>
    )
}

export default UserReposPage