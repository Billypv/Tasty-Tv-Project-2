import WatchRendered from "./WatchRendered"
import {Container, Row, Button} from 'react-bootstrap'

function Watched(props){
    return(
        <Container>
            <h1>Watched Films</h1>
            <Button onClick={()=>{
                props.setFilmList({watched:[],watchList:[...props.filmList.watchList]})}
            }>Delete all</Button>
            <Row>
                {props.filmList.watched.map((film,index) =>{
                    return <WatchRendered key={index} film={film} filmList={props.filmList} setFilmList={props.setFilmList}/>
                } )}
            </Row>
        </Container>
    )
}
export default Watched