import { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import USER_DATA from '../../graphql/queries/user.queries';
import styles from "./UserReposPage.module.css";
import { UserDataTypes } from '../../types/userData.d';
import ClipLoader from "react-spinners/ClipLoader";
import ProfileContainer from '../../components/profileContainer/ProfileContainer';
import ReposContainer from '../../components/reposContainer/ReposContainer';

export const username: string = "ali-hourag";

const UserReposPage = () => {
    // Use useLazyQuery so that query is called when I indicate to.
    // In the future, there may be some buttons that indicate
    // when the data should be fetched with GraphQL and it will be
    // easily escalated.
    const [getUserData, result] = useLazyQuery(USER_DATA);
    const [userData, setUserData] = useState<UserDataTypes | null>(null);


    useEffect(() => {
        getUserData({
            variables: {
                login_username: username
            }
        })
    }, [])

    useEffect(() => {
        if (result && result.data) {
            setUserData(result.data.user)
        }
    }, [result])

    return (
        <main className={styles.container}>
            {!userData ?
                <ClipLoader />
                :
                <>
                    <div className={styles.profileContainer}>
                        <ProfileContainer userInfo={userData} />
                    </div>
                    <div className={styles.reposInfoContainer}>
                        <ReposContainer numberOfRepos={userData.repositories.totalCount} />
                    </div>
                </>
            }
        </main>
    )
}

export default UserReposPage