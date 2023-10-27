import React, { useEffect, useState } from "react";
import styles from "./searchbar.module.css";
import { useFilterContext } from "../../utils/hooks/useFilterContext";

type SearchbarPropTypes = {
    languages: string[]
}

type OptionTypes = {
    value: string,
    label: string
}

type SelectOptionsType = {
    filterType: string,
    selectOptionsArray: OptionTypes[]
}

const Searchbar = ({ languages }: SearchbarPropTypes) => {

    const [selectOptions, setSelectOptions] = useState<SelectOptionsType[] | null>(null);
    const { changeSearchInputValue, changeLanguageOptionValue,
        changePrivacyOptionValue, changeSortOptionValue,
        searchInputValue } = useFilterContext();


    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>, filterType: string) => {
        const value = event.target.value;
        if (filterType === "Language") {
            if (value === "all") changeLanguageOptionValue(null)
            else changeLanguageOptionValue(value)
        } else if (filterType === "Privacy") {
            if (value === "all") changePrivacyOptionValue(null)
            else changePrivacyOptionValue(value)
        } else {
            changeSortOptionValue(value)
        }
    }

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value === "") changeSearchInputValue(null)
        else changeSearchInputValue(value)
    }
    useEffect(() => {
        const selectOptionsLanguages: OptionTypes[] = [{
            value: 'all',
            label: 'All'
        }];

        languages.forEach((language) => {
            selectOptionsLanguages.push({
                value: language,
                label: language
            })
        })

        const selectOptionsPrivacy: OptionTypes[] = [
            { value: 'all', label: 'All' },
            { value: 'public', label: 'Public' },
            { value: 'private', label: 'Private' }
        ]

        const selectOptionsSort: OptionTypes[] = [
            { value: 'lastUpdated', label: 'Last Updated' },
            { value: 'name', label: 'Name' }
        ]

        setSelectOptions([
            { filterType: "Language", selectOptionsArray: selectOptionsLanguages },
            { filterType: "Privacy", selectOptionsArray: selectOptionsPrivacy },
            { filterType: "Sort", selectOptionsArray: selectOptionsSort }
        ]);
    }, [])

    return (
        <div className={styles.container}>
            <input className={styles.searchInput}
                placeholder="Find a repository..."
                onChange={handleSearchInput}
                value={searchInputValue ? searchInputValue : ""}
            />
            <div className={styles.filterContainer}>
                {selectOptions && selectOptions.map((select, index) => (

                    <select className={styles.select}
                        key={index}
                        defaultValue={""}
                        name={select.filterType}
                        id={select.filterType}
                        onChange={(e) => handleSelect(e, select.filterType)}
                    >
                        <option value="" disabled>{select.filterType}</option>

                        {select.selectOptionsArray.map((option, index) => (
                            <option key={index} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                ))}
            </div>
        </div>
    )
}

export default Searchbar;