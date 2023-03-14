import { Button, TextField } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';

export default function Contacts() {
  const [ email, setEmail] = useState("");
  const [ password, setPassword ] = useState("");
  const add = (e) => {
    e.preventDefault();
    if (password === "" || email === "") {
      alert("ALl the fields are mandatory!");
      return console.log(email, password, "data");
    }
    // this.props.addContactHandler(this.state);
    setEmail("");
    setPassword("");
  }
  return (
    <div>
      <form onSubmit={add}>
      
        <TextField type={email} placeholder='Email' 
        onChange={(e)=> setEmail(e.target.value)}
        />

        <TextField type={password} placeholder='Password'
         onChange={(e)=> setPassword(e.target.value)}
         />
         
        <Button variant='outlined' >Submit</Button>
      </form>
        
    </div>
  )
}
