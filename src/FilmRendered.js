function FilmRendered(props){
    function watchedButton(){
        const newWatchList = props.filmList.watchList.filter(film => film.title !== props.film.title)
        let newWatched = []
        if(props.filmList.watched.length){
            newWatched = props.filmList.watched.filter(film => film.title !== props.film.title)
        }
        props.setFilmList({watched:[...newWatched,{title:`${props.film.title}`, posterUrl:`http://image.tmdb.org/t/p/w500/${props.film.poster_path}`, overview:props.film.overview}], watchList:[...newWatchList]})
    }
    function watchListButton(){
        const newWatched = props.filmList.watched.filter(film => film.title !== props.film.title)
        let newWatchedList =[]
        if(props.filmList.watchList.length){
            newWatchedList = props.filmList.watchList.filter(film => film.title !== props.film.title)
        }
        props.setFilmList({watchList:[...newWatchedList,{title:`${props.film.title}`, posterUrl:`http://image.tmdb.org/t/p/w500/${props.film.poster_path}`, overview:props.film.overview}], watched:[...newWatched]})
    }
    return(
        <div>
            <img src={`http://image.tmdb.org/t/p/w500/${props.film.poster_path}`} alt={props.film.overview}></img>
            <p>{props.film.title}</p>
            <div className="button-container">
                <button onClick={()=> watchedButton()}>Watched</button>
                <button onClick={()=> watchListButton()}>Add to Watchlist</button>
            </div>
        </div>
    )
}
export default FilmRendered