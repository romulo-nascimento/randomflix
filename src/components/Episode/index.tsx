import Image from 'next/image';

import { EpisodeProps } from './types';

const Episode = ({
  name,
  showTitle,
  season,
  number,
  summary,
  image
}: EpisodeProps) => {
  return (
    <article className="inline-flex flex-col rounded-3xl overflow-hidden bg-lightest-purple p-8">
      <div className="rounded-3xl overflow-hidden bg-purple mb-4">
        <Image
          src={image.original}
          height="257"
          width="644"
          layout="responsive"
          className="mix-blend-hard-light grayscale object-cover"
          alt=""
        />
      </div>
      <h2 className="text-2xl mb-4">{name}</h2>
      <p className="font-bold text-base mb-6">
        {showTitle} • Season {season} • Episode {number}
      </p>
      <p className="font-light">{summary}</p>
    </article>
  );
};

export default Episode;