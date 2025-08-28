import React, { useState } from "react";
import ListModifier from "./ListModifier";
const TodoItem = ({toDoItems,deleteItemHandler}) => {
  return toDoItems.map((item) => (
    <ListModifier key={item.toDoText} itemDetails={item} deleteHandler={deleteItemHandler}/>
  ));
};
export default TodoItem;
