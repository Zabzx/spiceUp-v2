import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoriteContextProvider = (props) => {
    const [favoritesContext, setFavoritesContext] = useState()

    return (
        <FavoritesContext.Provider value={[favoritesContext, setFavoritesContext]}>
            {props.children}
        </FavoritesContext.Provider>
    )
}