import {Row, Button, Card} from 'react-bootstrap'
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

    return(
        <Card style={{ width: '15rem' }}>
            <Card.Img src={props.film.posterUrl} alt={props.film.overview} width="100px"/>
            <Card.Title>{props.film.title}</Card.Title>
            <Row>
                <Button onClick={()=> deleteButton()}>Remove from Watch List</Button>
                <Button onClick={()=> watchedSwapButton()}>Add to Watched Films</Button>
            </Row>
        </Card>
    )
}
export default WatchListRendered