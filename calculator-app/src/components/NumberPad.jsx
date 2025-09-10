import React from 'react'
import  CalcButton  from './Buttons.jsx';

 const NumberPad = ({setDisplay,value}) => {
    const arr=["C",1,2,"+",3,4,"-",5,6,"*",7,8,"/","=",9,0,"."];
  const clickedButton=(text)=>{
setDisplay(value+text);
  }
  const clickedClear=()=>{
    setDisplay('');
  }
const evaluaeExp=()=>{
  setDisplay(eval(value));
}
  return (
    <div className='App'>
 
      {
  arr.map((item)=><CalcButton data={item} onClickHandler={()=>{
    if(item=='C')
    clickedClear()
  else if(item=='=')
 evaluaeExp();
  else
  clickedButton(item)}} key={item}/>)
}
    </div>
  )
}
export default NumberPad;
