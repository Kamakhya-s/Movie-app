import { useEffect } from "react";
import { Navigate, useLocation } from "react-router"

export default function HandleRootsNotFound() {
 const location = useLocation();

 useEffect(()=>{
    console.log(`roots not found : ${location.pathname}`);
    
 },[location])

    return <Navigate to="/"/>
}