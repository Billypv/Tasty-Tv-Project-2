import {useState} from 'react'
import Home from './Home'
import Watched from './Watched'
import Watchlist from './Watchlist'
import Reccomendations from './Reccomendations'
import Navbar from './Navbar'
import { Container } from 'react-bootstrap'

function App() {

  const [page, setPage] = useState('home')
  const [filmList, setFilmList] = useState({watched:[], watchList:[]})

  function getPage(){
    if(page === "home"){
      return <Home setPage={setPage} setFilmList={setFilmList} filmList={filmList}/>
    } 
    else if(page ==="watched"){
      return <Watched filmList={filmList}  setFilmList={setFilmList}/>
    } else if(page ==="watchlist"){
      return <Watchlist filmList={filmList}  setFilmList={setFilmList}/>
    } else if(page ==="reccomendations"){
      return <Reccomendations setFilmList={setFilmList} filmList={filmList} page={page} />
    }
  }
  return (
    <Container>
      <Navbar setPage={setPage}/>
      {getPage()}
    </Container>
  );
}

export default App;
