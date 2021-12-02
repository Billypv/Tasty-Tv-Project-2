import {useState, useEffect} from 'react'
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
        <div>
            {filmSearchResponse.results.map((film) =>{
                return <FilmRendered film={film} setFilmList={props.setFilmList} filmList={props.filmList}/>
            })}
        </div>
    )
}
export default SearchResults