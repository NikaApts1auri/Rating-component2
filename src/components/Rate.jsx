
import { useState } from "react";
import "./Rate.css"
export default function Rate(setSubmit,rate, setRate) {
    const buttons =[1,2,3,4,5];
    console.log(rate);
    return (
        <div className="container">
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
       <div className="rateButton">
       {buttons.map(item=>(
        <button key={item} onClick={()=>setRate(item)} style={{backgroundColor: rate==item ?  "#7c8798": ""}} >{item}</button>
       ))}
       </div>
        <div className="submit">
            <button onClick={() => rate && setSubmit(true)} >SUBMIT</button>
        </div>
      </div>
    ); 
  
}
