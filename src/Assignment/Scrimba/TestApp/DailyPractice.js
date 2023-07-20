import React from 'react'
import { useState } from 'react'

    
// function DailyPractice() {
//     // Dynamic array push
// //     const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
// //  function addItem(){ 
// //     setThingsArray(prevState => {
// //         return [...prevState, `Thing ${prevState.length + 1}`]
// //     })
// // }
// // const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

// const [objData,setObjData] = useState({
//     firstName:"test",
//     lastName:"G",
//     email:"test@gmail.com",
//     phone:9876543210,
//     isFavorite:false
// });
// // const [isClick,setIsClick ] = useState(false);


// // const renderObj= Object.keys(objData).forEach(function(key,i) {
// //   return(<div key={i}>setObjData({objData[key]})</div>)
// // });

// // console.log(objData);

// // console.log(value);
// const value = objData.isFavorite ? true : false;
// const toogle = () =>{
//     // setObjData(prev =>{
//     //     return {...prev ,  value }
//     // })      
//     // objData.isFavorite ? true : false;
//     // console.log(value);
// }

// return (
//     <div>
//         {objData.email} {objData.lastName} {objData.firstName} {objData.isFavorite}
//      <button onClick={toogle}>add</button>
//          {/* // Dynamic array push */}
//         {/* <button onClick={addItem}>Add Item</button>
//         {thingsElements} */}
//     </div>
// )
// }
// export default DailyPractice

// const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
// function addItem() {
//     setThingsArray(prevState => {
//         return [...prevState, `Thing ${prevState.length + 1}`]
//     })
// }

// const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

// return (
//     <div>
//         <button onClick={addItem}>Add Item</button>
//         {thingsElements}
//     </div>
// )


    // Dynamic array push
//     const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
//  function addItem(){ 
//     setThingsArray(prevState => {
//         return [...prevState, `Thing ${prevState.length + 1}`]
//     })
// }
// const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

//comples object - 
import True from "./assets/logo192.png";
import False from "./assets/favicon.ico";
function DailyPractice() {
    const [contacts,setContacts] =useState({
        firstName:"John",
        lastName:"G",
        email:"test@gmail.com",
        phone:"9876543210",
        isFavarite:false
    });
    // const value = contacts.isFavarite ? True : False;
    const value = contacts.isFavarite ?  False : True;
const toogle = () => {
   setContacts(previousContacts =>{
    return{
        ...previousContacts,
        isFavarite:!previousContacts.isFavarite
    }
   })
}
  return (
    <div>DailyPractice
        <h4>{contacts.firstName} {contacts.lastName} {contacts.email} {contacts.phone}</h4>
        <img  src={value} onClick={toogle}  alt="Img missing"/>
    </div>
  )
}

export default DailyPractice