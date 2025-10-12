import type { SubmitHandler } from "react-hook-form";
import type CreateGenre from "../models/CreateGenres.model";
import GenresForm from "./GenresForm";
import ActorForm from "../../actors/components/ActorForm";

    const onSubmit : SubmitHandler<CreateGenre> = async (data)=>{
        await new Promise(resolve => setTimeout(resolve,2000))
        console.log(data);
    }


export default function CreateGenres() {
    
    return(
        <>
        <h3>Create genres </h3>
            <GenresForm onSubmit={onSubmit}/>
            <ActorForm onSubmit={onSubmit}/>
        </>
    )

  
}

