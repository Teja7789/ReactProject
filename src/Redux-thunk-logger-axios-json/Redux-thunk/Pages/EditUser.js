import React from 'react'
import { useState } from 'react'
import { useHistory , useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, getSingleUser } from '../Redux/Actions/actions';
import { useEffect } from 'react';
function EditUser() {
    const history = useHistory();
    const dispatch = useDispatch();
    let {id} = useParams();////getUserbyId-4
   const {user} = useSelector(state => state.data);
    const [formValue, setFormValue] = useState({
        name:"",
        email:"",
    });
//cannot take empty form submit
const [ error, setError] = useState("");


const { name, email } = formValue;
//getUserbyId-4 
useEffect(() => {
    dispatch(getSingleUser(id))
},[]);
//getUserbyId-4  ** dispaly user data in UI **********************
//unmount - undefined to mount: value; (error in console : use shortCircuit)
useEffect(() => {
   if(user){
    setFormValue({...user});
   } 
},[user]);
const handleInputChange = (e) => {
    let {name,value} = e.target;
    //on everykeyStroke data get updated
    setFormValue({ ...formValue,[name]:value});
    
}
    const handleSubmit = (e) => {
        e.preventDefault();
     
        if(!name || !email){
            setError("Please fill all Fileds");

        }else{
            //postUser-4 post the api data
// dispatch(addUser({name,email}));
dispatch(addUser(formValue));
history.push("/");



        }
        
    }
  return (
    <div>EditUser
        {error &&
        <h3 style={{color:"red"}}>{error}</h3> }
        <form onSubmit={handleSubmit}>
        <button 
            onClick={() => history.push("/")}
            >Go Back</button>
            <input type="email"
            name="email" 
            //unmount - undefined to mount: value; (error in console : use shortCircuit)
            value={email || ""}
            // onChange={(e)=>setEmail(e.target.value)}
            onChange={handleInputChange}
            placeholder="Email"/>
            <input type="text" 
            name="name"
            value={name || ""}
            // onChange={(e)=>setName(e.target.value)}
            onChange={handleInputChange}
            placeholder="Name"/>
            <button 
            // type="submit"
            >update</button>
            
        </form>
    </div>
  )
}

export default EditUser