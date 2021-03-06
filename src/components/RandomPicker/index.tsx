import { useEffect, useState } from 'react';

import Button from '../Button';
import Episode from '../Episode';
import Loader from '../Loader';
import { Show } from '../../types';
import { fetchRandomEpisode } from '../../services/shows';
import { useFavoritesContext } from '../../contexts/FavoritesContext';

const fetchEpisode = async (favoriteShows: Show[]) => {
  const showIds = favoriteShows.map(({ id }) => id);

  if (showIds.length) {
    const { data: randomEpisode} = await fetchRandomEpisode(showIds);

    return randomEpisode;
  }

  return null;
};

const RandomPicker = () => {
  const { favoriteShows } = useFavoritesContext();
  const [isLoading, setIsLoading] = useState(true);
  const [randomEpisode, setRandomEpisode] = useState(null);

  useEffect(() => {
    const fetchFirstEpisode = async () => {
      setIsLoading(true);
      try {
        const randomEpisode = await fetchEpisode(favoriteShows);
    
        setRandomEpisode(randomEpisode);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFirstEpisode();
  }, [favoriteShows]);

  const handlePickEpisode = async () => {
    setIsLoading(true);
    try {
      const randomEpisode = await fetchEpisode(favoriteShows);
  
      setRandomEpisode(randomEpisode);
    } finally {
      setIsLoading(false);
    }
  };

  return randomEpisode && (
    <Loader isLoading={isLoading}>
      <Episode
        name={randomEpisode.name}
        showTitle={randomEpisode.showTitle}
        season={randomEpisode.season}
        number={randomEpisode.number}
        image={randomEpisode.image}
        summary={randomEpisode.summary}
      />
      <div className="flex flex-col max-w-xs mt-8 mx-auto">
        <a target='_blank' href={`https://trakt.tv/search/episodes?query=${encodeURI(randomEpisode.name)}`} rel="noreferrer">
          <Button className='mb-4 w-full'>Watch it</Button>
        </a>
        <Button onClick={handlePickEpisode} outline>Pick another episode</Button>
      </div>
    </Loader>
  );
};

export default RandomPicker;