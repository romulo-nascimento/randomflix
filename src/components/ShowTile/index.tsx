import Image from 'next/image';

import Button from '../Button';
import GenreList from './GenreList';
import { ShowTileProps } from './type';

const ShowTile = ({
  title,
  image,
  genres,
  buttonLabel,
  onClick
}: ShowTileProps) => {
    
  return (
    <article className="flex flex-col rounded-3xl overflow-hidden bg-lightest-purple p-4 my-4">
      <Image
        width="258"
        height="362"
        layout="responsive"
        src={image}
        className="rounded-3xl"
        alt="Show cover image"
      />
      <h3 className="my-6 font-bold text-base">{title}</h3>
      <GenreList genres={genres} />
      {
        buttonLabel ? (
          <Button
            outline
            onClick={onClick}
            className="mt-auto"
          >
            {buttonLabel}
          </Button>
        ) : null
      }
    </article>
  );
};

export default ShowTile;