import Home from './home';
import Manage from './manage';
import { useFavoritesContext } from '../contexts/FavoritesContext';

const Index = () => {
    const { favoriteShows } = useFavoritesContext()

    return favoriteShows.length ? <Home/> : <Manage/>
}

export default Index;
