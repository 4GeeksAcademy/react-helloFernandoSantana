import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

//include images into your bundle
// let contador = 10;
//       function counter() {
//         const intervalo = setInterval(() => {
//           crono.textContent = `00:${contador}`;
//          if (`${contador}`<10) {
//           crono.textContent = `00:0${contador}`;
//           }
//           contador--; 
//          if (contador < 0) {
//         contador = 10;
//         clearInterval(intervalId)
//         }
//       }, 1000); 
//       }
//         counter();

export default function Card(props){
    const [counter,setCounter] = useState(0)
    useEffect (() =>{
     const interval = setInterval(()=>{
      setCounter((counter)=>counter+1)
     },1000)
     return ()=>{clearInterval(interval)}
    },[])
    console.log(counter)
    return (
        <div className="card col-1 ms-1 p-0 bg-black text-white border-start border-end m-2 " style={{width:'100px', height:'100px'}}>
                <h1 className="body-card d-flex justify-content-center align-items-center" style={{width:'100px', height:'100px'}}> {counter} </h1>
        </div>
    );
}
//{props.title}
Card.prototype = {
    title: PropTypes.string
  }
