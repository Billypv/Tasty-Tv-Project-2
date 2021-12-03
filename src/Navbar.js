import {Container, Button} from 'react-bootstrap'
function Navbar(props){
    return(
        <Container >
                <Button onClick ={() => props.setPage("home")}>Home</Button>
                <Button onClick ={() => props.setPage("watched")}>Watched Films</Button>
                <Button onClick ={() => props.setPage("watchlist")}>Watch List</Button>
                <Button onClick ={() => props.setPage("reccomendations")}>Reccomendations</Button>
        </Container>
    )
}
export default Navbar