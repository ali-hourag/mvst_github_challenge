import ReposList from "../reposList/ReposList";
import Searchbar from "../searchbar/Searchbar";
import styles from "./reposContainer.module.css";

type ReposContainerProps = {
    numberOfRepos: number
}

const ReposContainer = ({ numberOfRepos }: ReposContainerProps) => {

    return (
        <div className={styles.reposContainer}>
            <Searchbar />
            <ReposList numberOfRepos={numberOfRepos} />
        </div>
    )
}

export default ReposContainer