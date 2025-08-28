import './Buttons.css';
const CalcButton=({data,onClickHandler})=>{
    return <button onClick={onClickHandler} className="but">
     {data}
    </button>;
}
export default CalcButton;