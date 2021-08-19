import React, {useState} from "react";
import Input from "@material-ui/core/Input";
// import Button from "@material-ui/core/Button";
// import AddIcon from "@material-ui/icons/Add";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";
import "./App.css";
function App() {
  const [inputList, setInputList] = useState("");
  const [Items,setItems] = useState([]);
  const itemEvent =(event)=>{
        setInputList(event.target.value);
  }
  const listOfItem=()=>{
        setItems((oldItems) =>{
          return [...oldItems,inputList];
        })
  }
  return (
    <>
      <div className="main">
        <div class="center">
          <h1>To Do List</h1>
          <Input
            type="text"
            placeholder="Add your Task"
            className="task"
            onChange={itemEvent}
          />
          <span className="icon">
            <IconButton
              aria-label="add"
              color="primary"
              className="icon"
              onClick={listOfItem}
            >
              <AddCircleIcon fontSize="large" className="add" />
            </IconButton>
          </span>
          <ol>
            {Items.map((itemval) => {
              return (
                <li>
                  <IconButton
                    aria-label="cancel"
                    color="primary"
                    className="icon1"
                  >
                    <CancelIcon fontSize="large" />
                  </IconButton>
                  {itemval}
                </li>
              );
            })}
           
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
