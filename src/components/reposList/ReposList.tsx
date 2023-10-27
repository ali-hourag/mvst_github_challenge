import { UserDataReposTypes } from "../../types/userReposData";
import { ClipLoader } from "react-spinners";
import { useEffect, useState } from "react";
import RepoInfo from "./repoInfo/RepoInfo";
import styles from "./reposList.module.css"
import { useFilterContext } from "../../utils/hooks/useFilterContext";
import { checkLastDate } from "../../utils/functions/checkLastDate";

type ReposListPropTypes = {
    userReposData: UserDataReposTypes[],
    username: string
}

const ReposList = ({ userReposData, username }: ReposListPropTypes) => {
    const [reposFiltered, setReposFiltered] = useState<UserDataReposTypes[] | null>(null);
    const { searchInputValue, languageOptionValue, privacyOptionValue, sortOptionValue } = useFilterContext();

    // Filter reposFiltered states by seachInput and elements selected.
    // It is called when first rendered or when any filterContext variable
    // is altered
    useEffect(() => {
        let repositories = userReposData;
        // searchInput filter
        if (searchInputValue) {
            repositories = repositories.filter(repo => repo.name.toLowerCase().includes(searchInputValue.toLowerCase()));
        }
        // privacy select element filter
        if (privacyOptionValue) {
            if (privacyOptionValue === "public") repositories = repositories.filter((repo) => !repo.isPrivate)
            else repositories = repositories.filter((repo) => repo.isPrivate)
        }
        // language select element filter
        if (languageOptionValue) {
            repositories = repositories.filter(repo => {
                let coincides = false;
                repo.languages.nodes.forEach((language) => {
                    if (language.name === languageOptionValue)
                        coincides = true
                })
                return coincides
            })
        }
        // sort by select element filter
        if (sortOptionValue) {

            if (sortOptionValue == "lastUpdated") {
                let sortReposDate = repositories
                let n = repositories.length;
                let aux;
                for (let i = 1; i < n; i++) {
                    for (let j = 0; j < (n - i); j++) {
                        const date1 = sortReposDate[j].updatedAt.split("T")[0];
                        const date2 = sortReposDate[j + 1].updatedAt.split("T")[0];
                        if (checkLastDate(date2, date1)) {
                            aux = sortReposDate[j]
                            sortReposDate[j] = sortReposDate[j + 1]
                            sortReposDate[j + 1] = aux
                        }
                    }
                }
                repositories = sortReposDate
            } else {
                repositories = repositories.sort((a, b): number => {
                    if (a.name < b.name) return -1;
                    if (a.name < b.name) return 1;
                    return 0;
                })
            }
            repositories = repositories.filter(() => true)
        }
        setReposFiltered(repositories)

    }, [searchInputValue, languageOptionValue, privacyOptionValue, sortOptionValue])

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