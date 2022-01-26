import { useState } from 'react';
import { Loader } from '../../components';
import SearchBar from '../../components/SearchBar';
import SearchShowList from '../../components/SearchShowList';
import { fetchShowsByTerm } from '../../services/shows';
import debounce from '../../utils/debounce';

const Manage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchShows = debounce(async (searchString: string) => {
    try {
      if (searchString) {
        const { data } = await fetchShowsByTerm(searchString);
  
        setSearchResults(data);
      }
    } finally {
      setIsLoading(false);
    }
  }, 1000);

  const handleSearchBarChange = async (searchString: string) => {
    setIsLoading(true);
    searchShows(searchString);
  };

  return (
    <section className="max-w-3xl mx-auto pt-10 flex flex-col max-h-full">
      <SearchBar
        onChange={handleSearchBarChange}
      />
      <Loader isLoading={isLoading}>
        {
          searchResults.length ? (
            <>
              <h2 className="my-8">{`${searchResults.length} shows found`}</h2>
              <div className="overflow-y-auto pb-10">
                <SearchShowList
                  shows={searchResults}
                />
              </div>
            </>
          ) : null
        }
      </Loader>
    </section>
  );
};

export default Manage;
