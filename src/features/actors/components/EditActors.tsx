import { useParams } from "react-router"

export default function EditActors() {
    const {id} = useParams();
    return(
        <>
        <h3>Edit Actors : {id}</h3>
        </>
    )
}