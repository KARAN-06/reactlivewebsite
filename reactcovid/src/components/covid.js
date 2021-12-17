import react, { useEffect, useState } from 'react';
const Covid = () =>{

  const [data, setData]= useState([]);
const getCovidData = async() => {
  try{
    const res =  await fetch('https://api.covid19india.org/data.json');
    const data = await res.json();
    console.log(data.statewise
      );
    setData(data.statewise[0]);
  } catch (err){
    console.log (err);
  }
}

    useEffect(() =>{
      getCovidData();
    },[]);
  return(
    <>
    <h1>Live</h1>
    <h2>Covid-19 CORONAVIRUS TRACKER</h2>
    <ul>
      <li className="card">
      <div className="card_inner">
        <p className = "card_name"> <span> OUR</span>COUNTRY</p>
        <p className = "card_name"> INDIA</p>
      </div>
      </li>
      <li className="card">
      <div className="card_inner">
        <p className = "card_name"> <span> TOTAL</span>RECOVERED</p>
        <p className = "card_name"> {data.recovered}</p>
      </div>
      </li>
      <li className="card">
      <div className="card_inner">
        <p className = "card_name"> <span> TOTAL</span>CONFIRMED</p>
        <p className = "card_name"> {data.confirmed}</p>
      </div>
      </li>
      <li className="card">
      <div className="card_inner">
        <p className = "card_name"> <span> TOTAL</span>DEATH</p>
        <p className = "card_name"> {data.deaths}</p>
      </div>
      </li>
      <li className="card">
      <div className="card_inner">
        <p className = "card_name"> <span> TOTAL </span>ACTIVE</p>
        <p className = "card_name"> {data.active}</p>
      </div>
      </li>
      <li className="card">
      <div className="card_inner">
        <p className = "card_name"> <span> LAST</span>UPDATE</p>
        <p className = "card_name"> {data.lastupdatedtime}</p>
      </div>
      </li>
    </ul>
    </>
  )
}
export default Covid;