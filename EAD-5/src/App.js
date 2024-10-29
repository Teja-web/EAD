import { useState } from "react"

import './App.css';

export default function App(){
  const[timer,setTimer]=useState(0);
  const[timeinterval,settimeinterval]=useState(null);

  const starttimer=()=>{
    settimeinterval(setInterval(()=>{
      setTimer((prev)=>prev+1);
    },1000));
  }
  const pausetimer=()=>{
    clearInterval(timeinterval);
  }
  const resettimer=()=>{
    setTimer(0);
    clearInterval(timeinterval);
  }
  return(
    <div className="App">
      <h3>Timer:{timer}</h3>
      <div className="button-container">
        <button onClick={starttimer}>Start</button>
        <button onClick={pausetimer}>pause</button>
        <button onClick={resettimer}>reset</button>
      </div>
    </div>
  )
}


