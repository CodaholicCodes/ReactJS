import React, { createContext, useState } from 'react'

export const TodoItemsContext = createContext();

export const TodoItemsProvider=({children})=>{

const [todoItems,setTodoItems]=useState([]);

  const addTodoItem=(todoText,todoDate)=>{
   setTodoItems((currentItems)=>{
    return [...currentItems,{ id: todoText,  todoText , todoDate}];
   })
  }

  const deleteTodoItem=(todoId)=>{
  setTodoItems((currentItems)=>{
    
    return currentItems.filter((item)=>item.id!==todoId);

  });
}

return <TodoItemsContext.Provider value={{todoItems,addTodoItem,deleteTodoItem}}>
    {children}
</TodoItemsContext.Provider>
};



