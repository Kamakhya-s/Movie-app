import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type TheaterCreation from "../models/TheaterCreation.model";
import TheaterForm from "./TheaterForm";
import Loading from "../../../components/Loading";
import type { SubmitHandler } from "react-hook-form";

export default function EditTheaters() {
    const {id} = useParams();
    const[model , setModel] = useState<TheaterCreation | undefined>(undefined);

    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setModel({name:"c21 mall" + id,latitude:22.74399579296941,longitude:75.89448081991945})
        },1000);

        return ()=>clearTimeout(timerId)
    },[id])

      const onSubmit:SubmitHandler<TheaterCreation> = async (data)=>{
            await new Promise(resolve => setTimeout(resolve , 1000));
            console.log(data);
        }


    return(
         
        <>
        <h3>edit theaters </h3>
    {model ? <TheaterForm model={model} onSubmit={onSubmit}/> : <Loading/>}    
    </>
    )
}