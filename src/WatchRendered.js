import {Container, Row, Col, Button, Card} from 'react-bootstrap'
function WatchRendered(props){
    function watchListSwapButton(){
        const newWatched = props.filmList.watched.filter(film => {
            return film.title !== props.film.title})
        props.setFilmList({watchList:[...props.filmList.watchList,props.film], watched:[...newWatched]})
    }
    function deleteButton(){
        const newWatched = props.filmList.watched.filter((film) => {
            return film.title !== props.film.title})
        props.setFilmList({watched:[...newWatched], watchList:[...props.filmList.watchList]})
    }
    return(
        <Card style={{ width: '15rem' }}>
            <Card.Img src={props.film.posterUrl} alt={props.film.overview}/>
            <Card.Title>{props.film.title}</Card.Title>
            <Row>
                <Button onClick={()=> deleteButton()}>Remove from Watched</Button>
                <Button onClick={()=> watchListSwapButton()}>Add to Watchlist</Button>
            </Row>
        </Card>
    )
}
export default WatchRendered