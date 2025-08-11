   import React from 'react';
   const TodoItem=({id,todotext,todoDate})=>{
    return (
     <div className="container text-center">
      <div className="row kg-row">
        <div className="col-5 text-truncate">{todotext}</div>
        <div className="col-4 colspace">{todoDate}</div>
        <div className="col-2">
<button type="button " className="btn btn-danger button">Delete</button>
        </div>
      </div>

    </div>);
   }
   export default TodoItem;