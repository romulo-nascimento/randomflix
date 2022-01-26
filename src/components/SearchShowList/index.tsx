import ShowTile from '../ShowTile';
import { Show } from '../../types';
import { useFavoritesContext } from '../../contexts/FavoritesContext';

const SearchShowList = ({ shows }: { shows: Show[] }) => {
  const { favoriteShows, addFavoriteShow, removeFavoriteShow } = useFavoritesContext();

  const isFavorite = (showId: number) => {
    return favoriteShows.some(({ id }) => id === showId);
  };

  const handleShowTileClick = (show: Show) => {
    if (isFavorite(show.id)) {
      removeFavoriteShow(show);
    } else {
      addFavoriteShow(show);
    }
  };

  const getShowButtonLabel = (show: Show) => {
    return isFavorite(show.id) ? 'Remove' : 'Add';
  };

  return (
    <ul className="grid gap-6 grid-cols-2 md:grid-cols-3">
      {
        shows.map((show: Show) => (
          <ShowTile
            key={show.id}
            title={show.title}
            image={show.image.medium}
            genres={show.genres}
            buttonLabel={getShowButtonLabel(show)}
            onClick={() => handleShowTileClick(show)}
          />
        ))
      }
    </ul>
  );
};

export default SearchShowList;
