// import React, { useState } from "react";

// const AddCrud = (
//     {addContactHandler}
//     ) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const add = (e) => {
//     console.log(name,email,"data")
//     e.preventDefault();
//     if (name === "" || email === "") {
//       alert("ALl the fields are mandatory!");
//       return;
//     }
//     addContactHandler({ name, email });
//     setName("");
//     setEmail("");
//   };

//   return (
//     <div className="ui main">
//       <h2>Add Contact</h2>
//       <form className="ui form" onSubmit={add}>
//         <div className="field">
//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="field">
//           <label>Email</label>
//           <input
//             type="text"
//             name="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <button className="ui button blue">Add</button>
//       </form>
//     </div>
//   );
// };

// export default AddCrud;


// import React, { useState } from 'react'

// function AddCrud({addContactHandler}) {
//     const [email,setEmail] = useState('');
//     const [name,setName] = useState('');
//     function addContact(e){
//         if(name === '' || email === ''){
//             alert("all fields are madatory");
//             return;
//         }
//         e.preventDefault();
//         console.log("Data", name,email);
//         addContactHandler({name,email})
//         setEmail("");
//         setName("");
//     }
//   return (
//     <div>AddCrud
//         <form>
//             <input value={email} onChange={(e) => setEmail(e.target.value)}/>
//             <input  value={name} onChange={(e) => setName(e.target.value)}/>
//             <button type="submit" onClick={addContact}>submit</button>
//         </form>
//     </div>
//   )
// }

// export default AddCrud

// import React, { useState } from 'react'
// import contacts from '../../../api/contacts';

// function AddCrud({addContactHandlerCrud}) {
//   const [name,setName] = useState('');
//   const [email,setEmail] = useState('');
// const addContactHandler = (e) => {
//   e.preventDefault();
//   console.log(name,email,"data");
//   addContactHandlerCrud({name,email});
// }

//   return (
//     <div>
//       <form>
//         <input value={name} onChange={(e)=>setName(e.target.value)} />
//         <input value={email} onChange={(e)=>setEmail(e.target.value)} />
//         <button type='submit' onClick={addContactHandler}>submit</button>
//       </form>
//     </div>
//   )
// }

// export default AddCrud


// // import React from 'react';
// // import './AddCrud.css';
// // const AddCrud = () => {
// //   return (
// //     <form>
// //       <h3>Sign In</h3>
// //       <div className="mb-3">
// //         <label>Email address</label>
// //         <input
// //           type="email"
// //           className="form-control"
// //           placeholder="Enter email"
// //         />
// //       </div>
// //       <div className="mb-3">
// //         <label>Password</label>
// //         <input
// //           type="password"
// //           className="form-control"
// //           placeholder="Enter password"
// //         />
// //       </div>
// //       <div className="mb-3">
// //         <div className="custom-control custom-checkbox">
// //           <input
// //             type="checkbox"
// //             className="custom-control-input"
// //             id="customCheck1"
// //           />
// //           <label className="custom-control-label" htmlFor="customCheck1">
// //             Remember me
// //           </label>
// //         </div>
// //       </div>
// //       <div className="d-grid">
// //         <button type="submit" className="btn btn-primary">
// //           Submit
// //         </button>
// //       </div>
// //       <p className="forgot-password text-right">
// //         Forgot <a href="#">password?</a>
// //       </p>
// //     </form>
// //   );
// // };

// // export default AddCrud;





import React, { useState } from 'react'

function AddCrud({addContactHandlerCrud}) {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
const addContactHandler = (e) => {
  e.preventDefault();
  addContactHandlerCrud({name,email});
}
 
  return (
    <div>AddCrud
<form>
        <input value={name} onChange={(e)=>setName(e.target.value)} />
         <input value={email} onChange={(e)=>setEmail(e.target.value)} />
         <button type='submit' onClick={addContactHandler}>submit</button>

</form>

    </div>
  )
}

export default AddCrud