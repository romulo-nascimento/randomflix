import styles from './styles.module.scss'
import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import debounce from '../utils/debounce'
import { fetchShowsByTerm } from '../services/shows'
import ShowList from '../components/ShowList'

const Home = () => {
  const [searchResults, setSearchResults] = useState([])

  const searchShows = debounce(async s => {
    const { data } = await fetchShowsByTerm(s)

    setSearchResults(data)
  }, 1000);

  const handleSearchBarChange = async (searchString: string) => {
    console.log(searchString);
    searchShows(searchString)
  }

  return (
    <div className={styles.home}>
       <SearchBar
          onChange={handleSearchBarChange}
       />
       
       <ShowList
          shows={searchResults}
        />
    </div>
  )
}

export default Home
