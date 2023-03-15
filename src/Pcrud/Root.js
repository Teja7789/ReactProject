import React, { useState } from 'react'
import { useEffect } from 'react';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

export default function Root() {
  const LOCAL_STORAGE_KEY = "";
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
    useEffect(() => {
      const retriveData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (retriveData) {setDATA(retriveData)};
      
    }, []);
  
    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DATA));
    }, [DATA]);
  return (
    <div>
        <AddContact addDataHandler={addDataHandler} />
        <ContactList DATA={DATA} />

    </div>
  )
}
