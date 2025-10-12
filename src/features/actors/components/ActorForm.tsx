import { useForm, type SubmitHandler } from "react-hook-form";
import type ActorCreation from "../models/ActorCreation";
import Button from "../../movies/components/Button";
import { NavLink } from "react-router";
import * as yup from "yup"
import FirstLetterUpperCase from "../../validations/FirstLetterUpperCase";
import dateMustNotBeInTheFuture from "../../validations/dateMustNotBeInTheFuture";
import { yupResolver } from "@hookform/resolvers/yup";
import SelectImage from "../../../components/SelectImage/SelectImage";

export default function ActorForm( props : ActorFormProps) {
const {register, handleSubmit, setValue,
    formState:{errors,isValid,isSubmitting}} = useForm<ActorCreation>({
    resolver: yupResolver(validationRules),
    defaultValues : props.model ?? {name:""},
    mode: 'onChange'
})

const currentImageURL : string | undefined = props.model?.picture ? props.model.picture as string : undefined;
return(
    <form onSubmit={handleSubmit(props.onSubmit)}>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" autoComplete="off" className="form-control"{...register("name")}/>
            {errors.name && <p className="error">{errors.name.message}</p>}
        </div>
        <div className="form-group">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input type="date" className="form-control" {...register("dateOfBirth")}/>
            {errors.dateOfBirth && <p className="error">{errors.dateOfBirth.message}</p>}
        </div>
        <SelectImage imageURL={currentImageURL} selectedImage={file => setValue('picture', file)}/>
        <div className="mt-2">
            <Button type="submit" disabled={!isValid || isSubmitting}>
                {isSubmitting ? "sending ..." : "Send"}
                <NavLink to="/actors" className="btn btn-secondary ms-2">Cancel</NavLink>
            </Button>
        </div>
    </form>
)
}

interface ActorFormProps{
    onSubmit : SubmitHandler<ActorCreation>;
    model ?: ActorCreation 
}

const validationRules = yup.object({
    name:yup.string().required("the name is required").test(FirstLetterUpperCase()),
    dateOfBirth: yup.string().required("the date of birth is required").test(dateMustNotBeInTheFuture())
}) 

