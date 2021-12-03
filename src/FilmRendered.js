import {Container, Row, Col, Button, Card} from 'react-bootstrap'
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
        <Card style={{ width: '15rem' }}>
            <Card.Img src={`http://image.tmdb.org/t/p/w500/${props.film.poster_path}`} alt={props.film.overview} width="250px"></Card.Img>
            <Card.Title>{props.film.title}</Card.Title>
            <Row>
                <Button onClick={()=> watchedButton()}>Watched</Button>
                <Button onClick={()=> watchListButton()}>Add to Watchlist</Button>
            </Row>
        </Card>
    )
}
export default FilmRendered