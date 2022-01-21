const ShowTile = ({ title, pictureSrc, onClick, isFavorite }) => {
    return (
        <article className="inline-flex flex-column rounded overflow-hidden">
            <h1>{title}</h1>
            <img src={pictureSrc}/>
            <button onClick={onClick}>
                {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            </button>
        </article>
    )
}

export default ShowTile