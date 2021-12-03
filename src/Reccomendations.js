import {useState, useEffect} from 'react'
import FilmRendered from './FilmRendered'
import {Container, Row} from 'react-bootstrap'

function Reccomendations(props){
    const [filmGenre, setFilmGenre] = useState([{id:80}])
    const [filmReccomendations, setFilmReccomendations] = useState({results:[]})
    useEffect(()=>{
        async function getReccomendations(){
            const chosenGenre = filmGenre[Math.floor(Math.random()*filmGenre.length)].id
            const genreResponse = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${chosenGenre}&with_watch_monetization_types=flatrate`)
            const genreData = await genreResponse.json()
            setFilmReccomendations(genreData) 
        }

        async function genreFromAPI(){
            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=`)
            const data = await response.json()
            setFilmGenre(data)
            getReccomendations();
            
        }

        genreFromAPI();

        
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