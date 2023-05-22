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
  //postUser -2
  const userAdded = () => ({
    type: types.ADD_USER,
})
//putUser(editandupdateuser) -2
const userUpdated = () => ({
    type: types.UPDATE_USER,
})
//getUserbyId-2 
const getUser = (user) => ({
    type: types.GETSINGLE_USER,
    payload: user,
})

 export const loadUsers = () => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}`).then((res) => {
            console.log("res",res)
            dispatch(getUsers(res.data))
        }).catch(error => console.log(error));
    }
 }
//getUserbyId-2
export const getSingleUser = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/${id}`).then((res) => {
            console.log("getUserbyId-res",res);
            dispatch(getUser(res.data));
          
        }).catch(error => console.log(error));
    }
 }
 //putUser(editandupdateuser) -2
 export const updateUser = (user,id) => {
    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_API}/${id}`,user).then((res) => {
            console.log("putApi-res",res);
            dispatch(userUpdated());
            dispatch(loadUsers()); 
        }).catch(error => console.log(error));
    }
 }
 ////deleteuser-2 && delete user
 
 export const deleteUser = (id) => {
    return function (dispatch) {
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then((res) => {
            console.log("delete-res",res);
            dispatch(userDeleted());
             //delteuser-5 // to get updated data : loaderUsers is getAll fn 
             dispatch(loadUsers()); 
        }).catch(error => console.log(error));
    }
 }

 //postUser -2 
  
 export const addUser = (user) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API}`, user).then((res) => {
            console.log("post-res",res);
            dispatch(userAdded());
            dispatch(loadUsers()); //to get updated data : loaderUsers is getAll fn
        }).catch(error => console.log(error));
    }
 }