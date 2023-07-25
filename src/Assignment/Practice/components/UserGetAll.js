import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function UserGetAll() {
    const [contacts,setContacts] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:3006/products`)
        // .then(console.log(res,"res"));
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setContacts(data)
        })
        // console.log(apiData,"apiData")
    },[]);
    const apiData = contacts.map((item)=>{
        return(<div>
            {item.price}
            {item.id}
            {item.name}
            {item.shortDesc}
        </div>)
    })
  return (
    <div>Contacts
        {apiData}
    </div>
  )
}

export default UserGetAll