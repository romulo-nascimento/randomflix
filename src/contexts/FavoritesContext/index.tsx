import { createContext, useContext, useEffect, useState } from "react";

import { getFromStorage, saveOnStorage } from "../../utils/storage";
import { Show } from "./types";

const defaultContextValue = {
    favoriteShows: [],
    updateFavoriteShows: (shows: Show[]) => null
};

const FavoritesContext = createContext(defaultContextValue);

export const useFavoritesContext = () => useContext(FavoritesContext);

const FAVORITES_STORAGE_KEY = 'favorite-shows';

const FavoritesProvider = ({ children }) => {
    const [favoriteShows, setFavoriteShows] = useState<Show[]>([]);

    useEffect(() => {
        const shows = getFromStorage(FAVORITES_STORAGE_KEY);

        setFavoriteShows(shows);
    }, [])

    const updateFavoriteShows = (shows: Show[]) => {
        setFavoriteShows(shows);
        saveOnStorage(FAVORITES_STORAGE_KEY, shows);
    }

    return (
        <FavoritesContext.Provider value={{favoriteShows, updateFavoriteShows}}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesProvider