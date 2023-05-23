import React from 'react'
import AddContact from './components/AddContact'
// import Header from './components/Header';
import Contactlist from './components/ContactList';
import { uuid } from 'uuidv4';
import { useEffect } from 'react';
import { useState } from 'react';
export default function Main() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
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
 {/* <Header/> */}
 <br/>
 <br/>
 <AddContact  addContactHandler={addContactHandler} />
 <Contactlist contacts={contacts} getContactId={removeContactHandler}  />
      {/* <Contacts/> */}
    </div>
  )
}