import React from 'react'; 
import './App.css'
import { useState } from 'react';
import AddTodo from './assets/AddTodo';
import AppName from './assets/AppName';
import TodoItem from './assets/TodoItem';
import { TodoItemsProvider } from './store/TodoItemsContext';
import LoadItems from './store/LoadItems';

function App() {

  return (
<TodoItemsProvider>
<center>
  <AppName />
<AddTodo />
<LoadItems />
<TodoItem />
  </center>
   </TodoItemsProvider>
  );
  
}

export default App;
