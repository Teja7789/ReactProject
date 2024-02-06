import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createCompanyRequest } from '../reduxSaga/action';

function PostUser() {
    const dispatch = useDispatch();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
const handleSubmit = (e) => {
    e.preventDefault();
console.log(email,password,"data");
const   data = {email,password};
console.log(data,"PostData");
dispatch(createCompanyRequest(data))
};
  return (
    <div>
        <form onSubmit={(data) => handleSubmit(data)}>
<input value={email} onChange={(e) => setEmail(e.target.value)} />
<input value={password} onChange={(e) => setPassword(e.target.value)}  />
<button type="submit">submit</button>
</form>
    </div>
  )
}

export default PostUser