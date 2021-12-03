import {useState, useEffect} from 'react'
import { Container, Row } from 'react-bootstrap'
import FilmRendered from './FilmRendered'
function SearchResults(props){
    const [filmSearchResponse, setFilmSearchResponse] = useState({results:[]})
    useEffect(()=>{
        async function filmsFromAPI(){
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${props.search}`)
            const data = await response.json()
            setFilmSearchResponse(data)

        }
        props.search.length && filmsFromAPI();
        
    },[props.search])
    

    return(
        <Container fluid >
            <Row>
            {filmSearchResponse.results.map((film, index) =>{
                return <FilmRendered key={index} film={film} setFilmList={props.setFilmList} filmList={props.filmList}/>
            })}
            </Row>
        </Container>
    )
}
export default SearchResults