import React, { useRef } from "react";
import "./TodoList.css";
import Button from "./button";
const AddTodo = ({addItemhandler}) => {
const todoTextInput=useRef();
const todoDateInput=useRef();
  const onClickHandler=()=>{
        console.log("Add Button Clicked");
 const todoText=todoTextInput.current.value;
 const todoDate=todoDateInput.current.value;
 todoTextInput.current.value='';
 todoDateInput.current.value='';
 if(!todoText || !todoDate){
    alert("Please Enter Valid Data");
    return;
 }
addItemhandler(Math.random() * 10,todoText,todoDate);

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
 <Button btnType="success" btnText="Add" handler={onClickHandler}/>

        </div>
      </div>
    </div>
  );
};
export default AddTodo;
