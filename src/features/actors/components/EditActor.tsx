import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type ActorCreation from "../models/ActorCreation";
import ActorForm from "./ActorForm";
import Loading from "../../../components/Loading";
import type { SubmitHandler } from "react-hook-form";

export default function EditActor() {
    const {id} = useParams();
    const [model,setModel] = useState<ActorCreation | undefined>(undefined)
    useEffect(()=>{
const timerId = setTimeout(() => {
    setModel({name:"kamakhya", dateOfBirth : "2022-07-03", picture: ""})
}, 1000);
return ()=>clearTimeout(timerId)
    },[id])

     const onSubmit : SubmitHandler<ActorCreation> = async (data)=>{
               await new Promise(resolve => setTimeout(resolve,2000))
               console.log(data);
           }
    return(
        <>
        <h3>Edit Actors : {id}</h3>
        {model ? <ActorForm onSubmit={onSubmit}/> : <Loading/>}
        </>
    )
}