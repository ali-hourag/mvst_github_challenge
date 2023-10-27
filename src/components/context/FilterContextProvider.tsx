import { createContext, useState } from "react"

interface FilterContextType {
    searchInputValue: string | null,
    changeSearchInputValue: (newValue: string) => void,
    languageOptionValue: string | null,
    changeLanguageOptionValue: (newValue: string) => void,
    privacyOptionValue: string | null,
    changePrivacyOptionValue: (newValue: string) => void,
    sortOptionValue: string | null,
    changeSortOptionValue: (newValue: string) => void
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

    const changeSearchInputValue = (newValue: string) => {
        setSearchInputValue(newValue)
    }
    const changeLanguageOptionValue = (newValue: string) => {
        setLanguageOptionValue(newValue)
    }
    const changePrivacyOptionValue = (newValue: string) => {
        setPrivacyOptionValue(newValue)
    }
    const changeSortOptionValue = (newValue: string) => {
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