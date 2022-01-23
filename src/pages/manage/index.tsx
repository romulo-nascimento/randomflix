import { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import SearchShowList from '../../components/SearchShowList';
import { fetchShowsByTerm } from '../../services/shows';
import debounce from '../../utils/debounce';

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

  const searchShows = debounce(async s => {
    const { data } = await fetchShowsByTerm(s);

    setSearchResults(data);
  }, 1000);

  const handleSearchBarChange = async (searchString: string) => {
    searchShows(searchString);
  };

  return (
    <section className="max-w-3xl mx-auto pt-10 flex flex-col max-h-full">
      <SearchBar
        onChange={handleSearchBarChange}
      />
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
    </section>
  );
};

export default Home;
