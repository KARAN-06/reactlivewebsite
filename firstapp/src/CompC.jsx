import React from "react";
import {FirstName,LastName} from "./App";
const CompC = ()=>{
    return(
        <>
    <FirstName.Consumer> {(fname) => {
        return <h1>my name is {fname}</h1>;
    }}</FirstName.Consumer>
    </>); 
    
};
export default CompC;