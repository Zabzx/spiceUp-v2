import { createContext, useState } from 'react';

export const CurrentFavoriteContext = createContext();

export const CurrentFavoriteContextProvider = (props) => {
    const [currentFavorites, setCurrentFavorites] = useState([]);

    return (
        <CurrentFavoriteContext.Provider value={[currentFavorites, setCurrentFavorites]}>
            {props.children};
        </CurrentFavoriteContext.Provider>
    )
}