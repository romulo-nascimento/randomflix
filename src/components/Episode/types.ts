export interface EpisodeProps {
    name: string
    showTitle: string
    season: number
    number: number
    summary: string
    image: {
        medium: string
        original: string
    }
}