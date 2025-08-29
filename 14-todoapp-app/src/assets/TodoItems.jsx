import React, { useContext, useState } from "react";
import TodoItem from "./TodoItem";
import {TodoItemsContext} from "../store/TodoItemsContext";
const TodoItems = () => {
const {todoItems} =useContext(TodoItemsContext);

  return( 
  <>
 { todoItems.map((item) => (
    <ListModifier key={item.id} id={item.id} todoText={item.todoText} todoDate={item.todoDate}/>
  ))}
  </>
  );
};
export default TodoItems;
