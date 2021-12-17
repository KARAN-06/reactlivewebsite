/*import React from 'react';
import {add,sub,mul,div} from "./Cal";

function App(){
    return( <>
        <ul>
          <li> Sum of two num is {add(40,4)}</li>
          <li> Sum of two num is {sub(40,4)}</li>
          <li> Sum of two num is {mul(40,4)}</li>
          <li> Sum of two num is {div(40,8)}</li>
        </ul>
        </>);
}
export default App;*/

//task slot machine
/*import React from 'react';
const SlotM = (props) =>{
 // let x = 'happy';
  //let y = 'happ';
  //let z = 'happy';
  let x =props.x;
  let y= props.y;
  let z = props.z;

if((x === y)&& (y === z)){
  return(
    <>
    <div className = 'slot_inner'></div>
    <h1> {x} {y} {z}</h1>
    <h1> This Slot is matinhg</h1>
    <hr/>
    </>
  );
}else {
  return(
    <>
    <div className = 'slot_inner'></div>
    <h1> {x} {y} {z}</h1>
    <h1> This Slot  is not mating</h1>
    <hr/>
    </>
  );
}
};

const App = () =>{
  return <>
  <h1> :slot Welcome to <span> Slot machine game </span> :slot</h1>
  <div classNmae="inner">
  <SlotM  x= 'happy' y= 'happy' z= 'happy'/>
  <SlotM />
  <SlotM />
  </div>
 
  </>;

};
export default App;*/

//hook


/*import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 const App = ()=>{
   const state = useState();
   const [count, setCount]= useState(0);
   const IncNum = ()=>{
     setCount(count + 5
      );
   };
   const IncNum1 = ()=>{
    if(count>0){
    setCount(count - 5);
    }else{
     setCount(0)
    }
     
     
  };
   return(
     <>
     <h1>{count}</h1>
   
     <button onClick = {IncNum}>Click Me</button>
     <button onClick = {IncNum1}><AddIcon/></button>

     </>
   );

 }
export default App;*/

import React, { createContext } from "react";
import ComponentA from "./ComponentA";

const FirstName = createContext();
const LastName = createContext();
const App =()=>{

  return ( 
    <>
    <FirstName.Provider value={"karannn"}>
    <LastName.Provider value={"yadav"}>
    <ComponentA/></LastName.Provider></FirstName.Provider>
 
  </>);
};
export default App;
export {FirstName,LastName};

/*import React from 'react';
import Statewise from './component/stateWiseData/statewise';


const App =()=>{return(
  <>
  <Statewise/>
  </>
);};
export default App;*/

//bootstrap5
/*import React from 'react'; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const App =()=>{return(
  <>
  <h1 className="text-center">Welcome</h1>;
  </>
);};
export default App;*/




/// website
/*import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Switch,Route} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
const App =()=>{
  return(
  <>
  <Switch>
  <Route  exact path ="/" component={Home}/>
  <Route   exact path ="/about" component={About}/>
  <Route  exact path ="/service" component={Service}/>
  </Switch>
  </>
);
};
export default App;*/

/*import React from 'react';
import Statewise from './component/stateWiseData/statewise';


const App =()=>{return(
  <>
  <Statewise/>
  </>
);};
export default App;*/




