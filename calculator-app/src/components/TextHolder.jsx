import './TextHolder.css'
const TextHolder=({data})=>{
return <>

{data ? <p>{data}</p> :<p>0</p>}
</>
}
export default TextHolder;