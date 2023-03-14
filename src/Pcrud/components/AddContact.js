import React, { useState } from 'react'

export default function AddContact(props) {
    // console.log(props);
    const { addDataHandler } = props;
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const add = (e) => {
        e.preventDefault();
        console.log(email,password,"data");
        addDataHandler({email,password});
        setEmail("");
        setPassword("");
    }
  return (
    <div>
        <form onSubmit={add}>
            <label>Email</label>
            <input type="email" placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>
            <label>Password</label>
            <input type="password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)} />
            <button>Submit</button>
        </form>
    </div>
  )
}
