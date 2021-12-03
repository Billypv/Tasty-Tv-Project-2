import {useState} from 'react'
import SearchResults from './SearchResults'
import {Container, Row, Col, Button, Card, Form} from 'react-bootstrap'


function Home(props){
    const [search, setSearch] = useState("")
    return(
        <Container>
            <h1>Tasty Tv</h1>
            <Form.Control type="text" placeholder="Search" onChange={(e)=> setSearch(e.target.value)}></Form.Control>
            <SearchResults setFilmList={props.setFilmList} search={search} filmList={props.filmList}/>
        </Container>
    )
}
export default Home