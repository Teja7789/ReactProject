// import React from "react"
// import { useEffect, useState } from "react"

// function App() {
//   const [users, setUsers] = useState([])

//   useEffect(() => {

//     fetch("http://localhost:3000/user")
//       .then(response => response.json())
//       .then(json => setUsers(json));
      
//   }
  
//   , [])
// console.log(users,"usersData");
// const renderUser = users.map((user) =>{
//     return(
//         <tbody key={user.id}>
//             <td>{user.id}</td>
//             <td>{user.name}</td>
//             <td><button>Del</button></td>
//         </tbody>
//     )
// })
//   return (
// <>
// <table>
//     <thead>
//         <th>S.No</th>
//         <th>Name</th>
// <th>Action</th>
//     </thead>
//     {renderUser}
// </table>
// </>
//   )
// }

// export default App

// import React from 'react'
// import { useState } from 'react';
// import { useEffect } from 'react';

// function ApiCrud() {
//     const [users,setUsers] = useState([]);
//     const [newName,setNewName] = useState("");
//     useEffect(()=>{
//         fetch(`http://localhost:3000/user`)
//         // .then(console.log(res,"res"));
//         .then(res => res.json())
//         .then(users => {
//             console.log(users);
//             setUsers(users)
//         })
//         // console.log(apiData,"apiData")
//     },[]);

//    const deleteUser = (id) => {
//     fetch(`http://localhost:3000/user/${id}`, {
//       method: "DELETE",
//     })
//       .then(response => response.json())
//       .then(() => {
//         setUsers(values => {
//           return values.filter(item => item.id !== id)
//         })
//       })
//   } 

//    const addUser = () => {
//         const name = newName.trim();
//         if (name) {
//           fetch("http://localhost:3000/user", {
//             method: "POST",
//             body: JSON.stringify({
//               name,
//             }),
//             headers: {
//               "Content-type": "application/json; charset=UTF-8",
//             },
//           })
//             .then(response => response.json())
//             .then(data => {
//               setUsers([...users, data])
//             })
//         }
//       }
//     const apiData = users.map((item)=>{
//         return(<div key={item.id}>
          
        
//             {item.price}  ===
//             ====  {item.id}
//             ===   {item.name}  

//            <button onClick={() => deleteUser(item.id)}>Delete</button>
        
//         </div>)
//     })
//   return (
//     <div>Contacts
//         {apiData}
//                       <input
//                  value={newName}
//                  onChange={(e) => setNewName(e.target.value)}
//                  placeholder="Add name here..."
//                />
//         <button onClick={addUser}>Add</button>
//     </div>
//   )
// }

// export default ApiCrud

import React, { Component } from "react";

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
function success(pos) {
  var crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function errors(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

export default class GeoLocation extends Component {
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            console.log(result.state);
            //If granted then you can directly call your function here
            navigator.geolocation.getCurrentPosition(success);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }
  }

  render() {
    return (
      <div>
        <h2>GeoLocation</h2>
      </div>
    );
  }
}


// import React, { Component } from "react";

// export default class GeoLocation extends Component {
//   componentDidMount() {
//     if (navigator.geolocation) {
//       navigator.permissions
//         .query({ name: "geolocation" })
//         .then(function (result) {
//           if (result.state === "granted") {
//             console.log(result.state);
//             //If granted then you can directly call your function here
//           } else if (result.state === "prompt") {
//             console.log(result.state);
//           } else if (result.state === "denied") {
//             //If denied then you have to show instructions to enable location
//           }
//           result.onchange = function () {
//             console.log(result.state);
//           };
//         });
//     } else {
//       alert("Sorry Not available!");
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h2>GeoLocation</h2>
//       </div>
//     );
//   }
// }