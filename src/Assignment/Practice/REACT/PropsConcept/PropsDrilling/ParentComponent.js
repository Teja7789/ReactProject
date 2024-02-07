/* eslint-disable react/jsx-no-undef */
import React from 'react'
import ChildComponent from './ChildComponent'
import { nanoid } from 'nanoid';
import {contacts} from '../MockDrillingData';
function ParentComponent() {
      return (
    <div>
        <ChildComponent key={nanoid()} contactsParent={contacts} />
 </div>
  )
}

export default ParentComponent