// import React from "react";
// function ProductCategoryRow({ category }) {
//     console.log(category,4)
//     return (
//       <tr>
//         <th colSpan="2">
//           {category}
//         </th>
//       </tr>
//     );
//   }
  
//   function ProductRow({ product }) {
//     console.log(product.stocked,3)
//     const name = product.stocked ? product.name :
//       <span style={{ color: 'red' }}>
//         {product.name}
//       </span>;
  
//     return (
//       <tr>
//         <td>{name}</td>
//         <td>{product.price}</td>
//       </tr>
//     );
//   }
  
//   function ProductTable({ products }) {
//     // console.log(products)
    
//     const rows = [];
//     let lastCategory = null;
  
//     products.forEach((product) => {
//         console.log(product.category,2)
//       if (product.category !== lastCategory) {
//         rows.push(
//           <ProductCategoryRow
//             category={product.category}
//             key={product.category} />
//         );
//       }
//       rows.push(
//         <ProductRow
//           product={product}
//           key={product.name} />
//       );
//     //   console.log(lastCategory = product.category,"all");
//     //   lastCategory = product.category;
//     });
  
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>{rows}</tbody>
//       </table>
//     );
//   }
  
//   function SearchBar() {
//     return (
//       <form>
//         <input type="text" placeholder="Search..." />
//         <label>
//           <input type="checkbox" />
//           {' '}
//           Only show products in stock
//         </label>
//       </form>
//     );
//   }
  
//   function FilterableProductTable({ products }) {
//     // console.log("p",products)
//     return (
//       <div>
//         <SearchBar />
//         <ProductTable products={products} />
//       </div>
//     );
//   }
  
//   const PRODUCTS = [
//     {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
//     {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
//     {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
//     {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
//     {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
//     {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
//   ];
  
//   export default function AddContact() {
//     return <FilterableProductTable products={PRODUCTS} />;
//   }
  

//POST user
// import "./App.css"
// import { useEffect, useState } from "react"
// import {
//   Button,
//   EditableText,
//   InputGroup,
//   Toaster,
//   Position,
// } from "@blueprintjs/core"

// const AppToaster = Toaster.create({
//   position: Position.TOP,
// })

// function AddContacts() {
//   const [users, setUsers] = useState([])
//   const [newName, setNewName] = useState("")
//   const [newEmail, setNewEmail] = useState("")
//   const [newWebsite, setNewWebsite] = useState("")

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(json => setUsers(json))
//   }, [])

//   const addUser = () => {
//     const name = newName.trim()
//     const email = newEmail.trim()
//     const website = newWebsite.trim()
//     if (name && email && website) {
//       fetch("https://jsonplaceholder.typicode.com/users", {
//         method: "POST",
//         body: JSON.stringify({
//           name,
//           email,
//           website,
//         }),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       })
//         .then(response => response.json())
//         .then(data => {
//           setUsers([...users, data])
//           setNewName("")
//           setNewEmail("")
//           setNewWebsite("")
//           // AppToaster.show({
//           //   message: "User added successfully",
//           //   intent: "success",
//           //   timeout: 3000,
//           // })
//         })
//     }
//   }
// return(<></>)
  
// }

// export default AddContacts
// import React, { useEffect, useState } from 'react'

// function AddContacts() {
//     const [users, setUsers] = useState([])
//   const [newName, setNewName] = useState("")
//   const [newEmail, setNewEmail] = useState("")
//   const [newWebsite, setNewWebsite] = useState("")

//     useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(json => setUsers(json))
//   }, [])

//     const addUser = () => {
//     const name = newName.trim()
//     const email = newEmail.trim()
//     const website = newWebsite.trim()
//     if (name && email && website) {
//       fetch("https://jsonplaceholder.typicode.com/users", {
//         method: "POST",
//         body: JSON.stringify({
//           name,
//           email,
//           website,
//         }),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       })
//         .then(response => response.json())
//         .then(data => {
//           setUsers([...users, data])
//           setNewName("")
//           setNewEmail("")
//           setNewWebsite("")
//           // AppToaster.show({
//           //   message: "User added successfully",
//           //   intent: "success",
//           //   timeout: 3000,
//           // })
//         })
//     }
//   }
//   return (
//     <div>AddContacts

// <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Website</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(user => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>
//                 <p>{user.email} </p>
//               </td>
//               <td>
//               <p> {user.website} </p>
//               </td>
//               <td>
//                 <button >Update</button>
//                 &nbsp;
//                 <button >Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>

//         <tfoot>
//           <tr>
//             <td></td>
//             <td>
//               <input
//                 value={newName}
//                 onChange={e => setNewName(e.target.value)}
//                 placeholder="Add name here..."
//               />
//             </td>
//             <td>
//               <input
//                 placeholder="Add email here..."
//                 value={newEmail}
//                 onChange={e => setNewEmail(e.target.value)}
//               />
//             </td>
//             <td>
//               <input
//                 placeholder="Add website here..."
//                 value={newWebsite}
//                 onChange={e => setNewWebsite(e.target.value)}
//               />
//             </td>
//             <td>
//               <button onClick={addUser}>
//                 Add user
//               </button>
//             </td>
//           </tr>
//         </tfoot>
//       </table>
//     </div>
//     </div>
//   )
// }

// export default AddContacts

//get all api
// import { useEffect, useState } from "react"
// import "./App.css"

// function App() {
//   const [users, setUsers] = useState([])

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(json => setUsers(json))
//   }, [])

//   return (
//     <div className="App">
//       <table class="bp4-html-table .modifier">
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Website</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(user => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>
//                 <EditableText value={user.email} />
//               </td>
//               <td>
//                 <EditableText value={user.website} />
//               </td>
//               <td>
//                 <Button intent="primary">Update</Button>
//                 &nbsp;
//                 <Button intent="danger">Delete</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default App
  

//update api
// import "./App.css"
// import { useEffect, useState } from "react"
// import {
//   Button,
//   EditableText,
//   InputGroup,
//   Toaster,
//   Position,
// } from "@blueprintjs/core"

// const AppToaster = Toaster.create({
//   position: Position.TOP,
// })

// function App() {
//   const [users, setUsers] = useState([])
//   const [newName, setNewName] = useState("")
//   const [newEmail, setNewEmail] = useState("")
//   const [newWebsite, setNewWebsite] = useState("")

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(json => setUsers(json))
//   }, [])

//   const addUser = () => {
//     const name = newName.trim()
//     const email = newEmail.trim()
//     const website = newWebsite.trim()
//     if (name && email && website) {
//       fetch("https://jsonplaceholder.typicode.com/users", {
//         method: "POST",
//         body: JSON.stringify({
//           name,
//           email,
//           website,
//         }),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       })
//         .then(response => response.json())
//         .then(data => {
//           setUsers([...users, data])
//           setNewName("")
//           setNewEmail("")
//           setNewWebsite("")
//           AppToaster.show({
//             message: "User added successfully",
//             intent: "success",
//             timeout: 3000,
//           })
//         })
//     }
//   }

//   const updateUser = id => {
//     const user = users.find(user => user.id === id)

//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//       method: "PUT",
//       body: JSON.stringify(user),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .then(response => response.json())
//       .then(() => {
//         AppToaster.show({
//           message: "User updated successfully",
//           intent: "success",
//           timeout: 3000,
//         })
//       })
//   }

//   const onChangeHandler = (id, key, value) => {
//     setUsers(values => {
//       return values.map(item =>
//         item.id === id ? { ...item, [key]: value } : item
//       )
//     })
//   }

//   return (
//     <div className="App">
//       <table class="bp4-html-table .modifier">
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Website</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(user => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>
//                 <EditableText
//                   value={user.email}
//                   onChange={value => onChangeHandler(user.id, "email", value)}
//                 />
//               </td>
//               <td>
//                 <EditableText
//                   value={user.website}
//                   onChange={value => onChangeHandler(user.id, "website", value)}
//                 />
//               </td>
//               <td>
//                 <Button intent="primary" onClick={() => updateUser(user.id)}>
//                   Update
//                 </Button>
//                 &nbsp;
//                 <Button intent="danger">Delete</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//         <tfoot>
//           <tr>
//             <td></td>
//             <td>
//               <InputGroup
//                 value={newName}
//                 onChange={e => setNewName(e.target.value)}
//                 placeholder="Add name here..."
//               />
//             </td>
//             <td>
//               <InputGroup
//                 placeholder="Add email here..."
//                 value={newEmail}
//                 onChange={e => setNewEmail(e.target.value)}
//               />
//             </td>
//             <td>
//               <InputGroup
//                 placeholder="Add website here..."
//                 value={newWebsite}
//                 onChange={e => setNewWebsite(e.target.value)}
//               />
//             </td>
//             <td>
//               <Button intent="success" onClick={addUser}>
//                 Add user
//               </Button>
//             </td>
//           </tr>
//         </tfoot>
//       </table>
//     </div>
//   )
// }

// export default App

// delete api
// import "./App.css"
// import { useEffect, useState } from "react"
// import {
//   Button,
//   EditableText,
//   InputGroup,
//   Toaster,
//   Position,
// } from "@blueprintjs/core"

// const AppToaster = Toaster.create({
//   position: Position.TOP,
// })

// function AddContacts() {
  // const [users, setUsers] = useState([])
  // const [newName, setNewName] = useState("")
  // const [newEmail, setNewEmail] = useState("")
  // const [newWebsite, setNewWebsite] = useState("")

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(response => response.json())
  //     .then(json => setUsers(json))
  // }, [])

  // const addUser = () => {
  //   const name = newName.trim()
  //   const email = newEmail.trim()
  //   const website = newWebsite.trim()
  //   if (name && email && website) {
  //     fetch("https://jsonplaceholder.typicode.com/users", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         name,
  //         email,
  //         website,
  //       }),
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         setUsers([...users, data])
  //         setNewName("")
  //         setNewEmail("")
  //         setNewWebsite("")
  //         // AppToaster.show({
  //         //   message: "User added successfully",
  //         //   intent: "success",
  //         //   timeout: 3000,
  //         // })
  //       })
  //   }
  // }

  // const updateUser = id => {
  //   const user = users.find(user => user.id === id)

  //   fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
  //     method: "PUT",
  //     body: JSON.stringify(user),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(() => {
  //       // AppToaster.show({
  //       //   message: "User updated successfully",
  //       //   intent: "success",
  //       //   timeout: 3000,
  //       // })
  //     })
  // }

  // const deleteUser = id => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then(response => response.json())
  //     .then(() => {
  //       setUsers(values => {
  //         return values.filter(item => item.id !== id)
  //       })
  //       // AppToaster.show({
  //       //   message: "User deleted successfully",
  //       //   intent: "success",
  //       //   timeout: 3000,
  //       // })
  //     })
  // }

  // const onChangeHandler = (id, key, value) => {
  //   setUsers(values => {
  //     return values.map(item =>
  //       item.id === id ? { ...item, [key]: value } : item
  //     )
  //   })
  // }
  

  // return (
  //   <div >
  //     <table>
  //       <thead>
  //         <tr>
  //           <th>Id</th>
  //           <th>Name</th>
  //           <th>Email</th>
  //           <th>Website</th>
  //           <th>Action</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {users.map(user => (
  //           <tr key={user.id}>
  //             <td>{user.id}</td>
  //             <td>{user.name}</td>
  //             <td>
  //               <input
  //                 value={user.email}
  //                 onChange={value => onChangeHandler(user.id, "email", value)}
  //               />
  //             </td>
  //             <td>
  //               <input
  //                 value={user.website}
  //                 onChange={value => onChangeHandler(user.id, "website", value)}
  //               />
  //             </td>
  //             <td>
  //               <button intent="primary" onClick={() => updateUser(user.id)}>
  //                 Update
  //               </button>
  //               &nbsp;
  //               <button intent="danger" onClick={() => deleteUser(user.id)}>
  //                 Delete
  //               </button>
  //             </td>
  //           </tr>
  //         ))}
  //       </tbody>
  //       <tfoot>
  //         <tr>
  //           <td></td>
  //           <td>
  //             <input
  //               value={newName}
  //               onChange={e => setNewName(e.target.value)}
  //               placeholder="Add name here..."
  //             />
  //           </td>
  //           <td>
  //             <input
  //               placeholder="Add email here..."
  //               value={newEmail}
  //               onChange={e => setNewEmail(e.target.value)}
  //             />
  //           </td>
  //           <td>
  //             <input
  //               placeholder="Add website here..."
  //               value={newWebsite}
  //               onChange={e => setNewWebsite(e.target.value)}
  //             />
  //           </td>
  //           <td>
  //             <button onClick={addUser}>
  //               Add user
  //             </button>
  //           </td>
  //         </tr>
  //       </tfoot>
  //     </table>
  //   </div>
  // )
// }

// export default AddContacts

// import "./App.css"
// import { useEffect, useState } from "react"
// import {
//   Button,
//   EditableText,
//   InputGroup,
//   Toaster,
//   Position,
// } from "@blueprintjs/core"

// const AppToaster = Toaster.create({
//   position: Position.TOP,
// })

// function AddContacts() {
//   const [users, setUsers] = useState([])
//   const [newName, setNewName] = useState("")
//   const [newEmail, setNewEmail] = useState("")
//   const [newWebsite, setNewWebsite] = useState("")

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(json => setUsers(json))
//   }, [])

//   const addUser = () => {
//     const name = newName.trim()
//     const email = newEmail.trim()
//     const website = newWebsite.trim()
//     if (name && email && website) {
//       fetch("https://jsonplaceholder.typicode.com/users", {
//         method: "POST",
//         body: JSON.stringify({
//           name,
//           email,
//           website,
//         }),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       })
//         .then(response => response.json())
//         .then(data => {
//           setUsers([...users, data])
//           setNewName("")
//           setNewEmail("")
//           setNewWebsite("")
//           // AppToaster.show({
//           //   message: "User added successfully",
//           //   intent: "success",
//           //   timeout: 3000,
//           // })
//         })
//     }
//   }
// return(<></>)
  
// }

// export default AddContacts

//all api
// import React, { useEffect, useState } from 'react'
// // import {

// //   EditableText,
  
// // } from "@blueprintjs/core"

// function ApiCrud() {

 
//     const [users, setUsers] = useState([])
//   const [newName, setNewName] = useState("")
//   const [newEmail, setNewEmail] = useState("")
//   const [newWebsite, setNewWebsite] = useState("")

//     useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(json => setUsers(json))
//   }, [])
  
//     const addUser = () => {
//     const name = newName.trim()
//     const email = newEmail.trim()
//     const website = newWebsite.trim()
//     if (name && email && website) {
//       fetch("https://jsonplaceholder.typicode.com/users", {
//         method: "POST",
//         body: JSON.stringify({
//           name,
//           email,
//           website,
//         }),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       })
//         .then(response => response.json())
//         .then(data => {
//           setUsers([...users, data])
//           setNewName("")
//           setNewEmail("")
//           setNewWebsite("")
//           // AppToaster.show({
//           //   message: "User added successfully",
//           //   intent: "success",
//           //   timeout: 3000,
//           // })
//         })
//     }
//   }
//   // const updateUser = id => {
//   //   const user = users.find(user => user.id === id)

//   //   fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//   //     method: "PUT",
//   //     body: JSON.stringify(user),
//   //     headers: {
//   //       "Content-type": "application/json; charset=UTF-8",
//   //     },
//   //   })
//   //     .then(response => response.json())
//   //     .then(() => {
//   //       // AppToaster.show({
//   //       //   message: "User updated successfully",
//   //       //   intent: "success",
//   //       //   timeout: 3000,
//   //       // })
//   //     })
//   // }

//   const deleteUser = id => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//       method: "DELETE",
//     })
//       .then(response => response.json())
//       .then(() => {
//         setUsers(values => {
//           return values.filter(item => item.id !== id)
//         })
//         // AppToaster.show({
//         //   message: "User deleted successfully",
//         //   intent: "success",
//         //   timeout: 3000,
//         // })
//       })
//   }

//   // const onChangeHandler = (id, key, value) => {
//   //   setUsers(values => {
//   //     return values.map(item =>
//   //       item.id === id ? { ...item, [key]: value } : item
//   //     )
//   //   })
//   // }
//   return (
//     <div>AddContacts

// <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Website</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(user => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>
//                 <p>{user.email} </p>
//               </td>
//               <td>
//               <p> {user.website} </p>
//               </td>
//               {/* <td>
//                 <EditableText
//                   value={user.email}
//                   onChange={value => onChangeHandler(user.id, "email", value)}
//                 />
//               </td>
//               <td>
//                 <EditableText
//                   value={user.website}
//                   onChange={value => onChangeHandler(user.id, "website", value)}
//                 />
//               </td> */}
//               <td>
//                         {/* <button intent="primary" onClick={() => updateUser(user.id)}>
//                    Update
//                  </button> */}
//                  &nbsp;
//                  <button intent="danger" onClick={() => deleteUser(user.id)}>
//                    Delete
//                  </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>

//         <tfoot>
//           <tr>
//             <td></td>
//             <td>
//               <input
//                 value={newName}
//                 onChange={e => setNewName(e.target.value)}
//                 placeholder="Add name here..."
//               />
//             </td>
//             <td>
//               <input
//                 placeholder="Add email here..."
//                 value={newEmail}
//                 onChange={e => setNewEmail(e.target.value)}
//               />
//             </td>
//             <td>
//               <input
//                 placeholder="Add website here..."
//                 value={newWebsite}
//                 onChange={e => setNewWebsite(e.target.value)}
//               />
//             </td>
//             <td>
//               <button onClick={addUser}>
//                 Add user
//               </button>
//             </td>
//           </tr>
//         </tfoot>
//       </table>
//     </div>
//     </div>
//   )
// }

// export default ApiCrud

// import React from 'react'
// import { useState } from 'react';
// import { useEffect } from 'react';

// function ApiCrud() {
//     const [users,setUsers] = useState([]);
//     const [newName,setNewName] = useState("");
//     useEffect(()=>{
//         fetch(`http://localhost:3006/user`)
//         // .then(console.log(res,"res"));
//         .then(res => res.json())
//         .then(users => {
//             console.log(users);
//             setUsers(users)
//         })
//         // console.log(apiData,"apiData")
//     },[]);

//    const deleteUser = (id) => {
//     fetch(`http://localhost:3006/user/${id}`, {
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
//           fetch("http://localhost:3006/user", {
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


// import React, { useEffect, useState } from 'react'

// function ApiCrud() {
//   const [user,setUser] = useState([]);
//   const [name,setName] = useState("");
//   useEffect(()=>{
//     fetch(`http://localhost:3006/user`)
//     .then(res => res.json())
//     .then(user => setUser(user))
//   })
 
//   const deleteUser = (id) => {
//     fetch(`http://localhost:3006/user/${id}`,{
//       method:"DELETE"
//     }).then(res => res.json())
//     .then(()=> {
//      setUser(values =>{
//     return values.filter(item => item.id !== id)})
//     })
  
//   }
//   //   const deleteUser = id => {
//   //   fetch(`http://localhost:3006/user/${id}`, {
//   //     method: "DELETE",
//   //   })
//   //     .then(response => response.json())
//   //     .then(() => {
//   //       setUser(values => {
//   //         return values.filter(item => item.id !== id)
//   //       })
       
//   //     })
//   // }
//   const renderUser = user.map((item)=>{
//     return(<div key={item.id}> {item.id} == {item.name}
//     <button onClick={()=>deleteUser(item.id)}>Delete</button> </div>)
//   })
//   const addUser = () => {
//     const newName = name.trim();
//     if(newName){
//     fetch(`http://localhost:3006/user`,{
//       method:"POST",
//       body: JSON.stringify({
// name,
//       }),
//       headers:{"Content-type": "application/json; charset=UTF-8"}
//     }).then(res => res.json())
//     .then(data =>{
//       setUser([...user,data])
//     })
//   }
//   }
//   return (
//     <div>ApiCrud
//       {renderUser}
//       <input value={name} onChange={(e)=>setName(e.target.value)}/>
//       <button onClick={addUser}>Add</button>
//     </div>
//   )
// }

// export default ApiCrud

