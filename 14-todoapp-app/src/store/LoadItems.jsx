import React, { useContext, useEffect } from 'react'
import { TodoItemsContext } from './TodoItemsContext'
import Button from '../assets/button';
const LoadItems = () => {
   const {todoItems,addToDoItemsHandler,addAllItems}= useContext(TodoItemsContext);
   useEffect(()=>{
fetch(' http://localhost:3000/todos')
.then(res => res.json())
.then((items)=>{
    const newItems=items.map({id : items.id , todoText : items.task , todoDate : items.date});
addToDoItemsHandler(newItems);
});
 },[]);
   if(todoItems.length==0)
  return (
   <Button btnType='' btnText='Load All' handler={addAllItems}></Button>
)
  else return <p>Here are the tasks</p>
}

export default LoadItems