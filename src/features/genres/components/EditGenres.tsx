import { useParams } from "react-router"

export default function EditGenres() {
const {id} = useParams(); 
    return(
        <>
        <h3>edit genres {id}</h3>
        </>
    )
}