import {useState, useEffect} from 'react'
import FilmRendered from './FilmRendered'
import {Container, Row} from 'react-bootstrap'

function Reccomendations(props){
    const [filmReccomendations, setFilmReccomendations] = useState({results:[]})
    useEffect(()=>{
        async function filmRecFromAPI(){
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
            const data = await response.json()
            setFilmReccomendations(data)
               
        }
        filmRecFromAPI(); 
    },[props.page])

    return(
        <Container>
            <h1>Reccomendations</h1>
            <Row>
            {filmReccomendations.results.map((film,index) =>{
                return <FilmRendered key={index} film={film} setFilmList={props.setFilmList} filmList={props.filmList}/>
            })}
            </Row>
        </Container>
    )
}
export default Reccomendations