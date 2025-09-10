import React, { useContext, useRef } from "react";
import "./TodoList.css";
import Button from "./button";
import { TodoItemsContext } from "../store/TodoItemsContext";
const AddTodo = () => {
 const {addToDoItemsHandler} =useContext(TodoItemsContext);
const todoTextInput=useRef();
const todoDateInput=useRef();
const addHandler=()=>{
  const todoText=todoTextInput.current.value;
  const todoDate=todoDateInput.current.value;
  todoDateInput.current.value='';
  todoTextInput.current.value='';
 fetch('http://localhost:3000/todos', {
  method: 'POST', /* or POST/PUT/PATCH/DELETE */
  headers: { 
    'Content-Type': 'application/json'
  }, 
  body : JSON.stringify({
    task : todoText,
    date :todoDate
  })
})
.then(res => res.json())
.then((item)=>{
  const {id,todoText,todoDate}=item.map({id : item.id ,todoText : item.task ,todoDate : item.date});
  addToDoItemsHandler(id,todoText,todoDate);
}
)
}

  
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-5">
          <input type="text" className="itemHolder" placeholder="Enter Todo Here" 
        ref={todoTextInput} />
      
        </div>
        <div className="col-4 colspace">
                <input type="date" ref={todoDateInput} className="itemHolder date-picker" />

        </div>
        <div className="col-2">
 <Button btnType="success" btnText="Add" handler={addHandler}/>

        </div>
      </div>
    </div>
  );
}
export default AddTodo;
