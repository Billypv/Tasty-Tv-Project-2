import WatchListRendered from "./WatchListRendered"
function Watchlist(props){
    return(
        <div>
            <h1>Films to Watch</h1>
            <button>Delete all</button>
            
            {props.filmList.watchList.map((film) =>{
                return <WatchListRendered film={film} filmList={props.filmList} setFilmList={props.setFilmList}/>
            } )}
        </div>
    )
}
export default Watchlist