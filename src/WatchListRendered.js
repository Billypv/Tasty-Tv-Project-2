function WatchListRendered(props){
    function watchedSwapButton(){
        const newWatchList = props.filmList.watchList.filter(film => {
            return film.title !== props.film.title})
        props.setFilmList({watched:[...props.filmList.watched,props.film], watchList:[...newWatchList]})
    }
    function deleteButton(){
        const newWatchList = props.filmList.watchList.filter((film) => {
            return film.title !== props.film.title})
        props.setFilmList({watched:[...props.filmList.watched], watchList:[...newWatchList]})
    }
    console.log(props.film)
    return(
        <div>
            <img src={props.film.posterUrl} alt={props.film.overview}></img>
            <p>{props.film.title}</p>
            <div className="button-container">
                <button onClick={()=> deleteButton()}>Remove from Watched</button>
                <button onClick={()=> watchedSwapButton()}>Add to Watchlist</button>
            </div>
        </div>
    )
}
export default WatchListRendered