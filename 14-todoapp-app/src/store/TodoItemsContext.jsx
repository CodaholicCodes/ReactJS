import { createContext } from "react";
import { useState ,useReducer } from "react";
export const TodoItemsContext=createContext();
import React from "react";
import todoItemsReducer from "./TodoItemsReducer";
export const TodoItemsProvider=({children})=>{
 const [todoItems,dispatch]=useReducer(todoItemsReducer,[]);
      
  const addToDoItemsHandler=(toDoid,todoText,todoDate)=>{
    dispatch({
      type : 'ADD_ITEMS',
      payload : {
        toDoid,todoDate,todoText
      }
    })
  };
  const deleteToDoItemsHandler=(toDoid)=>{
  dispatch({
    type : 'DELETE_ITEMS',
    payload : {
      toDoid
    }
  })
  }
  const addAllItems=(todoItems)=>{
    dispatch({
    type : 'LOAD_ALL_ITEMS',
    payload :{
    allItems: todoItems,
    }
    })
  }
return (
<TodoItemsContext.Provider value={{todoItems,addToDoItemsHandler,deleteToDoItemsHandler,addAllItems}}>
    {children}
</TodoItemsContext.Provider>
);
};