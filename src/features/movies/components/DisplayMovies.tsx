export default function DisplayMovies(props : DisplayMovieProps){
return (
<div>
    {props.movie.title}
</div>
)
}

interface DisplayMovieProps{
    movie: Movie;

}