import { NavLink } from "react-router";

export default function IndexActors() {
    return(
    <>
    <h3> ACTORS</h3>
    <NavLink to="/actors/create" className="btn btn-primary">Create Actors</NavLink>
    </>)
}