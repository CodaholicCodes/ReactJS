import React from "react";
import "./TodoList.css";
const AddToList = (props) => {
  const textChangeHandler=(event)=>{
    console.log(event.target.value);
  }
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-5">
          <input type="text" className="itemHolder" placeholder="Enter Todo Here" 
          onChange={textChangeHandler}
          />
      
        </div>
        <div className="col-4 colspace">
                <input type="date" className="itemHolder date-picker" />

        </div>
        <div className="col-2">
<button type="button" className="btn btn-success button">Add</button>

        </div>
      </div>
    </div>
  );
};
export default AddToList;
