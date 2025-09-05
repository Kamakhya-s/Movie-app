
import { useEffect, useState } from "react"
import MoviesList from "./features/movies/components/MoviesList"
import type Movie from "./features/movies/models/movie.model"

function App() {
const [movies, setMovies] = useState<AppState>({});

  useEffect(()=>{
const inTheaters : Movie[]=[
  {
  id:1,
  title:"the wild robot",
  poster:"https://upload.wikimedia.org/wikipedia/en/7/70/The_Wild_Robot_poster.jpg"
},
{
  id:2,
  title:"Avengers : Endgame",
  poster:"https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
}
]

const upcomingReleases : Movie[]=[
  {
  id:3,
  title:"avengers doomsday",
  poster:"https://upload.wikimedia.org/wikipedia/en/9/96/Avengers_Doomsday_logo.jpeg"
},

]
setTimeout(()=>{
setMovies({inTheaters,upcomingReleases})
},500)
  },[])


  return (
    <>
    <h3>In Theaters</h3>
   <MoviesList movies={movies.inTheaters}/>

     <h3>Upcoming Releases</h3>
   <MoviesList movies={movies.upcomingReleases}/>
   </>
  )
}


interface AppState{
  inTheaters?: Movie[];
  upcomingReleases?:Movie[];
}
export default App
 