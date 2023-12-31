import { useEffect, useState } from "react";
import ReposList from "../reposList/ReposList";
import Searchbar from "../searchbar/Searchbar";
import styles from "./reposContainer.module.css";
import { UserDataReposTypes } from "../../types/userReposData";
import { useLazyQuery } from "@apollo/client";
import USER_REPOS_DATA from "../../graphql/queries/repos.queries";

type ReposContainerPropTypes = {
    numberOfRepos: number,
    username: string
}

const ReposContainer = ({ numberOfRepos, username }: ReposContainerPropTypes) => {
    // Make lazyQuery when needed as previously explained
    const [getUserReposData, result] = useLazyQuery(USER_REPOS_DATA);
    const [userReposData, setUserReposData] = useState<UserDataReposTypes[] | null>(null);
    const [languages, setLanguages] = useState<string[] | null>(null);

    useEffect(() => {
        // Call query with variables for username and the number of repos
        // of that username that we want
        getUserReposData({
            variables: {
                login_username: username,
                num_of_repos: numberOfRepos
            }
        })
    }, [])

    useEffect(() => {
        if (result && result.data) {
            // if result does exit, update statte and get all languages used
            // in our ptojects.
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
            {userReposData && <ReposList username={username} userReposData={userReposData} />}
        </div>
    )
}

export default ReposContainer