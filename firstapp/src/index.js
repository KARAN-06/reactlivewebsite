//var React = require('react');
/*import React  from 'react';
//var ReactDOM = require('react-dom');


import ReactDOM from 'react-dom';
import "./index.css";
import Heading  from "./Heading";
import Para  from "./Para";
import List from "./List";*/
/*ReactDOM.render(
<>
<h1> Karan Technical Netflix Pick</h1>
<p> Here the list of my fav 5 webseries</p>
<ol>
  <li>Dark</li>
  <li>Mirjapur</li>
  <li>Rangbass</li>
  <li>Money</li>
  <li>hello Mini</li>
</ol>

</>,document.getElementById("root"));*/
/*const flname = "Karan Yadav"
ReactDOM.render(
<h1> {flname} Technical Netflix Pick</h1>  
,document.getElementById("root"));*/
// challenges

/*const name = "Karan Yadav";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
ReactDOM.render(
  <>
<h1> {`Hello, my name is ${name}`}</h1>
<p>{`Current date is = ${date}`}</p>
<p>{`Current Time is = ${time}`}</p>
</>,document.getElementById("root"));*/
// conent editable
/*const name = "Karan Yadav";
ReactDOM.render(
  <>
<h1 contentEditable = "true"> {`Hello, my name is ${name}`}</h1>
</>,document.getElementById("root"));*/

// challenges make sit change color

/*let curDate = new Date(2020,6,16,19);
curDate = curDate.getHours();
 let greeting = '';
const cssStyle = {};
if(curDate >= 1 && curDate <=12){
  greeting = "Good Morning";
  cssStyle.color = "green";
}else if(curDate >= 12 && curDate <19) {
  greeting = "Good Afternoon";
  cssStyle.color = "Orange";
}else{
  greeting = "Good Night";
  cssStyle.color = "Black"; 
}
ReactDOM.render(
<>
<h1> Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
</>,document.getElementById("root"));*/

// react Component
/*ReactDOM.render(
  <>
  <Heading></Heading>
  <Para></Para>
 <List></List>
  </>,document.getElementById("root"));*/

  // Calculator
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import App from "./App";
import {BrowserRouter} from "react-router-dom";
ReactDOM.render(
  <>
  <BrowserRouter>
   <App/>
  </BrowserRouter>
</>,document.getElementById("root"));




