import React, { useEffect, useState } from "react";
import styles from "./searchbar.module.css";

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


    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>, filterType: string) => {
        console.log(event.target.value);
        console.log(filterType);
    }

    useEffect(() => {
        const selectOptionsLanguage: OptionTypes[] = [{
            value: 'all',
            label: 'All'
        }];
        languages.forEach((language) => {
            selectOptionsLanguage.push({
                value: language,
                label: language
            })
        })
        const selectOptionsType = [
            { value: 'all', label: 'All' },
            { value: 'public', label: 'Public' },
            { value: 'private', label: 'Private' }
        ]

        const selectOptionsSort = [
            { value: 'last', label: 'Last Updated' },
            { value: 'name', label: 'Name' }
        ]

        setSelectOptions([
            { filterType: "language", selectOptionsArray: selectOptionsLanguage },
            { filterType: "privacy", selectOptionsArray: selectOptionsType },
            { filterType: "sort", selectOptionsArray: selectOptionsSort }
        ]);
    }, [])

    return (
        <div className={styles.container}>
            <input className={styles.searchInput}
                placeholder="Find a repository..."
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