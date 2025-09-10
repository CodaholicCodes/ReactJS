import React, { useState } from 'react'
import { useRef } from 'react';
const TestForms=()=>{

const firstName=useRef();
// const firstName=useRef();
const lastName=useRef();
const clicks=useRef(0);
const [firstNameVal,setFirstName]=useState();
  // const onChangeHandler=(event)=>{
  // console.log(event.target.value);
  // firstName.current=event.target.value;
  // console.log(firstName.current);
  // }
  const submitHandler=(event)=>{
    event.preventDefault();
    console.log("Button Clicked")
  }
  const firstNameChangeHandler=(event)=>{
  setFirstName((currentVal)=>currentVal=event.target.value);
  }
  return (
    <>
    <h1> StateVal : {firstNameVal} RefVal : {clicks.current}</h1>
    <div>
   <form action="/submit-data" onSubmit={submitHandler}  >
    <input type="text" ref={firstName} onKeyDown={firstNameChangeHandler}  placeholder="First Name" name="FirstName" /> <br />
    <input type="text" ref={lastName} placeholder="Last Name" name='LastName'/>
    <input type="submit" onClick={()=>{clicks.current+=1}}/>
   </form>
   </div>
</>
  );
}

export default TestForms;