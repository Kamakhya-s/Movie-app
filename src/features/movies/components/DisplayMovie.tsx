import type Movie from "../models/movie.model";
import styles from "../components/DisplayMovie.module.css"
import { NavLink } from "react-router";

export default function DisplayMovie(props: DisplayMovieProps) {
  const buildLink = () => `/movie/${props.movie.id}`;
  return (
    <div className={styles.div}>
      <NavLink to={buildLink()}>
        <img src={props.movie.poster} alt="poster" />
      </NavLink>
      <p>
        <NavLink to={buildLink()}>{props.movie.title}</NavLink>
      </p>
    </div>
  );
}

interface DisplayMovieProps {
  movie: Movie;
}
