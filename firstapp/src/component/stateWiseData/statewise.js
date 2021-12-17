import { AspectRatio } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { LastName } from '../../App';  
const Statewise = () =>{
     const getCovidData = async()=>{
         const res = await fetch('https://api.covid19india.org/data.json');
         const actualData = await res.json();
         console.log(actualData.statewise);
     }

    useEffect(()=> {
        getCovidData();
    },[]);
    return (
        <>
       <h1> INDIA COVID -19 DASBOARD </h1>
</>);
}
export default Statewise;