import {MapContainer, Marker, Popup, TileLayer, useMapEvent} from "react-leaflet";
import type Coordinate from "./Map/coordinate.model";
import { useState } from "react";

export default function Map(props: MapProps){

    const [coordinates,setCoordinates] = useState(props.coordinates);

    return(
        <MapContainer center={[22.723814186869944, 75.84711377792175]} zoom={14} scrollWheelZoom={true} style={{height:"500px"}}>
            <TileLayer attribution="React Movies" url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <HandleMapClick setCoordinate={coordinate=>{
                setCoordinates([coordinate]);
                if(props.setCoordinates){
                    props.setCoordinates(coordinate)
                }
            }}/>

                {coordinates?.map(coordinate => <Marker key={coordinate.lat + coordinate.lng} position={[coordinate.lat,coordinate.lng]}>
                    {coordinate.message ? <Popup>{coordinate.message}</Popup> : undefined}
                </Marker>)}
        </MapContainer>
    )
}

function HandleMapClick(props: {setCoordinate(coordinate:Coordinate): void}){
    useMapEvent('click',e=>{
        props.setCoordinate({lat: e.latlng.lat, lng: e.latlng.lng})
    })
    return null;
}

interface MapProps{
    coordinates?: Coordinate[];
    setCoordinates?: (coordinate : Coordinate) => void;

}