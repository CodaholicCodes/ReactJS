import React, { useContext } from 'react'

import Button from './button';
import { TodoItemsContext } from '../store/TodoItemsContext';
const ListModifier = ({itemDetails}) => {
const {deleteToDoItemsHandler}= useContext(TodoItemsContext);
    const {id,toDoText,toDoDate}=itemDetails;
  return (
         <div className="container text-center">
      <div className="row kg-row">
        <div className="col-5 text-truncate">{toDoText}</div>
        <div className="col-4 colspace">{toDoDate}</div>
        <div className="col-2">
<Button btnType='danger' btnText="Delete" handler={()=> deleteToDoItemsHandler(id)} />
        </div>
      </div>

    </div>
  )
}

export default ListModifier