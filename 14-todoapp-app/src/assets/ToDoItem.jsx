import React, { useContext, useState } from "react";
import ListModifier from "./ListModifier";
import { TodoItemsContext } from "../store/TodoItemsContext";
const TodoItem = () => {
  const {todoItems}=useContext(TodoItemsContext);
  return todoItems.map((item) => (
    <ListModifier key={item.toDoText} itemDetails={item}/>
  ));
};
export default TodoItem;
