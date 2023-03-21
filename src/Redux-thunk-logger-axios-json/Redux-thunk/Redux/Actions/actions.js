import axios from "axios";
import * as types from "../ActionTypes/actionTypes";

const getUsers = (users) => ({
    type:types.GET_USERS,
    payload: users,
});
////deleteuser-2 &&deleteDispatchFn
const userDeleted = () => ({
    type: types.DELETE_USER,
})
 export const loadUsers = () => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}`).then((res) => {
            console.log("res",res)
            dispatch(getUsers(res.data))
        }).catch(error => console.log(error));
    }
 }
 ////deleteuser-2 && delete user
 
 export const deleteUser = (id) => {
    return function (dispatch) {
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then((res) => {
            console.log("deleteres",res);
            dispatch(userDeleted());
           //delteuser-5 // to get updated data : loaderUsers is getAll fn 
            dispatch(loadUsers()); 
        }).catch(error => console.log(error));
    }
 }