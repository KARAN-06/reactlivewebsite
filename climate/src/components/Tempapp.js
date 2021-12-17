import React, {useEffect, useState} from 'react';
//import { useState } from 'react/cjs/react.production.min';
import "./css/style.css";


const Tempapp = () => {
    const [city,setCity]= useState(null);
    const [search,setsearch]= useState("Pune");

    useEffect(
        ()=>{
            const fetApi = async () => {
             const url = `api.openweathermap.org/data/2.5/weather?q=${search}&appid=b14425a6554d189a2d7dc18a8e7d7263`;
             const resonse = await fetch(url); 
             console.log(resonse);
             //const resjson = await response.json();
             //console.log(resjson);  
            }


        }
    )
    return(
        <>
        <div className="box">
         <div className= "inputData">
            <input
            type = "search"
            className= "inputFeild"
             onChange={ (event)=>{}} />
         </div>
        </div>
        <div className = "info">
        <h2 className="location">
       <i className ="fas fa-street-view">{city}</i>
        </h2>
        <h1 className= "temp">
        5.25 Cel
        </h1>
           <h3 className= "tempmin_max"> Min: 5.25 cel | Max : 5.25 Cel</h3>
        </div>
        <div className = "wave-one"></div>
        <div className = "wave-two"></div>
        <div className = "wave-three"></div>
        </>
    )

}

export default Tempapp;