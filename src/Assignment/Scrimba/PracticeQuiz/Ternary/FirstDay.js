import React from 'react'
import { useState } from 'react'
function secondDay() {
  
}

function FirstDay() {
    const [messages,setMessages] = useState(["a","b"]);
    const [isShowned,setIsShowned] = useState(true);
    const renderData = messages.length;
    // console.log(renderData,"rD");
    function toggled(){
        setIsShowned(previousData => !previousData)
    }
//2nd
const [isShown,setIsShown] = useState(false);
const setup = [{
    id:1,
    set: "i got toggle on and off",
    punchLine:"punch1"
},
{
    id:2,
    set: "i got toggle on and off",
    punchLine:"punch2"
}
,
{
    id:3,
    set: "i got toggle on and off",
    punchLine:"punch3"
}
];
const renderedData = setup.map(data=> {
  return(<div key={data.id}><h1>{data.set}</h1>
  {isShown &&
 <h3>{data.punchLine}</h3>  }
  <button onClick={toggle}>{!isShown ? "Show" : "Hide"} PunchLine</button></div>)
})
function toggle(){
    setIsShown(previewShown =>!previewShown)
}
  return (
    <div>FirstDay
      {/* {isShowned && messages.length > 0 &&  
      <h1 onClick={toggled}>You have {messages !== "" ? renderData : "empty"} unread messages</h1>}
    2nd  */}
{/* {setup.length > 0 && <h3>{setup.map((data,id) =>{ return (<div key={id}>{data.set}</div>)})}</h3>}
{isShown && <p>{setup.map((data,id) =>{ return (<div key={id}>{data.punchLine}</div>)})}</p>}
<button onClick={toggle}>PunchLine</button> */}
{/* 2nd using ternary */}
{/* {setup.length > 0 && isShown ? <h3>{setup.map((data,id) =>{ return (<div key={id}>{data.set}</div>)})}
</h3> && <button onClick={toggle}>PunchLine</button>: "" }
<button onClick={toggle}>PunchLine</button> */}
{/* {setup.length > 0 && <h3>{setup.map((data,id)=>{return(<div key={id}>{data.set}</div>)})}</h3>}
{isShown &&
 <h3>{setup.map((data,id)=>{return(<div key={id}>{data.punchLine}</div>)})}</h3>  } */}
   {/* {!isShown && <button onClick={toggle}>PunchLine</button>}
   {isShown && <button onClick={toggle}>HidePunchLine</button>} */}
   {renderedData}
 
    </div>
  )
}

export default FirstDay