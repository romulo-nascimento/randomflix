import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '../Button';
import ShowTile from '../ShowTile';
import { Show } from '../../types';
import { useFavoritesContext } from '../../contexts/FavoritesContext';

const FavoriteShowsList = () => {
  const { route } = useRouter();
  const { favoriteShows, removeFavoriteShow } = useFavoritesContext();

  const isManagingFavorites = route === '/manage';

  return (
    <article className='flex flex-col py-8 max-h-screen h-full'>
      <h2 className="mb-4 px-8 flex-shrink-0">Your favorite shows</h2>
      <ul className="flex flex-col flex-grow overflow-y-auto px-8">
        {
          favoriteShows.map((show: Show) => (
            <li
              key={show.id}
            >
              <ShowTile
                title={show.title}
                image={show.image.medium}
                genres={show.genres}
                {...isManagingFavorites && {
                  buttonLabel: 'Remove',
                  onClick: () => removeFavoriteShow(show)
                }}
              />
            </li>
          ))
        }
      </ul>
      <div className="flex flex-col pt-8 px-8 border-t-2">
        <Button>
          <Link href={isManagingFavorites ? '/' : '/manage'}>
            {isManagingFavorites ? 'Done' : 'Manage favorite shows'}
          </Link>
        </Button>
      </div>
    </article>
  );
};

export default FavoriteShowsList;
