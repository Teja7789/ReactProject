import React from 'react'
import SubChilid from './SubChilid';

function ChildComponent(props) {
    const renderContactList = props.contactsParent.map((contact) => {
        return (
          <SubChilid
            contact={contact}
            key={contact.id}
          />
        );
      });
  return (
    <div>{renderContactList}</div>
  )
}

export default ChildComponent