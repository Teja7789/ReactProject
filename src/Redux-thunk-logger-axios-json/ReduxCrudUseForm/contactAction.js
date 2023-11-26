import axios from "axios";
import { CREATE_CONTACT } from "./Types";
// import  * as types from "./Types";


  

export  const addContact =  (contact) => async dispatch => {
try{
    const res = await axios.post(`https://jsonplaceholder.typicode.com/posts`,contact)
    dispatch({
        type: CREATE_CONTACT,
        payload: res.data
    })
}catch(error){
dispatch({
    type: CREATE_CONTACT,
    payload: error
})
}
};