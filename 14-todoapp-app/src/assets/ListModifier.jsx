import React from 'react'
import TodoItem from './ToDoItem';
import Button from './button';
const ListModifier = ({itemDetails,deleteHandler}) => {

    const {id,toDoText,toDoDate}=itemDetails;
  return (
         <div className="container text-center">
      <div className="row kg-row">
        <div className="col-5 text-truncate">{toDoText}</div>
        <div className="col-4 colspace">{toDoDate}</div>
        <div className="col-2">
<Button btnType='danger' btnText="Delete" handler={()=> deleteHandler(id)} />
        </div>
      </div>

    </div>
  )
}

export default ListModifier