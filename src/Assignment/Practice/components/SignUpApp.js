import React from 'react'
import { useState } from 'react';

function SignUpApp(props) {
    const {isLogin,setIsLogin} = props;
    console.log(isLogin,setIsLogin,"bool")
    const [email,setEmail] = useState("");
    const [pwd,setPwd] = useState("");
    const add = () => {
        console.log(props)
        console.log(email,pwd,"data");
    }
  return (
    <div>SignUpApp
        <form onSubmit={add}>
            <input type="email" 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" 
            value={pwd} onChange={(e)=>setPwd(e.target.value)}/>
        <button onClick={() => setIsLogin(true)}>Submit</button>
        </form>
    </div>
  )
}

export default SignUpApp