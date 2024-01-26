// import React, { useState } from 'react'
// import AddCrud from './AddCrud';
// import { nanoid } from 'nanoid';

// function Crud() {
//     const [contacts, setContacts] = useState([
//         // {
//         //     id:"1",
//         //     name:"Dipesh",
//         //     email:"malvia@gmail.com"
//         //   },
//         //   {
//         //     id:"2",
//         //     name:"Mukhesh",
//         //     email:"mukhesha@gmail.com"
//         //   }
//     ]);

//     const renderContacts = contacts.map((item,i)=>{
//         return(<div key={i}>{item.name} - <p onClick={() =>removeContactHandler(item.id)}>del</p></div>)
//     });
//     const addContactHandler = (contact) =>{
//         console.log(contacts);
//         // setContacts([...contacts, contact])
//         setContacts([...contacts, { id: nanoid(), ...contact }]);
//       }
//       const removeContactHandler = (id) => {
//         const newContactList = contacts.filter((contact) => {
//           return contact.id !== id;
//         });
    
//         setContacts(newContactList);
//       };
//   return (
//     <div>Crud
//         {renderContacts}
//         <AddCrud addContactHandler={addContactHandler}/>
//     </div>
//   )
// }

// export default Crud


















// import React, { useState } from 'react'
// import AddCrud from './AddCrud';

// function Crud() {
//     const [contacts,setContacts] = useState([
//         {
//             id:1,
//             name:"test1",
//             email:"test@gmail.com"
//         },
//         {
//             id:2,
//             name:"test2",
//             email:"test@gmail.com"
//         }
//     ]);
//     const renderContacts = contacts.map((item,i)=>{
//         return(
//             <div key={i}>{item.name} <p onClick={() => removeContactHandler(item.id)}>del</p></div>
//         )
//     })
//     const addContactHandler= (contact) =>{
// setContacts([...contacts,contact])
//     }
//     const removeContactHandler = (id) => {
//         //         const newContactList = contacts.filter((contact) => {
// //           return contact.id !== id;
// //         });
//         const delContact = contacts.filter((contact)=>{
// return contact.id !== id
//         });
//         setContacts(delContact);
//     }
//   return (
//     <div>Crud
// {renderContacts}
// <AddCrud addContactHandler={addContactHandler}/>
//     </div>
//   )
// }

// export default Crud


import React, { useState } from 'react'
import AddCrud from './AddCrud';

function Crud() {
  const [contacts,setContacts] = useState([
    {
      id:1,
      name:"contacts",
      email:"test@gmail.com"
    },
    {
      id:2,
      name:"contacts2",
      email:"test@gmail.com"
    }
  ]);
  const removeContactHandler = (id) => {
    const removeContactHandler = contacts.filter((contact,i)=>{
      return contact.id !== id
    });
    setContacts(removeContactHandler);
  }
  const addContactHandler = (contact) =>{
    setContacts([...contacts,contact]);
  }
  const renderContacts = contacts.map((contact)=>{
    return(
      <div key={contact.id}>{contact.name}- <p onClick={() =>removeContactHandler(contact.id)}>del</p></div>
    )
  });
  
  return (
    <div>{renderContacts}
    <AddCrud addContactHandlerCrud={addContactHandler}/>
    </div>
  )
}

export default Crud
