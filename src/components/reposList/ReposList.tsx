import { UserDataReposTypes } from "../../types/userReposData";
import { ClipLoader } from "react-spinners";
import styles from "./reposList.module.css"

type ReposListPropTypes = {
    userReposData: UserDataReposTypes[]
}

const ReposList = ({ userReposData }: ReposListPropTypes) => {


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