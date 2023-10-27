import { createContext, useState } from "react"

interface FilterContextType {
    searchInputValue: string | null,
    changeSearchInputValue: (newValue: string | null) => void,
    languageOptionValue: string | null,
    changeLanguageOptionValue: (newValue: string | null) => void,
    privacyOptionValue: string | null,
    changePrivacyOptionValue: (newValue: string | null) => void,
    sortOptionValue: string | null,
    changeSortOptionValue: (newValue: string | null) => void
}

export const filterContext = createContext<FilterContextType>({
    searchInputValue: null,
    changeSearchInputValue: () => { },
    languageOptionValue: null,
    changeLanguageOptionValue: () => { },
    privacyOptionValue: null,
    changePrivacyOptionValue: () => { },
    sortOptionValue: null,
    changeSortOptionValue: () => { }
})

export const FilterContextProvider = ({ ...props }) => {
    const [searchInputValue, setSearchInputValue] = useState<string | null>(null);
    const [languageOptionValue, setLanguageOptionValue] = useState<string | null>(null);
    const [privacyOptionValue, setPrivacyOptionValue] = useState<string | null>(null);
    const [sortOptionValue, setSortOptionValue] = useState<string | null>(null);

    const changeSearchInputValue = (newValue: string | null) => {
        setSearchInputValue(newValue)
    }
    const changeLanguageOptionValue = (newValue: string | null) => {
        setLanguageOptionValue(newValue)
    }
    const changePrivacyOptionValue = (newValue: string | null) => {
        setPrivacyOptionValue(newValue)
    }
    const changeSortOptionValue = (newValue: string | null) => {
        setSortOptionValue(newValue)
    }

    return (
        <filterContext.Provider value={{
            searchInputValue, languageOptionValue, privacyOptionValue, sortOptionValue,
            changeSearchInputValue, changeLanguageOptionValue, changePrivacyOptionValue, changeSortOptionValue
        }}>
            {props.children}
        </filterContext.Provider>
    )
}