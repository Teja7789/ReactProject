import React from 'react'
import AddContact from './AddContact'
import Header from './Header'
import Contactlist from './Contactlist';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useState } from 'react';
export default function Main() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: nanoid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div>
 <Header/>
 <br/>
 <br/>
 <AddContact  addContactHandler={addContactHandler} />
 <Contactlist contacts={contacts} getContactId={removeContactHandler}  />
      {/* <Contacts/> */}
    </div>
  )
}
