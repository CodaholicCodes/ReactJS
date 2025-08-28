
import './App.css'
import TextHolder from './components/TextHolder.jsx';
import NumberPad from './components/NumberPad';
import { useState } from 'react';

function App() {
 const [value,setDisplayVal]=useState('');
  return (
    <>
    <div>
          <TextHolder data={value}/>
   <NumberPad setDisplay={setDisplayVal} value={value}/>

   </div>
    </>
  )
}

export default App
