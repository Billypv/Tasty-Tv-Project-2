function Navbar(props){
    return(
        <div>
                <button onClick ={() => props.setPage("home")}>Home</button>
                <button onClick ={() => props.setPage("watched")}>Watched Films</button>
                <button onClick ={() => props.setPage("watchlist")}>Watch List</button>
                <button onClick ={() => props.setPage("reccomendations")}>Reccomendations</button>
        </div>
    )
}
export default Navbar