import React from 'react'; 
import './App.css'
import { useState } from 'react';
import AddTodo from './assets/AddTodo';
import AppName from './assets/AppName';
import TodoItem from './assets/TodoItem';

function App() {

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

  return (
<>
<center>
  <AppName />
<AddTodo addItemhandler={addToDoItemsHandler}/>
<TodoItem toDoItems={todoItems} deleteItemHandler={deleteToDoItemsHandler}/>
  </center>
    </>
  );
  
}

export default App;
