import { useState } from 'react'
import './App.css'
import Heading from './components/Headings';
import Paragraph from './components/Paragraph';
import RandomNumber from './components/RandomNumber';
import Button from './components/Button';
function App() {
    const students=['Kundan','Madhu','Soubhagya','Dipti'];
       const clickMeHandler=()=>{
        console.log("Click Me Button Clicked");
    }
        const deleteHandler=()=>{
        console.log("delete Button Clicked");
    }
        const sendHandler=()=>{
        console.log("Send Button Clicked");
    }
  return (
    <>
    <Heading titleText="Hello World"/>
    <Heading titleText="Class Vs Function Component"/>
    <Paragraph/>
 {/* <button btnType='success' btnText='Click Me' />
 <button btnType='danger' btnText='Delete' />
 <button btnText='Send' /> */}

     
    
    <Button btnType="success" btnText="Click Me" handler={clickMeHandler}/>
    <Button btnType="danger" btnText="Delete" handler={deleteHandler}/>
    <Button  btnText="Send" handler={sendHandler}/>
      </>
  );

}

export default App
