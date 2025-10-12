import { useForm, type SubmitHandler } from "react-hook-form"
import type FilterMoviesDTO from "../models/FilterMoviesDTO.model"
import type Genre from "../models/Genre.model";
import Button from "./Button";

export default function FilterMovies() {
        const initialValues : FilterMoviesDTO = {
            title:"",
            genreId:0,
            inTheaters:false,
            upcomingReleases:false
        }
        const {register, handleSubmit ,reset, formState:{isSubmitting}} = useForm<FilterMoviesDTO>({
            defaultValues:initialValues
        }) 

        const onSubmit : SubmitHandler<FilterMoviesDTO>=async(data)=>
        {
            await new Promise(resolve=>setTimeout(resolve,500));
            console.log(data);
            
        }
    
        const genres : Genre[]= [{id:1 , name:"Action"},{id:2, name:"Comedy"}]
        return(
        <>
        <h2>filter movie</h2>
        <form className="row row-cols-lg-auto g-3 align-items-center"
        onSubmit={handleSubmit(onSubmit)}>
            <div className="col-12">
                <input placeholder="Movie Title" autoComplete="off" className="form-control"{...register("title")} />
           </div>
            <div className="col-12">
                <select className="form-select" {...register("genreId")}>
                    <option value="0">--Select-a-genre--</option>
                    {genres.map(genre =><option key={genre.id} value={genre.id}>{genre.name}</option>)}
                </select>
            </div>
            <div className="col-12">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" {...register("upcomingReleases")} />
                    <label htmlFor="upcomingReleases" className="form-check-label">Upcoming Releases</label>
                </div>
            </div>

              <div className="col-12">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" {...register("inTheaters")} />
                    <label htmlFor="inTheaters" className="form-check-label">InTheaters</label>
                </div>
            </div>

            <div>
                <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Filtering..." : "Filter"}</Button>
                <Button onClick={()=>reset()} className="btn btn-danger ms-2"> Reset </Button>
            </div>
        </form>
        </>
    )
}