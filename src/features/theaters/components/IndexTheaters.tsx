import { NavLink } from "react-router";

export default function IndexTheaters() {
    return(
        <>
        <h3>thaters</h3>
        <NavLink to="/theaters/create" className="btn btn-primary">
        Create theaters</NavLink>
        </>
    )
}