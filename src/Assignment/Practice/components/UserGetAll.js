// import React from 'react'
// import { useState } from 'react';
// import { useEffect } from 'react';

// function UserGetAll() {
//     const [contacts,setContacts] = useState([]);
//     useEffect(()=>{
//         fetch(`http://localhost:3006/products`)
//         // .then(console.log(res,"res"));
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             setContacts(data)
//         })
//         // console.log(apiData,"apiData")
//     },[]);
//     const apiData = contacts.map((item)=>{
//         return(<div key={item.id}>
//             {item.price}
//             {item.id}
//             {item.name}
//             {item.shortDesc}
//         </div>)
//     })
//   return (
//     <div>Contacts
//         {apiData}
//     </div>
//   )
// }

// export default UserGetAll

// import React, { useReducer, useRef } from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'

// function UserGetAll() {
//     // const [data,setData] = useState([]);
//     // useEffect(()=>{
//     //     fetch(`http://localhost:3006/products`)
//     //     .then(res => res.json()).then(data => {
//     //         setData(data)
//     //         console.log(data)
//     //     })
//     // },[])
//     // const renderData = data.map((item,i)=>{
//     //     return(<div key={i}>{item.price}</div>)
//     // })
// const iS = {
//     count:1
// }
// const reducer = (state,action) =>{
//     switch(action.type){
//         case "dec": {
//             return {count: state.count -1}
//         }
//         case "inc": {
//             return {count: state.count +1}
//         }
//         default :
//         return state;
//     }
// }
// const [state,dispatch] = useReducer(reducer,iS);
//     // const [count,setCount] = useState(0);
//     // const valueRef = useRef(0);
//     // const valueRefs = useRef("");
// // console.log(valueRefs.current.value)
//     // // console.log(setSetup(valueRef.current.value),"value")
//     // useEffect(()=>{
//     // valueRef.current = valueRef.current +1;
//     // })
//     // const [inputValue, setInputValue] = useState("");
//     // const count = useRef(0);
  
//     // useEffect(() => {
//     //   count.current = count.current + 1;
//     // //   valueRefs.current
//     // });
// //   const is = {
// //     count:1
// //   }
// // const reducer = (state, action) => {
// //   switch (action.type) {
// //     case "decrement":
      
// //       return {
// //         count: state.count - 1,
// //       };
// //     case "increment":
     
// //       return {
// //         count: state.count + 1,
// //       };
    
// //     default:
// //       return state;
// //   }
// // };
// // const [state,dispatch] = useReducer(reducer,is);
//   return (
//     <div>UserGetAll
//        {/* <button onClick={() =>
//           dispatch({
//             type: "decrement",
           
//           })}>-</button>
//         <h1>{state.count}</h1>
//         <button onClick={() =>
//           dispatch({
//             type: "increment",
           
//           })}>+</button> */}
// {/* {renderData} */}
// {/* <h1>{valueRef.current}</h1>
// <input type="text" value={setup} onChange={(e)=> setSetup(e.target.value)} ref={valueRefs} />
//     */}
//      {/* <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h1>Render Count: {count.current}</h1>  */}
//       {/* <button  onClick={() =>{
//         dispatch({
//             type : "dec"
//         })}}>-</button>
//     <h1>{state.count}</h1>
//         <button  onClick={() =>{
//         dispatch({
//             type : "inc"
//         })
//         }
//         }>+</button> */}
//     </div>
//   )
// }

// export default UserGetAll