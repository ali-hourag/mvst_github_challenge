import { useLazyQuery } from "@apollo/client";
import USER_REPOS_DATA from "../../graphql/queries/repos.queries";
import { useEffect, useState } from "react";
import { username } from "../../pages/userReposPage/UserReposPage";
import { UserDataReposTypes } from "../../types/userReposData";
import { ClipLoader } from "react-spinners";
import styles from "./reposList.module.css"

type ReposListProps = {
    numberOfRepos: number
}

const ReposList = ({ numberOfRepos }: ReposListProps) => {
    const [getUserReposData, result] = useLazyQuery(USER_REPOS_DATA);
    const [userReposData, setUserReposData] = useState<UserDataReposTypes | null>(null);


    useEffect(() => {
        getUserReposData({
            variables: {
                login_username: username,
                num_of_repos: numberOfRepos
            }
        })
    }, [])

    useEffect(() => {
        if (result && result.data) {
            setUserReposData(result.data.user.repositories.nodes)
        }
    }, [result])

    return (
        <div className={styles.container}>
            {!userReposData ?
                <ClipLoader />
                :
                <>

                </>
            }
        </div>
    )
}

export default ReposList