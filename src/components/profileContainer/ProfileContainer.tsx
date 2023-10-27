import { UserDataTypes } from "../../types/userData";
import styles from "./profileContainer.module.css";
import { RiUserFollowLine } from "react-icons/ri";

// PropTypes
type ProfileContainerProps = {
    userInfo: UserDataTypes;
}

const ProfileContainer = ({ userInfo }: ProfileContainerProps) => {
    // User data from query
    const { name, login, avatarUrl, followers, following } = userInfo;

    return (
        //  print user data
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src={avatarUrl} className={styles.img} />
            </div>
            <div className={styles.nameContainer}>
                <h2 className={styles.name_h2}>{name}</h2>
                <h4 className={styles.name_h4}>{login}</h4>
            </div>

            <div className={styles.followingContainer}>
                <RiUserFollowLine className={styles.followIcon} />
                <p className={styles.followersText}>followers: {followers.totalCount}</p>
                <p className={styles.followingText}>following: {following.totalCount}</p>
            </div>
        </div>
    )
}

export default ProfileContainer;