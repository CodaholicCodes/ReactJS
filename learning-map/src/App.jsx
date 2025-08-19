import TodoItem from '../../todoapp-app/src/assets/ToDoItem';
import './App.css'
import List from './components/List';
function App() {
  const toDoItems=[{id: 1,toDoText: "Buy Milk " ,todoDate: "08-Aug-2025"}
  ,{id: 2,toDoText: "Go to College" ,todoDate: "08-Aug-2025"}
];
// function convertObjecttoTodoText(toDoItems){
//   console.log(`Convert Function was called with item ${JSON.stringify(toDoItems)}, Converting this to ${toDoItems.toDoText}`);
//   return toDoItems.toDoText;
// }
// toDoItems.forEach(item=>{
//   const str=convertObjecttoTodoText(item);
//   console.log(str);
// })
const todoText=toDoItems.map(item=>item.toDoText);
console.log(todoText);

 const arr=["Nirmala","Aman","Kundan","Abhijeet","Sadhana","Diptiman"];
    return (
       <>
      <div className='text-5xl'>Learners of Mern Stack </div>
     <List list={arr}/>
      </>       
  )
}

export default App
