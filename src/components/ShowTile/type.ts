export interface ShowTileProps {
    title: string
    image: string
    genres?: string[]
    buttonLabel?: string
    onClick?: () => void
}

export interface GenreListProps {
    genres?: string[]
}