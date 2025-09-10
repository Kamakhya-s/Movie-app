import { Route,Routes } from "react-router";
import LandingPage from "./features/home/components/LandingPage";
import IndexGenres from "./features/genres/components/IndexGenres";
import CreateGenres from "./features/genres/components/CreateGenres";
import EditGenres from "./features/genres/components/EditGenres";
import FilterMovies from "./features/movies/components/FilterMovies";
import MovieDetails from "./features/movies/components/MovieDetails";
import CreateMovies from "./features/movies/components/CreateMovies";
import EditMovies from "./features/movies/components/EditMovies";
import CreateActors from "./features/actors/components/CreateActors";
import IndexActors from "./features/actors/components/IndexActors";
import EditActors from "./features/actors/components/EditActors";
import IndexTheaters from "./features/theaters/components/IndexTheaters";
import CreateTheaters from "./features/theaters/components/CreateTheaters";
import EditTheaters from "./features/theaters/components/EditTheaters";
import HandleRootsNotFound from "./features/movies/components/HandleRootsNotFound";

export default function AppRoutes() {
    return(
          <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/genres" element={<IndexGenres/>}/>
    <Route path="/genres/create" element={<CreateGenres/>}/>
    <Route path="/genres/edit/:id" element={<EditGenres/>}/>

    <Route path="/actors" element={<IndexActors/>}/>
    <Route path="/actors/create" element={<CreateActors/>}/>
    <Route path="/actors/edit/:id" element={<EditActors/>}/>

    <Route path="/theaters" element={<IndexTheaters/>}/>
    <Route path="/theaters/create" element={<CreateTheaters/>}/>
    <Route path="/theaters/edit/:id" element={<EditTheaters/>}/>
     
     <Route path="/movies/:id" element={<MovieDetails/>}/>
     <Route path="/movies/filter" element={<FilterMovies/>}/>
     <Route path="/movies/create" element={<CreateMovies/>}/>
     <Route path="/movies/edit/:id" element={<EditMovies/>}/>

     <Route path="*" element={<HandleRootsNotFound/>}/>

  </Routes>
    )
}