import { useEffect, useState } from "react";
import { UserDataReposTypes } from "../../../types/userReposData";
import styles from "./repoInfo.module.css";

type RepoInfoPropType = {
    repository: UserDataReposTypes
}
type LanguageType = {
    color: string,
    name: string
}

const RepoInfo = ({ repository }: RepoInfoPropType) => {
    const { name, description, isPrivate, updatedAt, languages } = repository
    const [date, setDate] = useState<Date | null>(null);
    const [language, setLanguage] = useState<LanguageType | null>(null);

    useEffect(() => {
        const repoDateCreation = new Date(updatedAt);
        setDate(repoDateCreation)
        if (languages.nodes.length > 0) {
            setLanguage({
                color: languages.nodes[0].color,
                name: languages.nodes[0].name
            })
        }
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.repoHeader}>
                <h3 className={styles.repoTitle}>{name}</h3>
                <label className={styles.privacyText}>{isPrivate ? "Private" : "Public"}</label>
            </div>
            {description ? <p className={styles.description}>{description}</p> : <p>{"No description."}</p>}
            {language &&
                <div className={styles.languageContainer}>
                    <span className={styles.languageColor}
                        style={{ background: language.color }}></span>
                    <p className={styles.languageName}>{language.name}</p>
                </div>}
            {date &&
                <p>{`Last updated on ${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()}`}</p>}

        </div>
    )
}

export default RepoInfo;