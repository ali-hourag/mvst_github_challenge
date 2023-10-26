import styles from "./header.module.css";
import { Icon } from "@iconify/react";
const Header = () => {
    return (
        <header className={styles.container}>
            <Icon icon="simple-icons:github" className={styles.githubicon} />
            <div className={styles.repoLabelContainer}>
                <p className={styles.repoLabelText}>Repositories</p>
            </div>
        </header>
    )
}

export default Header;