function WatchRendered(props){
    function watchListSwapButton(){
        const newWatched = props.filmList.watched.filter(film => {
            return film.title !== props.film.title})
        props.setFilmList({watchList:[...props.filmList.watched,props.film], watched:[...newWatched]})
    }
    function deleteButton(){
        const newWatched = props.filmList.watched.filter((film) => {
            return film.title !== props.film.title})
        props.setFilmList({watched:[...newWatched], watchList:[...props.filmList.watchList]})
    }
    console.log(props.film)
    return(
        <div>
            <img src={props.film.posterUrl} alt={props.film.overview}></img>
            <p>{props.film.title}</p>
            <div className="button-container">
                <button onClick={()=> deleteButton()}>Remove from Watched</button>
                <button onClick={()=> watchListSwapButton()}>Add to Watchlist</button>
            </div>
        </div>
    )
}
export default WatchRendered