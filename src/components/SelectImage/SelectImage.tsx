import { useState, type ChangeEvent } from "react";
import styles from "./SelectImage.module.css"

export default function SelectImage(props : SelectImageProps){

    const [imageBase64, setImageBase64] = useState('');
    const[imageURL, setImageUrl] =  useState(props.imageURL ? props.imageURL : "");

    function handleOnChange(e : ChangeEvent<HTMLInputElement>){
        if(e.currentTarget.files){
            const file = e.currentTarget.files[0];
            toBase64(file).then(value=>setImageBase64(value))
            .catch(err=>console.log(err))
            
            props.selectedImage(file);
            setImageUrl('');
        }
    }

    function toBase64(file:File){
        return new Promise<string>((resolve, reject)=>{
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = err =>reject(err);
        })
    }
    return(
        <div className="form-group">
            <label htmlFor="">Select Image</label>
            <input type="file" accept=".jpg,.jpeg,.png" onChange={handleOnChange}/>
            {imageBase64 ? <div>
                <div className={styles.div}>
                    <img src={imageBase64} alt="selected image"/>
                </div>
                </div>: undefined}

                  {imageURL ? <div>
                <div className={styles.div}>
                    <img src={imageURL} alt="selected image"/>
                </div>
                </div>: undefined}
        </div>
    )
}

interface SelectImageProps{
    selectedImage:(file: File) => void;
    imageURL?:string;
}