import React from "react";
import CompC from "./CompC";
import {FirstName,LastName} from "./App";
import { useContext } from "react";
//import CompB from "./CompB";
const CompB = ()=>{
    
    const fname= useContext(FirstName);
    const lname= useContext(LastName);
    return <h1>my name is {fname}{lname}</h1>
};
export default CompB;