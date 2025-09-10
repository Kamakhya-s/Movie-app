import { useParams } from "react-router"

export default function MovieDetails() {

   const {id} = useParams();
 return(
    <>
    <h3>movie details : {id}</h3>
    </>
 )
}