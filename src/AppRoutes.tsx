import { Route } from "react-router";
import { Routes } from "react-router";
import LandingPage from "./features/home/components/LandingPage";
import IndexGenres from "./features/genres/components/IndexGenres";
import CreateGenres from "./features/genres/components/CreateGenres";
import EditGenres from "./features/genres/components/EditGenres";

export default function AppRoutes() {
    return(
          <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/genres" element={<IndexGenres/>}/>
    <Route path="/genres/create" element={<CreateGenres/>}/>
    <Route path="/genres/edit" element={<EditGenres/>}/>
     
  </Routes>
    )
}