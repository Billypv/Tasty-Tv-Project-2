import {useState, useEffect} from 'react'
import Home from './Home'
import Watched from './Watched'
import Watchlist from './Watchlist'
import Reccomendations from './Reccomendations'
import Logon from './Logon'
import Navbar from './Navbar'


function App() {
  const [page, setPage] = useState('home')
  const [filmList, setFilmList] = useState([])
  const [watched, setWatched] = useState([])
  const [watchList, setWatchList] = useState([])
  useEffect(() => {

  }, [filmList])



  function renderFilms(filmList){
    filmList.map((film) =>{

    })
  }
  function getPage(){
    if(page === "home"){
      return <Home setPage={setPage}/>
    } 
    else if(page ==="watched"){
      return <Watched />
    } else if(page ==="watchlist"){
      return <Watchlist />
    } else if(page ==="reccomendations"){
      return <Reccomendations />
    } else if(page ==="logon"){
      return <Logon />
    }
  }
  return (
    <body>
      {page !=="home" && <Navbar setPage={setPage}/>}
      {getPage()}
    </body>
  );
}

export default App;
