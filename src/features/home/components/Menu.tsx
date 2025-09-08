import { NavLink } from "react-router";

export default function Menu() {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">React Movies</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"></li>
                        <NavLink to="/genres" className="nav-link">Genres</NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}