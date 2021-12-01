import {useState} from 'react'
import SearchResults from './SearchResults'
function Home(props){
    return(
        <div>
            <header>
                <button onClick={() => props.setPage("logon")}>Sign Up/Log In</button>
            </header>
            <h1>Tasty Tv</h1>
            <input type="text" placeholder="Search"></input>
            <SearchResults />
            <div className="buttons-container">
                <button onClick ={() => props.setPage("watched")}>Watched Films</button>
                <button onClick ={() => props.setPage("watchlist")}>Watch List</button>
                <button onClick ={() => props.setPage("reccomendations")}>Reccomendations</button>
            </div>
        </div>
    )
}
export default Home