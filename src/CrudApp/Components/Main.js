import React from 'react'
import AddContact from './AddContact'
import AppHeader from './AppHeader'
import Contacts from './Contacts'
import Contactlist from './Contactlist';
export default function Main() {
  return (
    <div>
 <AppHeader/>
 <br/>
 <br/>
 <AddContact/>
 <Contactlist/>
      {/* <Contacts/> */}
    </div>
  )
}
