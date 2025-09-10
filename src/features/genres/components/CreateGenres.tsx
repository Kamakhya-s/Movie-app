import { NavLink } from "react-router";
import Button from "../../movies/components/Button";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FirstLetterUpperCase from "../../validations/FirstLetterUpperCase";


export default function CreateGenres() {
    const {register, handleSubmit, 
        formState:{errors, isValid , isSubmitting}} = useForm<FormType>({
        resolver : yupResolver(validationRules),
        mode: "onChange"
    });
    const onSubmit : SubmitHandler<FormType> = async (data)=>{
        await new Promise(resolve => setTimeout(resolve,2000))
        console.log(data);
    }

    return(
        <>
        <h3>Create GAENRES</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input autoComplete="off" className="form-control" {...register("name")}/>
                {errors.name && <p className="error">{errors.name.message}</p>}
            </div>
            <div className="mt-2">
            <Button type="submit" disabled={!isValid || isSubmitting}>{isSubmitting ? "Sending ..." : "Send"}</Button>
            <NavLink className="btn btn-secondary ms-2" to="/genres">Cancel</NavLink>
            </div>
            </form>
            </>
    )

    interface FormType{
        name: string;
    }
}

const validationRules = yup.object({
    name : yup.string().required("The name is required").test(FirstLetterUpperCase())
});