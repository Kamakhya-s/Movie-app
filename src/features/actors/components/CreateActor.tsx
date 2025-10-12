import type { SubmitHandler } from "react-hook-form";
import type ActorCreation from "../models/ActorCreation";
import ActorForm from "./ActorForm";

 const onSubmit : SubmitHandler<ActorCreation> = async (data)=>{
        await new Promise(resolve => setTimeout(resolve,2000))
        console.log(data);
    }

export default function CreateActor() {
    return(
        <>
        <h3>create actors</h3>
        <ActorForm onSubmit={onSubmit}/>
        </>
    )
}