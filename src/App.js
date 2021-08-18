import React, {useState} from "react";
import Input from "@material-ui/core/Input";
// import Button from "@material-ui/core/Button";
// import AddIcon from "@material-ui/icons/Add";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import "./App.css";
function App() {
  const [inputList, setInputList] = useState("buy apple");
  const itemEvent =()=>{

  }
  return (
    <>
      <div className="main">
        <div class="center">
          <h1>To Do List</h1>
          <Input type="text" placeholder="Add your Task" className="task" onChange={itemEvent} />
          <span className="icon">
            <IconButton aria-label="add" color="primary" className="icon">
              <AddCircleIcon fontSize="large" className="add" />
            </IconButton>
          </span>
          <ol>
            <li>
              {inputList}
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
