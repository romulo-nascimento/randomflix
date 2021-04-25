import { GetStaticProps } from 'next'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import { getEpisodes } from '../services/api'

import styles from './styles.module.scss'
import { useState } from 'react'

type Episode = {
  season: number;
  number: number;
  title: string;
  releaseDate: string;
}

type Season = {
  number: number;
  episodes: Episode[]
}

type HomeProps = {
  seasons: Season[],
  selectedEpisode: Episode
}

const getRandomEpisode = (seasons: Season[]): Episode => {
  const selectedSeason = Math.floor(Math.random() * seasons.length)
  const selectedEpisode = Math.floor(Math.random() * seasons[selectedSeason].episodes.length)

  return seasons[selectedSeason].episodes[selectedEpisode]
}

export default function Home({ seasons, selectedEpisode }: HomeProps) {
  const [radomEpisode, setRandomEpisode] = useState({ ...selectedEpisode })
  // This is done on the client side, not SSR

  // useEffect(() => {
  //   const fetchSeasons = async () => {
  //     const seasonsResponse = await fetch('http://localhost:3333/seasons')
  //     const seasons = await  seasonsResponse.json()

  //     console.log(seasons)
  //   }

  //   fetchSeasons()
  // }, [])

  const handleChooseAnotherClick = () => {
    setRandomEpisode(getRandomEpisode(seasons))
  }

  return (
    <div className={styles.home}>
      <div className={styles.episode}>
        <div>Temporada {radomEpisode.season} • Episódio {radomEpisode.number}</div>
        <h2>{radomEpisode.title}</h2>
        <div>Lançado em {radomEpisode.releaseDate}</div>
        <div className={styles.actions}>
          <a
            className={styles.watch}
            href={`https://ororo.tv/pt/shows/big-bang-theory#${radomEpisode.season}-${radomEpisode.number}`}
          >Assistir</a>
          <button onClick={handleChooseAnotherClick} className={styles.choose}>Escolher outro episódio</button>
        </div>
      </div>
    </div>
  )
}


// SSR -> This is be called on every page load

// export async function getServerSideProps() {
//     const episodesResponse = await fetch('http://localhost:3333/episodes')
//     const episodes = await  episodesResponse.json()

//     return {
//       props: {
//         episodes
//       }
//     }
// }

// SSR -> This prevents requesting for the same content on every page load

export const getStaticProps: GetStaticProps = async () => {
    // const { data } = await api.get('seasons')
    const { data } = await getEpisodes()

    const seasons = data.map(season => {
      return {
        number: parseInt(season.season),
        episodes: season.episodes.map(episode => {
          return {
            season: episode.season,
            number: episode.number,
            title: episode.title,
            releaseDate: format(new Date(episode.release_date), 'd MMM yyyy' ,{ locale: ptBR })
          }
        })
      }
    })

    return {
      props: {
        seasons,
        selectedEpisode: getRandomEpisode(seasons)
      },

      // Time is seconds for page content revalidation
      revalidate: 60 * 60 * 8
    }
}
