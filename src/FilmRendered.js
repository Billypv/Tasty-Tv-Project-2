function FilmRendered(props){
    function watchedButton(){
        props.setFilmList({watched:[...props.filmList.watched,{title:`${props.film.title}`, posterUrl:`http://image.tmdb.org/t/p/w500/${props.film.poster_path}`, overview:props.film.overview}], watchList:[...props.filmList.watchList]})
    }
    function watchListButton(){
        props.setFilmList({watchList:[...props.filmList.watched,{title:`${props.film.title}`, posterUrl:`http://image.tmdb.org/t/p/w500/${props.film.poster_path}`, overview:props.film.overview}], watched:[...props.filmList.watched]})
    }
    return(
        <div>
            <img src={`http://image.tmdb.org/t/p/w500/${props.film.poster_path}`} alt={props.film.overview}></img>
            <div className="button-container">
                <button onClick={() =>watchedButton()}>Watched</button>
                <button onClick={()=> watchListButton()}>Add to Watchlist</button>
            </div>
        </div>
    )
}
export default FilmRendered