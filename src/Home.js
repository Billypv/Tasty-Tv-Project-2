import {useState} from 'react'
import SearchResults from './SearchResults'
function Home(props){
    const [search, setSearch] = useState("")
    return(
        <div>
            <header>
                <button onClick={() => props.setPage("logon")}>Sign Up/Log In</button>
            </header>
            <h1>Tasty Tv</h1>
            <input type="text" placeholder="Search" onChange={(e)=> setSearch(e.target.value)}></input>
            <SearchResults setFilmList={props.setFilmList} search={search} filmList={props.filmList}/>
        </div>
    )
}
export default Home