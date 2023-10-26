import { useEffect, useState } from "react";
import ReposList from "../reposList/ReposList";
import Searchbar from "../searchbar/Searchbar";
import styles from "./reposContainer.module.css";
import { UserDataReposTypes } from "../../types/userReposData";
import { username } from "../../pages/userReposPage/UserReposPage";
import { useLazyQuery } from "@apollo/client";
import USER_REPOS_DATA from "../../graphql/queries/repos.queries";

type ReposContainerPropTypes = {
    numberOfRepos: number
}

const ReposContainer = ({ numberOfRepos }: ReposContainerPropTypes) => {
    const [getUserReposData, result] = useLazyQuery(USER_REPOS_DATA);
    const [userReposData, setUserReposData] = useState<UserDataReposTypes[] | null>(null);
    const [languages, setLanguages] = useState<string[] | null>(null);

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
            const languages: string[] = [];
            const repositories: UserDataReposTypes[] = result.data.user.repositories.nodes
            setUserReposData(repositories)
            repositories.forEach((repository) => {
                repository.languages.nodes.forEach((language) => {
                    if (!languages.includes(language.name)) {
                        languages.push(language.name)
                    }
                })
            })
            if (languages.length > 0) setLanguages(languages);
        }
    }, [result])

    return (
        <div className={styles.container}>
            {languages && <Searchbar languages={languages} />}
            {userReposData && <ReposList userReposData={userReposData} />}
        </div>
    )
}

export default ReposContainer