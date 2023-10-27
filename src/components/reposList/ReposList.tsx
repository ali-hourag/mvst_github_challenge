import { UserDataReposTypes } from "../../types/userReposData";
import { ClipLoader } from "react-spinners";
import { useEffect, useState } from "react";
import RepoInfo from "./repoInfo/RepoInfo";
import styles from "./reposList.module.css"

type ReposListPropTypes = {
    userReposData: UserDataReposTypes[],
    username: string
}

const ReposList = ({ userReposData, username }: ReposListPropTypes) => {
    const [reposFiltered, setReposFiltered] = useState<UserDataReposTypes[]>(userReposData);

    // Apply change in context of filters
    useEffect(() => {

    }, [])

    return (
        <div className={styles.container}>
            {!reposFiltered ?
                <ClipLoader />
                :
                <>
                    {reposFiltered.map((repo: UserDataReposTypes, index) => {
                        if (repo.owner.login === username) return <RepoInfo key={index} repository={repo} />
                    })}
                </>
            }
        </div>
    )
}

export default ReposList