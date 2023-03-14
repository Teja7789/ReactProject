import React from 'react'
import AddContact from './AddContact'
import Header from './Header'
import Contactlist from './Contactlist';
// import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useState } from 'react';
import ContactDetail from './ContactDetail';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from 'uuidv4';
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
    <div className="ui container">
    <Router>
      <Header />
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <Contactlist
              {...props}
              contacts={contacts}
              getContactId={removeContactHandler}
            />
          )}
        />
        <Route
          path="/add"
          render={(props) => (
            <AddContact {...props} addContactHandler={addContactHandler} />
          )}
        />

        <Route path="/contact/:id" component={ContactDetail} />
      </Switch>
    </Router>
  </div>
  )
}
