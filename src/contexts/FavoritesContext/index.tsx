import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { getFromStorage, saveOnStorage } from '../../utils/storage';
import { Show } from '../../types';

interface FavoritesContext {
    favoriteShows: Show[]
    addFavoriteShow: (show: Show) => void
    removeFavoriteShow: (show: Show) => void  
}

const defaultContextValue: FavoritesContext = {
  favoriteShows: [],
  addFavoriteShow: () => null,
  removeFavoriteShow: () => null
};

const FavoritesContext = createContext(defaultContextValue);

export const useFavoritesContext = () => useContext(FavoritesContext);

const FAVORITES_STORAGE_KEY = 'favorite-shows';

const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteShows, setFavoriteShows] = useState<Show[]>([]);

  useEffect(() => {
    const shows = getFromStorage(FAVORITES_STORAGE_KEY);

    if (shows) {
      setFavoriteShows(shows);
    }
  }, []);

  const addFavoriteShow = (show: Show) => {
    const newFavoriteShows = [...favoriteShows, show];

    setFavoriteShows(newFavoriteShows);
    saveOnStorage(FAVORITES_STORAGE_KEY, newFavoriteShows);
  };
    
  const removeFavoriteShow = (show: Show) => {
    const newFavoriteShows = favoriteShows.filter(({ id }) => id !== show.id);
      
    setFavoriteShows(newFavoriteShows);
    saveOnStorage(FAVORITES_STORAGE_KEY, newFavoriteShows);
  };

  return (
    <FavoritesContext.Provider value={{
      favoriteShows,
      addFavoriteShow,
      removeFavoriteShow
    }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;