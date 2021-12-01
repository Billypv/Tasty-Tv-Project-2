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

  useEffect(()=>{
    async function getFilms(){
      const response = await fetch("https://hub.dummyapis.com/vj/wzGUkpZ")
      const data = await response.json();
      setFilmList(data)      
    }
    getFilms();
  },[])
  useEffect(() => {

  }, [filmList])



  function renderFilms(films){
    films.map((film) =>{

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
