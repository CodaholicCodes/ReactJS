import React from 'react'; 
import './App.css'
import ListStorer from './assets/ListStorer';
import AddToList from './assets/AddToList';
import AppName from './assets/AppName';
import TodoItem from './assets/ToDoItem';
function App() {
const toDoItems=[{id: 1,toDoText: "Buy Milk " ,todoDate: "08-Aug-2025"}
  ,{id: 2,toDoText: "Go to College" ,todoDate: "08-Aug-2025"}
];
  return (
<>
<center>
  <AppName />
<AddToList />
{toDoItems.map((item)=>{<TodoItem  todotext={item.toDoText} todoDate={item.todoDate}/>})}

<TodoItem  todotext={"Buy Milk"} todoDate={"08-Aug-2025"}/>
<TodoItem  todotext={"Go to College"} todoDate={"08-Aug-2025"}/>

<TodoItem  todotext={"Exercise"} todoDate={"09-Aug-2025"}/>
  </center>
    </>
  );
  
}

export default App;
