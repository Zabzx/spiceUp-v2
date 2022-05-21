import { createContext, useState } from 'react';

export const SearchedForContext = createContext();

export const SearchedForContextProvider = (props) => {
    const [searchedFor, setSearchedFor] = useState('');

    return (
        <SearchedForContext.Provider value={[searchedFor, setSearchedFor]}>
            {props.children}
        </SearchedForContext.Provider>
    )
}