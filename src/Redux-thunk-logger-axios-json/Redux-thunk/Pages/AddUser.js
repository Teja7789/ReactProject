import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/Actions/actions';
function AddUser() {
    const history = useHistory();
    const dispatch = useDispatch();
    // const [email,setEmail] = useState("");
    // const [name,setName] = useState("");
    const [formValue, setFormValue] = useState({
        name:"",
        email:"",
    });
//cannot take empty form submit
const [ error, setError] = useState("");


const { name, email } = formValue;
const handleInputChange = (e) => {
    let {name,value} = e.target;
    console.log({[name]:value},"name");
    console.log(value,"value");
    //on everykeyStroke 
    setFormValue({ ...formValue,[name]:value});
    
}
    const handleSubmit = (e) => {
        e.preventDefault();
        // setEmail("");
        // setName("");
        // console.log("data", email, name);
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
    <div>AddUser
        {error &&
        <h3 style={{color:"red"}}>{error}</h3> }
        <form onSubmit={handleSubmit}>
        <button 
            onClick={() => history.push("/")}
            >Go Back</button>
            <input type="email"
            name="email" 
            value={email}
            // onChange={(e)=>setEmail(e.target.value)}
            onChange={handleInputChange}
            placeholder="Email"/>
            <input type="text" 
            name="name"
            value={name}
            // onChange={(e)=>setName(e.target.value)}
            onChange={handleInputChange}
            placeholder="Name"/>
            <button 
            // type="submit"
            >Submit</button>
            
        </form>
    </div>
  )
}

export default AddUser