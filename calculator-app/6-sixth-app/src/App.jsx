import { useState } from 'react';
import List  from './assets/List';
function App() {
  const [StudentArrVal,setStudentArr]=useState(["Nirmala","Aman","Kundan","Abhijeet","Sadhana","Diptiman"]);

const onChangeHandler=(event)=>{
  // console.log(event.key);
if(event.key==="Enter"){
  console.log(event.target.value);
 setStudentArr([...StudentArrVal,event.target.value]);
 event.target.value="";

}
}
  return (
    <>
      <div>
          <div className='text-5xl'>Learners of Mern Stack </div>
     <List list={StudentArrVal}/>
  <input type="text" placeholder='Enter your student name' onKeyDown={onChangeHandler} />
       </div>
    </>
  );
}

export default App
