import React, { useState } from 'react';
import ToDoLists from './ToDoLists';

const App = () => {
  const[inputlist,setInputList] = useState("");

  const[Items,setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () =>
  {
    setItems((oldItems) => {
      return[...oldItems,inputlist]
    });
    setInputList('');
  };
  return (
    <>
    <div className = "main_div">
    <div className = "center_div">
    <br/>
    <h1> Todo List</h1>
    <br/>

    <input type ="text" placeholder="Add a Items" value={inputlist} onChange={itemEvent}/>
    <button onClick={listOfItems}> + </button>

    <ol>
      <li> {/*inputlist*/} </li>
      {Items.map((itemval, index) =>{
      return <ToDoLists
       text = {itemval}
         key = {index}
         id = {index}
       
       />;
      })}
    </ol>
    </div>

    </div>

    </>
  );
};
export default App;
