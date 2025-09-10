import { NavLink } from "react-router";

export default function IndexGenres() {
return(
    <>
    <h3>Genres</h3>
    <NavLink to="/genres/create" className="btn btn-primary">Create genres</NavLink>
   

    </>
)
}