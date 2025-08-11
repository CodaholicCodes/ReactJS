import { Component } from "react";
import './Heading.css';
const Heading=(props)=>{
    return <h1 className="heading">{props.titleText}</h1>;
}
export default Heading;