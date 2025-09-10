const todoItemsReducer=(currentItems,action)=>{
if(action.type==='ADD_ITEMS'){
    return [...currentItems,{ 
      id:action.payload.toDoid, 
      toDoText: action.payload.todoText ,
      toDoDate: action.payload.todoDate}];
}
else if(action.type==='DELETE_ITEMS')
    return currentItems.filter((item)=>item.id!==action.payload.toDoid);
  else if(action.type==='LOAD_ALL_ITEMS'){
    return action.payload.allItems;
  }
    else{
        return currentItems;
    }
  }

export default todoItemsReducer;