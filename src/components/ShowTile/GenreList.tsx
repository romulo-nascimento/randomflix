import { GenreListProps } from './type';

import styles from './styles.module.scss';

const renderFirstTwoGenres = (genres = []) => {
  return genres.slice(0,2).map((genre, i) => (
    <li
      key={`genre-${i}`}
      className={`inline ${styles['genre-list__item']}`}
    >
      {genre}
    </li>
  ));
};

const GenreList = ({ genres = [] }: GenreListProps) => {
  return genres.length ? (
    <ul className="mb-6 font-light">
      {renderFirstTwoGenres(genres)}
    </ul>
  ) : null;
};

export default GenreList;