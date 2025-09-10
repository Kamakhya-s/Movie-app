import { useParams } from "react-router";

export default function EditTheaters() {
    const {id} = useParams();
    return(
         
        <>
        <h3>edit theaters : {id}</h3>
        </>
    )
}