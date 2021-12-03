import WatchListRendered from "./WatchListRendered"
import {Container, Row, Button} from 'react-bootstrap'

function Watchlist(props){
    return(
        <Container>
            <h1>Films to Watch</h1>
            <Button onClick={()=>{
                props.setFilmList({watchList:[],watched:[...props.filmList.watched]})}
            }>Delete all</Button>
            <Row>
                {props.filmList.watchList.map((film, index) =>{
                    return <WatchListRendered key={index} film={film} filmList={props.filmList} setFilmList={props.setFilmList}/>
                } )}
            </Row>
        </Container>
    )
}
export default Watchlist