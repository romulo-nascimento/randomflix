import Link from 'next/link'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'

import api from '../../services/api'

type Episode = {
    season: number;
    number: number;
    title: string;
    releaseDate: string;
  }

type SeasonParams = {
    episodes: Episode[]
}

const Season = ({ episodes }: SeasonParams) => {
    const { query } = useRouter()

    return (
        <main>
            <h1>Temporada {query.slug}</h1>
            <div>{JSON.stringify(episodes)}</div>
            <Link href="/">
                Voltar
            </Link>
        </main>
    )
}

export default Season

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug: seasonNumber } = params
    const { data = [] } = await api.get('seasons')

    const season = data.find(({ season }) => season === seasonNumber )
    const episodes = season ? season.episodes.map(episode => {
        return {
            season: parseInt(episode.season),
            number: parseInt(episode.number),
            title: episode.title,
            releaseDate: format(new Date(episode.release_date), 'd MMM yyyy' ,{ locale: ptBR })
          }
    }) : []

    return {
      props: {
        episodes
      },
      revalidate: 60 * 60 * 8
    }
}