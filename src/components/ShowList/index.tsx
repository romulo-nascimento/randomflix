import { useFavoritesContext } from "../../contexts/FavoritesContext";
import { Show } from "../../contexts/FavoritesContext/types";
import ShowTile from "../ShowTile";

const ShowList = ({ shows }) => {
  const { favoriteShows, updateFavoriteShows } = useFavoritesContext()

  const isFavorite = (showImdbId) => {
    return favoriteShows.some(({ imdbId }) => imdbId === showImdbId);
  }

  const addShowToFavorites = (show) => {
    const newFavoriteShows = [...favoriteShows, show]
    updateFavoriteShows(newFavoriteShows);
  }
  
  const removeShowFromFavorites = (show) => {
    const newFavoriteShows = favoriteShows.filter(({ imdbId }) => {
      return imdbId !== show.imdbId;
    });
    
    updateFavoriteShows(newFavoriteShows);
  }

  const handleShowTileClick = (show) => {
    if (isFavorite(show.imdbId)) {
      removeShowFromFavorites(show);
    } else {
      addShowToFavorites(show)
    }
  }

  return (
    <ul>
        {
            shows.map((show: Show) => (
                <ShowTile
                key={show.imdbId}
                title={show.title}
                pictureSrc={show.pictureSrc}
                isFavorite={isFavorite(show.imdbId)}
                onClick={() => handleShowTileClick(show)}
                />
            ))
        }
    </ul>
  )
}

export default ShowList
