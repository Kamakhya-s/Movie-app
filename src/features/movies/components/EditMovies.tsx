import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type MovieCreation from "../models/MovieCreation.model";
import type { SubmitHandler } from "react-hook-form";
import MovieForm from "./MovieForm";
import Loading from "../../../components/Loading";
import type Genre from "../models/Genre.model";
import type Theater from "../../theaters/models/Theater.model";

export default function EditMovies() {
    const {id} = useParams();
    const [model,setModel] = useState<MovieCreation | undefined>(undefined);

    useEffect(()=>{
       const timerId = setTimeout(()=>{
         setModel({title:"Spider-man", releaseDate:"2019-03-07", trailer:"myUrl", poster:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRUuhRtkAouFYxHvr2YO_2W5BkUTH28xuvopdktLVaEQ5asu1cqdIjO6i4_zli7ZoMPexGhuyfpjt4t62esPvbxBNWvkFkW2ydl2GBdqTjZ"})
       })

        return ()=> clearInterval(timerId)
    },[id])

     const onSubmit : SubmitHandler<MovieCreation> = async (data) =>{
            await new Promise(resolve => setTimeout(resolve,2000));
            console.log(data);
            
        }

        const nonSelectedGenres: Genre[] = [{ id: 2, name: 'Drama' }]
    const selectedGenres: Genre[] = [{ id: 1, name: 'Action' }]

    const nonSelectedTheaters: Theater[] = [{ id: 1, name: 'Sambil', latitude: 0, longitude: 0 }];
    const selectedTheaters: Theater[] = [{ id: 2, name: 'Agora', latitude: 0, longitude: 0 }];
        
        
    return(
        <>
        <h3>edirt movies :{id}</h3>
         {model ? <MovieForm model={model} onSubmit={onSubmit}
            selectedGenres={selectedGenres}
            nonSelectedGenres={nonSelectedGenres}
            selectedTheaters={selectedTheaters}
            nonSelectedTheaters={nonSelectedTheaters} selectedActors={[]}                /> : <Loading />}
        </>
    )
}