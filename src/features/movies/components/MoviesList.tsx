import DisplayMovie from "./DisplayMovie";
import type Movie from "../models/movie.model";
import styles from "./MoviesList.module.css"

export default function MoviesList(props : MoviesListProps){
    if(!props.movies){
        return 'Loading...'
    }else if(props.movies.length == 0){
        return "there are no element to display"
    }
    else{
return(
    <div className={styles.div}>
        {props.movies?.map(movie=>
            <DisplayMovie key={movie.id} movie={movie}/>
        )}
    </div>
)
    }
}

interface MoviesListProps{
movies ?: Movie[];
}