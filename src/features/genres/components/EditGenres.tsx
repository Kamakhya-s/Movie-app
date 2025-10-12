import type { SubmitHandler } from "react-hook-form";
import { useParams } from "react-router"
import type CreateGenre from "../models/CreateGenres.model";
import GenresForm from "./GenresForm";
import { useEffect, useState } from "react";
import Loading from "../../../components/Loading";

export default function EditGenres() {
    const {id} = useParams(); 
    const [model,setModel]= useState<CreateGenre | undefined>()
    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setModel({name:"Drama" + id})
        },1000);
        return ()=>clearTimeout(timerId)
    },[id])
      const onSubmit : SubmitHandler<CreateGenre> = async (data)=>{
            await new Promise(resolve => setTimeout(resolve,2000))
            console.log(data);
        }
    return(
        <>
        <h3>edit genres {id}</h3>

          {model ? <GenresForm onSubmit={onSubmit} model={model}/> : <Loading/>}

        </>
    )
}