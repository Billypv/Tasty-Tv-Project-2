import WatchRendered from "./WatchRendered"
function Watched(props){
    return(
        <div>
            <h1>Watched Films</h1>
            <button>Delete all</button>
            
            {props.filmList.watched.map((film) =>{
                return <WatchRendered film={film} filmList={props.filmList} setFilmList={props.setFilmList}/>
            } )}
        </div>
    )
}
export default Watched