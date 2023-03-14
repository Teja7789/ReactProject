import React, { useState } from 'react'
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

export default function Root() {
    const [DATA,setDATA ] = useState([]);
    // const DATA = [{
    //     id:1,
    //     email:"test@gmail.com",
    //     password:"test@123"
    // },
    // {
    //     id:2,
    //     email:"test2@gmail.com",
    //     password:"test@223"
    // }];
   const addDataHandler = (data) => {
        // console.log(DATA,"data")
        setDATA([...DATA,data])
    }
  return (
    <div>
        <AddContact addDataHandler={addDataHandler} />
        <ContactList DATA={DATA} />

    </div>
  )
}
