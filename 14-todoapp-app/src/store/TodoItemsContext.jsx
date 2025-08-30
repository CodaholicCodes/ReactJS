import { createContext } from "react";
import { useState } from "react";
export const TodoItemsContext=createContext();
import React from "react";

export const TodoItemsProvider=({children})=>{

  const[todoItems,setTodoItems]=useState([]);
  const addToDoItemsHandler=(toDoid,todoText,todoDate)=>{
   setTodoItems((currentItems)=>{
    return [...currentItems,{ id:toDoid, toDoText: todoText ,toDoDate: todoDate}];
   })
  };
  const deleteToDoItemsHandler=(id)=>{
  setTodoItems((currentItems)=>{
    
    return currentItems.filter((item)=>item.id!==id);

  });
  }
return <TodoItemsContext.Provider value={{todoItems,addToDoItemsHandler,deleteToDoItemsHandler}}>
    {children}
</TodoItemsContext.Provider>
}