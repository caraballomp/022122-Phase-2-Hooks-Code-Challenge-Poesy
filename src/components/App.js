import React, { useState, useEffect } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";



function App() {

const API ="http://localhost:8004/poems"
const [poems, setNewPoems] = useState([]);
  //start here with your code for step one

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then(setNewPoems)
  }, []);

const [show,setShow]=useState(true)

function addNewPoem(addPoem){
setNewPoems([...poems, addPoem])
}

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={()=> show ? setShow(false) : setShow(true)} >
        Show/hide new poem form </button>
        {show? <NewPoemForm addNewPoem = {addNewPoem} /> : null}
      </div>
      <PoemsContainer poems={poems} />
    </div>
  );
}

export default App;
